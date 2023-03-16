<template>
	<view class="m-content">
		<view class="status_bar bg-color"></view>
		<view class="search-box">
			<!-- 首页顶部搜索 -->
			<uni-search-bar placeholder="今天等文章有新款哈" cancel-text="取消">
				<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
			</uni-search-bar>
		</view>
		<view class="body-box">
			<!-- 轮播图-AD 复杂轮播可以用简单轮播的属性 -->
			<uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="info" :current="current" :mode="mode"
				:dots-styles="dotsStyle" field="content">
				<swiper autoplay="true" class="swiper-box" @change="change" :current="swiperDotIndex">
					<swiper-item v-for="(item, index) in info" :key="index">
						<view class="swiper-item" :class="'swiper-item' + index">
							<image class="swiper-banner" :src="item.imgUrl" mode="aspectFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
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
	const dotsStyle = reactive({
		bottom: 26,
		backgroundColor: 'rgba(218, 207, 194, .3)',
		border: '1px rgba(218, 207, 194, .3) solid',
		color: '#fff',
		selectedBackgroundColor: 'rgba(254, 252, 251, .9)',
		selectedBorder: '1px rgba(254, 252, 251, .9) solid'
	});
	const info = reactive([{
		content: '内容 A',
		imgUrl: "../../static/swiper/m1.jpg"
	}, {
		content: '内容 B',
		imgUrl: "../../static/swiper/m2.jpg"
	}, {
		content: '内容 C',
		imgUrl: "../../static/swiper/m3.jpg"
	}], );
	const current = ref(0);
	const swiperDotIndex = ref(0);
	const mode = ref('round');

	function clickItem(e) {
		swiperDotIndex.value = e
	}

	function change(e) {
		current.value = e.detail.current;
		console.log(current.value, "lll")
	}

	onLoad(() => {
		console.log("load")
	})
	onReady(() => {
		// #ifdef  MP-WEIXIN
		// 需条件编译的代码
		// #endif
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

		.body-box {
			margin-top: -70rpx;
			padding-top: 40rpx;
			border-top-left-radius: 80rpx;
			border-top-right-radius: 80rpx;
			background-color: white;
		}

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
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.swiper-box {
		height: 240rpx;
		padding: 26rpx;
	}

	.swiper-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 240rpx;
		color: #fff;

		.swiper-banner {
			width: 100%;
		}
	}

	.swiper-item0 {
		background-color: #cee1fd;
	}

	.swiper-item1 {
		background-color: #b2cef7;
	}

	.swiper-item2 {
		background-color: #cee1fd;
	}

	.image {
		width: 750rpx;
		border-radius: 20rpx;
	}
</style>
