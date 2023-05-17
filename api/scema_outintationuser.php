
<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json;charsetUTF-8");
/* START USER DATA */
include "./connection.php";
$object = new Dbconnect();
$conn = $object->connect();
if(isset($_POST['usermessage']))
{
    $usermessage = $_POST['usermessage'];
    $insert = $conn->prepare("SELECT *FROM notifications_table WHERE notifications_table.Poemsmanuserid =:usermessage AND notifications_table.poemsvieow='n'");
    $insert->bindParam("usermessage",$usermessage);
    $insert->execute();
    $insert = $insert->fetchAll(PDO::FETCH_ASSOC);
    $data = json_encode($insert);
    echo $data;
}
/* STOP */
?>