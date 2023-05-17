<?php
error_reporting(E_ALL);
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json");
/* START COUNT LIKES */
include "./connection.php";

$object = new Dbconnect();
if(isset($_POST['postid']))
{
$conn = $object->connect();
$postid =$_POST['postid'];
$ins = $conn->prepare("SELECT *FROM likes_table JOIN users_table on(likes_table.like_userid = users_table.usersid) WHERE likes_table.like_postid = :postid");
$ins->bindParam("postid",$postid);
$ins->execute();
$ins =$ins->fetchAll(PDO::FETCH_ASSOC);
$data = json_encode($ins);
echo $data;
}
/* ENDS  */
?>