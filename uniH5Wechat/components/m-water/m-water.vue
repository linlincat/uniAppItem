<template>
	<view class="content">
		<view class="item">
			<view class="good" v-for="item in goodsLists.rightBox" :key="this">
				<image :src="item.imgUrl" mode="widthFix"></image>
				<text class="item-title">{{item.title}}</text>
				<text class="item-sub-title">{{item.subTitle}}</text>
			</view>
		</view>
		<view class="item">
			<view class="good" v-for="item in goodsLists.leftBox" :key="this">
				<image :src="item.imgUrl" mode="widthFix"></image>
				<text class="item-title">{{item.title}}</text>
				<text class="item-sub-title">{{item.subTitle}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive
	} from "vue";
	// const props = defineProps({
	// 	items: {
	// 		type: Array,
	// 		required: true
	// 	}
	// })
	const items = reactive([{
		imgUrl: '../../static/swiper/m2.jpg',
		title: '你好',
		subTitle: "我就是一只小猫咪啊"
	}, {
		imgUrl: '../../static/swiper/m2.jpg',
		title: '你好小猫咪',
		subTitle: "我就是一只小猫咪啊"
	}, {
		imgUrl: '../../static/swiper/m2.jpg',
		title: '你好小猫咪',
		subTitle: "我就是一只小猫咪啊"
	}, {
		imgUrl: '../../static/swiper/m1.jpg',
		title: '你好小猫咪',
		subTitle: "我就是一只小猫咪啊"
	}, {
		imgUrl: '../../static/swiper/m2.jpg',
		title: '你好小猫咪',
		subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
	}, {
		imgUrl: '../../static/swiper/m1.jpg',
		title: '你好小猫咪',
		subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
	}, {
		imgUrl: '../../static/swiper/m2.jpg',
		title: '你65好',
		subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
	}, {
		imgUrl: '../../static/swiper/m1.jpg',
		title: '你6556好',
		subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
	}, {
		imgUrl: '../../static/swiper/m2.jpg',
		title: '你6555好',
		subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
	}, {
		imgUrl: '../../static/swiper/m2.jpg',
		title: '你622好',
		subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
	}])
	const goodsLists = reactive({
		rightBox: [],
		leftBox: []
	})
	let dataL = items;
	let dataR = items;
	let len = items.length;

	let min = Math.floor(len / 2);
	let rightList = dataR.splice(min, len);
	let leftList = dataL.splice(0, min);
	goodsLists.rightBox = goodsLists.rightBox.concat(rightList);
	goodsLists.leftBox = goodsLists.leftBox.concat(leftList);
	console.log(goodsLists.leftBox)
	// let dataL = props.item;
	// console.log(dataL, "=============")
	// let dataR = props.item;
	// let len = props.item.length;
	// let min = Math.floor(len / 2);
	// let rightList = dataR.splice(min, len);
	// let leftList = dataL.splice(0, min);
	// goodsLists.rightBox = goodsLists.rightBox.concat(rightList);
	// goodsListL.leftBox = goodsListL.leftBox.concat(leftList);
</script>

<style lang="scss">
	.content {
		padding: 0 16rpx;
		display: flex;
		justify-content: space-between;
	}

	.item {
		width: 100%;
		padding: 0 10rpx;
		display: flex;
		flex-direction: column;
		//这行代码决定了商品的高度可以根据图片自适应，否则高度会保持一致，就不会实现瀑布流布局了
		align-itema: flex-start; 

		.good {
			margin-bottom: 16rpx;
			width: 100%;
			background-color: #faf7eb;
			
			.item-title {
				margin-left: 10rpx;;
				display: block;
				font-size: $uni-font-size-base;
				color: #333;
			}
			.item-sub-title {
				margin: 10rpx;
				color: #999;
				display: inline-block;
				line-height: 36rpx;
				font-size: $uni-font-size-sm;
			}

			image {
				width: 100%;
				height: 100%;
			}

			// 这个是商品的内部布局，图片和文字之类的布局
		}
	}
</style>
