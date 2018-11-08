<script>
  import "./style.scss";
  import Rate from '../Rate'

  export default {
    name: "About",
    components: {
      Rate
    }
  };
</script>

<template>
    <div id="about" class="about">
        <h2>Sobre mim</h2>
            
            <p>Sou natural da cidade de Taubaté, onde estudei e iniciei minha carreira como Web Designer. Trabalhei em três agências lá (W3t, Vecktor e Onza), onde fazia trabalhos simples de inicio de carreira. (jan/2009- dez/2011) </p>
            <p>Entao resolvi tentar a vida na cidade grande e mudei para São Paulo para trabalhar na <a href="http://envisiontecnologia.com.br/">Envision Tecnologia</a> como desenvolvedora front-end (fev/2012 - jan/2014), onde aprendi muito sobre css e comecei a utilizar less para desenvolvimento. </p>
            <p>Depois fiz parte da equive de desenvolvimento front-end da <a href="http://www.folha.uol.com.br/">Folha de S. Paulo</a>. (jan/2014 - fev/2015)</p>
            <p>Saindo de la fui para uma startup, a <a href="https://www.enterplay.com.br/">EnterPlay</a> (fev/2015 - nov/2016), onde tive a oportunidade de desenvolver meus conhecimentos de JS e UX testando novas ferramentas e participando de decisoes de usabilidade. </p>
            <p>Atualmente trabalho na <a href="https://www.cvc.com.br/">CVC</a>, na equipe fidelidade que cuida de projetos de whitelabel.</p>
            
            <div class="skills-container">
                <div class="skills">
                    <h2>Skills</h2>
                    <h3>Css3 <Rate value="50" /> </h3>
                    <h3>Less/Sass/Stylus <Rate value="50" /></h3>
                    <h3>HTML5 <Rate value="50" /></h3>
                    <h3>Design Responsivo <Rate value="50" /></h3>
                    <h3>Foundation/Bootsrap <Rate value="50" /></h3>
                    <h3>Jquery <Rate value="40" /></h3>
                    <h3>ES5 <Rate value="30" /></h3>
                    <h3>EmberJS <Rate value="20" /></h3>
                    <h3>React.js <Rate value="20" /></h3>
                    <h3>Vue.js <Rate value="20" /></h3>
                    <h3>AngularJS <Rate value="20" /></h3>
                </div>

                <div class="softwares">
                    <h2>Tools</h2>
                    <h3>Gulp/Grunt <Rate value="50" /></h3>
                    <h3>Git/SVN <Rate value="50" /></h3>
                    <h3>Scrum <Rate value="45" /></h3>
                    <h3>Visual Studio <Rate value="45" /></h3>
                    <h3>Linux <Rate value="45" /></h3>
                    <h3>Illustrator <Rate value="30" /></h3>
                    <h3>Photoshop <Rate value="30" /></h3>
                </div>
            </div>

            <div class="study">
            	<h2>Escolaridade</h2>
                <p>Formada em Web design pela <a href="http://www.csonlineunitau.com.br/v09/">Universidade de Taubaté</a> em 2010. </p>
                <p>Fiz alguns cursos complementares na <a href="http://www.impacta.com.br/">Impacta</a>, como javascript e direção de arte, mas a maioria do meu conhecimento vem da web, <a href="https://www.codeschool.com/">Code School</a> e <a href="http://www.codecademy.com/pt">Codecademy</a></p>
                <p>Uma infância e adolescencia inteira estudando inglês resultaram hoje em um conhecimento avançado do idioma, suficiente para ler e aprender as novidades do mundo do desenvolvimento front-end <span class="off">e assistir aquele episódio lançado ontem nos EUA e já disponibilizado para download porque sou ansiosa para esperar sair a legenda aqui do Brasil</span>. </p>
            </div>
    </div>
</template>