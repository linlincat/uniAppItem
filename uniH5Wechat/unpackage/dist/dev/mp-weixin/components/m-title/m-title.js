"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "m-title",
  props: {
    mTitle: String,
    mMore: String
  },
  setup(__props) {
    const props = __props;
    const title = props.mTitle;
    const more = props.mMore || "更多";
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(title)),
        b: common_vendor.t(common_vendor.unref(more))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/components/m-title/m-title.vue"]]);
wx.createComponent(Component);
