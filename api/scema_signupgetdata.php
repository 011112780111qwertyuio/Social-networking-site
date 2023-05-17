<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json;charsetUTF-8");
/* GET DATA SING UP */
include "./connection.php";
$object = new Dbconnect();
$conn = $object->connect();
//echo  uniqid();

if( isset($_POST['jops']) || isset($_POST['fname']) || isset($_POST['lname']) || isset($_POST['pass']) || isset($_POST['phone']) || isset($_FILES['fileimg'])) 
{


    if(isset($_FILES['fileimg']))
    {
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$pass = $_POST['pass'];
$phone = $_POST['phone'];
$fileimg = $_FILES['fileimg']['name'];
$savefileimg = uniqid().$fileimg;

/*jops*/
$jops = $_POST['jops'];
$insert = $conn->prepare("INSERT INTO users_table(email,pass,lastname,firstname,phone,jop,urlimage) VALUES (:email,:pass,:lastname,:firstname,:phone,:jop,:urlimage)");
$insert->bindParam("email",$email);
$insert->bindParam("pass",$pass);
$insert->bindParam("lastname",$lname);
$insert->bindParam("firstname",$fname);
$insert->bindParam("phone",$phone);
$insert->bindParam("urlimage",$savefileimg);
$insert->bindParam("jop",$jops);
move_uploaded_file($_FILES['fileimg']['tmp_name'],'../files/images/'.$savefileimg);
$insert->execute();
print_r( json_encode($insert));

    }
else
{


    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $phone = $_POST['phone'];
    $fileimg = $_FILES['null'];
    
    /*jops*/
    $jops = $_POST['jops'];
    $insert = $conn->prepare("INSERT INTO users_table(email,pass,lastname,firstname,phone,jop,urlimage) VALUES (:email,:pass,:lastname,:firstname,:phone,:jop,:urlimage)");
    $insert->bindParam("email",$email);
    $insert->bindParam("pass",$pass);
    $insert->bindParam("lastname",$lname);
    $insert->bindParam("firstname",$fname);
    $insert->bindParam("phone",$phone);
    $insert->bindParam("urlimage",$fileimg);
    $insert->bindParam("jop",$jops);
    $insert->execute();
    print_r( json_encode($insert));


}



}



?>