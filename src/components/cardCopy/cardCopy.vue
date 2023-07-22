<template>
  <card-copy :title="title" :bgColor="bgColor" :bgImage="bgImage" :icon="icon" :countObj="countObj"></card-copy>
</template>

<script type="text/ecmascript-6">
export default {
  name: "card",
  props: {
    // 标题
    title: {
      type: String,
      default: "发放总量",
    },
    bgColor: {
      type: String,
      default:
        "linear-gradient(to right, rgb(255, 127, 136) 0%, rgb(228, 33, 49) 100%)",
    },
    number: {
      type: Number,
      default: 0,
    },
    // 是否显示底部背景图
    bgImage: {
      type: Boolean,
      default: true,
    },
    // 分类图标
    icon: {
      type: String,
      default: require("./images/icon13.png"),
    },
    //count-to 数据
    countObj: {
      type: Object,
      default: function () {
        return {
          startVal: 0, // 开始值
          endVal: 100, //结束值
          duration: 2600, //持续时间
          decimals: 2, //显示小数点
        };
      },
    },
  },
  components: {
    cardCopy: {
      props: {
        // 标题
        title: {
          type: String,
          default: "发放总量",
        },
        bgColor: {
          type: String,
          default:
            "linear-gradient(to right, rgb(255, 127, 136) 0%, rgb(228, 33, 49) 100%)",
        },
        number: {
          type: Number,
          default: 0,
        },
        // 是否显示底部背景图
        bgImage: {
          type: Boolean,
          default: true,
        },
        // 分类图标
        icon: {
          type: String,
          default: require("./images/icon13.png"),
        },
        //count-to 数据
        countObj: {
          type: Object,
          default: function () {
            return {
              startVal: 0, // 开始值
              endVal: 100, //结束值
              duration: 2600, //持续时间
              decimals: 2, //显示小数点
            };
          },
        },
      },
      methods: {
        createChildElement(createElement) {
          return createElement(
            "div",
            {
              class: "card-layout__main", //数据显示
            },
            [
              createElement(
                "span",
                { class: "card-layout__title" },
                this.title
              ),
              //   createElement("span", this.number),
              createElement("count-to", {
                props: {
                  // 属性名: 属性值
                  startVal: this.countObj.startVal,
                  decimals: this.countObj.decimals,
                  endVal: this.countObj.endVal,
                  duration: this.countObj.duration,
                },
              }),
            ]
          );
        },
        createBgImage(createElement) {
          if (this.bgImage) {
            return createElement(
              "div",
              {
                class: "card-layout__baseImage",
              },
              [
                createElement("img", {
                  attrs: {
                    src: require("./images/bg.png"),
                  },
                }),
              ]
            );
          } else {
            return null; 
          }
        },
        createIcon(createElement) {
          return createElement(
            "div",
            {
              class: "card-layout__icon", //图标
            },
            [
              createElement("img", {
                attrs: {
                  src: this.icon,
                },
              }),
            ]
          );
        },
      },
      render: function (createElement) {
        return createElement(
          "div",
          {
            class: "card-layout", //外层盒子
            style: {
              background: this.bgColor,
            },
          },
          [
            this.createChildElement(createElement),
            this.createBgImage(createElement),
            this.createIcon(createElement),
          ]
        );
      },
    },
  },
};
</script>

<style lang="scss">
:root {
  --primary-color: #ffffff; // 默认字体颜色
}
.card-layout {
  width: 100%;
  min-width: 200px;
  height: 120px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 30px 20px;
  border-radius: 10px;
  position: relative;
}
.card-layout__main {
  font-size: 20px;
  font-weight: bold;
  color: var(--primary-color);
  span {
    display: block;
  }
}
.card-layout__title {
  margin-bottom: 2px;
}
.card-layout__baseImage {
  position: absolute;
  width: 100%;
  left: -4px;
  bottom: -6px;
  img {
    display: block;
    height: 80px;
    width: 100%;
    min-width: 200px;
  }
}
.card-layout__icon {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 62px;
  img {
    display: block;
    height: 100%;
  }
}
</style>