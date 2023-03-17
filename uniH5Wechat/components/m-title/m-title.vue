<template>
	<view class="m-title-box">
		<text class="m-title">{{title}}</text>
		<text class="m-more">{{more}} ></text>
	</view>
</template>

<script setup>
	const props = defineProps({
		mTitle: String,
		mMore: String
	})
	const title = props.mTitle;
	const more = props.mMore || '更多';
</script>

<style lang="scss">
.m-title-box {
	padding: 30rpx 26rpx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	.m-title {
		font-weight: bold;
		font-size: $uni-font-size-base;
	}
	.m-more {
		font-size: $uni-font-size-sm;
		color: #999;
	}
}
</style>