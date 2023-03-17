"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "m-img-ad",
  props: {
    adItems: Array
  },
  setup(__props) {
    const props = __props;
    const adItems = props.adItems;
    console.log(adItems, "llll");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(adItems), (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.text),
            c: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-552e07a4"], ["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/components/m-img-ad/m-img-ad.vue"]]);
wx.createComponent(Component);
