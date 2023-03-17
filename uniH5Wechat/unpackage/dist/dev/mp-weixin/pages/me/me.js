"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "me",
  setup(__props) {
    common_vendor.onLoad(() => {
      console.log("load");
    });
    common_vendor.onReady(() => {
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-19c123a7"], ["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
