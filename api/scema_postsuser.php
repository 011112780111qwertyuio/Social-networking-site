<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json");
/* start show posts user */
include "./connection.php";
$object = new Dbconnect();
$conn = $object->connect();


if(isset($_POST['userid']))
{
$userid = $_POST['userid'];
$ins = $conn->prepare("SELECT *FROM posts_table JOIN users_table ON(posts_table.user_ID = users_table.usersid) WHERE posts_table.user_ID = :userid");
$ins->bindParam("userid",$userid);
$ins->execute();
$ins = $ins->fetchAll(PDO::FETCH_ASSOC);
$data = json_encode($ins);
echo $data;
}
/* stop */
?>