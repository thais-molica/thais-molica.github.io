<?
/* Destinatário */
$to .= "thamoli@gmail.com";




$sub = "Contato: ".$nome;

/* Assunto */

/* puxa as informações do Flash (post)*/
$nome = utf8_decode(@$_POST['nome']);
$email = utf8_decode(@$_POST['email']);
$mensagem = utf8_decode(@$_POST['mensagem']);


$conteudo .=  "<b>Nome: </b>".$nome;
$conteudo .= "<br><b>E-Mail: </b>".$email;
$conteudo .= "<br><b>Mensagem: </b>".$mensagem;


$headers = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\n";
$headers .= "From: thamoli@gmail.com\n";

/* Enviando a mensagem */
 
mail($to, $sub, $conteudo, $headers);
echo "<script>alert('Obrigado pelo contato ;)')</script> <meta http-equiv='refresh' content='0;URL=index.html'>" 



?>