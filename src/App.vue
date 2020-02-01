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
#app {
  height: 100%;
  color: #303030;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
