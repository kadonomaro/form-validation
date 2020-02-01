<template>
  <div class="input-label limit-types">
    <label class="limit-types__label">
      <input 
				class="limit-types__radio visually-hidden" 
				type="radio" 
				value="percent" 
				v-model="currentLimit"
				@change="updateLimitsType"
			/>
			<span class="limit-types__radio-custom"></span>
			<span class="limit-types__title">%</span>
    </label>
    <label class="limit-types__label">
      <input 
				class="limit-types__radio visually-hidden" 
				type="radio" 
				value="dollar" 
				v-model="currentLimit"
				@change="updateLimitsType"
			/>
			<span class="limit-types__radio-custom"></span>
			<span class="limit-types__title">$</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "LimitTypesInput",
  data() {
    return {
      currentLimit: "dollar"
    };
  },
  methods: {
		updateLimitsType() {
			this.$emit('limitsType', this.currentLimit);
		}
	}
};
</script>

<style lang="scss">
	.limit-types {

		&__label {
			position: relative;
			display: flex;
			align-items: center;
			margin-right: 10px;
		}
		&__radio:focus ~ &__radio-custom {
			border-color: #7e98e5;
		}
		&__radio:checked ~ &__radio-custom {
			&::before {
				opacity: 1;
			}
		}
		&__radio-custom {
			position: relative;
			display: block;
			width: 16px;
			height: 16px;
			margin-right: 5px;
			background-color: #181a1a;
			background-image: linear-gradient(to top, #f0f2f4 0%, #ffffff 100%);
			border: 1px solid #c0c2c4;
			border-radius: 50%;
			cursor: pointer;
			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 6px;
				height: 6px;
				background-color: #242526;
				border-radius: 50%;
				transform: translate(-50%, -50%);
				opacity: 0;
				transition: opacity 0.1s ease-in;
			}
		}
		&__title {
			color: #242526;
			font-size: 13px;
		}
	}

</style>