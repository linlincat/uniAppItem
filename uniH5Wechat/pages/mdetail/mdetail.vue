<template>
	<view>
		<uni-card padding="0" spacing="0">
			<template v-slot:cover>
				<view class="custom-cover">
					<image class="cover-image" mode="scaleToFill" :src="imgUrl">
					</image>
					<view class="cover-content">
						<text class="uni-subtitle uni-white">{{title}}</text>
					</view>
				</view>
			</template>
		</uni-card>
		<view class="m-detail-box">
			<view class="uni-box-head">
				<uni-title color="#333" type="h1" align="center" title="成猫喂养小常识"></uni-title>
			</view>
			<view class="uni-box">
				<uni-title class="h3" type="h3" title="1.主要品种"></uni-title>
			</view>
			<view class="uni-box">
				<uni-title class="h4" type="h4" title="1.1 贪睡"></uni-title>
			</view>
			<view>
				<text class="uni-text">关于睡觉状态，猫咪在一天中有14～15小时在睡眠中度过，还有的猫，要睡20小时以上，所以猫就被称为“懒猫”。
				</text>
			</view>
				<image style="width: 100%; height: 200rpx; margin: 10rpx 0;"
					src="https://ts1.cn.mm.bing.net/th/id/R-C.34f027ef93952454fe45571cc40fe4a7?rik=GAHwbLHNMcPUVg&riu=http%3a%2f%2ftukuimg.bdstatic.com%2fscrop%2f34f027ef93952454fe45571cc40fe4a7.gif&ehk=BNgUHTxof3n772H3GSv5KZjad8ifTpyLIBuQg2BUlIs%3d&risl=&pid=ImgRaw&r=0"
					mode="aspectFill"></image>
					<text class="uni-text">但是，要仔细观察猫睡觉的样子就会发现，只要有点声响，猫的耳朵就会动，有人走近的话，猫就会腾地一下子醒来。本来猫是狩猎动物，为了能敏锐地感觉到外界的一切动静，它睡得不是很死，所以不应该称之为“懒”，因为猫只有4～5小时是真睡，大多数时间应该算是在“假寐”或者叫做闭目养神。但从小和人类待惯的猫睡的比较死，睡的时间比较长。</text>
			<view class="uni-box">
				<uni-title class="h4" type="h4" title="1.2 眼睛发光"></uni-title>
			</view>
			<view>
				<image style="width: 100%; height: 200rpx;" src="../../static/swiper/m1.jpg" mode="aspectFill"></image>
			</view>
			<view class="uni-box">
				<uni-title type="h5" color="#666" title="- 少食多餐，喂食要注意定时、定量、定点。"></uni-title>
				<uni-title type="h5" color="#666"
					title="- 一般2个月左右的猫一天要吃5、6次以上。小猫三个月以前一般每日喂食四次，如早9点，中午12点，晚6点及10点。三至六月大时，每日喂三次。六个月大以后每日两次。">
				</uni-title>
			</view>
			<view>
				<text
					class="uni-text">关于睡觉状态，猫咪在一天中有14～15小时在睡眠中度过，还有的猫，要睡20小时以上，所以猫就被称为“懒猫”。但是，要仔细观察猫睡觉的样子就会发现，只要有点声响，猫的耳朵就会动，有人走近的话，猫就会腾地一下子醒来。本来猫是狩猎动物，为了能敏锐地感觉到外界的一切动静，它睡得不是很死，所以不应该称之为“懒”，因为猫只有4～5小时是真睡，大多数时间应该算是在“假寐”或者叫做闭目养神。但从小和人类待惯的猫睡的比较死，睡的时间比较长。</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app";
	import {
		ref
	} from "vue";

	const imgUrl = ref('');
	const text = ref('');
	const title = ref('');

	onLoad((option) => {
		imgUrl.value = option.imgUrl;
		text.value = option.item;
		title.value = option.title;
	})
</script>

<style lang="scss" scoped>
	.uni-text {
		font-size: $uni-font-size-base;
		line-height: 40rpx;
		color: #333;
	}

	.m-detail-box {
		padding: 26rpx;
	}

	.custom-cover {
		flex: 1;
		flex-direction: row;
		position: relative;
	}

	.cover-image {
		width: 100% !important;
		flex: 1;
		height: 150px;
	}

	.cover-content {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 40px;
		background-color: rgba($color: #000000, $alpha: 0.4);
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 15px;
		font-size: 14px;
		color: #fff;
	}
</style>
