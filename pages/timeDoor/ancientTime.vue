<template>
  <view class="time-door__content__wrap">
    <view class="time-door__content__header">
      <view>{{ data.name }}</view>
      <view>
        <text>{{ data.from }} — </text>
        <text> — {{ data.to }}</text>
      </view>
    </view>
    <view :class="['time-door__content']">
      <view class="ancient-time__wrap">
        <view class="ancient-time__describe">{{ data.des }}</view>
        <view
          class="ancient-time__person"
          v-for="(item, i) in data.persons"
          :key="i"
        >
          <text class="ancient-time__person--name">{{ item.name }}</text>
          <text :class="['ancient-time__person--des', { 'ancient-time__person--des1': !item.des1 }]">{{ item.des }}</text>
          <text v-if="item.des1" :class="['ancient-time__person--des', { 'ancient-time__person--des1': item.des1 }]">{{ item.des1 }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import data from './data/ancientTime'
export default {
  props: {
    type: String
  },
  data () {
    return {
      data: {}
    }
  },
  watch: {
    type : {
      handler (val) {
        this.data = data[val]
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
  .time-door__content__wrap{
    position: fixed;
    top: 0;
    left: 260upx;
    width: calc(100% - 320upx);
    height: calc(100vh - 134upx);
    overflow-y: scroll;
    .time-door__content__header{
      text-align: center;
      view:first-child{
        margin-top: 60upx;
        color: #d09b07;
        font-size: 40upx;
        letter-spacing: 10upx;
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
    .time-door__content{
      &.animationKing{
        position: absolute;
        top: 186upx;
        opacity: 1;
        animation: beforeYear 2s;
      }
    }
    .ancient-time__wrap{
      padding-top: 60upx;
      box-sizing: border-box;
      color: #ddd;
      font-size: 28upx;
      .ancient-time__describe{
        margin-bottom: 27upx;
        padding-left: 10upx;
        box-sizing: border-box;
        width: 400upx;
        line-height: 50upx;
        text-align: justify;
      }
      .ancient-time__person{
        padding-left: 50upx;
        padding-left: 30upx;
        box-sizing: border-box;
        &--name{
          margin-bottom: 10upx;
          display: block;
          color: #FFCC33;
        }
        &--des{
          display: block;
        }
        &--des1{
          margin-bottom: 40upx;
        }
      }
    }
    @keyframes beforeYear {
      0% {
        opacity: 0;
        top: 400upx;
      }
      100% {
        opacity: 1;
        top: 186upx;
      }
    }
  }
</style>