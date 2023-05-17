<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application;json;charset=utf-8");

/* START SHOW COMMENTS */
include "./connection.php";
$object = new Dbconnect();
$conn = $object->connect();
if(isset($_POST['postid']))
{
$postid = $_POST['postid'];
$insert = $conn->prepare("SELECT *FROM comment JOIN users_table ON (comment.user_id = users_table.usersid) WHERE comment.post_id =:postid ");
$insert->bindParam("postid",$postid);
$insert->execute();
$insert = $insert->fetchAll(PDO::FETCH_ASSOC);
$data = json_encode($insert);
echo $data;
}
/* STOP */



?>


