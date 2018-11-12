<script>
  import Header from "./components/Header/index.vue";
  import About from './components/About/index.vue';
  import Projects from './components/Projects/index.vue';
  import Footer from './components/Footer/index.vue';
  import './assets/default.scss'

  export default {
    title: "Thaís Molica - Front-end Developer",
    name: "app",
    components: {
      // eslint-disable-next-line
      Header,
      About,
      Projects,
      Footer
    }
  };
</script>

<template>
  <div>
    <div class="default-container" id="app">
      <Header/>
      <About/>
      <Projects/>
    </div>
    <Footer/>
  </div>
</template>