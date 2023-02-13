<?php

namespace api\modules\users\src\entity;

class User
{

    public function __construct (private int $id, private string $firstName, private string $lastName, private string $mail ) {

    }

    public function get_user_properties () : array {
        return [
            "id"=>$this->getId(),
            "name" => $this->getFirstName(),
            "lastname" => $this->getLastName(),
            "mail" => $this->getMail(),
        ];
    }

    public function getId () : string {
        return $this->id;
    }

    public function getFirstName () : string {
        return $this->firstName;
    }

    public function getLastName () : string {
        return $this->lastName;
    }

    public function getMail () : int {
        return $this->mail;
    }

    public function setId (int $id) : self {
        $this->id = $id;
        return $this;
    }

    public function setFirstName (string $firstName) : self {
        $this->firstName = $firstName;
        return $this;
    }

    public function setLastName (string $lastName) : self {
        $this->lastName = $lastName;
        return $this;
    }

    public function setMail (string $mail) : self {
        $this->mail = $mail;
        return $this;
    }
}