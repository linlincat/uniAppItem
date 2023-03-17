"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_m_img_ad2 = common_vendor.resolveComponent("m-img-ad");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2 + _easycom_uni_notice_bar2 + _easycom_m_img_ad2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.js";
const _easycom_uni_notice_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-notice-bar/uni-notice-bar.js";
const _easycom_m_img_ad = () => "../../components/m-img-ad/m-img-ad.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar + _easycom_uni_notice_bar + _easycom_m_img_ad)();
}
const _sfc_main = {
  __name: "category",
  setup(__props) {
    const adItems = common_vendor.reactive([{
      imgUrl: "../../static/swiper/m2.jpg",
      text: "猫咪壁纸"
    }, {
      imgUrl: "../../static/swiper/m3.jpg",
      text: "猫咪壁纸"
    }, {
      imgUrl: "../../static/swiper/m3.jpg",
      text: "猫咪壁纸"
    }, {
      imgUrl: "../../static/swiper/m1.jpg",
      text: "猫咪壁纸"
    }, {
      imgUrl: "../../static/swiper/m2.jpg",
      text: "猫咪壁纸"
    }, {
      imgUrl: "../../static/swiper/m3.jpg",
      text: "猫咪壁纸"
    }, {
      imgUrl: "../../static/swiper/m2.jpg",
      text: "猫咪壁纸"
    }, {
      imgUrl: "../../static/swiper/m2.jpg",
      text: "猫咪壁纸"
    }, {
      imgUrl: "../../static/swiper/m3.jpg",
      text: "猫咪壁纸"
    }, {
      imgUrl: "../../static/swiper/m1.jpg",
      text: "猫咪壁纸"
    }, {
      imgUrl: "../../static/swiper/m1.jpg",
      text: "猫咪壁纸"
    }, {
      imgUrl: "../../static/swiper/m2.jpg",
      text: "猫咪壁纸"
    }]);
    common_vendor.onLoad(() => {
      console.log("load");
    });
    common_vendor.onReady(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          color: "#999999",
          size: "18",
          type: "home"
        }),
        b: common_vendor.p({
          radius: "50",
          placeholder: "今天等文章有新款哈",
          ["cancel-text"]: "取消"
        }),
        c: common_vendor.p({
          ["show-icon"]: true,
          scrollable: true,
          text: "有那么一只猫咪,有一点点的叛逆,还有一点点的嚣张,没事吃吃鱼,没事睡睡觉吃吃鱼...."
        }),
        d: common_vendor.p({
          ["ad-items"]: adItems
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8145b772"], ["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
