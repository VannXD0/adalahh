<?php
// Contoh sederhana validasi login
if ($_POST['username'] == 'admin' && $_POST['password'] == '123') {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>
