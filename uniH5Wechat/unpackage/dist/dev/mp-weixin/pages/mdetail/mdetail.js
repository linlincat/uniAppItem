"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  (_easycom_uni_card2 + _easycom_uni_title2)();
}
const _easycom_uni_card = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card.js";
const _easycom_uni_title = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-title/uni-title.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_title)();
}
const _sfc_main = {
  __name: "mdetail",
  setup(__props) {
    const imgUrl = common_vendor.ref("");
    const text = common_vendor.ref("");
    const title = common_vendor.ref("");
    common_vendor.onLoad((option) => {
      imgUrl.value = option.imgUrl;
      text.value = option.item;
      title.value = option.title;
    });
    return (_ctx, _cache) => {
      return {
        a: imgUrl.value,
        b: common_vendor.t(title.value),
        c: common_vendor.p({
          padding: "0",
          spacing: "0"
        }),
        d: common_vendor.p({
          color: "#333",
          type: "h1",
          align: "center",
          title: "成猫喂养小常识"
        }),
        e: common_vendor.p({
          type: "h3",
          title: "1.主要品种"
        }),
        f: common_vendor.p({
          type: "h4",
          title: "1.1 贪睡"
        }),
        g: common_vendor.p({
          type: "h4",
          title: "1.2 眼睛发光"
        }),
        h: common_vendor.p({
          type: "h5",
          color: "#666",
          title: "- 少食多餐，喂食要注意定时、定量、定点。"
        }),
        i: common_vendor.p({
          type: "h5",
          color: "#666",
          title: "- 一般2个月左右的猫一天要吃5、6次以上。小猫三个月以前一般每日喂食四次，如早9点，中午12点，晚6点及10点。三至六月大时，每日喂三次。六个月大以后每日两次。"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d21edc6b"], ["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/pages/mdetail/mdetail.vue"]]);
wx.createPage(MiniProgramPage);
