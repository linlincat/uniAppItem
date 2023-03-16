<template>
	<view class="m-content">
		<view class="status_bar"
			style="background-image: linear-gradient(to right, rgb(245, 191, 75), rgb(247, 215, 88));"></view>

		<!-- #ifdef MP-WEIXIN -->
		<view style="background-image: linear-gradient(to right, rgb(245, 191, 75), rgb(247, 215, 88));">
			<uni-search-bar placeholder="今天星期四" cancel-text="取消">
				<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
			</uni-search-bar>
		</view>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<view class="search-box">
			<!-- 首页顶部搜索 -->
			<uni-search-bar placeholder="今天等文章有新款哈" cancel-text="取消">
				<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
			</uni-search-bar>
		</view>
		<!-- #endif -->
	</view>
</template>

<script setup>
	// 引入 
	import {
		onReady,
		onShow,
		onLoad
	} from '@dcloudio/uni-app';
	onLoad(() => {
		console.log("load")
	})
	onReady(() => {
		// #ifdef  MP-WEIXIN
		// 需条件编译的代码
		// #endif
		// let nihao = uni.getMenuButtonBoundingClientRect()
		// // let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		// console.log("nihao")
	})
</script>

<style lang="scss">
	page {
		// 16位的颜色不出来
	}

	.m-content {
		display: flex;
		flex-direction: column;
		position: relative;
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
		}

		.search-width {
			width: 70%;
		}

		:deep(.uni-searchbar__box) {
			justify-content: start;
		}
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
</style>
