<?php

namespace Drupal\webform;

use Drupal\Component\Utility\SortArray;
use Drupal\Core\Access\AccessResult;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;

/**
 * The webform access rules manager service.
 */
class WebformAccessRulesManager implements WebformAccessRulesManagerInterface {

  use StringTranslationTrait;

  /**
   * Module handler service.
   *
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  protected $moduleHandler;

  /**
   * WebformAccessRulesManager constructor.
   *
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   Module handler service.
   */
  public function __construct(ModuleHandlerInterface $module_handler) {
    $this->moduleHandler = $module_handler;
  }

  /**
   * {@inheritdoc}
   */
  public function checkWebformAccess($operation, AccountInterface $account, WebformInterface $webform) {
    $access_rules = $this->getAccessRules($webform);

    return $this->checkAccessRules($operation, $account, $access_rules)
      ->addCacheableDependency($webform);
  }

  /**
   * {@inheritdoc}
   */
  public function checkWebformSubmissionAccess($operation, AccountInterface $account, WebformSubmissionInterface $webform_submission) {
    $webform = $webform_submission->getWebform();

    $access_rules = $this->getAccessRules($webform);

    $access = $this->checkAccessRules($operation, $account, $access_rules);
    $access->addCacheableDependency($webform);
    $access->addCacheableDependency($webform_submission);

    if ($access->isAllowed()) {
      return $access;
    }

    if ($webform_submission->isOwner($account) && isset($access_rules[$operation . '_own']) && $this->checkAccessRule($access_rules[$operation . '_own'], $account)) {
      return AccessResult::allowed()->cachePerUser()->addCacheableDependency($access);
    }

    return AccessResult::forbidden()->addCacheableDependency($access);
  }

  /****************************************************************************/
  // Get access rules methods.
  /****************************************************************************/

  /**
   * {@inheritdoc}
   */
  public function getDefaultAccessRules() {
    $access_rules = [];

    foreach ($this->getAccessRulesInfo() as $access_rule => $info) {
      $access_rules[$access_rule] = [
        'roles' => $info['roles'],
        'users' => $info['users'],
        'permissions' => $info['permissions'],
      ];
    }

    return $access_rules;
  }

  /**
   * {@inheritdoc}
   */
  public function getAccessRulesInfo() {
    $access_rules = $this->moduleHandler->invokeAll('webform_access_rules');
    $this->moduleHandler->alter('webform_access_rules', $access_rules);

    // Set access rule default values.
    foreach ($access_rules as $access_rule => $info) {
      $access_rules[$access_rule] += [
        'title' => NULL,
        'description' => NULL,
        'weight' => 0,
        'roles' => [],
        'users' => [],
        'permissions' => [],
      ];
    }

    uasort($access_rules, [SortArray::class, 'sortByWeightElement']);

    return $access_rules;
  }

  /**
   * Retrieve a list of access rules from a webform.
   *
   * @param \Drupal\webform\WebformInterface $webform
   *   Webform whose access rules to retrieve.
   *
   * @return array
   *   Associative array of access rules contained in the provided webform. Keys
   *   are operation names whereas values are sub arrays with the following
   *   structure:
   *   - roles: (array) Array of roles that should have access to this operation
   *   - users: (array) Array of UIDs that should have access to this operation
   *   - permissions: (array) Array of permissions that should grant access to
   *     this operation
   */
  protected function getAccessRules(WebformInterface $webform) {
    return $webform->getAccessRules() + $this->getDefaultAccessRules();
  }

  /****************************************************************************/
  // Check access rules methods.
  /****************************************************************************/

  /**
   * Check access for a given operation and set of access rules.
   *
   * @param string $operation
   *   Operation that is being requested.
   * @param \Drupal\Core\Session\AccountInterface $account
   *   Account that is requesting access to the operation.
   * @param array $access_rules
   *   A set of access rules to check against.
   *
   * @return \Drupal\Core\Access\AccessResult
   *   Access result.
   */
  protected function checkAccessRules($operation, AccountInterface $account, array $access_rules) {
    $cacheability = new CacheableMetadata();
    $cacheability->addCacheContexts(['user.permissions']);
    foreach ($access_rules as $access_rule) {
      // If there is some per-user access logic, our response must be cacheable
      // accordingly.
      if (!empty($access_rule['users'])) {
        $cacheability->addCacheContexts(['user']);
      }
    }

    // Check administer access rule and grant full access to user.
    if ($this->checkAccessRule($access_rules['administer'], $account)) {
      return AccessResult::allowed()->addCacheableDependency($cacheability);
    }

    // Check operation specific access rules.
    if (isset($access_rules[$operation])
      && $this->checkAccessRule($access_rules[$operation], $account)) {
      return AccessResult::allowed()->addCacheableDependency($cacheability);
    }
    if (isset($access_rules[$operation . '_any'])
      && $this->checkAccessRule($access_rules[$operation . '_any'], $account)) {
      return AccessResult::allowed()->addCacheableDependency($cacheability);
    }

    return AccessResult::forbidden()->addCacheableDependency($cacheability);
  }

  /**
   * Checks an access rule against a user account's roles and id.
   *
   * @param array $access_rule
   *   An access rule.
   * @param \Drupal\Core\Session\AccountInterface $account
   *   The user session for which to check access.
   *
   * @return bool
   *   The access result. Returns a TRUE if access is allowed.
   *
   * @see \Drupal\webform\Plugin\WebformElementBase::checkAccessRule
   */
  protected function checkAccessRule(array $access_rule, AccountInterface $account) {
    if (!empty($access_rule['roles']) && array_intersect($access_rule['roles'], $account->getRoles())) {
      return TRUE;
    }
    elseif (!empty($access_rule['users']) && in_array($account->id(), $access_rule['users'])) {
      return TRUE;
    }
    elseif (!empty($access_rule['permissions'])) {
      foreach ($access_rule['permissions'] as $permission) {
        if ($account->hasPermission($permission)) {
          return TRUE;
        }
      }
    }

    return FALSE;
  }

}
