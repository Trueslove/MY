<template>
  <view class="family-tree">
    <view class="family-tree-cell">
      <img class="family-tree-cell-img" @click="handleTopage" src="https://hmqn.zhijingyuntech.cn/goal01.png" alt="" />
      <img class="family-tree-cell-img" @click="handleTopage" src="https://hmqn.zhijingyuntech.cn/goal02.png" alt="" />
      <img class="family-tree-cell-img" @click="handleTopage" src="https://hmqn.zhijingyuntech.cn/goal03.png" alt="" />
    </view>
    <img class="family-tree-footer" src="https://hmqn.zhijingyuntech.cn/ysjfooter.png" alt=""/>
  </view>
</template>

<script>
export default {
  methods: {
    handleTopage() {
      uni.navigateTo({
        url: "/pages/notice/index",
      });
    },
  },
}
</script>

<style lang="scss">
.family-tree {
  height: 100vh;
  background: #fff;
  .family-tree-cell {
    text-align: center;
    .family-tree-cell-img {
      margin-top: 60upx;
      width: 600upx;
      height: 314upx;
    }
  }
  .family-tree-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>