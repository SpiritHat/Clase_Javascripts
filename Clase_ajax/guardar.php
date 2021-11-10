<?php

$usuario = "root";
$servidor = "localhost";
$basededatos = "persona";
$nom = $_POST['nombre'];
$edad = $_POST['edad'];

$conexion = mysqli_connect( $servidor, $usuario, "" ) or die ("No se ha podido conectar al servidor de Base de datos");
$db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );


$sql = "INSERT INTO personas (id,nombre, edad) VALUES ('','$nom','$edad')";


if (mysqli_query($conexion, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
}

?>