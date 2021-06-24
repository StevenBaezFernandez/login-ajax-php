<?php
    session_start();
    if(!isset($_SESSION["user"])){
        header("location:./");
    }    
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>¡Bienvenido!</title>
    <link rel="stylesheet" href="css/style2.css">
</head>
<body>

    <?php
        echo("<h1 class=\"titulo\">Bienvenido/a \"$_SESSION[user]\"</h1>");
    
    ?>
    <a href="cerrar_sesion.php" class="enlace">Cerrar sesion</a>
    
</body>
</html>