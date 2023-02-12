<?php

namespace api\core;

use api\core\coreIntefaces\ApiInteface;
use api\core\routingSystem\Router;

class Api implements ApiInteface {

    private Router $router;

    public function __construct(private array $request)
    {
        $this->hendle_preflight_request();
    }
    public function hendle () : array|null {
        $uri = $this->request["URI"];
        $request_method = $this->request["method"];

        $this->router = new Router($uri, $request_method);
        $this->router->get_starter_method();

        return $this->router->call_starter_method();
    }

    public function send (?array $response) : void {
        if($response != null) echo json_encode($response);
    }

    private function hendle_preflight_request(){
        if($this->request["method"] === "OPTIONS" ){
            header("HTTP/1.0 200 OK");
            exit();
        }
    }
}