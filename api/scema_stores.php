<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json;charsetUTF-8");
/* start store */
include "./connection.php";
$obj = new Dbconnect();
$conn=$obj->connect();
if(isset($_FILES['isfile']) ||isset($_POST['userid']) || isset($_POST['typefile']) ){


    $file =$_FILES['isfile']['name'];
    $typefile = $_POST['typefile'];
    $myfile = uniqid().$file;
    $userid = $_POST['userid'];
    $ins = $conn->prepare("INSERT INTO stores_table(filesstore,storeuid,typefile) VALUES (:isfile,:userid,:typefile)");
    $ins->bindParam("isfile",$myfile);
    $ins->bindParam("userid",$userid);
    $ins->bindParam("typefile",$typefile);
     move_uploaded_file($_FILES['isfile']['tmp_name'],'../files/images/'.$myfile);
    $ins->execute();

}

/* stop */
?>