<?php
    session_start();

    if(isset($_POST["user"]) and isset($_POST["pass"])){

        if(!empty($_POST["user"]) and !empty($_POST["pass"])){

            $user = $_POST["user"];
            $pass = $_POST["pass"];

            require "./db.php";
            $db = new Conexion();

            $res = $db -> Query("SELECT * FROM usuarios");

            $coinciden = FALSE;
            while($row = mysqli_fetch_array($res)){
              if($row["username"] == $user and $row["userpass"] == $pass){
                  $coinciden = TRUE;
              }
            }
            if($coinciden){
                $_SESSION["user"] = $user;
                echo("true");
            }else{
                echo("false");
            }
           
        }else{
            echo("datos vacios");
        }      
    }else{
        echo("datos no recibidos");
    }






?>