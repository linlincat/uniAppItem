<template>
	<view>
		<text class="tag-title">{{title}}</text>
		<text class="tag-descript">{{descript}}</text>
	</view>
</template>

<script setup>
	const props = defineProps({
		tagTitle: String,
		tagDescript: String
	})
	const title = props.tagTitle;
	const descript = props.tagDescript;
</script>

<style lang="scss">
	.tag-title {
		font-size: $uni-font-size-base;
		color: #333;
		display: inline-block;
		font-weight: bold;
		margin-bottom: 4rpx;
	}

	.tag-descript {
		display: block;
		color: #999;
		font-size: $uni-font-size-sm;
	}
</style>
