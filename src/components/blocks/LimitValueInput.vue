<template>
  <div class="limit-value">
		<label class="limit-value__label">
			<input
				class="limit-value__checkbox visually-hidden"
				type="checkbox"
				@change="toggleState"
			>
			<span class="limit-value__checkbox-custom"></span>
			<span class="limit-value__title">{{ title }}</span>
		</label>
		<label class="input-label" :data-sign="setSign">
			<input
				class="input input--button limit-value__input"
				:class="{'input--disabled': isDisabled, 'input--error': !isValid}"
				type="text"
				:disabled="isDisabled"
				v-model="value"
				@input="updateLimitValue(+$event.target.value)"
			/>
			<app-tooltip
				:message="errorMessage"
				:isActive="!isValid"
			/>
			<div class="limit-value__buttons">
				<button
					class="limit-value__button limit-value__button--up"
					:class="{'limit-value__button--disabled': isDisabled}"
					:disabled="isDisabled"
					@click.prevent="increaseValue"
				></button>
				<button
					class="limit-value__button limit-value__button--down"
					:class="{ 'limit-value__button--disabled': isDisabled }"
					:disabled="isDisabled"
					@click.prevent="decreaseValue"
				></button>
			</div>
  	</label>
	</div>
</template>

<script>
import AppTooltip from '@/components/blocks/AppTooltip.vue';

export default {
	name: "LimitValueInput",
	components: {
		AppTooltip
	},
  props: {
		title: {
			type: String,
			required: true
		},
    limitType: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		initialValue: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			isDisabled: true,
			value: 0,
			step: 10,
			errorMessage: '',
			isValid: true
		}
	},
	mounted() {
		this.setInitialValue();
	},
	methods: {
		setInitialValue() {
			if (this.limitType === 'dollar') {
				this.value = this.initialValue * 0.3;
			}	else {
				this.value = 30;
			}
		},
		toggleState(){
			this.isDisabled = !this.isDisabled;
			this.$emit('active-state', !this.isDisabled, this.type);
		},
		increaseValue() {
			this.value += this.step;
			this.emitChange();
		},
		decreaseValue() {
			this.value -= this.step;
			this.emitChange();
			if (this.value < 0) {
				this.value = 0;
			}
		},
    updateLimitValue(value) {
      if (value < 0) {
        value = 0;
      }
      this.value = +value.toString().replace(/[A-Z a-z]/g, '');
		},
		emitChange() {
			this.$emit('change-value', this.limitType === 'dollar' ? this.value : +(this.initialValue * this.value / 100).toFixed(0), this.type, this.isValid);
		}
	},
	computed: {
		setSign() {
			return (this.limitType === 'dollar') ? '$' : '%';
		},
	},
	watch: {
		limitType() {
			if (this.limitType === 'dollar') {
				this.value = this.initialValue * 0.3;
				this.step = 10;
			}	else {
				this.value = 30;
				this.step = 1;
			}
		},
		initialValue() {
			if (this.limitType === 'dollar') {
				//integer validation
				if ((this.initialValue * 0.3) === parseInt((this.initialValue * 0.3), 10)) {
					this.value = this.initialValue * 0.3;
				} else {
					//fixed zero if number is not integer
					this.value = (this.initialValue * 0.3).toFixed(2);
				}
			}
		},
		value() {
			switch (this.limitType) {
				case 'percent':

					if (this.value < 10) {
						this.isValid = false;
						this.errorMessage = 'Не может быть меньше 10%'
					} else {
						this.isValid = true;
					}

					if (this.type === 'loss' && this.value > 100) {
						this.isValid = false;
						this.errorMessage = 'Не может быть больше 100%';
					}

					break;
				case 'dollar':

					if (this.value < (this.initialValue / 10)) {
						this.isValid = false;
						this.errorMessage = 'Не может быть меньше $ ' + this.initialValue / 10;
					} else {
						this.isValid = true;
					}

					if (this.type === 'loss' && (this.value > this.initialValue)) {
						this.isValid = false;
						this.errorMessage = 'Не может быть больше $ ' + this.initialValue;
					}
					break;
			}
		}
	}
};
</script>

<style lang="scss">
	.limit-value {
		display: flex;
		justify-content: space-between;
		align-items: center;
    width: 100%;
		&__label {
			position: relative;
			display: flex;
			align-items: center;
			margin-right: 10px;
		}
		&__checkbox:focus ~ &__checkbox-custom {
			border-color: #7e98e5;
		}
		&__checkbox:checked ~ &__checkbox-custom {
			&::before {
				opacity: 1;
			}
		}
		&__checkbox-custom {
			position: relative;
			display: block;
			width: 16px;
			height: 16px;
			margin-right: 5px;
			background-color: #ffffff;
			background-image: linear-gradient(to top, #ffffff 0%, #f0f2f4 100%);
			border: 1px solid #c0c2c4;
			border-radius: 3px;
			cursor: pointer;
			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 11px;
				height: 8px;
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='8' viewBox='0 0 11 8'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23242526' d='M.135.085l-1.414 1.414zM4.5 4.449L8.863.085 4.5-4.28l5.779 5.778-5.779 5.778L.842 3.62l1.414-1.414z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
				transform: translate(-50%, -50%);
				opacity: 0;
				transition: opacity 0.1s ease-in;
			}
		}
		&__title {
			color: #242526;
			font-size: 13px;
		}
		&__input {
			max-width: 128px;
			padding-right: 20px;
			box-sizing: border-box;
		}
		&__buttons {
			position: absolute;
			top: 0;
			right: 0;
			height: 100%;
		}
		&__button {
			position: relative;
			display: block;
			width: 15px;
			height: 50%;
			padding: 0;
			background-color: #242526;
			background-image: linear-gradient(to top, #f0f2f4 0%, #ffffff 100%);
			border: 1px solid #c0c2c4;
			border-radius: 3px;
			cursor: pointer;
			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				border-style: solid;
				border-width: 3px;
			}
		}
		&__button--disabled {
			opacity: 0.5;
		}
		&__button--up {
			border-bottom-width: 0.5px;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			&::before {
				border-color: transparent transparent #3a3b3c;
				transform: translate(-50%, -4px);
			}
		}
		&__button--down {
			border-top-width: 0.5px;
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			&::before {
				border-color: #3a3b3c transparent transparent;
				transform: translate(-50%, -2px);
			}
		}
	}
</style>
