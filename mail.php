<?php
// Проверяем тип запроса, обрабатываем только POST

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем параметры, посланные с javascript
    $name = $_POST['name'];

    if (isset($name)) {

        $phone = $_POST['phone'];
        $offer = $_POST['offer'];

        // создаем переменную с содержанием письма
        $content = $name . ' преложил(а) нам вкус мороженого. Номер телефона: ' . $phone . ' Предложение: ' . $offer . '.';

        $success = mail("info@icegold.ru", 'Предложение нового вкуса мороженого', $content);

        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

        // Первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание

        if ($success) {
            // Отдаем 200 код ответа на http запрос
            http_response_code(200);
            echo "Письмо отправлено";
        } else {
            // Отдаем ошибку с кодом 500 (internal server error).
            http_response_code(500);
            echo "Письмо не отправлено";
        }
    }

    $order_name = $_POST['order-name'];

    if (isset($order_name)) {

        $order_phone = $_POST['order-phone'];
        $place_order = $_POST['place-order'];
        $place_pay = $_POST['place-pay'];
        $online_pay = $_POST['online-pay'];
        $order = $_POST['data'];

        $order = $order_name . 'сделал(а) заказ. Номер телефона' . $order_phone . 'Пунк самовывоза: ' . $place_order . 'Способ оплаты:  онлайн' . $place_pay . 'на месте ' . $online_pay . 'Заказ: ' . $order;

        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

        // Первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание

        $message = mail("info@icegold.ru", 'Заказ', $order);

        if ($message) {
            // Отдаем 200 код ответа на http запрос
            http_response_code(200);
            echo "Письмо отправлено";
        } else {
            // Отдаем ошибку с кодом 500 (internal server error).
            http_response_code(500);
            echo "Письмо не отправлено";
        }
    }

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}
