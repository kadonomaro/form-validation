<template>
  <main class="main-layout">
    <app-form></app-form>
  </main>
</template>

<script>
import AppForm from '@/components/AppForm.vue';

export default {
  components: {
    AppForm
  }
}
</script>

<style lang="scss">
    .main-layout {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: #f1f6fd;
      box-sizing: border-box;
    }
</style>