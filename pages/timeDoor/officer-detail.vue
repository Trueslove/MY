<template>
  <view class="time-door__officer-detail">
    <view-tabbar :current="2"></view-tabbar>
    <img class="time-door__bg" src="https://hmqn.zhijingyuntech.cn/timeDoor/bg.png" alt="">
    <view class="officer-detail__wrap">
      <view class="time-door__content__header">
        <view>{{ detail.dynasty }}</view>
        <view>
          <text>{{ detail.from }} — </text>
          <text> — {{ detail.to }}</text>
        </view>
      </view>
      <view class="officer-detail__content">
        <view class="officer-detail__img">
          <img :src="detail.img" alt="">
          <view>{{ detail.name }}</view>
        </view>
        <view class="officer-detail__text">{{ detail.content }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import Tabbar from "../../common/tab/index.vue";
import officerDetails from './data/officerDetail'
export default {
  components: { "view-tabbar": Tabbar, },
  data () {
    return {
      officerDetails,
      name: ''
    }
  },
  onLoad(option) {
    this.name = option.name
  },
  computed: {
    detail() {
      return this.officerDetails[this.name] || {}
    }
  }
}
</script>

<style lang="scss">
.time-door__officer-detail{
  position: relative;
  height: calc(100vh - 124upx);
  .time-door__bg{
    width: 100%;
    height: 100%;
  }
  .officer-detail__wrap{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100vh - 144upx);
    overflow-y: scroll;
  }
  .time-door__content__header{
    position: absolute;
    right: 100upx;
    text-align: center;
    view:first-child{
      margin-top: 60upx;
      color: #d09b07;
      font-size: 50upx;
      letter-spacing: 50upx;
      text-indent: 50upx;
    }
    view:last-child{
      display: inline-block;
      margin: 20upx auto 0;
      padding: 6upx 20upx;
      color: #ddd;
      font-size: 30upx;
      letter-spacing: 2upx;
      background: #600303;
      border: 2upx solid #a16005;
      border-radius: 10upx;
      text:first-child{
        display: block;
        text-align: left;
      }
      text:last-child{
        margin-left: 100upx;
      }
    }
  }
  .officer-detail__content{
    position: relative;
    padding: 260upx 60upx 0;
    box-sizing: border-box;
    .officer-detail__img{
      position: absolute;
      margin-left: 20upx;
      width: 200upx;
      height: 200upx;
      border-radius: 30upx;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
      view{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50upx;
        line-height: 50upx;
        letter-spacing: 6upx;
        background: rgba(0,0,0,.5);
        text-align: center;
        color: #fff;
      }
    }
    .officer-detail__text{
      margin-top: 170upx;
      width: 614upx;
      padding: 80upx 40upx;
      box-sizing: border-box;
      border: 2upx solid #FFE95B;
      border-radius: 12upx;
      color: #b8b86f;
      font-size: 30upx;
      line-height: 45upx;
      text-align: justify;
    }
  }
}
</style>
