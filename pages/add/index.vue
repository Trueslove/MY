
<template>
  <view class="add">
    <tabbar :current="2"></tabbar>
    <view class="add-content">
      <view class="add-cell" @click="handleTopage">
        <view class="add-cell-tit">文字</view>
        <view class="add-cell-txt">书写心情</view>
        <img class="add-cell-jl" src="../../static/add/jl.png" alt="" />
      </view>
      <view class="add-cell" style="background:#FEC9C3;">
        <view class="add-cell-tit">语音</view>
        <view class="add-cell-txt">说出你的心情</view>
        <img class="add-cell-audit" src="../../static/add/auditBj.png" alt="" />
      </view>
      <view class="add-cell" style="background:#A8EEF4;">
        <view class="add-cell-tit">拍摄</view>
        <view class="add-cell-txt">随心拍上传美图</view>
        <img class="add-cell-audit" src="../../static/add/auditBj.png" alt="" />
      </view>
      <view class="add-cell" style="background:#BBB4FA;">
        <view class="add-cell-tit">打卡，日签</view>
        <view class="add-cell-txt">记录自己的日常</view>
        <img class="add-cell-audit" src="../../static/add/auditBj.png" alt="" />
      </view>
    </view>
  </view>
</template>

<script>
import tabbar from "../../common/tab/index.vue"
export default {
  components: {
    tabbar
  },
  onLoad(options) {
    uni.hideTabBar()
  },
  methods: {
    handleTopage() {
      uni.redirectTo({ url: '/pages/add/form' })
    }
  },
};
</script>

<style lang="scss" scoped>
.add-content {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  flex-wrap: wrap;
  padding-top:var(--status-bar-height);
  .add-cell {
    width: 164px;
    height: 190px;
    background: #fdecdb;
    border-radius: 10px;
    padding-left: 29px;
    margin-bottom: 10px;
    .add-cell-tit {
      font-size: 20px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      margin-top: 28px;
    }
    .add-cell-txt {
      margin: 5px 0 33px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
    }
    .add-cell-jl {
      width: 58px;
      height: 65px;
      float: right;
      margin-right: 12px;
    }
    .add-cell-audit {
      width: 46px;
      height: 65px;
      float: right;
      margin-right: 12px;
    }
  }
}
.add {
  background: url("https://s1.ax1x.com/2022/06/09/XyE6T1.png") no-repeat;
  background-size: 269px 115px;
  overflow: hidden;
}
</style>