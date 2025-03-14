<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "entries_data";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect form data securely
$name = htmlspecialchars($_POST['name']);
$company = htmlspecialchars($_POST['company']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($_POST['phone']);
$message = htmlspecialchars($_POST['message']);
$marketing = isset($_POST['marketing']) ? 1 : 0;

// Prepare and execute SQL statement
$sql = "INSERT INTO enquiries (name, company, email, phone, message, marketing) 
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssi", $name, $company, $email, $phone, $message, $marketing);

if ($stmt->execute()) {
    // Redirect back to contact_us.php with a success message
    header("Location: contact_us.php?status=success");
    exit(); // Ensure no further code runs after redirection
} else {
    // Redirect with an error message
    header("Location: contact_us.php?status=error");
    exit();
}

$stmt->close();

$conn->close();
?>
