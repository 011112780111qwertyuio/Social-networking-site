<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json;charsetUTF-8");
/* START USER DATA */
include "./connection.php";
$object = new Dbconnect();
$conn = $object->connect();
if(isset($_POST['usersid']))
{
    $usersid = $_POST['usersid'];

    $insert = $conn->prepare("SELECT *FROM users_table WHERE usersid =:usersid");
    $insert->bindParam("usersid",$usersid);
    $insert->execute();
    $insert = $insert->fetchAll(PDO::FETCH_ASSOC);
    $data = json_encode($insert);
    echo $data;
}
/* STOP */
?>