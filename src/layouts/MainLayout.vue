<template>
  <main class="content">
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
    .content {
      padding: 30px 10px;
      background-color: #efefef;
    }
</style>