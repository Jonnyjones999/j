<?php
//session_start();
$parameter = array(
    "chat_id" => '841044634',
    "text" => $_SESSION['message']
);

send("sendMessage", $parameter);

function send($method, $parameter)
{

    $api_key = '1520951540:AAE2bsiHQhAuiViJ57rIF8fCulQ13mCOXuI';

    $url = "https://api.telegram.org/bot$api_key/$method";
    if (!$curl = curl_init()) {
        exit();
    }

    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $parameter);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $output = curl_exec($curl);
    return $output;

}
include '../enc/get.php';
?>