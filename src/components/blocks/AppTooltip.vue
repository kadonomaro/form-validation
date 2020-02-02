<template>
  <div class="app-tooltip" v-if="isActive">
		<span class="app-tooltip__message">{{ message }}</span>
  </div>
</template>

<script>
export default {
	name: 'AppTooltip',
	props: {
		message: {
			type: String,
			required: true
		},
		isActive: {
			type: Boolean,
			required: true
		}
	},
}
</script>

<style lang="scss">
	.app-tooltip {
		position: absolute;
		z-index: 999;
		top: -5px;
		width: 128px;
		color: #f0f2f4;
		font-size: 11px;
		line-height: 16px;
		padding: 7px 8px 8px;
		background-color: #e64545;
		border-radius: 3px;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
		box-sizing: border-box;
		transform: translateY(-100%);
		&::before {
			content: '';
			position: absolute;
			left: 10px;
			bottom: -10px;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 6px;
			border-color: #e64545 transparent transparent;
		}
	}

</style>
