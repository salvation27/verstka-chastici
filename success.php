<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$text = htmlspecialchars($_POST["text"]);

$check = is_array($_POST['check']) ? $_POST['check'] : array();
$check = implode (', ', $check );

$radio = htmlspecialchars($_POST["radio"]);

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
// $myemail = "salvation2011@meta.ua";
$myemail = "info@evra.club";

$tema = "Zayavka so stranici ";
$message_to_myemail = "Заказ:
<br><br>
Имя: $name<br>
Телефон: $tel<br>
Почта: $email<br>
Сообщение: $text<br>
Зказ с сайта (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: Sitename <salo@wayup.in> \r\n city \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


// $tema = "Тема письма клиенту";
// $message_to_myemail = "
// Текст письма<br>
// Файл: <a href='http://numbers.andrewgavrilov.me/files/ripple.zip' download>Название файла</a>

// ";
// $myemail = $email;
// mail($myemail, $tema, $message_to_myemail, "From: WAYUP <reg@wayup.in> \r\n Reply-To: WAYUP \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>   <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);


?>
