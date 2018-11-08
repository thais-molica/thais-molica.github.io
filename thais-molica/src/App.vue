<template>
  <div class="default-container" id="app">
    <Header/>
  </div>
</template>

<script>
  import Header from "./components/Header/index.vue";
  import './assets/default.scss'

  export default {
    name: "app",
    components: {
      Header
    }
  };
</script>
