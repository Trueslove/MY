<template>
  <view class="nav">
    <img
    v-if="isShowBack"
      class="nav-icon"
      @click="handleBack"
      src="../../static/leftArrow.png"
      alt=""
    />
    <view class="nav-tit"> {{title}} </view>
  </view>
</template>
<script>
export default {
    props: {
        isShowBack: {
            type: Boolean,
            default: true
        }
    },
  data() {
    return {
      title: "",
    };
  },
  created() {
    let pages = getCurrentPages();
    let page = pages[pages.length - 1];
    let currentPageTitle = page.$holder.navigationBarTitleText;
    this.title = currentPageTitle;
  },
  methods: {
    handleBack() {
      uni.navigateBack({
        delta: 1,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  padding: 0 36upx;
  height: 120upx;
  .nav-icon {
    width: 32upx;
    height: 32upx;
  }
  .nav-tit {
    flex: 1;
    text-align: center;
    font-size: 36upx;
    font-weight: 500;
    color: #333333;
  }
}
</style>