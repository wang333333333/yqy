<template>
  <div @click="item.onClick && item.onClick(item)" class="card-col-item" :class="{'is-click': item.onClick}" :style="Object.assign({}, {background: item.bgc}, cardStyle)">
    <div class="card-col-item-icon" :style="{height: iconHeight}" hidden-lg-and-down>
      <img :src="item.image" />
    </div>
    <div class="card-col-item-info">
      <div class="card-col-item-info__title" :style="{fontSize: textSize}">{{item.title}}</div>
      <div class="card-col-item-info__value" :style="{fontSize: textSize}">
        <span>
          <slot name="mark"></slot>
        </span>
        <count-to :startVal="0" :decimals="decimals" :endVal="item.count" :duration="2600"></count-to>
        <span>{{item.unit}}</span>
      </div>
      <div class="go" v-if="item.onClick && arrowShow">
        <span class="el-icon-arrow-right" :style="{color: item.arrowColor}"></span>
      </div>
    </div>
    <img class="bg" src="./images/bg.png" />
  </div>
</template>
<script>
// 调用参考我的联盟页面'src/views/union/myAliance/components/AllianceSurvey.vue'
import CountTo from 'vue-count-to'
export default {
  props: {
    item: {
      type: Object
    },
    cardStyle: {
      type: Object,
      default: function () {
        return {
          height: '120px'
        }
      }
    },
    iconHeight: {
      type: String,
      default: '62px'
    },
    textSize: {
      type: String,
      default: '20px'
    },
    decimals: {
      type: Number,
      default: 2
    },
    arrowShow: {
      type: Boolean,
      default: true
    }
  },
     components: {
      CountTo
    },
}
</script>
<style lang="scss" scoped>
.card-col-item {
  position: relative;
  overflow: hidden;
  color: #666;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  display: flex;
  align-items: center;
  padding-left: 20px;
  max-width: 410px;
  min-width: 330px;
  &.is-click{
    cursor: pointer;
  }
  .card-col-item-icon {
    position: absolute;
    right: 0;
    bottom: 0;
    img{
      height: 100%;
      display: block;
    }
  }
  .card-col-item-info {
    font-weight: bold;
    .card-col-item-info__title {
      line-height: 20px;
      color: #fff;
      margin-bottom: 4px;
    }
    .card-col-item-info__value {
      color: #fff;
    }
    .go{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      text-align: center;
      line-height: 20px;
      margin-top: 4px;
    }
  }
  .bg{
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
  }
}
</style>
