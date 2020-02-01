<template>
  <label class="input-label" data-sign="$">
    <input 
      class="input sum-invest-input"
      :class="{ 'input--error': !isValid }"
      type="text" 
      @input="updateInvestValue(+$event.target.value)"
      v-model="value"
    />
    <app-tooltip 
      :message="'Минимальная сумма инвестиции $ 100'"
      :isActive="!isValid"
    />
  </label>
</template>

<script>
import AppTooltip from '@/components/blocks/AppTooltip.vue';

export default {
  name: 'SumInvestInput',
  components: {
    AppTooltip
  },
  data() {
    return {
      value: 5000,
      isValid: true
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
    },
  },
  watch: {
    value() {
      if (this.value < 100) {
        this.isValid = false;
      } else {
        this.isValid = true;
      }
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