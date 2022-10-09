<?php
//mail variables
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$title = filter_input(INPUT_POST, 'title', FILTER_SANITIZE_SPECIAL_CHARS);
$content = filter_input(INPUT_POST, 'content', FILTER_SANITIZE_SPECIAL_CHARS);
$receiver = 'cookie7122006@gmail.com';

//page variables
$succesfulAlert = '<h1>Mail has been send successfuly, I will respond to your email soon</h1>';

$wrongAlert = '<h1>Something went </h1>';

$result = mail($receiver, $title . ' from ' . $email, $content);

if ($result) {
    echo $succesfulAlert;
} else {
    echo $wrongAlert;
}
