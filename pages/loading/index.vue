<template>
  <view class="loading">
      <img class="loading-img" src="https://hmqn.zhijingyuntech.cn/WELCOM01.png" alt="" />
      <view class="loading-tit" @click="handleToPage">开始体验</view>
  </view>
</template>

<script>
export default {
    methods: {
        handleToPage() {
            uni.switchTab({
                url: "/pages/home/index"
            })
        }
    },
}
</script>

<style lang="scss">
.loading {
    height: 100vh;
    position: relative;
    .loading-img {
        width: 100%;
        height: 100%;
    }
    .loading-tit {
        background: rgba($color: #fff, $alpha: .8);
        position: absolute;
        width: 200upx;
        height: 60upx;
        line-height: 60upx;
        bottom: 200upx;
        left: 50%;
        margin-left: -100upx;
        z-index: 1;
        text-align: center;
        border-radius: 30upx;
    }
}
</style>