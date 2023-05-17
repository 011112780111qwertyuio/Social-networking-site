<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json");
include "./connection.php";
$obkect = new Dbconnect();
$conn = $obkect->connect();
$insert = $conn->prepare("SELECT *FROM notifications_table JOIN users_table ON(notifications_table.Poemsuserid = users_table.usersid) ORDER BY poemsid DESC ");
$insert->execute();
$insert = $insert->fetchAll(PDO::FETCH_ASSOC);
$data = json_encode($insert);
echo $data;
?>


