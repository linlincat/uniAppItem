<template>
	<view class="m-content">
		<view class="status_bar bg-color"></view>
		<view class="m-header">
			<view class="header-wrap">
				<image class="header-img" src="../../static/swiper/m1.jpg" mode="aspectFill"></image>
			</view>
			<view class="header-text-box">
				<text class="user">请先登录</text>
				<text class="user-descript">你是一只可爱的猫咪</text>
			</view>
		</view>
		<view class="body-box">
			sss
		</view>
	</view>
</template>

<script setup>
	// 引入 
	import {
		onReady,
		onShow,
		onLoad
	} from '@dcloudio/uni-app';
	import {
		reactive,
		ref
	} from "vue";


	onLoad(() => {
		console.log("load")
	})
	onReady(() => {
		// #ifdef  MP-WEIXIN
		// 需条件编译的代码
		// #endif
	})
</script>

<style lang="scss" scoped>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.m-content {
		display: flex;
		flex-direction: column;
		position: relative;

		.m-header {
			display: flex;
			height: 240rpx;
			background-color: #fadf4b;
			.header-wrap {
				margin-top: 40rpx;
				margin-left: 40rpx;
			}
			
			.header-text-box {
				padding-top: 50rpx;
				padding-left: 26rpx;
				.user {
					font-size: $uni-font-size-lg;
					color: white;
				}
				.user-descript {
					display: block;
					font-size: $uni-font-size-sm;
					color: #ffffe7;
				}
			}

			.header-img {
				border: 4rpx solid #e7d257;
				width: 102rpx !important;
				height: 102rpx;
				border-radius: 100rpx;
			}

		}

		.body-box {
			margin-top: -70rpx;
			padding-top: 40rpx;
			border-top-left-radius: 60rpx;
			border-top-right-radius: 60rpx;
			background-color: white;
		}

		.bg-color {
			background-color: #fadf4b;
		}
	}
</style>
