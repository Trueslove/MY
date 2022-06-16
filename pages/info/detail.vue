
<template>
  <view class="i-d header-bj">
    <view class="i-d-tit">小逃生</view>
    <view class="i-d-c">
      <view class="i-d-cell" v-for="item in 4" :key="item">
        <view class="i-cell-time">22-4-26 04:50</view>
        <view class="i-cell-info" v-if="item == 0 || item == 2">
          <img
            class="i-cell-img"
            src="https://img0.baidu.com/it/u=1942253063,3807598283&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
          <view class="i-cell-txt i-cell-l">
            2020年有一段很寒冷的日子，但生命中那些不期而遇的温暖带来了足以抵御寒冬的力量，而后春暖花开，一切朝着光的方向。就此告别这之前有的不如意吧！生生不息的希望和好运会和2021一起到来。
          </view>
        </view>
        <view class="i-cell-info i-cell-info-r" v-else>
          <view class="i-cell-txt i-cell-r">
            2020年有一段很寒冷的日子，但生命中那些不期而遇的温暖带来了足以抵御寒冬的力量，而后春暖花开，一切朝着光的方向。就此告别这之前有的不如意吧！生生不息的希望和好运会和2021一起到来。
          </view>
          <img
            class="i-cell-img"
            src="https://img0.baidu.com/it/u=1942253063,3807598283&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.i-d-c {
  padding: 15px;
  .i-d-cell {
      margin-bottom: 20px;
    .i-cell-info {
      display: flex;
      .i-cell-txt {
        width: 210px;
        background: #d8edff;
        border-radius: 5px;
        padding: 10px;
        font-size: 14px;
        color: #333;
        line-height: 20px;
        text-align: justify;
        position: relative;
        margin-left: 20px;
      }
      .i-cell-l::after {
        content: "";
        position: absolute;
        left: -20px;
        top: 10px;
        border-top: 10px solid transparent;
        border-left: 10px solid transparent;
        border-right: 13px solid #d8edff;
        border-bottom: 10px solid transparent;
      }
    }
    .i-cell-info-r {
        justify-content: flex-end;
        .i-cell-r {
            background: #F6E5FF;
            margin-right: 20px;
            position: relative;
        }

      .i-cell-r::before {
        content: "";
        position: absolute;
        right: -20px;
        top: 10px;
        border-top: 10px solid transparent;
        border-left: 13px solid #F6E5FF;
        border-right: 10px solid transparent;
        border-bottom: 10px solid transparent;
      }
    }
    .i-cell-time {
      font-size: 10px;
      text-align: center;
      color: #999;
      margin-bottom: 12px;
    }
    .i-cell-img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}
.i-d-tit {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-align: center;
  padding: 13px 0;
}
</style>