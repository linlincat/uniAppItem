<template>
	<view class="content">
		<view class="item">
			<view @click="handleTodetail(index, item.imgUrl, item.title)" class="good" v-for="(item, index) in goodsLists.rightBox"
				:key="this">
				<image :src="item.imgUrl" mode="widthFix"></image>
				<text class="item-title">{{item.title}}</text>
				<text class="item-sub-title">{{item.subTitle}}</text>
			</view>
		</view>
		<view class="item">
			<view @click="handleTodetail(index, item.imgUrl, item.title)" class="good" v-for="(item, index) in goodsLists.leftBox"
				:key="this">
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
	function handleTodetail(index, url, title) {
		uni.navigateTo({
			url: '/pages/mdetail/mdetail?item=' + index + '&imgUrl=' + url + '&title=' + title
		})
	}
	const items = reactive([{
		imgUrl: 'https://media.9game.cn/gamebase/ieu-eagle-docking-service/images/20220705/4/20/a247fc5f29bdf7f354c7e7c2be2e0ded.jpeg',
		title: '你好',
		subTitle: "我就是一只小猫咪啊"
	}, {
		imgUrl: 'https://apic.tvzhe.com/images/e0/4b/5f158c6369e4f501cffee3e869f4313c875a4be0.jpg',
		title: '你好小猫咪',
		subTitle: "我就是一只小猫咪啊"
	}, {
		imgUrl: 'https://media.9game.cn/gamebase/ieu-eagle-docking-service/images/20220705/4/20/a247fc5f29bdf7f354c7e7c2be2e0ded.jpeg',
		title: '你好小猫咪',
		subTitle: "我就是一只小猫咪啊"
	}, {
		imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.c9302b9b53785ffd4b41030a90a8c877?rik=e7YDtUmAsWoObw&riu=http%3a%2f%2fimg3.downza.cn%2fxueyuan%2f202102%2f581bfd634e2b8b45ad5039f2132c7210.jpg&ehk=se5eAyzthVQf8OXiessH7dUir3lBAYVDGFau1pVdwcQ%3d&risl=&pid=ImgRaw&r=0',
		title: '你好小猫咪',
		subTitle: "我就是一只小猫咪啊"
	}, {
		imgUrl: 'https://media.9game.cn/gamebase/ieu-eagle-docking-service/images/20220705/4/20/a247fc5f29bdf7f354c7e7c2be2e0ded.jpeg',
		title: '你好小猫咪',
		subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
	}, {
		imgUrl: 'https://image.9game.cn/2018/8/23/21736948.png',
		title: '你好小猫咪',
		subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
	}, {
		imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.6He10yL_FSyqB_HPYSn1owHaEV?pid=ImgDet&rs=1',
		title: '你65好',
		subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
	}, {
		imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.c9302b9b53785ffd4b41030a90a8c877?rik=e7YDtUmAsWoObw&riu=http%3a%2f%2fimg3.downza.cn%2fxueyuan%2f202102%2f581bfd634e2b8b45ad5039f2132c7210.jpg&ehk=se5eAyzthVQf8OXiessH7dUir3lBAYVDGFau1pVdwcQ%3d&risl=&pid=ImgRaw&r=0',
		title: '你6556好',
		subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
	}, {
		imgUrl: 'https://img.3dmgame.com/uploads/images/news/20200930/1601425194_114158.jpg',
		title: '你6555好',
		subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
	}, {
		imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.6He10yL_FSyqB_HPYSn1owHaEV?pid=ImgDet&rs=1',
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
			border-radius: 16rpx;
			margin-bottom: 16rpx;
			width: 100%;
			background-color: #faf7eb;

			image {
				border-top-left-radius: 16rpx;
				border-top-right-radius: 16rpx;
			}

			.item-title {
				margin-left: 10rpx;
				;
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
