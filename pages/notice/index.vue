<template>
  <view class="notice">
    <img
      class="notice-img"
      src="https://hmqn.zhijingyuntech.cn/LOGO_02.png"
      alt=""
    />
    <view class="notice-txt">
      更全更好看的中华大历史
      <span class="notice-txt-mark">华脉APP</span>很快将会推出， 敬请期待... ...
    </view>
    <view class="notice-ul">
      <view class="notice-li">学生历史</view>
      <view class="notice-li">云上家谱</view>
      <view class="notice-li">虚拟宗祠</view>
      <view class="notice-li">族系溯源</view>
    </view>
    <view class="notice-btn-wap">
      <view class="notice-btn" @click="handleToPageHome">【企业官网】</view>
      <view class="notice-btn" @click="handleToPageHome">【返回首页】</view>
    </view>
    <view class="notice-tel">创客电话：13671108437</view>
    <img
      class="notice-footer-img"
      src="https://hmqn.zhijingyuntech.cn/LOGO.png"
      alt=""
    />
  </view>
</template>

<script>
export default {
  methods: {
    handleToPageHome() {
      uni.switchTab({
        url: "/pages/home/index",
      });
    }
  },
};
</script>

<style lang="scss">
.notice {
  position: relative;
  background: #fff;
  text-align: center;
  .notice-tel {
    color: #707070;
    font-weight: bold;
    font-size: 35upx;
  }
  .notice-ul {
    margin-top: 40upx;
    text-align: center;
    color: #E50458;
    font-size: 35upx;
    font-weight: bold;
    .notice-li {
      margin: auto;
      width: 200upx;
      line-height: 66upx;
      list-style-type: disc;
      position: relative;
      padding-left: 20upx;
    }
    .notice-li::before {
      content: "";
      width: 20upx;
      height: 20upx;
      border-radius: 50%;
      background: #E50458;
      position: absolute;
      top: 20upx;
      left: 0;
    }
  }
  .notice-img {
    width: 134upx;
    height: 134upx;
    margin: 168upx 0 72upx 0;
  }
  .notice-txt {
      margin: auto;
      width: 400upx;
      font-size: 35upx;
      text-align: justify;
      color: #707070;
      .notice-txt-mark {    
          color: #E50458;
          font-weight: Bold;
          font-size: 40upx;
      }
  }
  .notice-footer-img {
      width: 560upx;
      height: 88upx;
      margin: 100upx auto;
  }
  .notice-btn-wap {
    display: flex;
    justify-content: space-around;
    padding: 0 100upx;
  }
  .notice-btn {
      font-size: 35upx;
      color: #707070;
      margin: 110upx auto;
  }
}
</style>