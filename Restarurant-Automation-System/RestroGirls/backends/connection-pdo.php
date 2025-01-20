<?php

try {
    $pdoconn = new PDO("mysql:host=localhost;dbname=mistidb", 'root', '');
    // Set the PDO error mode to exception
    $pdoconn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    // Handle the exception or log it as needed
    echo "Connection failed: " . $e->getMessage();
    // You may want to log the exception or take other actions
    // Instead of throwing a generic exception, it's often better to handle the exception gracefully
}

// Continue with your code...

?>
