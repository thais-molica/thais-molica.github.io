<script>
  import "./style.scss";

  export default {
    name: "Rate",
    props: ['value']
  };
</script>

<template>
    <span v-bind:class="'star star-' + value"></span>
</template>
