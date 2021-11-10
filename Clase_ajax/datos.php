<?php

$usuario = "root";
$servidor = "localhost";
$basededatos = "persona";

$conexion = mysqli_connect( $servidor, $usuario, "" ) or die ("No se ha podido conectar al servidor de Base de datos");

$db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );
$consulta = "SELECT * FROM personas";
$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

echo "<table border='2'>";
	echo "<tr>";
	echo "<th>Nombre</th>";
	echo "<th>Edad</th>";
	echo "</tr>";

while ($columna = mysqli_fetch_array( $resultado ))
{
	echo "<tr>";
	echo "<td border='2'>" . $columna['nombre'] . "</td><td>" . " " . $columna['edad'] . "</td>";
	echo "</tr>";
}
echo "</table>";
?>