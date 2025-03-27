<?php
$host = "localhost";
$dbname = "christopherday_news_bites";
$username = "christopherday_christopherday";
$password = "P.w^AWF6W=96";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
