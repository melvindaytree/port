<?php

$message = '<html><body>';
$message .= "Requestor: " . "<strong>" . $_POST['name'] . "</strong>" . "<br /><br />" ."\r\n"; 
$message .= "Email Address: " . "<strong>" . $_POST['email'] . "</strong>" . "<br /><br />" . "\r\n";
$message .= "Comments: " . "<strong>" . $_POST['comments'] . "</strong>" . "<br /><br />" . "\r\n";
$message .= '<html><body>' ?>


<?php

$mailto = 'mdaytree@gmail.com';
$subject = 'Request';
$from = $_POST['email'];
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

// Send
	 mail($mailto, 'Request', $message, $headers);
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $emailErr = "Invalid email format"; 
       }

?>

<h1 class="text-center">Thanks for contacting me you will hear back as soon as possible!</h1>
