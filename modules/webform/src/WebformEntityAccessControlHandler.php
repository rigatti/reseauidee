<?php

namespace Drupal\webform;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Entity\EntityAccessControlHandler;
use Drupal\Core\Entity\EntityHandlerInterface;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\webform\Plugin\WebformSourceEntityManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * Defines the access control handler for the webform entity type.
 *
 * @see \Drupal\webform\Entity\Webform.
 */
class WebformEntityAccessControlHandler extends EntityAccessControlHandler implements EntityHandlerInterface {

  /**
   * The request stack.
   *
   * @var \Symfony\Component\HttpFoundation\RequestStack
   */
  protected $requestStack;

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Webform source entity plugin manager.
   *
   * @var \Drupal\webform\Plugin\WebformSourceEntityManagerInterface
   */
  protected $webformSourceEntityManager;

  /**
   * Webform access rules manager service.
   *
   * @var \Drupal\webform\WebformAccessRulesManagerInterface
   */
  protected $accessRulesManager;

  /**
   * WebformEntityAccessControlHandler constructor.
   *
   * @param \Drupal\Core\Entity\EntityTypeInterface $entity_type
   *   The entity type definition.
   * @param \Symfony\Component\HttpFoundation\RequestStack $request_stack
   *   The request stack.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   * @param \Drupal\webform\Plugin\WebformSourceEntityManagerInterface $webform_source_entity_manager
   *   Webform source entity plugin manager.
   * @param \Drupal\webform\WebformAccessRulesManagerInterface $access_rules_manager
   *   Webform access rules manager service.
   */
  public function __construct(EntityTypeInterface $entity_type, RequestStack $request_stack, EntityTypeManagerInterface $entity_type_manager, WebformSourceEntityManagerInterface $webform_source_entity_manager, WebformAccessRulesManagerInterface $access_rules_manager) {
    parent::__construct($entity_type);

    $this->requestStack = $request_stack;
    $this->entityTypeManager = $entity_type_manager;
    $this->webformSourceEntityManager = $webform_source_entity_manager;
    $this->accessRulesManager = $access_rules_manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function createInstance(ContainerInterface $container, EntityTypeInterface $entity_type) {
    return new static(
      $entity_type,
      $container->get('request_stack'),
      $container->get('entity_type.manager'),
      $container->get('plugin.manager.webform.source_entity'),
      $container->get('webform.access_rules_manager')
    );
  }

  /**
   * {@inheritdoc}
   */
  protected function checkCreateAccess(AccountInterface $account, array $context, $entity_bundle = NULL) {
    if ($account->hasPermission('create webform')) {
      return AccessResult::allowed()->cachePerPermissions();
    }
    else {
      return parent::checkCreateAccess($account, $context, $entity_bundle);
    }
  }

  /**
   * {@inheritdoc}
   */
  public function checkAccess(EntityInterface $entity, $operation, AccountInterface $account) {
    /** @var \Drupal\webform\WebformInterface $entity */

    if ($account->hasPermission('administer webform')) {
      return AccessResult::allowed()->cachePerPermissions();
    }

    $uid = $entity->getOwnerId();
    $is_owner = ($account->isAuthenticated() && $account->id() == $uid);
    // Check if 'view' (aka 'access configuration'), 'update', or 'delete'
    // of 'own' or 'any' webform is allowed.
    if ($account->isAuthenticated()) {
      $has_administer = $this->accessRulesManager->checkWebformAccess('administer', $account, $entity);
      switch ($operation) {
        case 'view':
          // The 'view' operation is reserved for accessing a
          // webform's configuration via the REST API.
          if ($has_administer->isAllowed() || $account->hasPermission('access any webform configuration') || ($account->hasPermission('access own webform configuration') && $is_owner)) {
            return AccessResult::allowed()->cachePerPermissions()->cachePerUser()->addCacheableDependency($entity)->addCacheableDependency($has_administer);
          }
          break;

        case 'test':
        case 'update':
          if ($has_administer->isAllowed() || $account->hasPermission('edit any webform') || ($account->hasPermission('edit own webform') && $is_owner)) {
            return AccessResult::allowed()->cachePerPermissions()->cachePerUser()->addCacheableDependency($entity)->addCacheableDependency($has_administer);
          }
          break;

        case 'duplicate':
          if ($has_administer->isAllowed() || $account->hasPermission('create webform') && ($entity->isTemplate() || ($account->hasPermission('edit any webform') || ($account->hasPermission('edit own webform') && $is_owner)))) {
            return AccessResult::allowed()->cachePerPermissions()->cachePerUser()->addCacheableDependency($entity)->addCacheableDependency($has_administer);
          }
          break;

        case 'delete':
          if ($has_administer->isAllowed() || $account->hasPermission('delete any webform') || ($account->hasPermission('delete own webform') && $is_owner)) {
            return AccessResult::allowed()->cachePerPermissions()->cachePerUser()->addCacheableDependency($entity)->addCacheableDependency($has_administer);
          }
          break;
      }
    }

    // Convert 'render' operation to 'submission_create' operation.
    // @see https://www.drupal.org/project/drupal/issues/2820315
    // @see https://www.drupal.org/project/webform/issues/2956771
    if ($operation === 'render') {
      $operation = 'submission_create';
    }

    // Check if access rules has anything to say about this operation.
    $access_rules = array_keys($this->accessRulesManager->getAccessRulesInfo());
    if ($operation == 'page' || in_array($operation, $access_rules) || in_array($operation . '_any', $access_rules) || in_array($operation . '_own', $access_rules)) {
      $access_rules = $this->accessRulesManager->checkWebformAccess($operation, $account, $entity);
      if ($access_rules->isAllowed()) {
        return AccessResult::allowed()->cachePerPermissions()->cachePerUser()->addCacheableDependency($access_rules);
      }
    }

    // Check submission_* operation.
    if (strpos($operation, 'submission_') === 0) {
      // Grant user with administer webform submission access to do whatever he
      // likes on the submission operations.
      if ($account->hasPermission('administer webform submission')) {
        return AccessResult::allowed()->cachePerPermissions();
      }

      // Allow users with 'view any webform submission' or
      // 'administer webform submission' to view all submissions.
      if ($operation == 'submission_view_any' && ($account->hasPermission('view any webform submission') || $account->hasPermission('administer webform submission'))) {
        return AccessResult::allowed()->cachePerPermissions();
      }

      // Allow users with 'view own webform submission' to view own submissions.
      if ($account->hasPermission('view own webform submission') && $is_owner) {
        return AccessResult::allowed()->cachePerUser()->addCacheableDependency($entity);
      }

      // Allow users with 'view own webform submission' to view own submissions.
      if ($operation == 'submission_view_own' && $account->hasPermission('view own webform submission')) {
        return AccessResult::allowed()->cachePerPermissions();
      }

      // Allow (secure) token to bypass submission page and create access controls.
      if (in_array($operation, ['submission_page', 'submission_create'])) {
        $token = $this->requestStack->getCurrentRequest()->query->get('token');
        if ($token && $entity->isOpen()) {
          /** @var \Drupal\webform\WebformSubmissionStorageInterface $submission_storage */
          $submission_storage = $this->entityTypeManager->getStorage('webform_submission');

          $source_entity = $this->webformSourceEntityManager->getSourceEntity(['webform']);
          if ($submission = $submission_storage->loadFromToken($token, $entity, $source_entity)) {
            return AccessResult::allowed()->addCacheableDependency($submission)->addCacheableDependency($entity)->addCacheContexts(['url']);
          }
        }
      }

      // The "page" operation is the same as "create" but requires that the
      // Webform is allowed to be displayed as dedicated page.
      // Used by the 'entity.webform.canonical' route.
      if ($operation == 'submission_page') {
        // Completely block access to a template if the user can't create new
        // Webforms.
        $create_access = $entity->access('create', $account, TRUE);
        if ($entity->isTemplate() && !$create_access->isAllowed()) {
          return AccessResult::forbidden()->addCacheableDependency($entity)->addCacheableDependency($create_access);
        }

        if (!$entity->getSetting('page')) {
          return AccessResult::forbidden()->addCacheableDependency($entity);
        }

        $operation = 'submission_create';
      }

      // Check custom webform submission access rules.
      $update_access = $this->checkAccess($entity, 'update', $account);
      $access_rules = $this->accessRulesManager->checkWebformAccess(str_replace('submission_', '', $operation), $account, $entity);
      if ($update_access->isAllowed() || $access_rules->isAllowed()) {
        return AccessResult::allowed()->addCacheableDependency($update_access)->addCacheableDependency($access_rules);
      }
    }

    $access_result = parent::checkAccess($entity, $operation, $account);

    // Return forbidden access result with a reason for 'view' operation
    // so that blocked REST API requests can better understand
    // why access was denied.
    if ($access_result->isNeutral() && $operation === 'view') {
      $access_result = AccessResult::neutral("The 'administer webform' or 'access own or any webform configuration' permission is required.");
      $access_result->cachePerPermissions()->cachePerUser();
    }

    // Make sure the permission, user, and webform is added as
    // a cache dependency.
    $access_result->addCacheableDependency($entity);

    return $access_result;
  }

}
