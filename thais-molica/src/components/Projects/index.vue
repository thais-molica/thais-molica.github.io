
<script>
    import './style.scss';
    

  export default {
    name: "Projects",
    data() {
        return {
            projects: [
                {
                    name: "Livelo",
                    photo: "http://thais-molica.github.io/img/livelo.png"
                },
                {
                    name: "EnterPlay",
                    photo: "http://thais-molica.github.io/img/enterplay.png"
                },
                {
                    name: "Escolha a escola",
                    photo: "http://thais-molica.github.io/img/escolha_a_escola.png"
                },
                {
                    name: "Eleições 2014",
                    photo: "http://thais-molica.github.io/img/eleicoes_2014.png"
                },
                {
                    name: "Cvc",
                    photo: "http://thais-molica.github.io/img/cvc.png"
                },
                {
                    name: "corinthians",
                    photo: "http://thais-molica.github.io/img/corinthians.png"
                },
                {
                    name: "Partiu",
                    photo: "http://thais-molica.github.io/img/partiu.png"
                },
                {
                    name: "Viaja Dotz",
                    photo: "http://thais-molica.github.io/img/dotz.png"
                },
                {
                    name: "Santander",
                    photo: "http://thais-molica.github.io/img/brasilct.png"
                },
                {
                    name: "Viagem Listo",
                    photo: "http://thais-molica.github.io/img/viagemlisto.png"
                },
                {
                    name: "Viajanet",
                    photo: "http://thais-molica.github.io/img/viajanet.png"
                },
                {
                    name: "Corporate Go",
                    photo: "http://thais-molica.github.io/img/corporatego.png"
                },
                {
                    name: "Travel Agent",
                    photo: "http://thais-molica.github.io/img/travelagent.png"
                }
            ]
        }
    }
  };
</script>

<template>
    <div class="projects" id="projects">
        <h2>Projetos</h2>
        <ul class="projects-list">
            <li class="projects-item" v-for="(project, index) in projects" v-bind:key="index">
                <img class="projects-img" :src="project.photo" :key="project.name" :alt="project.name">
            </li>
        </ul>
    </div>
</template>
