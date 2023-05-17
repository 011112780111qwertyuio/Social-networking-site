<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json");
/* START ADD NEW COMMENT */
include "./connection.php";
$object = new Dbconnect();
$conn = $object->connect();


if(isset($_POST['newcomment']) && isset($_POST['postid']) && isset($_POST['userid']) && isset($_POST['display']) )
{
$newcomment = $_POST['newcomment'];
$postid = $_POST['postid'];
$userid = $_POST['userid'];
$display = $_POST['display'];
$ins = $conn->prepare("INSERT INTO comment(user_id,post_id,display_comment,comments) VALUES (:userid,:postid,:display,:newcomment)");
$ins->bindParam("newcomment",$newcomment);
$ins->bindParam("postid",$postid);
$ins->bindParam("userid",$userid);
$ins->bindParam("display",$display);
$ins->execute();
}







/* STOP */
?>








