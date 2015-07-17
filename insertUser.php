<?php 

	$infoUser = $_POST["infoUser"];

	$servername	= "10.183.0.191";
	$username	= "phpmysqladmin";
	$password	= "6xSFekZcoZm1";
	$dbname		= 'marcaColombia';

	// $servername = "localhost";
	// $username = "root";
	// $password = "root";
	// $dbname		= 'marcaColombia';

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "INSERT INTO users (date_share, name_user, question_one, question_two, question_three, question_four, question_five, question_six)
			VALUES ('".date("Y-m-d")."', '".$infoUser['name']."', '".$infoUser['qOne']."', '".$infoUser['qTwo']."', '".$infoUser['qThree']."', '".$infoUser['qFour']."', '".$infoUser['qFive']."', '".$infoUser['qSix']."')";

	if ($conn->query($sql) === TRUE) {
	    echo $infoUser['name'] . " Ha sido registrado";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();

 ?>