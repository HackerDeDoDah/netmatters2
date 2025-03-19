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
$name = htmlspecialchars(trim($_POST['name'] ?? ''), ENT_QUOTES | ENT_HTML5);
$company = htmlspecialchars(trim($_POST['company'] ?? ''), ENT_QUOTES | ENT_HTML5);
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($_POST['phone'] ?? ''), ENT_QUOTES | ENT_HTML5);
$message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES | ENT_HTML5);
$marketing = isset($_POST['marketing']) ? 1 : 0;

// email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $email === 'test@test.com') {
    // handle invalid email
    header("Location: contact_us.php?errors=" . urlencode("Invalid email address provided.") . "#contact");
    exit;
}

//execute SQL 
$sql = "INSERT INTO enquiries (name, company, email, phone, message, marketing) 
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssi", $name, $company, $email, $phone, $message, $marketing);

if ($stmt->execute()) {
    // Redirect
    header("Location: contact_us.php?errors=" . urlencode("Submission unsuccessful.") . "#contact");
    exit;
} else {
    // Redirect
    header("Location: contact_us.php?status=error#contact");
    exit();
}