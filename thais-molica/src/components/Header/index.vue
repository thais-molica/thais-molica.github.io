<script>
  import "./style.scss";

  export default {
    name: "Header"
  };
</script>

<template>
    <header>
      <div itemscope itemtype="http://data-vocabulary.org/Person"><h1><span itemprop="name">Thais Molica</span>: <strong itemprop="title"> Front-end Developer</strong></h1></div>
      <nav class="menu">
        <ul>
          <li class="about"><a class="anchorLink" href="#about">Sobre mim</a></li>
          <li class="projects"><a class="anchorLink" href="#projects">Projetos</a></li>
          <li class="contact"><a class="anchorLink" href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
</template>