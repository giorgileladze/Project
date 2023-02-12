<?php

namespace api\modules\users\src\controllers;

class UserController
{
    public function create_user (array $user_data = []) : void {
        echo "create";
    }

    public function delete_user (int $id = 0) : void {
        echo "delete";
        echo $id;
    }

    public function get_user_info (int $id = 0) : array {
        echo "get info";
        echo $id;
        return [];
    }

}