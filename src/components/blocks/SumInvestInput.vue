<template>
  <label class="input-label" data-sign="$">
    <input 
      class="input sum-invest-input" 
      type="text" 
      :value="value" 
      @input="value = $event.target.value"  
    />
  </label>

</template>

<script>

export default {
  name: 'SumInvestInput',
  data() {
    return {
      value: ''
    }
  }
};
</script>

<style lang="scss">
  .sum-invest-input {
    max-width: 128px;
    box-sizing: border-box;
  }
</style>