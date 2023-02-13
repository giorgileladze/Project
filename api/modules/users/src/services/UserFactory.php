<?php

namespace api\modules\users\src\services;

use api\modules\users\src\entity\User;

class UserFactory
{
    private static ?UserFactory $user_factory = null;

    public static function get_user_factory () : self {
        if(self::$user_factory == null) {
            self::$user_factory = new UserFactory();
        }
        return self::$user_factory;
    }

    public function create_user_object (array $data) : User {
        $id = $data["id"];
        $name = $data["firstName"];
        $lastName = $data["lastName"];
        $mail = $data["mail"];

        $errors = $this->validate_data($id, $name, $lastName, $mail);

        if(count($errors) > 0) {
            header("HTTP/1.0 403");
            exit("Bad request");
        }

        return new User($id, $name, $lastName, $mail);
    }

    private function validate_data (int $id, string $name, string $lastname, string $mail) : array {
        $errors = [];
         return $errors;
    }
}