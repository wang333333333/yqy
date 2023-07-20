<template>
  <div>
    <el-row>
      <yqytest :data="sellCardList" />
    </el-row>
  </div>
</template>

<script>
import yqytest from "./components/yqyTest.vue";
export default {
  components: {
    yqytest,
  },
  data() {
    return {
      sellCardList: [],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>