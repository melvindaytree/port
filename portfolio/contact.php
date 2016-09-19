<?php

$name = $_POST['name'];
$email = $_POST['email'];
$comments = $_POST['comments'];


    if (empty($_POST['name']))
        $errors['name'] = 'Name is required.';

    if (empty($_POST['email']))
        $errors['email'] = 'Email is required.';

    if (empty($_POST['comments']))
        $errors['comments'] = 'Comments are required';

        // DO ALL YOUR FORM PROCESSING HERE

        //Send an email 
        $message = '<html><body>';
        $message .= "Requestor: " . "<strong>" . $_POST['name'] . "</strong>" . "<br /><br />" ."\r\n"; 
        $message .= "Email Address: " . "<strong>" . $_POST['email'] . "</strong>" . "<br /><br />" . "\r\n";
        $message .= "Comments: " . "<strong>" . $_POST['comments'] . "</strong>" . "<br /><br />" . "\r\n";
        $message .= '<html><body>';


        $mailto = 'mdaytree@gmail.com';
        $subject = 'Request';
        $from = $_POST['email'];
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        // Send
            mail($mailto, $subject, $message, $headers);
            echo "success";
?>
