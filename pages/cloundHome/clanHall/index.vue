<template>
  <view class="clan-hall">
    <view class="clan-hall-text">建设中……</view>
    <img class="clan-hall-img" src="https://hmqn.zhijingyuntech.cn/xnct.png" alt=""/>
  </view>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.clan-hall {
  height: 100vh;
  .clan-hall-img {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .clan-hall-text {
    position: absolute;
    margin-top: 50%;
    width: 100%;
    text-align: center;
    z-index: 100;
    color: #fff;
  }
}
</style>