
<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json;charsetUTF-8");
/* START USER DATA */
include "./connection.php";
$object = new Dbconnect();
$conn = $object->connect();
if(isset($_POST['userid']))
{
$userid = $_POST['userid'];
$insert = $conn->prepare("UPDATE notifications_table SET poemsvieow = 'o' WHERE poemsvieow='n' AND Poemsmanuserid =:userid ");
$insert->bindParam('userid',$userid)  ;
$insert->execute();

}
/* STOP */
?>