<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kinap_ajira";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the latest 5 FAQs
$sql = "SELECT message, submitted_at FROM faq_submissions ORDER BY submitted_at DESC LIMIT 5";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<ul>";
    while($row = $result->fetch_assoc()) {
        echo "<li><strong>" . date('F j, Y', strtotime($row['submitted_at'])) . ":</strong> " . htmlspecialchars($row['message']) . "</li>";
    }
    echo "</ul>";
} else {
    echo "<p>No FAQs available yet.</p>";
}

$conn->close();
?>
