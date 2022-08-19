<?php
$servername = "localhost:3306";
$username = "root";
$password = "";
$database= "tremglobal-task";

// Create connection
$db_conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if ($db_conn->connect_error) {
    die("Connection failed: " . $db_conn->connect_error);
}
echo "Connected successfully";
?>
