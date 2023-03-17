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
			<!--  我的想法  -->
			<uni-card title="我的想法">
				<uni-grid :column="4" :highlight="true" :showBorder="false">
					<uni-grid-item v-for="(item, index) in tagList" :index="index" :key="index">
						<view class="grid-item-box" style="background-color: #fff;">
							<uni-icons :type="item.icon" :size="30" color="#f8e251" />
							<text class="text">{{item.text}}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</uni-card>

			<!-- 其它 -->
			<uni-card title="其它">
				<!-- border-full 没有效果 -->
				<uni-list border-full>
					<uni-list-item :show-extra-icon="true" showArrow :extra-icon="extraIcon" title="联系喵喵" />
					<uni-list-item :show-extra-icon="true" showArrow :extra-icon="extraIcon1" title="提供建议" />
					<uni-list-item :show-extra-icon="true" showArrow :extra-icon="extraIcon2" title="我的作品" />
					<uni-list-item :show-extra-icon="true" showArrow :extra-icon="extraIcon3" title="关于喵咪" />
				</uni-list>
			</uni-card>
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
	const extraIcon = reactive({
		color: '#f8e24e',
		size: '22',
		type: 'phone'
	})
	const extraIcon1 = reactive({
		color: '#f8e24e',
		size: '22',
		type: 'compose'
	})
	const extraIcon2 = reactive({
		color: '#f8e24e',
		size: '22',
		type: 'images'
	})
	const extraIcon3 = reactive({
		color: '#f8e24e',
		size: '22',
		type: 'shop'
	})
	const tagList = reactive([{
		text: "我的猫咪",
		icon: 'color'
	}, {
		text: "我的收藏",
		icon: 'heart'
	}, {
		text: "我的文章",
		icon: 'map'
	}, {
		text: "我的作品",
		icon: 'images'
	}])

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

	:deep(.uni-list--border-bottom),
	:deep(.uni-list--border-top) {
		background-color: transparent;
	}

	.grid-item-box {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15rpx 0;
	}

	.text {
		color: #999;
		font-size: 14px;
		margin-top: 5px;
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
