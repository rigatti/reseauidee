<?php

namespace Drupal\webform\Tests\Access;

use Drupal\Component\Render\FormattableMarkup;
use Drupal\webform\Entity\Webform;
use Drupal\webform\Tests\WebformTestBase;

/**
 * Tests for webform access rules.
 *
 * @group Webform
 */
class WebformAccessRulesTest extends WebformTestBase {

  /**
   * Modules to enable.
   *
   * @var array
   */
  public static $modules = ['node', 'webform', 'webform_test_submissions'];

  /**
   * Webforms to load.
   *
   * @var array
   */
  protected static $testWebforms = ['test_submissions'];

  /**
   * {@inheritdoc}
   */
  public function setUp() {
    parent::setUp();

    // Create users.
    $this->createUsers();
  }

  /**
   * Tests webform access rules.
   */
  public function testAccessRules() {
    global $base_path;

    /** @var \Drupal\webform\WebformAccessRulesManagerInterface $access_rules_manager */
    $access_rules_manager = \Drupal::service('webform.access_rules_manager');
    $default_access_rules = $access_rules_manager->getDefaultAccessRules();

    /** @var \Drupal\webform\WebformInterface $webform */
    $webform = Webform::load('test_submissions');
    /** @var \Drupal\webform\WebformSubmissionInterface[] $submissions */
    $submissions = array_values(\Drupal::entityTypeManager()->getStorage('webform_submission')->loadByProperties(['webform_id' => 'test_submissions']));

    $account = $this->drupalCreateUser(['access content']);

    $webform_id = $webform->id();
    $sid = $submissions[0]->id();
    $uid = $account->id();
    $rid = $account->getRoles()[1];

    // Check 'test' access rule.
    $this->drupalGet("webform/$webform_id/test");
    $this->assertResponse(403, 'Webform setting access denied for test rule.');
    $access_rules = [
      'test' => [
        'roles' => [],
        'users' => [$uid],
        'permissions' => [],
      ],
    ] + $default_access_rules;
    $webform->setAccessRules($access_rules)->save();
    $this->drupalLogin($account);
    $this->drupalGet("webform/$webform_id/test");
    $this->assertResponse(200, 'Webform setting access for test rule.');
    $this->drupalLogout($account);

    // Check 'administer' access rule.
    $access_rules = [
      'administer' => [
        'roles' => [],
        'users' => [$uid],
        'permissions' => [],
      ],
    ] + $default_access_rules;
    $webform->setAccessRules($access_rules)->save();
    $this->drupalLogin($account);
    $this->drupalGet("admin/structure/webform/manage/$webform_id/settings");
    $this->assertResponse(200, 'Webform setting access for administer rule.');
    $this->drupalGet("admin/structure/webform/manage/$webform_id/results/submissions");
    $this->assertResponse(200, 'Webform submissions access for administer rule.');
    $this->drupalLogout($account);

    // Check create authenticated/anonymous access.
    $webform->setAccessRules($default_access_rules)->save();
    $this->drupalGet('webform/' . $webform->id());
    $this->assertResponse(200, 'Webform create submission access for anonymous/authenticated user.');

    $access_rules = [
      'create' => [
        'roles' => [],
        'users' => [],
        'permissions' => [],
      ],
    ] + $default_access_rules;
    $webform->setAccessRules($access_rules)->save();

    // Check no access.
    $this->drupalGet('webform/' . $webform->id());
    $this->assertResponse(403, 'Webform returns access denied');
    $any_tests = [
      'webform/{webform}' => 'create',
      'admin/structure/webform/manage/{webform}/results/submissions' => 'view_any',
      'admin/structure/webform/manage/{webform}/results/download' => 'view_any',
      'admin/structure/webform/manage/{webform}/results/clear' => 'purge_any',
      'admin/structure/webform/manage/{webform}/submission/{webform_submission}' => 'view_any',
      'admin/structure/webform/manage/{webform}/submission/{webform_submission}/text' => 'view_any',
      'admin/structure/webform/manage/{webform}/submission/{webform_submission}/yaml' => 'view_any',
      'admin/structure/webform/manage/{webform}/submission/{webform_submission}/edit' => 'update_any',
      'admin/structure/webform/manage/{webform}/submission/{webform_submission}/delete' => 'delete_any',
    ];

    // Check that all the test paths are access denied for anonymous users.
    foreach ($any_tests as $path => $permission) {
      $path = str_replace('{webform}', $webform_id, $path);
      $path = str_replace('{webform_submission}', $sid, $path);

      $this->drupalGet($path);
      $this->assertResponse(403, 'Webform returns access denied');
    }

    $this->drupalLogin($account);

    // Check that all the test paths are access denied for authenticated.
    foreach ($any_tests as $path => $permission) {
      $path = str_replace('{webform}', $webform_id, $path);
      $path = str_replace('{webform_submission}', $sid, $path);

      $this->drupalGet($path);
      $this->assertResponse(403, 'Webform returns access denied');
    }

    // Check access rules by role, user id, and permission.
    foreach ($any_tests as $path => $permission) {
      $path = str_replace('{webform}', $webform_id, $path);
      $path = str_replace('{webform_submission}', $sid, $path);

      // Check access rule via role.
      $access_rules = [
        $permission => [
          'roles' => [$rid],
          'users' => [],
          'permissions' => [],
        ],
      ] + $default_access_rules;
      $webform->setAccessRules($access_rules)->save();
      $this->drupalGet($path);
      $this->assertResponse(200, 'Webform allows access via role access rules');

      // Check access rule via user id.
      $access_rules = [
        $permission => [
          'roles' => [],
          'users' => [$uid],
          'permissions' => [],
        ],
      ] + $default_access_rules;
      $webform->setAccessRules($access_rules)->save();
      $this->drupalGet($path);
      $this->assertResponse(200, 'Webform allows access via user access rules');

      // Check access rule via 'access content'.
      $access_rules = [
          $permission => [
            'roles' => [],
            'users' => [],
            'permissions' => ['access content'],
          ],
        ] + $default_access_rules;
      $webform->setAccessRules($access_rules)->save();
      $this->drupalGet($path);
      $this->assertResponse(200, "Webform allows access via permission access rules");
    }

    // Check own / user specific access rules.
    $access_rules = [
      'view_own' => [
        'roles' => [$rid],
        'users' => [],
        'permissions' => [],
      ],
      'update_own' => [
        'roles' => [$rid],
        'users' => [],
        'permissions' => [],
      ],
      'delete_own' => [
        'roles' => [$rid],
        'users' => [],
        'permissions' => [],
      ],
    ] + $default_access_rules;
    $webform->setAccessRules($access_rules)->save();

    // Must delete all existing anonymous submission to prevent them from
    // getting transferred to authenticated user.
    foreach ($submissions as $submission) {
      $submission->delete();
    }

    // Login and post a submission as a user.
    $this->drupalLogin($account);

    // Check no view previous submission message.
    $this->drupalGet('webform/' . $webform->id());
    $this->assertNoRaw('You have already submitted this webform.');
    $this->assertNoRaw('View your previous submission');

    $sid = $this->postSubmission($webform);

    // Check view previous submission message.
    $this->drupalGet('webform/' . $webform->id());
    $this->assertRaw('You have already submitted this webform.');
    $this->assertRaw("<a href=\"{$base_path}webform/{$webform_id}/submissions/{$sid}\">View your previous submission</a>.");

    $sid = $this->postSubmission($webform);

    // Check view previous submissions message.
    $this->drupalGet('webform/' . $webform->id());
    $this->assertRaw('You have already submitted this webform.');
    $this->assertRaw("<a href=\"{$base_path}webform/{$webform_id}/submissions\">View your previous submissions</a>");

    // Check the new submission's view, update, and delete access for the user.
    $test_own = [
      'admin/structure/webform/manage/{webform}/results/submissions' => 403,
      'admin/structure/webform/manage/{webform}/results/download' => 403,
      'admin/structure/webform/manage/{webform}/results/clear' => 403,
      'admin/structure/webform/manage/{webform}/submission/{webform_submission}' => 200,
      'admin/structure/webform/manage/{webform}/submission/{webform_submission}/text' => 403,
      'admin/structure/webform/manage/{webform}/submission/{webform_submission}/yaml' => 403,
      'admin/structure/webform/manage/{webform}/submission/{webform_submission}/edit' => 200,
      'admin/structure/webform/manage/{webform}/submission/{webform_submission}/delete' => 200,
      'webform/{webform}/submissions/{webform_submission}' => 200,
      'webform/{webform}/submissions/{webform_submission}/edit' => 200,
      'webform/{webform}/submissions/{webform_submission}/duplicate' => 403,
      'webform/{webform}/submissions/{webform_submission}/delete' => 200,
    ];
    foreach ($test_own as $path => $status_code) {
      $path = str_replace('{webform}', $webform_id, $path);
      $path = str_replace('{webform_submission}', $sid, $path);

      $this->drupalGet($path);
      $this->assertResponse($status_code, new FormattableMarkup('Webform @status_code access via own access rules.', ['@status_code' => ($status_code == 403 ? 'denies' : 'allows')]));
    }

    // Enable submission user duplicate.
    $webform->setSetting('submission_user_duplicate', TRUE);
    $webform->save();

    // Check enable user submission duplicate.
    $this->drupalGet("webform/$webform_id/submissions/$sid/duplicate");
    $this->assertResponse(200);

    // Check disabled previous submissions messages.
    $webform->setSetting('form_previous_submissions', FALSE);
    $webform->save();
    $this->drupalGet('webform/' . $webform->id());
    $this->assertNoRaw('You have already submitted this webform.');
  }

}
