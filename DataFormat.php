<?php

class DataFormat
{

    public $userEmail;
    static $COUNTER_CHECK;

    public function __construct()
    {
        self::defaultCOUNTERVALUE();
    }

    public function __construct1($userEmail)
    {
        $this->userEmail = $userEmail;
        self::defaultCOUNTERVALUE();
    }

    public static function getCOUNTERCHECK()
    {
        return self::$COUNTER_CHECK;
    }

    public static function defaultCOUNTERVALUE()
    {
        self::$COUNTER_CHECK = 0;
    }

    public static function setCOUNTERCHECK($COUNTER_CHECK)
    {
        self::$COUNTER_CHECK = $COUNTER_CHECK;
    }


    public function getUserEmail()
    {
        return $this->userEmail;
    }

    public function setUserEmail($userEmail)
    {
        $this->userEmail = $userEmail;
    }


    function checkEmailFormat($myEmail)
    {
        $this->setUserEmail($myEmail);
        $myEmail = trim($myEmail);
        $myEmail = stripslashes($myEmail);
        return htmlspecialchars($myEmail);
    }

    function writeToFile($userArrayList , $filename , $fileHeader){
        $stream = fopen($filename, 'a');

        fwrite( $stream,$fileHeader."\n");
        foreach ($userArrayList as $key => $value) {
            fwrite($stream, $key . " = " . $value . "\n");
        }
        fwrite($stream, "------------------------------------------------" . "\n");
        fclose($stream);
    }

}