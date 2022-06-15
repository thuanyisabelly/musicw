<?php

$servidor="localhost";
$usuario="root";
$senha="";
$database="cadastro";

$conexao= mysqli_connect ($servidor,$usuario,$senha, $database);




if($conexao){
    echo 'Conexão feita com sucesso';
}
else{
    echo 'Conexão deu erro, SE FUDEU';
}
?>