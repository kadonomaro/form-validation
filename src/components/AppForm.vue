<template>
	<div class="app-form">
		<header class="app-form__header">
			<span class="app-form__title">Инвестировать сейчас</span>
		</header>
		<div class="app-form__body">
			<form action="">
				<div class="app-form__field">
					<label class="input-label" data-sign="$">
						<input type="text" name="" id="" class="input">
					</label>
					
				</div>
				<div class="app-form__field">

				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		
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
			padding: 20px 10px;
		}
	}
</style>