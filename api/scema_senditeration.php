<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application;json;charset=utf-8");
include "./connection.php";

$object = new Dbconnect();
$conn = $object->connect();
$insert = $conn->prepare("UPDATE notifications_table SET poemsvieow='ok' WHERE poemsvieow='no'");
$insert->execute();


?>