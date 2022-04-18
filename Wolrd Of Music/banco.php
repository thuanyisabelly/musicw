<?php

$servidor="localhost";
$usuario="root";
$senha="";
$database="teste";

$conexao= mysqli_connect ($servidor,$usuario,$senha, $database);




if($conexao){
    echo 'Conexão feita com sucesso';
}
else{
    echo 'Conexão deu erro, SE FUDEU';
}
?>