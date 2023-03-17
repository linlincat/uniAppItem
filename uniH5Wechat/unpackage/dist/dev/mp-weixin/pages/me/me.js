"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_icons2 + _easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_card2 + _easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_grid_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-grid/uni-grid.js";
const _easycom_uni_card = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card.js";
const _easycom_uni_list_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_card + _easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "me",
  setup(__props) {
    const extraIcon = common_vendor.reactive({
      color: "#f8e24e",
      size: "22",
      type: "phone"
    });
    const extraIcon1 = common_vendor.reactive({
      color: "#f8e24e",
      size: "22",
      type: "compose"
    });
    const extraIcon2 = common_vendor.reactive({
      color: "#f8e24e",
      size: "22",
      type: "images"
    });
    const extraIcon3 = common_vendor.reactive({
      color: "#f8e24e",
      size: "22",
      type: "shop"
    });
    const tagList = common_vendor.reactive([{
      text: "我的猫咪",
      icon: "color"
    }, {
      text: "我的收藏",
      icon: "heart"
    }, {
      text: "我的文章",
      icon: "map"
    }, {
      text: "我的作品",
      icon: "images"
    }]);
    common_vendor.onLoad(() => {
      console.log("load");
    });
    common_vendor.onReady(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tagList, (item, index, i0) => {
          return {
            a: "19c123a7-3-" + i0 + "," + ("19c123a7-2-" + i0),
            b: common_vendor.p({
              type: item.icon,
              size: 30,
              color: "#f8e251"
            }),
            c: common_vendor.t(item.text),
            d: index,
            e: "19c123a7-2-" + i0 + ",19c123a7-1",
            f: common_vendor.p({
              index
            })
          };
        }),
        b: common_vendor.p({
          column: 4,
          highlight: true,
          showBorder: false
        }),
        c: common_vendor.p({
          title: "我的想法"
        }),
        d: common_vendor.p({
          ["show-extra-icon"]: true,
          showArrow: true,
          ["extra-icon"]: extraIcon,
          title: "联系喵喵"
        }),
        e: common_vendor.p({
          ["show-extra-icon"]: true,
          showArrow: true,
          ["extra-icon"]: extraIcon1,
          title: "提供建议"
        }),
        f: common_vendor.p({
          ["show-extra-icon"]: true,
          showArrow: true,
          ["extra-icon"]: extraIcon2,
          title: "我的作品"
        }),
        g: common_vendor.p({
          ["show-extra-icon"]: true,
          showArrow: true,
          ["extra-icon"]: extraIcon3,
          title: "关于喵咪"
        }),
        h: common_vendor.p({
          ["border-full"]: true
        }),
        i: common_vendor.p({
          title: "其它"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-19c123a7"], ["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
