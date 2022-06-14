
<template>
  <view class="diary">
    <tabbar :current="1"></tabbar>
    <view class="diary-tit">私密日记</view>
    <view class="diary-content">
      <view class="diary-cell" v-for="item in 5" :key="item">
        <img
          class="diary-cell-img"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-090920%2F3yilkmv1mhn3yilkmv1mhn.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654050053&t=05809c3f0c0086f14b18d9422864e8b4"
          alt=""
        />
        <view class="diary-cell-c">黑夜破碎了夕阳，揉碎了月光，与李白同醉一场，洒下九州的霜…</view>
        <view class="diary-cell-time">
          2022.4.25 晴
        </view>
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

  }
};
</script>

<style lang="scss" scoped>
.diary {
  background: url("https://s1.ax1x.com/2022/06/09/XyE6T1.png") no-repeat;
  background-size: 269px 115px;
  padding-top:var(--status-bar-height);
}
.diary-content {
  padding: 0 15px;
  .diary-cell {
    padding: 12px 10px;
    background: #ffffff;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
    font-family: SourceHanSerifCN-Regular, SourceHanSerifCN;
    margin-bottom: 12px;
    .diary-cell-img {
      width: 100%;
      height: 120px;
      object-fit: cover;
    }
    .diary-cell-c {
      font-size: 14px;
      color: #333;
      line-height: 20px;
    }
    .diary-cell-time {
      text-align: right;
      color: #333;
      font-size: 12px;
      line-height: 16px;
    }
  }
}
.diary-tit {
  font-size: 20px;
  color: #333;
  font-weight: 600;
  margin: 15px 0 20px;
  text-align: center;
}
</style>