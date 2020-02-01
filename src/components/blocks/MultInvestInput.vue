<template>
  <label class="input-label" data-sign="x">
    <input class="input mult-invest-input" type="text" value="20" />
    <span class="mult-invest-sum">= $ {{ factSum }}</span>
  </label>
</template>

<script>

export default {
  name: 'MultInvestInput',
  props: {
    factSum: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      
    }
  }
};
</script>

<style lang="scss">
  .mult-invest-input {
    max-width: 56px;
    box-sizing: border-box;
  }
  .mult-invest-sum {
    display: block;
    margin-left: 5px;
    color: #909294;
    font-size: 13px;
  }
</style>