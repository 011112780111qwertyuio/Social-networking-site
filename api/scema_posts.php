<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methos:POST");
header("Content-Type:application/json;charsetUTF-8");
/* START SHOW POSTS */
include "./connection.php";

$object = new Dbconnect();
$conn = $object->connect();
$requsetmethod = $_SERVER["REQUEST_METHOD"];

if($requsetmethod =="POST")
{
   
$showposts = $conn->prepare("SELECT *FROM posts_table JOIN users_table ON (posts_table.user_ID = users_table.usersid) 
WHERE posts_table.datatime>=CURRENT_TIMESTAMP - INTERVAL 3 MONTH 
ORDER BY posts_table.postid DESC LIMIT 200;
");
$showposts->execute();
$posts = $showposts->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($posts);
}
else
{
    $data =[
        'state'=>405,
        'message'=>$requsetmethod. 'mtehod eror'
    ];
}









//$showposts->execute();
//$showposts = $showposts->fetchAll(PDO::FETCH_ASSOC);
//$data = json_encode($showposts);

//echo $data;

/* STOP */






?>





