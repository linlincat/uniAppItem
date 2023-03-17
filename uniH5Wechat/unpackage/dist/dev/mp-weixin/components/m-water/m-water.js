"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "m-water",
  setup(__props) {
    const items = common_vendor.reactive([{
      imgUrl: "https://media.9game.cn/gamebase/ieu-eagle-docking-service/images/20220705/4/20/a247fc5f29bdf7f354c7e7c2be2e0ded.jpeg",
      title: "你好",
      subTitle: "我就是一只小猫咪啊"
    }, {
      imgUrl: "https://img.3dmgame.com/uploads/images/news/20200930/1601425198_952284.jpg",
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
      imgUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.01d9b9076cb2637a1922593950845fbf?rik=%2fTJ5HqzwVNTS5A&riu=http%3a%2f%2fimg001.dailiantong.com%2fNews%2f20210117%2fzty_20210117161225924&ehk=tgD%2b2nXtZB0UYJdMgpDI5zMCMyeKOjOUP7iIAbrIWY4%3d&risl=&pid=ImgRaw&r=0",
      title: "你好小猫咪",
      subTitle: "我就是一只小猫咪啊,谁还不是一只小猫咪啊"
    }, {
      imgUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.c3cb84f199ebc4e0b6626f70db125ea9?rik=uZ5yWc23%2fXIUIA&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20131221%2f20131221151933-1741187512.jpg&ehk=kNSCZWH678q93mQytE2V1mi3ckq7JS6VbqFfobyLbdA%3d&risl=&pid=ImgRaw&r=0",
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
      imgUrl: "https://ts1.cn.mm.bing.net/th/id/R-C.c3cb84f199ebc4e0b6626f70db125ea9?rik=uZ5yWc23%2fXIUIA&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20131221%2f20131221151933-1741187512.jpg&ehk=kNSCZWH678q93mQytE2V1mi3ckq7JS6VbqFfobyLbdA%3d&risl=&pid=ImgRaw&r=0",
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
    console.log(goodsLists.leftBox);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(goodsLists.rightBox, (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.subTitle)
          };
        }),
        b: this,
        c: common_vendor.f(goodsLists.leftBox, (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.subTitle)
          };
        }),
        d: this
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/xiaopingguo/Desktop/nowDown/uniAppItem/uniH5Wechat/components/m-water/m-water.vue"]]);
wx.createComponent(Component);
