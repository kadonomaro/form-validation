<template>
  <label class="input-label" data-sign="x">
    <input 
      class="input mult-invest-input"
      :class="{ 'input--error': validate }"
      type="text" 
      v-model="multiplyValue"
      @input="updateMultiplyValue(+$event.target.value)"
      @focus="isRangeVisible = true" 
    />
    <app-tooltip 
      :message="'Неверное значение мультипликатора'"
      :isActive="validate"
    />
    <span 
      class="mult-invest-sum" 
      :class="{'mult-invest-sum--small': isLong}"
      >= $ {{ sum * multiplyValue || 0 }}
    </span>
    <div v-if="isRangeVisible" v-escape="close" class="mult-invest-range">
      <input
        class="mult-invest-range__slider"
        type="range"
        min="1"
        max="40"
        step="1"
        @input="updateMultiplyValue(+$event.target.value)"
        v-model="multiplyValue"
      />
      <div class="mult-invest-range__tick-list">
        <span class="mult-invest-range__tick" style="left: 0;">1</span>
        <span class="mult-invest-range__tick" style="left: 12.5%;">5</span>
        <span class="mult-invest-range__tick" style="left: 50%; transform: translateX(-50%);">20</span>
        <span class="mult-invest-range__tick" style="left: 95%">40</span>
      </div>
    </div>
  </label>
  
</template>

<script>
import AppTooltip from '@/components/blocks/AppTooltip.vue';

export default {
  name: "MultInvestInput",
  components: {
    AppTooltip
  },
  props: {
    sum: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isRangeVisible: false,
      multiplyValue: 40,
      isValid: true
    };
  },
  methods: {
    close() {
      this.isRangeVisible = false;
    },
    updateMultiplyValue(value) {
      if (value < 0) {
        value = 0;
      } else if (value > 99) {
        value = 99;
      }
      this.multiplyValue = +value.toString().replace(/[A-Z a-z]/g, '');
    }
  },
  computed: {
    isLong() {
      return (this.sum * this.multiplyValue).toString().length > 6;
    },
    validate() {
      return this.multiplyValue < 1 || this.multiplyValue > 40;
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

.mult-invest-sum--small {
  font-size: 11px;
}

.mult-invest-range {
  position: absolute;
  z-index: 99;
  bottom: -63px;
  left: -150px;
  width: 280px;
  padding: 10px 25px;
  color: #909294;
  font-size: 11px;
  background-color: #3a3b3c;
  box-sizing: border-box;
  &::before {
    content: '';
    position: absolute;
    top: -12px;
    left: 170px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px;
    border-color: transparent transparent #3a3b3c;
  }
  &__slider {
    width: 100%;
  }
  &__tick-list {
    position: relative;
    width: 100%;
    height: 12px;
  }
  &__tick {
    position: absolute;
    top: 0;
  }
}


$range-height: 20px;
$range-width: auto;
$range-track-height: 4px;
$range-thumb-width: 18px;
$range-thumb-height: 18px;
$range-thumb-radius: 15px;

$range-track-bg: #909294;

$range-thumb-border: #7e98e5;
$range-thumb-bg: #ffffff;

input[type="range"] {
  height: $range-height;
  -webkit-appearance: none;
  background: transparent;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: $range-width;
  height: $range-track-height;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: $range-track-bg;
  border-radius: 3px;
  border: 0px solid #000000;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 6px solid $range-thumb-border;
  height: $range-thumb-height;
  width: $range-thumb-width;
  border-radius: $range-thumb-radius;
  background: $range-thumb-bg;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: $range-track-bg;
}
input[type="range"]::-moz-range-track {
  // width: $range-width;
  height: $range-track-height;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: $range-track-bg;
  border-radius: 3px;
  border: 0px solid #000000;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 6px solid $range-thumb-border;
  height: 10px;
  width: 10px;
  border-radius: $range-thumb-radius;
  background: $range-thumb-bg;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: $range-width;
  height: $range-track-height;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #2497e3;
  border: 0px solid #000000;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000;
}
input[type="range"]::-ms-fill-upper {
  background: #2497e3;
  border: 0px solid #000000;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000;
}
input[type="range"]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 6px solid #2497e3;
  height: $range-thumb-height;
  width: $range-thumb-width;
  border-radius: $range-thumb-radius;
  background: #a1d0ff;
  cursor: pointer;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #2497e3;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #2497e3;
}
</style>