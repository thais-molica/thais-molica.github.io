<template>
  <div class="default-container" id="app">
    <Header/>
    <About/>
  </div>
</template>

<script>
  import Header from "./components/Header/index.vue";
  import About from './components/About/index.vue';
  import './assets/default.scss'

  export default {
    name: "app",
    components: {
      Header,
      About
    }
  };
</script>
