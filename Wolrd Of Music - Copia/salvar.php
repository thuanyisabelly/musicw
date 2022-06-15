<?php

include_once('index.php');
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];


$sql = "insert into teste1 (nome, email, senha) values ('$nome', '$email', '$senha')";
$query = mysqli_query($conexao, $sql);





?>