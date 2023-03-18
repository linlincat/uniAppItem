"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "m-water",
  setup(__props) {
    function handleTodetail(index, url, title) {
      common_vendor.index.navigateTo({
        url: "/pages/mdetail/mdetail?item=" + index + "&imgUrl=" + url + "&title=" + title
      });
    }
    const items = common_vendor.reactive([{
      imgUrl: "https://media.9game.cn/gamebase/ieu-eagle-docking-service/images/20220705/4/20/a247fc5f29bdf7f354c7e7c2be2e0ded.jpeg",
      title: "你好",
      subTitle: "我就是一只小猫咪啊"
    }, {
      imgUrl: "https://apic.tvzhe.com/images/e0/4b/5f158c6369e4f501cffee3e869f4313c875a4be0.jpg",
      title: "你好小猫咪",
      subTitle: "我就是一只小猫咪啊"
    }, {
      imgUrl: "https://media.9game.cn/gamebase/ieu-eagle-docking-service/images/20220705/4/20/a247fc5f29bdf7f354c7e7c2be2e0ded.jpeg",
      title: "你好小猫咪",
      subTitle: "我就是一只小猫咪啊"
    }, {
      imgUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.c9302b9b53785ffd4b41030a90a8c877?rik=e7YDtUmAsWoObw&riu=http%3a%2f%2fimg3.downza.cn%2fxueyuan%2f202102%2f581bfd634e2b8b45ad5039f2132c7210.jpg&ehk=se5eAyzthVQf8OXiessH7dUir3lBAYVDGFau1pVdwcQ%3d&risl=&pid=ImgRaw&r=0",
      title: "你好小猫咪",
      subTitle: "我就是一只小猫咪啊"
    }, {
      imgUrl: "https://media.9game.cn/gamebase/ieu-eagle-docking-service/images/20220705/4/20/a247fc5f29bdf7f354c7e7c2be2e0ded.jpeg",
      title: "你好小猫咪",
      subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
    }, {
      imgUrl: "https://image.9game.cn/2018/8/23/21736948.png",
      title: "你好小猫咪",
      subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
    }, {
      imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.6He10yL_FSyqB_HPYSn1owHaEV?pid=ImgDet&rs=1",
      title: "你65好",
      subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
    }, {
      imgUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.c9302b9b53785ffd4b41030a90a8c877?rik=e7YDtUmAsWoObw&riu=http%3a%2f%2fimg3.downza.cn%2fxueyuan%2f202102%2f581bfd634e2b8b45ad5039f2132c7210.jpg&ehk=se5eAyzthVQf8OXiessH7dUir3lBAYVDGFau1pVdwcQ%3d&risl=&pid=ImgRaw&r=0",
      title: "你6556好",
      subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
    }, {
      imgUrl: "https://img.3dmgame.com/uploads/images/news/20200930/1601425194_114158.jpg",
      title: "你6555好",
      subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
    }, {
      imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.6He10yL_FSyqB_HPYSn1owHaEV?pid=ImgDet&rs=1",
      title: "你622好",
      subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
    }]);
    const goodsLists = common_vendor.reactive({
      rightBox: [],
      leftBox: []
    });
    let dataL = items;
    let dataR = items;
    let len = items.length;
    let min = Math.floor(len / 2);
    let rightList = dataR.splice(min, len);
    let leftList = dataL.splice(0, min);
    goodsLists.rightBox = goodsLists.rightBox.concat(rightList);
    goodsLists.leftBox = goodsLists.leftBox.concat(leftList);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(goodsLists.rightBox, (item, index, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.subTitle),
            d: common_vendor.o(($event) => handleTodetail(index, item.imgUrl, item.title), this)
          };
        }),
        b: this,
        c: common_vendor.f(goodsLists.leftBox, (item, index, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.subTitle),
            d: common_vendor.o(($event) => handleTodetail(index, item.imgUrl, item.title), this)
          };
        }),
        d: this
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/components/m-water/m-water.vue"]]);
wx.createComponent(Component);
