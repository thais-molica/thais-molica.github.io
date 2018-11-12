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
            
            <p>
                Sou natural da cidade de Taubaté, onde estudei e iniciei minha carreira como <strong class="highlight">Web Designer</strong>. 
                Trabalhei em três agências lá (W3t, Vecktor e Onza), onde fazia trabalhos simples de inicio de carreira. <strong class="highlight-date">(jan/2009- dez/2011) </strong>
            </p>
            <p>
                Então resolvi tentar a vida na cidade grande e mudei para São Paulo para trabalhar na <a href="http://envisiontecnologia.com.br/">Envision Tecnologia</a> 
                como <strong class="highlight">Desenvolvedora Front-end</strong> <strong class="highlight-date">(fev/2012 - jan/2014)</strong>, onde aprendi muito sobre <strong class="highlight">CSS</strong> e comecei a utilizar <strong class="highlight">Less</strong> para desenvolvimento. 
                Também tive contato com <strong class="highlight">.NET</strong> e um pouco de <strong class="highlight">Prototipação</strong>. 
            </p>
            <p>
                Depois fiz parte da equive de desenvolvimento <strong class="highlight">Front-end</strong> da <a href="http://www.folha.uol.com.br/">Folha de S. Paulo</a> <strong class="highlight-date">(jan/2014 - fev/2015)</strong>. 
                Lá trabalhei com equipes grandes e dinânicas. Foi quando comecei a desenvolver em <strong class="highlight">JS</strong> e <strong class="highlight">JQuery</strong>, e escrever templates de um <strong class="highlight">cms</strong> baseado em <strong class="highlight">php</strong>, com uma sintaxe parecida com <strong class="highlight">handlebars</strong>.</p>
            <p>
                Saindo de la fui para uma startup, a <a href="https://www.enterplay.com.br/">EnterPlay</a> <strong class="highlight-date">(fev/2015 - nov/2016)</strong>, onde tive a oportunidade de desenvolver meus conhecimentos de <strong class="highlight">JS</strong> e <strong class="highlight">UX</strong> testando novas ferramentas (como <strong class="highlight">Mustache</strong>, <strong class="highlight">Angular</strong> e todo um mundo novo sobre videos na web e players como <strong class="highlight">VideoJS</strong> ) e participando de decisões de usabilidade. </p>
            <p>
                Atualmente trabalho na <a href="https://www.cvc.com.br/">CVC</a>, na equipe fidelidade que cuida de projetos de <strong class="highlight">whitelabel</strong> de larga escala usando <strong class="highlight">Git Flow</strong>, <strong class="highlight">Sass</strong>, <strong class="highlight">EmberJS</strong>, <strong class="highlight">React.js</strong>.</p>
            
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