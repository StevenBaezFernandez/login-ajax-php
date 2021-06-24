<?php

    if(isset($_POST["user"]) and isset($_POST["pass"]) and isset($_POST["pass2"])){
        $user = $_POST["user"];
        $pass = $_POST["pass"];
        $pass2 = $_POST["pass2"];

        if($pass == $pass2){
            require "./db.php";
            $db = new Conexion();
            $resul=$db -> Query("SELECT * FROM usuarios");

            $coinciden = FALSE;
            while($row = mysqli_fetch_array($resul)){
              if($row["username"] == $user){
                  $coinciden = TRUE;
              }
            }

            if(!$coinciden){
                $db-> Query("INSERT INTO usuarios VALUES('$user', '$pass')")?print("registrado"): print("");
                
            }else{
                echo("Este usuario ya existe");
                
            }          
            
        }else{
            echo("Contraseña no coinsiden");
        }
    }else{
        echo("Datos no recibidos");
    }






?>