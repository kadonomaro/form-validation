<template>
	<div class="app-form">
		<header class="app-form__header">
			<span class="app-form__title">Инвестировать сейчас</span>
		</header>
		<div class="app-form__body">
			<form action="">
				<div class="app-form__field">
					<span class="app-form__caption">Сумма инвестиции</span>
					<sum-invest-input />
				</div>
				<div class="app-form__field">
					<span class="app-form__caption">Мультипликатор</span>
					<mult-invest-input :factSum="10000" />
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import SumInvestInput from '@/components/blocks/SumInvestInput.vue';
import MultInvestInput from '@/components/blocks/MultInvestInput.vue';

export default {
	name: 'AppForm',
	components: {
		SumInvestInput,
		MultInvestInput
	},
	props: {

	},
	data() {
		return {

		}
	}
}
</script>

<style lang="scss">
	.app-form {
		width: 320px;
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
		&__caption {
			display: block;
			margin-right: 5px;
			font-size: 13px;
			font-weight: bold;
		}
	}
</style>