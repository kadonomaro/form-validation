<template>
	<div class="app-form">
		<header class="app-form__header">
			<span class="app-form__title">Инвестировать сейчас</span>
		</header>
		<div class="app-form__body">
			<form action="">
				<label class="app-form__field">
					<span class="app-form__caption">Сумма инвестиции</span>
					<sum-invest-input @change-value="updateInvestSum" />
				</label>
				<label class="app-form__field">
					<span class="app-form__caption">Мультипликатор</span>
					<mult-invest-input :sum="formData.sumInv" @change-value="updateInvestMult" />
				</label>

				<span
					class="app-form__spoiler-toggle"
					:class="{'app-form__spoiler-toggle--active': isActiveSpoiler}"
					@click="spoilerToggle"
				>Ограничить прибыль и убыток</span>
				<transition name="slide">
					<div class="app-form__spoiler" v-if="isActiveSpoiler">

						<label class="app-form__field app-form__field--indent">
							<span class="app-form__caption">Ограничения в</span>
							<limit-types-input
								@limits-type="updateLimitType"
								:limitType="currentLimitType"
							/>
						</label>

						<div class="app-form__field">
							<limit-value-input
								:title="'Прибыль'"
								:limitType="currentLimitType"
								:type="'profit'"
								:initialValue="formData.sumInv"
								@change-value="updateLimitValue"
							/>
						</div>

						<div class="app-form__field app-form__field--indent">
							<limit-value-input
								:title="'Убыток'"
								:limitType="currentLimitType"
								:type="'loss'"
								:initialValue="formData.sumInv"
								@change-value="updateLimitValue"
							/>
						</div>

					</div>
				</transition>

				<div class="app-form__field app-form__field--inner-indent">
					<send-button
						:buttonType="'reduction'"
						:title="'В снижение'"
						@send-request="sendRequest"
					/>
					<send-button
						:buttonType="'growth'"
						:title="'В рост'"
						@send-request="sendRequest "
					/>
				</div>

			</form>
		</div>
	</div>
</template>

<script>
import SumInvestInput from '@/components/blocks/SumInvestInput.vue';
import MultInvestInput from '@/components/blocks/MultInvestInput.vue';
import LimitTypesInput from '@/components/blocks/LimitTypesInput.vue';
import LimitValueInput from '@/components/blocks/LimitValueInput.vue';
import SendButton from '@/components/blocks/SendButton.vue';


export default {
	name: 'AppForm',
	components: {
		SumInvestInput,
		MultInvestInput,
		LimitTypesInput,
		LimitValueInput,
		SendButton
	},
	props: {

	},
	data() {
		return {
			currentLimitType: 'dollar',
			isActiveSpoiler: false,
			isFormValid: null,

			formData: {
				sumInv: 5000,
				mult: 40,
				takeProfit: 0,
				stopLoss: 0,
				direction: ''
			}
		}
	},
	methods: {
		updateInvestSum(value, isValid) {
			this.formData.sumInv = value;
			if (this.formData.sumInv > 200000) {
				this.formData.sumInv = 200000;
			}
		},
		updateInvestMult(value, isValid) {
			this.formData.mult = value;
		},
		updateLimitType(value) {
			this.currentLimitType = value;
		},
		updateLimitValue(value, type, isValid) {
			if (type === 'profit') {
				this.formData.takeProfit = value;
				console.log(isValid);
			} else {
				this.formData.stopLoss = value;
				console.log(isValid);
			}
		},
		sendRequest(direction) {
			this.formData.direction = direction;
			if (this.isFormValid) {
				console.log(this.formData);
			}
		},
		spoilerToggle(){
			this.isActiveSpoiler = !this.isActiveSpoiler;
		}
 	}
}
</script>

<style lang="scss">
	.app-form {
		width: 320px;
		min-height: 370px;
		margin: 0 auto;
		background-color: #ffffff;
		box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
		&__header {
			padding: 15px 25px;
			color: #3a3b3c;
			font-family: 'Roboto', sans-serif;
			font-size: 16px;
			font-weight: 500;
			border-bottom: 1px solid #e0e2e4;
		}
		&__body {
			padding: 20px 23px 20px 30px;
		}
		&__field {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 8px;
		}
		&__field--indent {
			margin-bottom: 12px;
		}
		&__field--inner-indent {
			margin-bottom: 0;
			padding-top: 10px;
		}
		&__spoiler-toggle {
			position: relative;
			display: block;
			margin: 25px 0 18px;
			color: #909294;
			font-size: 13px;
			cursor: pointer;
			user-select: none;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: -15px;
				width: 5px;
				height: 5px;
				border: solid #909294;
				border-width: 2px 2px 0 0;
				transform: translateY(50%) rotate(45deg);
				transition: transform 0.2s ease-in;
			}
		}
		&__spoiler-toggle--active {
			&::before {
				transform: translateY(40%) rotate(135deg);
			}
		}
		&__caption {
			display: block;
			margin-right: 5px;
			font-size: 13px;
			font-weight: bold;
		}


		.slide-enter-active {
			transition: all 0.3s ease-in;
		}
		.slide-leave-active {
			transition: all 0.3s ease-in;
		}
		.slide-enter-to, .slide-leave {
			max-height: 100px;
			overflow: hidden;
		}
		.slide-enter, .slide-leave-to {
			overflow: hidden;
			max-height: 0;
		}
	}
</style>
