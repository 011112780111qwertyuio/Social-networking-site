<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json;charsetUTF-8");
/* START SIGN UP */
include "./connection.php";
$object = new Dbconnect();
$conn = $object->connect();

/* CHICK EMAIL DATABASE */
if(isset($_POST['email']))
{
$email = $_POST['email'];
$chickemail = $conn->prepare("SELECT *FROM users_table WHERE email=:email");
$chickemail->bindParam("email",$email);
$chickemail->execute();
$chickemail = $chickemail->fetchAll(PDO::FETCH_ASSOC);
$data = json_encode($chickemail) ;
echo $data;

}


/*--------------*/
/* CREATE NEW ACOUNT */
/*==================*/




/*-----------------*/
?>