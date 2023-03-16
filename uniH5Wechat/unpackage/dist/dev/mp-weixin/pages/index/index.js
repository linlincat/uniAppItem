"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2 + _easycom_uni_swiper_dot2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.js";
const _easycom_uni_swiper_dot = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar + _easycom_uni_swiper_dot)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const dotsStyle = common_vendor.reactive({
      bottom: 26,
      backgroundColor: "rgba(218, 207, 194, .3)",
      border: "1px rgba(218, 207, 194, .3) solid",
      color: "#fff",
      selectedBackgroundColor: "rgba(254, 252, 251, .9)",
      selectedBorder: "1px rgba(254, 252, 251, .9) solid"
    });
    const info = common_vendor.reactive([{
      content: "内容 A",
      imgUrl: "../../static/swiper/m1.jpg"
    }, {
      content: "内容 B",
      imgUrl: "../../static/swiper/m2.jpg"
    }, {
      content: "内容 C",
      imgUrl: "../../static/swiper/m3.jpg"
    }]);
    const current = common_vendor.ref(0);
    const swiperDotIndex = common_vendor.ref(0);
    const mode = common_vendor.ref("round");
    function clickItem(e) {
      swiperDotIndex.value = e;
    }
    function change(e) {
      current.value = e.detail.current;
      console.log(current.value, "lll");
    }
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
          placeholder: "今天等文章有新款哈",
          ["cancel-text"]: "取消"
        }),
        c: common_vendor.f(info, (item, index, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.n("swiper-item" + index),
            c: index
          };
        }),
        d: common_vendor.o(change),
        e: swiperDotIndex.value,
        f: common_vendor.o(clickItem),
        g: common_vendor.p({
          info,
          current: current.value,
          mode: mode.value,
          ["dots-styles"]: dotsStyle,
          field: "content"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
