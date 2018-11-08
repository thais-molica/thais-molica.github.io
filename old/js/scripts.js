//coloca min-height nas ancoras para ocuparem a pagina toda
$(window).ready(function(){
  var $height = $(window).height();
  var $new_height = $height - 100;
    $(".content #contact").css("min-height", $new_height);
    $(".content #projects , .content #about").css("min-height", $height);
} ) ;

//validação do formulario
function validaForm(){
  d = document.contato;
  if (d.nome.value == ""){
    alert("O campo " + d.nome.name + " deve ser preenchido!");
    d.nome.focus();
    return false;
  }
  if (d.email.value == ""){
    alert("O campo " + d.email.name + " deve ser preenchido!");
    d.email.focus();
    return false;
  }
  parte1 = d.email.value.indexOf("@");
  parte2 = d.email.value.indexOf(".");
  parte3 = d.email.value.length;
  if (!(parte1 >= 3 && parte2 >= 6 && parte3 >= 9)) {
    alert ("O campo " + d.email.name + " deve ser preenchido corretamente!");
    d.email.focus();
    return false;
  }
  if (d.mensagem.value == ""){
    alert("O campo " + d.mensagem.name + " deve ser preenchido!");
    d.nome.focus();
    return false;
  }
}
function validaNews(){
  d = document.form;
  if (d.email.value == ""){
    alert("O campo " + d.email.name + " deve ser preenchido!");
    d.email.focus();
    return false;
   }
   parte1 = d.email.value.indexOf("@");
   parte2 = d.email.value.indexOf(".");
   parte3 = d.email.value.length;
   if (!(parte1 >= 3 && parte2 >= 6 && parte3 >= 9)) {
    alert ("O campo " + d.email.name + " deve ser preenchido corretamente!");        
    d.email.focus();
    return false;
  }
}

//mobile
$ ( document ).ready({
  if( $(document).width() < 500) {
    $( ".header .menu ul").addClass("teste");
  }
} ) ;

//GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-24217666-1', 'thaismolica.com.br');
ga('send', 'pageview');