<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application;json;charset=utf-8");
/* DIS LIKE POST */
include "./connection.php";
$object = new Dbconnect();
$conn = $object->connect();


if(isset($_POST['likeuserid']) && isset($_POST['likepostid']))
{
$likeuserid = $_POST['likeuserid'];
$likepostid = $_POST['likepostid'];
$ins = $conn->prepare("DELETE FROM likes_table WHERE like_postid =:likepostid AND like_userid =:likeuserid");
$ins->bindParam("likeuserid",$likeuserid);
$ins->bindParam("likepostid",$likepostid);
$ins->execute();
}

/* STOP */

?>

