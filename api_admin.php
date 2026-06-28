<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $mod = $_POST['mod']; $key = $_POST['key']; $name = $_POST['name'];
    $data = json_encode(["Device"=>"1", "Exp"=>"2026-07-27", "ID"=>$key, "Username"=>$name, "Status"=>"true", "Type"=>"premium", "DeviceId"=>""]);
    $ch = curl_init("https://pionix-ceb3c-default-rtdb.firebaseio.com/$mod/$key.json");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_exec($ch); curl_close($ch);
}
?>
