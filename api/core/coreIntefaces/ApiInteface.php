<?php

namespace api\core\coreIntefaces;

interface ApiInteface
{
    public function hendle() : array|null;

    public function send(array $response);

}