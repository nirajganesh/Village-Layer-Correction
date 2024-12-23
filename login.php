<?php
    $servername = "localhost";
    $dbname = "gis_portal_db";
    $username = "root";
    $password = "";

   
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
   
    session_start();
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $user = $conn->real_escape_string($username);
        $pass = $conn->real_escape_string($password);

        $sql = "SELECT * FROM usercredentials WHERE username='$user' AND password='$pass'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $_SESSION['username'] = $user;
            echo "Login successful! Welcome, " . $user;
            header("Location: index.php");
            exit();
        } else {
            echo "Invalid username or password.";
        }
    }
    $conn->close();
?>
