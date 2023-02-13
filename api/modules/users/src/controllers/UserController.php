<?php

namespace api\modules\users\src\controllers;

use api\modules\users\src\services\UserFactory;
use api\modules\users\src\services\UserServices;

class UserController
{
    private UserServices $user_service;

    public function __construct () {
        $this->user_service = new UserServices();
    }

    public function create_user (array $user_data) : void {
        $factory = UserFactory::get_user_factory();

        $user_object = $factory->create_user_object($user_data);

        $this->user_service->save_user_object($user_object);
    }

    public function delete_user (int $id) : void {
        $this->user_service->delete_user_by_id($id);
    }

    public function get_user_info (int $id = 0) : array {
        $user_info = $this->user_service->select_user_by_id($id);

        return $user_info;
    }

}