<?php
$servername = "localhost";
$username = "root";
$password = "password";
$database = "users_astro";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

if (isset($_POST["login_button"])) {
  

//login
$lUname = $_POST['lUname'];
$lPswd = $_POST['lPswd'];

$sql = "SELECT email, password FROM users WHERE email = '$lUname' AND password = '$lPswd'";

$result = mysqli_query($conn, $sql);

if ($result) {
  while ($row = $result->fetch_assoc()) {
      // Display the data or perform other operations
      echo "Email: " . $row['email'] . "<br>";
      echo "Password: " . $row['password'] . "<br>";
  }
} else {
  // Handle query error
  echo "Error: " . $conn->error;
}
}


//sign up
if (isset($_POST["sButton"])) {
  echo "hey!";
  //login
  $lUname = $_POST['sUname'];
  $lPswd = $_POST['sPswd'];
  
  $sql = "INSERT into users VALUES('3', '$lUname', '$lPswd')";
  
  $result = mysqli_query($conn, $sql);
  
  if ($result) {
    echo "hey!";
    echo $result;
  } else {
    // Handle query error
    echo "Error: " . $conn->error;
  }
  }
  


?>


