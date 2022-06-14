
<template>
  <view class="info">
    <tabbar :current="3"></tabbar>
    <!-- 查询 -->
    <view class="info-search">
      <view class="info-s-l">
        <img
          class="info-s-refresh"
          style="width: 14px; height: 14px"
          src="../../static/info/search.png"
          alt=""
        />
        <input
          class="info-s-txt"
          type="text"
          placeholder="搜索聊天记录、关键词"
        />
      </view>
      <img class="info-s-refresh" src="../../static/info/refresh.png" alt="" />
    </view>
    <!-- 列表 -->
    <view class="info-content">
      <view class="info-c-cell">
        <img class="info-c-icon" src="../../static/info/zan.png" alt="" />
        <view class="info-c-c">
          <view class="info-c-c-txt">赞</view>
          <img class="info-c-arrow" src="../../static/my/arrow.png" alt="" />
        </view>
      </view>
      <view class="info-c-cell">
        <img class="info-c-icon" src="../../static/info/edit.png" alt="" />
        <view class="info-c-c">
          <view class="info-c-c-txt">评论</view>
          <img class="info-c-arrow" src="../../static/my/arrow.png" alt="" />
        </view>
      </view>
      <view class="info-c-cell">
        <img class="info-c-icon" src="../../static/info/bianzu.png" alt="" />
        <view class="info-c-c">
          <view class="info-c-c-txt">
            <view class="info-c-t">
              <view>小桃子</view>
              <view class="info-c-time">14:30</view>
            </view>
            <view class="info-c-t info-c-time info-c-actrel">
              [10条]女子将女儿交给保姆后3,女子将女儿交给保姆后3年…
            </view>
          </view>
          <img class="info-c-arrow" src="../../static/my/arrow.png" alt="" />
        </view>
      </view>

      <!-- 内容 -->
      <view class="info-c-cell" v-for="item in 5" :key="item" @click="handleToPage">
        <img class="info-c-icon" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F30%2F20160930000707_dQ2Zc.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654084650&t=bdcf554bb86654ddfeeb5e7ff76d6b86" alt="" />
        <view class="info-c-c">
          <view class="info-c-c-txt">
            <view class="info-c-t">
              <view>小桃子</view>
              <view class="info-c-time info-time-active">14:30</view>
            </view>
            <view class="info-c-t info-c-time info-c-actrel">
              很高兴认识你
            </view>
          </view>
          <img class="info-c-arrow" src="../../static/my/arrow.png" alt="" />
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
  },
  methods: {
    handleToPage() {
      uni.navigateTo({
        url: "/pages/info/detail"
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.info-content {
  padding: 0 14px 0 18px;
  .info-c-cell {
    display: flex;
    align-items: center;
    .info-c-c {
      flex: 1;
      border-bottom: 1px solid #e7e7e7;
      margin-left: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 76px;
      .info-c-t {
        width: 100%;
      }
      .info-c-c-txt {
        font-size: 15px;
        color: #333;
        display: flex;
        flex: 1;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-right: 8px;
        .info-c-t {
          justify-content: space-between;
          display: flex;
          margin-bottom: 3px;
        }
        .info-c-time {
          color: #999999;
          font-size: 12px;
          position: relative;
        }
        .info-time-active::before {
          content: "";
          position: absolute;
          right: -5px;
          top: -2px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #FF9191;
        }
      } 
      .info-c-arrow {
        height: 22px;
        width: 20px;
      }
      .info-c-actrel {
        width: 260px;
        height: auto;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .info-c-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
input::-webkit-input-placeholder {
  color: #999;
  font-size: 12px;
}
.info { 
  background: url("https://s1.ax1x.com/2022/06/09/XyE6T1.png") no-repeat;
  background-size: 269px 115px;
  overflow: hidden;
  padding-top:var(--status-bar-height);
}
.info-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 15px;
  margin: 15px 0;
  .info-s-refresh {
    height: 17px;
    width: 17px;
    margin-left: 20px;
  }
  .info-s-l {
    flex: 1;
    height: 30px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    border: 1px solid #ffdff5;
    display: flex;
    align-items: center;
    filter: blur(0px);
  }
  .info-s-txt {
    font-size: 12px;
    color: #333;
    line-height: 30px;
    flex: 1;
    padding: 0 10px;
  }
}
</style>