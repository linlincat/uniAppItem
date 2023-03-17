<template>
	<view class="m-img-ad">
		<view class="ad-box" v-for="item in adItems" :key="item">
			<image class="image" :src="item.imgUrl" mode="aspectFill"></image>
			<text>{{item.text}}</text>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		adItems: Array
	})
	const adItems = props.adItems;
	console.log(adItems, "llll")
</script>

<style lang="scss" scoped>
	.m-img-ad {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-flow: wrap;

		.ad-box {
			margin-bottom: 20rpx;
			position: relative;
			width: 48%;
			height: 160rpx;

			image {
				border-radius: 14rpx;
				position: absolute;
				width: 100%;
				height: 160rpx;
			}

			text {
				position: absolute;
				left: 16rpx;
				top: 100rpx;
				color: white;
				font-size: $uni-font-size-base;
			}
		}
	}
</style>
