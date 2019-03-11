
<script>
  export default {
    name: "Item",
    props: ['item']
  };
</script>

<template>
    <li class="projects-item" >
        <img class="projects-img" :src="item.photo" :key="item.name" :alt="item.name">
        <div class="projects-content" v-if="item.content">
            <img v-if="item.content.photo" class="projects-content-img" :src="item.content.photo" :key="item.name" :alt="item.name">
            <p v-for="(i, index) in item.content.description" v-bind:key="index">{{i}}</p>
        </div>
    </li>
</template>
