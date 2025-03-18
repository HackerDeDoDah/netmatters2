<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "form_entries";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect form data
$name = htmlspecialchars($_POST['name']);
$company = htmlspecialchars($_POST['company']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($_POST['phone']);
$message = htmlspecialchars($_POST['message']);
$marketing = isset($_POST['marketing']) ? 1 : 0;

//execute SQL 
$sql = "INSERT INTO enquiries (name, company, email, phone, message, marketing) 
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssi", $name, $company, $email, $phone, $message, $marketing);

if ($stmt->execute()) {
    // Redirect
    header("Location: contact_us.php?status=success");
    exit();
} else {
    // Redirect
    header("Location: contact_us.php?status=error");
    exit();
}