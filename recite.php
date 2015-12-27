<?php 
if(isset($_POST['submit'])){
    $to = "danieladekunle@gmail.com"; // this is your Email address
    $from = "test@test.com"; // this is the sender's Email address
    $first_name = "Recite";
    $last_name = "User";
    $subject = "Feedback";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    echo "feedback submitted";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>