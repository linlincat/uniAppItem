"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "m-tag",
  props: {
    tagTitle: String,
    tagDescript: String
  },
  setup(__props) {
    const props = __props;
    const title = props.tagTitle;
    const descript = props.tagDescript;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(title)),
        b: common_vendor.t(common_vendor.unref(descript))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/components/m-tag/m-tag.vue"]]);
wx.createComponent(Component);
