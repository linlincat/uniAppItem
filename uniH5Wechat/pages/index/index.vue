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
			<!-- 微信小程序渲染没有外部包围 - 外层添加一个view标签 -->
			<view class="m-uni-row">
				<uni-row :gutter="20">
					<uni-col :span="12">
						<view class="m-tag-two one-color">
							<m-tag tag-title="精美猫咪" tag-descript="长毛猫、短毛猫、无毛猫"></m-tag>
						</view>
					</uni-col>
					<uni-col :span="12">
						<view class="m-tag-two two-color">
							<m-tag tag-title="猫咪套图" tag-descript="热门+精选+新图"></m-tag>
						</view>
					</uni-col>
				</uni-row>
			</view>
			<view class="m-uni-row" style="margin-top: 20rpx;">
				<uni-row :gutter="20">
					<uni-col :span="8">
						<view class="m-tag-two three-color">
							<!-- wxcomponents测试小程序可用,H5没有效果 -->
							<!-- 只要组件安装在项目根目录或uni_modules的components目录下，
							并符合components/组件名称/组件名称.vue或uni_modules/插件ID/
							components/组件名称/组件名称.vue目录结构。
							就可以不用引用、注册，直接在页面中使用 -->
							<m-tag tag-title="发现" tag-descript="发现有趣的文章"></m-tag>
						</view>
					</uni-col>
					<uni-col :span="8">
						<view class="m-tag-two three-color">
							<m-tag tag-title="任务" tag-descript="给自己定的小目标"></m-tag>
						</view>
					</uni-col>
					<uni-col :span="8">
						<view class="m-tag-two three-color">
							<m-tag tag-title="省钱" tag-descript="东南西北风"></m-tag>
						</view>
					</uni-col>
				</uni-row>
			</view>
			<m-title m-title="热门推荐"></m-title>
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

			.m-uni-row {
				padding: 0 26rpx;

				.m-tag-two {
					box-sizing: border-box;
					padding: 12rpx;
					height: 100rpx;
				}

				.one-color {
					background-color: #ebeefe;
				}

				.two-color {
					background-color: #fcebec;
				}

				.three-color {
					background-color: #fbf8ee;
				}
			}
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

	.image {
		width: 750rpx;
		border-radius: 20rpx;
	}
</style>
