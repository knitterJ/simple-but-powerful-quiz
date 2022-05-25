<?php

//db connection details
$host = "localhost";
$user = "root";
$password = "root";
$database = "poll";

//make connection
$server = mysqli_connect($host, $user, $password, $database);

//get post data
$selected = $_POST['choice'];

//update table
mysqli_query($server, "UPDATE results SET votes = votes + 1 WHERE choices = '$selected'");

//query the database
$query = mysqli_query($server, "SELECT * FROM results");

//loop through and return results
for ($x = 0, $numrows = mysqli_num_rows($query); $x < $numrows; $x++) {
	$row = mysqli_fetch_assoc($query);

	//make array
	$json[$x] = array("choice" => $row["choices"], "votes" => $row["votes"]);
}

//echo results
echo json_encode($json);

//close connection
mysqli_close($server);
