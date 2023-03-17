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
		imgUrl: 'https://media.9game.cn/gamebase/ieu-eagle-docking-service/images/20220705/4/20/a247fc5f29bdf7f354c7e7c2be2e0ded.jpeg',
		title: '你好',
		subTitle: "我就是一只小猫咪啊"
	}, {
		imgUrl: 'https://img.3dmgame.com/uploads/images/news/20200930/1601425198_952284.jpg',
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
		imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.01d9b9076cb2637a1922593950845fbf?rik=%2fTJ5HqzwVNTS5A&riu=http%3a%2f%2fimg001.dailiantong.com%2fNews%2f20210117%2fzty_20210117161225924&ehk=tgD%2b2nXtZB0UYJdMgpDI5zMCMyeKOjOUP7iIAbrIWY4%3d&risl=&pid=ImgRaw&r=0',
		title: '你好小猫咪',
		subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
	}, {
		imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.c3cb84f199ebc4e0b6626f70db125ea9?rik=uZ5yWc23%2fXIUIA&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20131221%2f20131221151933-1741187512.jpg&ehk=kNSCZWH678q93mQytE2V1mi3ckq7JS6VbqFfobyLbdA%3d&risl=&pid=ImgRaw&r=0',
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
		imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.c3cb84f199ebc4e0b6626f70db125ea9?rik=uZ5yWc23%2fXIUIA&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20131221%2f20131221151933-1741187512.jpg&ehk=kNSCZWH678q93mQytE2V1mi3ckq7JS6VbqFfobyLbdA%3d&risl=&pid=ImgRaw&r=0',
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
