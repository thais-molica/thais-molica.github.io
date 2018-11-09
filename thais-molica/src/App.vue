<script>
  import Header from "./components/Header/index.vue";
  import About from './components/About/index.vue';
  import Projects from './components/Projects/index.vue';
  import './assets/default.scss'

  export default {
    name: "app",
    components: {
      // eslint-disable-next-line
      Header,
      About,
      Projects
    }
  };
</script>

<template>
  <div class="default-container" id="app">
    <Header/>
    <About/>
    <Projects/>
  </div>
</template>