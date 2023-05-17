<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Content-Type:application/json;charsetUTF-8");
header("Access-Control-Allow-Methods:POST");
/* connect database */
include "./connection.php";
$object = new Dbconnect;
$conn = $object->connect();
/* CHICK EMAIL AND PASSWORD */

if( isset($_POST['email']) && isset($_POST['pass']) )
{
$email = $_POST['email'];
$pass = $_POST['pass'];
$checkdata = $conn->prepare("SELECT *FROM users_table WHERE email =:email AND pass =:pass  ");
$checkdata->bindParam('email',$email);
$checkdata->bindParam('pass',$pass);
$checkdata->execute();
$checkdata = $checkdata->fetchAll(PDO::FETCH_ASSOC);
$data =json_encode($checkdata);
echo $data;
}




/*--------------------------*/







?>