<html>
<?php
require 'conected.php';
session_start();

$usuario = $_POST['usuario'];
$password = $_POST['password'];
$password = md5($password);
$q = "SELECT COUNT(*) AS contar FROM usuarios WHERE usuario = '$usuario' AND pass = '$password'";
$password = md5($password);
$consulta = mysqli_query($conexion, $q);
$array = mysqli_fetch_array($consulta);

if ($array['contar']>0){
    $_SESSION ['username'] = $usuario;
    header("location: ../dashboard/home.php");
}else {
     header ("location: loginerror.php");
}
?>
</html>