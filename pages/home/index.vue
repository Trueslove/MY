<template>
  <view class="home">
    <view-tabbar :current="0"></view-tabbar>
    <!---------------- 头部 ------------------>
    <view class="home-header">
      <view class="home-header-swiper">
        <swiper
          class="home-swiper"
          :indicator-dots="indicatorDots"
          :autoplay="autoplay"
          :interval="interval"
          :duration="duration"
        >
          <swiper-item>
            <img
              class="home-swiper"
              @click="handleToPageDetail(0)"
              src="https://hmqn.zhijingyuntech.cn/swiper1.png"
            />
          </swiper-item>
          <swiper-item>
            <img
              @click="handleToPageDetail(1)"
              class="home-swiper"
              src="https://hmqn.zhijingyuntech.cn/swiper2.png"
            />
          </swiper-item>
          <swiper-item>
            <img
              class="home-swiper"
              @click="handleToPageDetail(2)"
              src="https://hmqn.zhijingyuntech.cn/swiper3.png"
            />
          </swiper-item>
        </swiper>
        <!-- 查询 -->
        <view class="home-h-search">
          <view class="home-h-s-flex">
            <img
              class="home-h-log"
              src="https://hmqn.zhijingyuntech.cn/LOGO_02.png"
              alt=""
            />
            <view class="home-h-s-f-input">
              <input
                class="home-search-input"
                v-model="searchValue"
                type="text"
              />
              <img
                class="home-search-icon"
                src="../../static/home/seach.png"
                alt=""
              />
            </view>
          </view>
        </view>
      </view>
    </view>
    <!---------------- 中华五千年 ------------------>
    <view class="home-zh-5">
      <view class="home-zh-top" @click="handleToPage(1)">
        <img
          class="home-zh-top-img"
          style="width: 1780upx"
          src="https://hmqn.zhijingyuntech.cn/main_bar1.png"
          alt=""
        />
      </view>
      <img
        class="home-zh-btm"
        src="https://hmqn.zhijingyuntech.cn/main_back1.png"
        alt=""
      />
    </view>
    <!---------------- 穿越去 ——> ------------------>
    <view class="home-zh-5 home-cy">
      <view class="home-cy-tit"
        ><span> 穿越去</span>
        <img class="home-cy-tit-icon" src="../../static/home/arrow.png" alt=""
      /></view>
      <view class="home-cy-top" @click="handleToPage(2)">
        <img
          class="home-zh-top-img"
          style="width: 1380upx"
          src="https://hmqn.zhijingyuntech.cn/cyq1.png"
          alt=""
        />
      </view>
    </view>
    <view class="home-footer" @click="handleToPageTime">
      <img
        class="home-footer-img"
        src="https://hmqn.zhijingyuntech.cn/tj2.png"
        alt=""
      />
    </view>
    <view class="home-footer">
      <img
        class="home-footer-img"
        src="https://hmqn.zhijingyuntech.cn/tj1.png"
        alt=""
      />
    </view>
  </view>
</template>

<script>
import Tabbar from "../../common/tab/index.vue";
export default {
  components: {
    "view-tabbar": Tabbar,
  },
  data() {
    return {
      searchValue: "初一历史 5+3",
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
    };
  },
  onShow() {
    uni.hideTabBar({
      animation: false,
    });
  },
  methods: {
    handleToPageTime() {
      uni.setStorageSync('isFromHome','1')
      uni.switchTab({
        url: "/pages/timeDoor/index?type=timeSplit",
      });
    },
    handleToPageDetail(type) {
      uni.navigateTo({
        url: "/pages/detail/index?type=" + type,
      });
    },
    handleToPage(type) {
      switch (type) {
        case 1:
          uni.switchTab({
            url: "/pages/timeDoor/index",
          });
          break;
        case 2:
          uni.switchTab({
            url: "/pages/cloundHome/index",
          });
          break;
        default:
          uni.navigateTo({
            url: "/pages/notice/index",
          });
          break;
      }
    },
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
    },
    intervalChange(e) {
      this.interval = e.target.value;
    },
    durationChange(e) {
      this.duration = e.target.value;
    },
  },
};
</script>
<style lang="scss">
.home {
  height: calc(100vh - 62px);
  overflow-y: scroll;
}
.home-footer {
  margin-top: 43upx;
  padding: 0 20upx;
  .home-footer-img {
    width: 100%;
    height: 190upx;
  }
}
.home-zh-5 {
  position: relative;
  margin-top: 20upx;
  .home-zh-top {
    width: 100%;
    overflow-x: scroll;
    position: absolute;
    top: 0;
    padding: 0 20upx;
    .home-zh-top-img {
      height: 154upx;
    }
  }
  .home-zh-btm {
    margin-top: 87upx;
    width: 100%;
    z-index: -1;
    height: 192upx;
  }
}
.home-cy-tit-icon {
  width: 20upx;
  height: 14upx;
  margin-left: 10upx;
}
.home-cy {
  margin-top: 20upx;
  .home-cy-tit {
    padding: 0 0 10upx 20upx;
    color: #262626;
    font-size: 30upx;
  }
  .home-cy-top {
    width: 100%;
    overflow-x: scroll;
    padding: 0 20upx;
  }
  .home-zh-top-img {
    height: 154upx;
  }
}
.home-header {
  .home-header-swiper {
    position: relative;
  }
  .home-h-search {
    width: 100%;
    position: absolute;
    top: 0;
    .home-h-s-flex {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      position: relative;
    }
    .home-h-s-f-input {
      margin: 50upx 100upx 0 0;
      width: 300upx;
      height: 48upx;
      border-radius: 24upx;
      background: rgba($color: #ffffff, $alpha: 0.4);
      display: flex;
      align-items: center;
      padding: 0 20upx;
      .home-search-input {
        height: 100%;
        line-height: 48upx;
        color: #ffffff;
        font-size: 28upx;
      }
      .home-search-icon {
        margin-left: 10upx;
        width: 30upx;
        height: 22upx;
      }
    }
    .home-h-log {
      margin-top: 50upx;
      width: 100upx;
      height: 100upx;
      position: absolute;
      left: 55upx;
    }
  }
  .home-swiper {
    width: 100%;
    height: 432upx;
    object-fit: cover;
    .home-swiper {
      height: 100%;
      width: 100%;
    }
  }
}
</style>