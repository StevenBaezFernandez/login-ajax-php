<?php

    class Conexion extends mysqli{

        // atributos de clase
        private $host = "127.0.0.1";
        private $user = "root";
        private $pass = "";
        private $db_name = "loginsystem";

        function __construct(){
            parent:: __construct($this -> host, $this -> user, $this -> pass, $this -> db_name, );

            $this-> connect_error ? die("Error de conexion") : print("");
        }

    }

   











?>