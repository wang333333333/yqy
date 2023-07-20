<template>
  <div class="card-layout" :style="getStyle()">
    <div class="card-layout__main">
      <span class="card-layout__title">{{ title }}</span>
      <span v-if="isNumber">
        <count-to
          :startVal="countObj.startVal"
          :decimals="countObj.decimals"
          :endVal="countObj.endVal"
          :duration="countObj.duration"
        ></count-to>
      </span>
      <span v-else>{{number}}</span>
    </div>
    <div class="card-layout__baseImage" v-if="bgImage">
      <img src="./images/bg.png" />
    </div>
    <div class="card-layout__icon">
      <img :src="icon" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 标题
    title: {
      type: String,
      default: "发放总量",
    },
    // 是否使用count-to
    isNumber: {
      type: Boolean,
      default: true,
    },
    // 不适用count-to
    number: {
      type: Number,
      default: 0,
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
    // 背景颜色
    bgColor: {
      type: String,
      default:
        "linear-gradient(to right, rgb(255, 127, 136) 0%, rgb(228, 33, 49) 100%)",
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
  },
  methods: {
    // 传入样式
    getStyle() {
      const _that = this;
      return Object.assign(
        {},
        {
          background: _that.bgColor,
        }
      );
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