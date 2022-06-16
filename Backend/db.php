<?php

    class Conexion extends mysqli{

        // atributos de clase
        private $host = "us-cdbr-east-05.cleardb.net";
        private $user = "be6f19ebd6435e";
        private $pass = "5f468a0a";
        private $db_name = "heroku_af4ced14dbc508a";

        function __construct(){
            parent:: __construct($this -> host, $this -> user, $this -> pass, $this -> db_name, );

            $this-> connect_error ? die("Error de conexion") : print("");
        }

    }

   











?>