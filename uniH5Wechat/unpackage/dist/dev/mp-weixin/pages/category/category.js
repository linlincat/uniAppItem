"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar)();
}
const _sfc_main = {
  __name: "category",
  setup(__props) {
    common_vendor.reactive({
      bottom: 26,
      backgroundColor: "rgba(218, 207, 194, .3)",
      border: "1px rgba(218, 207, 194, .3) solid",
      color: "#fff",
      selectedBackgroundColor: "rgba(254, 252, 251, .9)",
      selectedBorder: "1px rgba(254, 252, 251, .9) solid"
    });
    common_vendor.reactive([{
      content: "内容 A",
      imgUrl: "../../static/swiper/m1.jpg"
    }, {
      content: "内容 B",
      imgUrl: "../../static/swiper/m2.jpg"
    }, {
      content: "内容 C",
      imgUrl: "../../static/swiper/m3.jpg"
    }]);
    common_vendor.ref(0);
    common_vendor.ref(0);
    common_vendor.ref("round");
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
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8145b772"], ["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
