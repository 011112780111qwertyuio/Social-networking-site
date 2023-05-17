<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json");
/* START ADD LIKE */
include "./connection.php";
$object = new Dbconnect();
$conn = $object->connect();

if(isset($_POST['postid']) && isset($_POST['userid']) && isset($_POST['mylike']) )
{
$postid = $_POST['postid'];
$userid = $_POST['userid'];
$mylike = $_POST['mylike'];
$insert = $conn->prepare("INSERT INTO likes_table(like_postid,like_userid,mylike) VALUES(:postid,:userid,:mylike)");
$insert->bindParam("postid",$postid);
$insert->bindParam("userid",$userid);
$insert->bindParam("mylike",$mylike);
$insert->execute();
}
/* STOP */
?>






