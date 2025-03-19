

<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "form_entries";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name'] ?? ''), ENT_QUOTES | ENT_HTML5);
    $company = htmlspecialchars(trim($_POST['company'] ?? ''), ENT_QUOTES | ENT_HTML5);
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''), ENT_QUOTES | ENT_HTML5);
    $message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES | ENT_HTML5);
    $marketing = isset($_POST['marketing']) ? 1 : 0;

    $errors = [];

    if (!$name) $errors['name'] = "Name is required.";
    if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL) || $email === 'test@test.com') {
        $errors['email'] = "Valid email is required.";
    }
    if (!preg_match('/^\+?(\d{1,3})?[-.\s]?(\d{3})[-.\s]?(\d{3,4})[-.\s]?(\d{4})$/', $phone)) {
        $errors['phone'] = "Valid phone number (7-15 digits) is required.";
    }
    
    if (!$message) $errors['message'] = "Message is required.";

    if (!empty($errors)) {
        // Append errors and form data to URL for refilling
        $queryParams = http_build_query([
            'errors' => $errors,
            'name' => $name,
            'company' => $company,
            'email' => $email,
            'phone' => $phone,
            'message' => $message,
            'marketing' => $marketing
        ]);

        header("Location: contact_us.php?$queryParams#contact");
        exit;
    }

    $sql = "INSERT INTO enquiries (name, company, email, phone, message, marketing) 
        VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssi", $name, $company, $email, $phone, $message, $marketing);

    $stmt->execute();

    // Process form successfully
    header("Location: contact_us.php?success=1#contact");
} else {
    header("Location: contact_us.php#contact");
    exit;
}
if (empty($errors)) {
    // Redirect with success message
    header("Location: contact_us.php?success=1#contact");
    exit;
}

?>
