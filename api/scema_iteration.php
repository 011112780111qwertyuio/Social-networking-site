<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json");

include "./connection.php";
$object = new Dbconnect();
$conn = $object->connect();



if( isset($_POST['poemstype']) || isset($_POST['poemsvieow']) || isset($_POST['Poemspostid']) || isset($_POST['Poemsuserid']) || isset($_POST['Poemsmanuserid']))
{
$poemstype = $_POST['poemstype'];
$poemsvieow=$_POST['poemsvieow'];
$Poemspostid =$_POST['Poemspostid'];
$Poemsuserid=$_POST['Poemsuserid'];
$Poemsmanuserid =$_POST['Poemsmanuserid'];
$insert = $conn->prepare("INSERT INTO notifications_table(poemstype,poemsvieow,Poemspostid,Poemsuserid,Poemsmanuserid) VALUES (:poemstype,:poemsvieow,:Poemspostid,:Poemsuserid,:Poemsmanuserid)");
$insert->bindParam("poemstype",$poemstype);
$insert->bindParam("poemsvieow",$poemsvieow);
$insert->bindParam("Poemspostid",$Poemspostid);
$insert->bindParam("Poemsuserid",$Poemsuserid);
$insert->bindParam("Poemsmanuserid",$Poemsmanuserid);
$insert->execute();
}
?>




