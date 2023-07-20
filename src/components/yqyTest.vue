<template>
  <div id="PanelGroup">
    <el-row class="panel-group" type="flex" :gutter="20">
      <el-col  class="card-panel-col" v-for="(item, index) in data" :key="index" :sm="12" :lg="6" :xl="6">
        <card-type
          :arrowShow="false"
          :item="item"
          :decimals="item.decimals"
        ></card-type>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CardType from "./CardType/index.vue";
export default {
  components: {
    CardType,
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      },
    },
    status: {
      type: Number,
    },
  },
};
</script>




<style lang="scss" scoped>
  .panel-group {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 15px 0;
    .card-panel-col{
      margin: 0 7.5px;
      margin-bottom: 15px;
    }
    .card-panel {
      height: 120px;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      border-radius: 10px;
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      img{
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
      }
      &:hover {
        .card-panel-icon-wrapper {
          .icon {
            display: none;
          }
          .text {
            display: block;
          }
        }
      }
      .card-panel-icon-wrapper {
        background: #fff;
        box-shadow:0px 1px 9px 0px rgba(19,91,218,0.15);
        .text {
          display: none;
        }
        float: left;
        margin: 25px 0 0 25px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 50%;
        color: #fff;
      }
      .card-panel-icon {
        width: 38px;
        height: 38px;
        float: left;
        font-size: 38px;
        line-height: 38px;
        text-align: center;
      }
      .card-panel-description {
        float: right;
        font-weight: bold;
        text-align: right;
        margin: 35px 25px 0 0;
        margin-left: 0;
        .card-panel-text {
          line-height: 20px;
          color: #fff;
          font-size: 20px;
          margin-bottom: 12px;
        }
        .card-panel-num {
          font-size: 18px;
          color: #fff;
        }
      }
    }
  }
</style>