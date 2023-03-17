"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  const _easycom_m_tag2 = common_vendor.resolveComponent("m-tag");
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  const _easycom_m_title2 = common_vendor.resolveComponent("m-title");
  const _easycom_m_water2 = common_vendor.resolveComponent("m-water");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2 + _easycom_uni_swiper_dot2 + _easycom_m_tag2 + _easycom_uni_col2 + _easycom_uni_row2 + _easycom_m_title2 + _easycom_m_water2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.js";
const _easycom_uni_swiper_dot = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_m_tag = () => "../../components/m-tag/m-tag.js";
const _easycom_uni_col = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-row/uni-row.js";
const _easycom_m_title = () => "../../components/m-title/m-title.js";
const _easycom_m_water = () => "../../components/m-water/m-water.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar + _easycom_uni_swiper_dot + _easycom_m_tag + _easycom_uni_col + _easycom_uni_row + _easycom_m_title + _easycom_m_water)();
}
const _sfc_main = {
  __name: "tools",
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
          radius: "50",
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
        }),
        h: common_vendor.p({
          ["tag-title"]: "精美猫咪",
          ["tag-descript"]: "长毛猫、短毛猫、无毛猫"
        }),
        i: common_vendor.p({
          span: 12
        }),
        j: common_vendor.p({
          ["tag-title"]: "猫咪套图",
          ["tag-descript"]: "热门+精选+新图"
        }),
        k: common_vendor.p({
          span: 12
        }),
        l: common_vendor.p({
          gutter: 20
        }),
        m: common_vendor.p({
          ["tag-title"]: "发现",
          ["tag-descript"]: "发现有趣的文章"
        }),
        n: common_vendor.p({
          span: 8
        }),
        o: common_vendor.p({
          ["tag-title"]: "任务",
          ["tag-descript"]: "给自己定的小目标"
        }),
        p: common_vendor.p({
          span: 8
        }),
        q: common_vendor.p({
          ["tag-title"]: "省钱",
          ["tag-descript"]: "东南西北风"
        }),
        r: common_vendor.p({
          span: 8
        }),
        s: common_vendor.p({
          gutter: 20
        }),
        t: common_vendor.p({
          ["m-title"]: "热门推荐"
        }),
        v: common_vendor.p({
          ["m-title"]: "最新推荐"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/pages/tools/tools.vue"]]);
wx.createPage(MiniProgramPage);
