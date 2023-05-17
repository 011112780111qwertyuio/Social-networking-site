<?php
//charsetUTF-8
class Dbconnect {
    private $server = 'localhost';
    private $dbname ='database_schema';
    private $user = 'root';
    private $pass = '12345678';
    public function connect(){
        try
        {
            $conn = new PDO("mysql:host=localhost;dbname=database_schema;charset=utf8", $this->user, $this->pass);

           //$conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname .';charsetutf-8;', $this->user, $this->pass);
           $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           return $conn;
        }
        catch(\Exception $e){
            echo "Database Error: " .$e->getMessage();
        }
    }
}


?>