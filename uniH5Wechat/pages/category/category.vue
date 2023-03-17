<template>
	<view class="m-content">
		<view class="status_bar bg-color"></view>
		<view class="search-box">
			<!-- 首页顶部搜索 -->
			<uni-search-bar radius="50" placeholder="今天等文章有新款哈" cancel-text="取消">
				<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
			</uni-search-bar>
		</view>
		<view class="body-box">
			<view class="m-title-box">
				<text>热门标签</text>
			</view>
			<view class="tag-list-wrap">
				<view class="tag-box bg-color01">金发</view>
				<view class="tag-box bg-color02">田园狸猫</view>
				<view class="tag-box bg-color03">大自然</view>
				<view class="tag-box bg-color02">高清</view>
				<view class="tag-box bg-color01">可爱风格</view>
				<view class="tag-box bg-color02">AI智能</view>
				<view class="tag-box bg-color01">奥力给</view>
				<view class="tag-box bg-color03">小小喵</view>
			</view>
			<view style="margin-top: 26rpx;">
				<uni-notice-bar show-icon scrollable
					text="有那么一只猫咪,有一点点的叛逆,还有一点点的嚣张,没事吃吃鱼,没事睡睡觉吃吃鱼...." />
			</view>
			<view class="m-title-box" style="margin: 30rpx 0;">
				<text>按需分类</text>
				<!-- 组件 -->
			</view>
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
	.bg-color {
		background-image: linear-gradient(to right, rgb(245, 191, 75), rgb(247, 215, 88));
	}

	/*  #ifdef  MP-WEIXIN  */
	:deep(.uni-searchbar) {
		width: 65%;
	}

	/*  #endif  */

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.search-box {
		width: 100%;
		background-image: linear-gradient(to right, rgb(245, 191, 75), rgb(247, 215, 88));
		padding-bottom: 80rpx;
	}

	.search-width {
		width: 70%;
	}

	:deep(.uni-searchbar__box) {
		justify-content: start;
	}

	.m-content {
		display: flex;
		flex-direction: column;
		position: relative;

		.body-box {
			margin-top: -70rpx;
			padding-top: 40rpx;
			padding-left: 26rpx;
			padding-right: 26rpx;
			border-top-left-radius: 60rpx;
			border-top-right-radius: 60rpx;
			background-color: white;

			.m-title-box {
				color: #666;
				font-size: $uni-font-size-lg;
				margin-bottom: 30rpx;
			}

			.tag-list-wrap {
				display: flex;
				flex-direction: row;
				flex-flow: wrap;

				.tag-box {
					border-radius: 10rpx;
					padding: 10rpx 18rpx;
					margin-right: 10rpx;
					margin-bottom: 10rpx;
					font-size: $uni-font-size-base;

					&.bg-color01 {
						background-color: #ddf1f8;
						color: #88bbd1;
					}

					&.bg-color02 {
						background-color: #e0f9dd;
						color: #92c791;
					}

					&.bg-color03 {
						background-color: #f5f1d5;
						color: #cda475;
					}
				}
			}
		}
	}
</style>
