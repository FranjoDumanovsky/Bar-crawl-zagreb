<?php
/*##########Script Information#########
  # Purpose: Send mail Using PHPMailer#
  #          & Gmail SMTP Server 	  #
  # Created: 24-11-2019 			  #
  #	Author : Hafiz Haider			  #
  # Version: 1.0					  #
  # Website: www.BroExperts.com 	  #
  #####################################*/

//Include required PHPMailer files
	require 'includes/PHPMailer.php';
	require 'includes/SMTP.php';
	require 'includes/Exception.php';
//Define name spaces
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;


$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
   $name = $_POST['name'];
   $email = $_POST['email'];
   $message = $_POST['message'];
   $full_number = $_POST['full_number'];
   $dateFor = $_POST['date-for'];
   $numberOfPeople = $_POST['numberOfPeople'];
   $foundAboutUs = $_POST['foundAboutUs'];

// specify SMTP credentials
	$mail = new PHPMailer();
//Set mailer to use smtp
	$mail->isSMTP();
//Define smtp host
	$mail->Host = "smtp.gmail.com";
//Enable smtp authentication
	$mail->SMTPAuth = true;
//Set smtp encryption type (ssl/tls)
	$mail->SMTPSecure = "tls";
//Port to connect smtp
	$mail->Port = "587";
//Set gmail username
	$mail->Username = "dumanovskyfinance@gmail.com";
//Set gmail password
	// $mail->Password = "yykmxheirqsjfsbx";
	$mail->Password = "bwcdoiiyzvsnbnne";
//Email subject
	$mail->Subject = "New form submition";
//Set sender email
	$mail->setFrom($email);
//Enable HTML
	$mail->isHTML(true);
//Attachment
	// $mail->addAttachment('img/attachment.png');
//Email body
	// $mail->Body = "<h1>This is HTML h1 Heading</h1></br><p>This is html paragraph</p>";
//Add recipient
	$mail->addAddress('dumanovskyfinance@gmail.com');
       // Enable HTML if needed
       $mail->isHTML(true);
       $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Message:", nl2br($message),"Phone number: +{$full_number}", "Date: {$dateFor}", "number of People: {$numberOfPeople}", "We found about you through {$foundAboutUs}" ];
       $body = join('<br />', $bodyParagraphs);
       $mail->Body = $body;
       echo $body;


	if ( $mail->send() ) {
		echo "Email Sent..!";
	}else{
		echo "Message could not be sent. Mailer Error: ";
	}
   }
?>

