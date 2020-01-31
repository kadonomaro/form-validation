<template>
  <div id="app">
    <main-layout></main-layout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';

export default {
  name: 'app',
  components: {
    MainLayout
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303030;
}
</style>
