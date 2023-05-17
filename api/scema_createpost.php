<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json;charsetUTF-8");

/* start new create post */
include "./connection.php";
$object = new Dbconnect();
$conn =$object->connect();

if(isset($_POST['dess']) || isset($_POST['usersid'])   || isset($_FILES['imgpost']))
{

    if(isset($_FILES['imgpost']))
    {
        $imgpos = $_FILES['imgpost']['name'];
        $myfileimg = uniqid().$imgpos;
        $dess = $_POST['dess'];
        $usersid = $_POST['usersid'];
        $ins = $conn->prepare("INSERT INTO posts_table(content,imagepost,user_ID) VALUES (:dess,:imgpost,:usersid)");
        $ins->bindParam("imgpost",$myfileimg);
        $ins->bindParam("dess",$dess);
        $ins->bindParam("usersid",$usersid);
        move_uploaded_file($_FILES['imgpost']['tmp_name'],'../files/images/'.$myfileimg);
        $ins->execute();
        
    }
    else
    {
    
        $myfileimg=$_FILES['null'];
        $dess = $_POST['dess'];
        $usersid = $_POST['usersid'];
        $ins = $conn->prepare("INSERT INTO posts_table(content,imagepost,user_ID) VALUES (:dess,:imgpost,:usersid)");
        $ins->bindParam("imgpost",$myfileimg);
        $ins->bindParam("dess",$dess);
        $ins->bindParam("usersid",$usersid);
        $ins->execute();
        
    }






}

/* stop */
?>