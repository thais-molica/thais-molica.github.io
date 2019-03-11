
<script>
    import Item from './item.vue';
    import './style.scss';

  export default {
    name: "Projects",
    components: {Item},
    data() {
        return {
            projects: [
                {
                    name: "Livelo",
                    photo: "http://thais-molica.github.io/img/livelo.png",
                    content: {
                        photo: 'http://thais-molica.github.io/img/livelo.png',
                        description: [
                            'Primeiro',
                            'Segundo'
                        ]
                    }
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
        <h2 class="projects-title">Projetos</h2>
        <ul class="projects-list">
            <Item 
            v-for="(project, index) in projects" 
            v-bind:key="index" 
            v-bind:item="project" />
        </ul>
    </div>
</template>
