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
      imgUrl: "https://upload-bbs.mihoyo.com/upload/2021/05/20/191013579/e67248f95b5e1f187ad140e330c3ac11_2174860061824884372.jpg"
    }, {
      imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.RNGpB8bicqfbxyQgBqmffQHaEK?pid=ImgDet&rs=1"
    }, {
      imgUrl: "https://tse4-mm.cn.bing.net/th/id/OIP-C.otskqYac6Har5XPjFnRcXAHaEK?pid=ImgDet&rs=1"
    }]);
    const iStatusBarHeight = common_vendor.ref(0);
    const current = common_vendor.ref(0);
    const swiperDotIndex = common_vendor.ref(0);
    const mode = common_vendor.ref("round");
    function clickItem(e) {
      swiperDotIndex.value = e;
    }
    function change(e) {
      current.value = e.detail.current;
    }
    common_vendor.onLoad(() => {
      iStatusBarHeight.value = common_vendor.index.getSystemInfoSync().statusBarHeight;
    });
    common_vendor.onReady(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: iStatusBarHeight.value + "px",
        b: common_vendor.p({
          color: "#999999",
          size: "18",
          type: "home"
        }),
        c: common_vendor.p({
          radius: "50",
          placeholder: "今天等文章有新款哈",
          ["cancel-text"]: "取消"
        }),
        d: common_vendor.f(info, (item, index, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.n("swiper-item" + index),
            c: index
          };
        }),
        e: common_vendor.o(change),
        f: swiperDotIndex.value,
        g: common_vendor.o(clickItem),
        h: common_vendor.p({
          info,
          current: current.value,
          mode: mode.value,
          ["dots-styles"]: dotsStyle,
          field: "content"
        }),
        i: common_vendor.p({
          ["tag-title"]: "精美猫咪",
          ["tag-descript"]: "长毛猫、短毛猫、无毛猫"
        }),
        j: common_vendor.p({
          span: 12
        }),
        k: common_vendor.p({
          ["tag-title"]: "猫咪套图",
          ["tag-descript"]: "热门+精选+新图"
        }),
        l: common_vendor.p({
          span: 12
        }),
        m: common_vendor.p({
          gutter: 20
        }),
        n: common_vendor.p({
          ["tag-title"]: "发现",
          ["tag-descript"]: "发现有趣的文章"
        }),
        o: common_vendor.p({
          span: 8
        }),
        p: common_vendor.p({
          ["tag-title"]: "任务",
          ["tag-descript"]: "给自己定的小目标"
        }),
        q: common_vendor.p({
          span: 8
        }),
        r: common_vendor.p({
          ["tag-title"]: "省钱",
          ["tag-descript"]: "东南西北风"
        }),
        s: common_vendor.p({
          span: 8
        }),
        t: common_vendor.p({
          gutter: 20
        }),
        v: common_vendor.p({
          ["m-title"]: "热门推荐"
        }),
        w: common_vendor.p({
          ["m-title"]: "最新推荐"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
