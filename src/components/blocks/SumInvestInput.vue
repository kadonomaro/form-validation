<template>
  <label class="input-label" data-sign="$">
    <input 
      class="input sum-invest-input" 
      type="text" 
      @input="updateInvestValue(+$event.target.value)"
      v-model="value"
    />
  </label>

</template>

<script>

export default {
  name: 'SumInvestInput',
  data() {
    return {
      value: 5000
    }
  },
  methods: {
    updateInvestValue(value) {
      if (value < 0) {
        value = 0;
      } else if (value >= 200000) {
        value = 200000;
      }
      this.value = +value.toString().replace(/[A-Z a-z]/g, '');
      this.$emit('changeValue', this.value);
    }
  },

};
</script>

<style lang="scss">
  .sum-invest-input {
    max-width: 128px;
    box-sizing: border-box;
  }
</style>