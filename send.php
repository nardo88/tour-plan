<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
$modal_name = $_POST['modal_name'];
$modal_phone = $_POST['modal_phone'];
$modal_message = $_POST['modal_message'];
$modal_email = $_POST['modal_email'];

// Формирование самого письма
$title = "Новое обращение best tour plan";

if(isset($email)){
    $body = "
    <h2>Адрес для рассылки</h2>
    <b>email:</b><br>$email
    ";
} else if (isset($name)) {
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
} else if(isset($modal_name)){
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $modal_name<br>
    <b>Телефон:</b> $modal_phone<br><br>
    <b>Email:</b> $modal_email<br><br>
    <b>Сообщение:</b><br>$modal_message
    ";
}



// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'kuznecovm489@gmail.com'; // Логин на почте
    $mail->Password   = '***'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('kuznecovm489@gmail.com', 'Максим Кузнецов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('nardo1988@mail.ru');  


    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }

    // Отображение результата
    
    // echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
    if(isset($email)){
        header('Location: newletter.html');
    } 
    if (isset($name)) {
        header('Location: thankyou.html');
    }
    if (isset($modal_name)) {
        header('Location: thankyou.html');
    }
