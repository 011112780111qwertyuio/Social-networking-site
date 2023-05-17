<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json");
include './connection.php';
$obj = new Dbconnect();
$conn = $obj->connect();
$ins = $conn->prepare("SELECT *FROM stores_table JOIN users_table ON (stores_table.storeuid = users_table.usersid)");
$ins->execute();
$ins =$ins->fetchAll(PDO::FETCH_ASSOC);
$data = json_encode($ins);
echo $data;


echo "welcome store";





?>