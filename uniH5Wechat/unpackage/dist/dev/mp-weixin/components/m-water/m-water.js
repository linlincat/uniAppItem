"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "m-water",
  setup(__props) {
    const items = common_vendor.reactive([{
      imgUrl: "../../static/swiper/m2.jpg",
      title: "你好",
      subTitle: "我就是一只小猫咪啊"
    }, {
      imgUrl: "../../static/swiper/m2.jpg",
      title: "你好小猫咪",
      subTitle: "我就是一只小猫咪啊"
    }, {
      imgUrl: "../../static/swiper/m2.jpg",
      title: "你好小猫咪",
      subTitle: "我就是一只小猫咪啊"
    }, {
      imgUrl: "../../static/swiper/m1.jpg",
      title: "你好小猫咪",
      subTitle: "我就是一只小猫咪啊"
    }, {
      imgUrl: "../../static/swiper/m2.jpg",
      title: "你好小猫咪",
      subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
    }, {
      imgUrl: "../../static/swiper/m1.jpg",
      title: "你好小猫咪",
      subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
    }, {
      imgUrl: "../../static/swiper/m2.jpg",
      title: "你65好",
      subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
    }, {
      imgUrl: "../../static/swiper/m1.jpg",
      title: "你6556好",
      subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
    }, {
      imgUrl: "../../static/swiper/m2.jpg",
      title: "你6555好",
      subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
    }, {
      imgUrl: "../../static/swiper/m2.jpg",
      title: "你622好",
      subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
    }]);
    const goodsLists = common_vendor.reactive({
      rightBox: [],
      leftBox: []
    });
    let dataL = items;
    let dataR = items;
    let len = items.length;
    let min = Math.floor(len / 2);
    let rightList = dataR.splice(min, len);
    let leftList = dataL.splice(0, min);
    goodsLists.rightBox = goodsLists.rightBox.concat(rightList);
    goodsLists.leftBox = goodsLists.leftBox.concat(leftList);
    console.log(goodsLists.leftBox);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(goodsLists.rightBox, (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.subTitle)
          };
        }),
        b: this,
        c: common_vendor.f(goodsLists.leftBox, (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.subTitle)
          };
        }),
        d: this
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/components/m-water/m-water.vue"]]);
wx.createComponent(Component);
