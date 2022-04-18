<template>
  <view class="ysj-wap">
    <view class="ysj">
      <view-tabbar :current="3"></view-tabbar>
      <!-- <view class="ysj-header">
        <span
          @click="handleChangeActive(0)"
          :class="activeIndex == 0 ? 'ysj-h-active' : ''"
          class="ysj-h-text ysj-h-text-r"
          style="padding: 0 10upx 0 30upx"
          >精华帖</span
        >
        <span
          @click="handleChangeActive(1)"
          :class="activeIndex == 1 ? 'ysj-h-active' : ''"
          style="padding: 0 30upx 0 10upx"
          class="ysj-h-text"
          >最新帖</span
        >
      </view> -->
      <view class="ysj-search-wap">
        <view class="ysj-search-xs">
          <span>我姓</span>
          <input
            class="ysj-search-input"
            confirm-type="search"
            @confirm="handleInput"
            type="text"
          />
        </view>
        <view class="ysj-tit-fb">快看一下本家在全国的分布吧……</view>
        <img
          class="ysj-search-img"
          src="https://hmqn.zhijingyuntech.cn/ysj_011.png"
        />
      </view>
      <view class="ysj-search-wap">
        <view class="ysj-tit-fb" style="left: 20upx"
          >来朝拜一下我的列祖先宗……</view
        >
        <view class="ysj-tit-fb ysj-tit-tzy">我的太祖爷原来是……</view>
        <img
          class="ysj-search-img"
          @click="handleToPage(1)"
          src="https://hmqn.zhijingyuntech.cn/ysj_02.png"
        />
      </view>
      <view class="ysj-footer-wap">
        <view class="ysj-private" @click="handleToPage(2)">
          <img
            class="ysj-img"
            src="https://hmqn.zhijingyuntech.cn/private005.png"
          />
        </view>
        <view class="ysj-btn-wap">
          <button class="ysj-btn" @click="handleToPage(3)">创 建</button>
          <button class="ysj-btn ysj-btn2" @click="handleToPage(3)">
            续 写
          </button>
          <button class="ysj-btn" @click="handleToPage(3)">寻根寻源</button>
        </view>
        <img
          class="ysj-footer-img"
          src="https://hmqn.zhijingyuntech.cn/ysjfooter.png"
        />
      </view>
    </view>
  </view>
</template>

<script>
import Tabbar from "../../common/tab/index.vue";
export default {
  components: { "view-tabbar": Tabbar },
  data() {
    return {
      activeIndex: 0,
    };
  },
  onShow() {
    uni.hideTabBar({
      animation: false,
    });
  },
  methods: {
    handleToPage(type) {
      switch (type) {
        case 1:
          uni.navigateTo({
            url: "/pages/cloundHome/clanHall/index",
          });
          break;
        case 2:
          uni.navigateTo({
            url: "/pages/cloundHome/familyTree/index",
          });
          break;
        case 3:
          uni.navigateTo({
            url: "/pages/notice/index",
          });
          break;
      }
    },
    handleInput(e) {
      let value = e.detail.value;
      let surname = [
        "赵",
        "钱",
        "孙",
        "李",
        "周",
        "吴",
        "郑",
        "王",
        "冯",
        "陈",
        "褚",
        "程",
        "崔",
        "刘",
        "张",
        "杨",
        "黄",
        "高",
        "马",
        "卢",
        "韩",
        "田",
        "董",
        "许",
        "孟",
        "范",
        "孔",
        "习",
        "贺",
        "毛",
        "邓",
      ];
      let target = surname.filter((item) => {
        return value == item;
      });
      clearTimeout();
      setTimeout(() => {
        if (target.length > 0) {
          uni.navigateTo({
            url: "/pages/cloundHome/cloundDetail/index?sur=" + value,
          });
        } else {
          uni.showModal({
            title: "温馨提醒",
            content: "该姓氏暂未录入，尽情期待...",
            showCancel: false,
            confirmText: "确定",
          });
        }
      });
      this.activeIndex = value;
    },
    handleChangeActive(index) {
      uni.switchTab({
        url: "/pages/home/index",
      });
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="scss">
.ysj-search-wap {
  padding: 0 18upx;
  margin-top: 47upx;
  position: relative;
  .ysj-search-img {
    width: 100%;
    height: 391upx;
  }
  .ysj-search-xs {
    position: absolute;
    top: 50upx;
    left: 60upx;
    display: flex;
    z-index: 1;
  }
  .ysj-search-input {
    width: 80upx;
    height: 40upx;
    line-height: 40upx;
    border: 2upx solid #999;
    margin-left: 10upx;
    padding: 0 10upx;
    background: #f5f55f;
  }
  .ysj-tit-fb {
    position: absolute;
    top: 40upx;
    right: 40upx;
    z-index: 1;
  }
  .ysj-tit-tzy {
    right: 35upx;
    top: 40upx;
    width: 160upx;
  }
}
.ysj-wap {
  background: #fff;
  height: calc(100vh - 62px);
  overflow-y: hidden;
}
.ysj {
  height: 100%;
  overflow-y: scroll;
}
.ysj-btn-wap {
  display: flex;
  justify-content: center;
  margin: 20upx auto 0;
  position: absolute;
  width: 100%;
  z-index: 10;
  .ysj-btn {
    width: 180upx;
    height: 60upx;
    line-height: 60upx;
    text-align: center;
    background: #fff;
    border-radius: 0;
    color: #162060;
    font-size: 30upx;
  }
  .ysj-btn2 {
    margin: 0 20upx;
  }
}
.ysj-header {
  display: inline-block;
  margin: 55upx 0 0 30upx;
  background: #ffffff;
  border: 2upx solid #c4284d;
  opacity: 1;
  border-radius: 8upx;
  .ysj-h-text {
    font-size: 20upx;
    line-height: 40upx;
    color: #707070;
  }
  .ysj-h-active {
    color: #c4284d;
    font-weight: bold;
  }
  .ysj-h-text-r::after {
    content: "|";
    margin-left: 25upx;
  }
}
.ysj-private {
  margin-top: 92upx;
  padding: 0 50upx;
  height: 216upx;
}
.ysj-img {
  width: 100%;
  height: 216upx;
}
.ysj-footer-wap {
  position: relative;
}
.ysj-footer-img {
  width: 100%;
  position: absolute;
  top: 194upx;
  z-index: 1;
}
</style>