<template>
	<div class="app-form">
		<header class="app-form__header">
			<span class="app-form__title">Инвестировать сейчас</span>
		</header>
		<div class="app-form__body">
			<form action="">
				<label class="app-form__field">
					<span class="app-form__caption">Сумма инвестиции</span>
					<sum-invest-input @changeValue="updateInvestSum" />
				</label>
				<label class="app-form__field">
					<span class="app-form__caption">Мультипликатор</span>
					<mult-invest-input :sum="investSum" />
				</label>

				<span 
					class="app-form__spoiler-toggle"
					:class="{'app-form__spoiler-toggle--active': isActiveSpoiler}"
					@click="spoilerToggle"
				>Ограничить прибыль и убыток</span>
				<transition name="slide-down">
					<div class="app-form__spoiler" v-if="isActiveSpoiler">
						<label class="app-form__field">
							<span class="app-form__caption">Ограничения в</span>
							<limit-types-input @limitsType="updateLimitType" />
						</label>

						<div class="app-form__field">
							<limit-value-input 
								:title="'Прибыль'"
								:limitType="currentLimitType"
							/>
						</div>

						<div class="app-form__field">
							<limit-value-input 
								:title="'Убыток'"
								:limitType="currentLimitType"
							/>
						</div>
					</div>
				</transition>

			</form>
		</div>
	</div>
</template>

<script>
import SumInvestInput from '@/components/blocks/SumInvestInput.vue';
import MultInvestInput from '@/components/blocks/MultInvestInput.vue';
import LimitTypesInput from '@/components/blocks/LimitTypesInput.vue';
import LimitValueInput from '@/components/blocks/LimitValueInput.vue';

export default {
	name: 'AppForm',
	components: {
		SumInvestInput,
		MultInvestInput,
		LimitTypesInput,
		LimitValueInput
	},
	props: {

	},
	data() {
		return {
			investSum: 5000,
			currentLimitType: 'dollar',
			isActiveSpoiler: false,
		}
	},
	methods: {
		updateInvestSum() {
			this.investSum = +event.target.value;
			if (this.investSum > 200000) {
				this.investSum = 200000;
			}
		},
		updateLimitType() {
			this.currentLimitType = event.target.value;
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
		min-height: 368px;
		margin: 0 auto;
		background-color: #ffffff;
		box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
		&__header {
			padding: 15px 25px;
			color: #3a3b3c;
			font-family: 'Roboto', sans-serif;
			font-size: 16px;
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
		&__spoiler-toggle {
			position: relative;
			display: block;
			margin-top: 25px;
			color: #909294;
			font-size: 13px;
			cursor: pointer;
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
		&__spoiler {
			padding-top: 20px;
		}
		&__caption {
			display: block;
			margin-right: 5px;
			font-size: 13px;
			font-weight: bold;
		}

		.slide-down-enter-active, .slide-down-leave-active {
			transition: opacity .5s;
		}
		.slide-down-enter, .slide-down-leave-to {
			opacity: 0;
		}

	}
</style>