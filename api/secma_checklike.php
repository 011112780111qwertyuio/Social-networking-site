
<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Content-Type:application/json;charsetUTF-8");
header("Access-Control-Allow-Methods:POST");

include "./connection.php";
$object =new Dbconnect();
$conn =$object->connect();

if(isset($_POST['likeuserid']) && isset($_POST['likepostid']))
{
$likepostid = $_POST['likepostid'];
$likeuserid = $_POST['likeuserid'];
$ins = $conn->prepare("SELECT *FROM likes_table JOIN users_table ON (likes_table.like_userid=users_table.usersid) WHERE likes_table.like_userid =:likeuserid AND likes_table.like_postid = :likepostid");
$ins->bindParam("likeuserid",$likeuserid);
$ins->bindParam("likepostid",$likepostid);
$ins->execute();
$ins = $ins->fetchAll(PDO::FETCH_ASSOC);
$data = json_encode($ins);
echo $data;

}
?>