<template>
  <view class="mine">
    <view-tabbar :current="4"></view-tabbar>
    <!---------- 头部 ---------->
    <view class="mine-self-wap">
      <img
        class="mine-self-img"
        src="https://hmqn.zhijingyuntech.cn/head4.png"
        alt=""
      />
      <view class="mine-self-txt">
        <view style="font-size: 30upx">西楚布衣</view>
        <view style="color: #999">ID: 1111</view>
      </view>
    </view>

    <view class="mine-flex-wap">
      <view class="mine-flex-item" @click="handleTopage(1)">
        <img class="mine-flex-img" src="https://hmqn.zhijingyuntech.cn/home/wdyj.png" alt="" />
        <view class="mine-flex-txt">我的印记</view>
      </view>
      <view class="mine-flex-item" @click="handleTopage">
        <img class="mine-flex-img" src="https://hmqn.zhijingyuntech.cn/home/sc.png" alt="" />
        <view class="mine-flex-txt">我的收藏</view>
      </view>
      <view class="mine-flex-item" @click="handleTopage">
        <img class="mine-flex-img" src="https://hmqn.zhijingyuntech.cn/home/ll.png" alt="" />
        <view class="mine-flex-txt">浏览记录</view>
      </view>
      <view class="mine-flex-item" @click="handleTopage">
        <img class="mine-flex-img" src="https://hmqn.zhijingyuntech.cn/home/dy.png" alt="" />
        <view class="mine-flex-txt">我的发布</view>
      </view>
    </view>
    <view class="mine-cell" style="margin-top: 10upx" @click="handleTopage">
      <view class="mine-cell-l">
        <img class="mine-cell-l-icon" src="https://hmqn.zhijingyuntech.cn/home/help.png" alt="" />
        <span>账号与安全</span>
      </view>
      <view class="mine-cell-r">
        <img
          class="mine-cell-r-icon"
          src="../../static/home/arrowR.png"
          alt=""
        />
      </view> </view
    ><view class="mine-cell" @click="handleTopage">
      <view class="mine-cell-l">
        <img class="mine-cell-l-icon" src="https://hmqn.zhijingyuntech.cn/home/fk.png" alt="" />
        <span>意见反馈</span>
      </view>
      <view class="mine-cell-r">
        <img
          class="mine-cell-r-icon"
          src="../../static/home/arrowR.png"
          alt=""
        />
      </view>
    </view>
    <view class="mine-cell" @click="handleTopage">
      <view class="mine-cell-l">
        <img class="mine-cell-l-icon" src="https://hmqn.zhijingyuntech.cn/home/gy.png" alt="" />
        <span>关于MY+</span>
      </view>
      <view class="mine-cell-r">
        <img
          class="mine-cell-r-icon"
          src="../../static/home/arrowR.png"
          alt=""
        />
      </view>
    </view>
    <view class="mine-cell" @click="handleTopage">
      <view class="mine-cell-l">
        <img class="mine-cell-l-icon" src="https://hmqn.zhijingyuntech.cn/home/gy.png" alt="" />
        <span>退出登录</span>
      </view>
      <view class="mine-cell-r">
        <img
          class="mine-cell-r-icon"
          src="../../static/home/arrowR.png"
          alt=""
        />
      </view>
    </view>
    <img class="mine-kf" src="https://hmqn.zhijingyuntech.cn/home/kf.png" @click="handleTopage" alt="" />
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
    handleChangeActive(index) {
      this.activeIndex = index;
    },
    handleTopage(type) {
      if (type == 1) {
        uni.navigateTo({
          url: "/pages/mine/footprint/index",
        });
      } else {
        uni.navigateTo({
          url: "/pages/notice/index",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mine-flex-wap {
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10upx;
  padding: 20upx 0;
  .mine-flex-item {
    padding: 20upx 0;
    text-align: center;
    .mine-flex-img {
      width: 90upx;
      height: 90upx;
    }
    .mine-flex-txt {
      text-align: center;
    }
  }
}
.mine-kf {
  position: fixed;
  z-index: 100;
  right: 20upx;
  bottom: 200upx;
  width: 80upx;
  height: 80upx;
  text-align: center;
}
.mine-cell {
  background: #fff;
  // border-bottom: 2upx solid #cecece;
  line-height: 80upx;
  display: flex;
  justify-content: space-between;
  padding: 0 30upx;
  border-bottom: 1upx solid #ebeaea;
  .mine-cell-l {
    display: flex;
    align-items: center;
    .mine-cell-l-icon {
      width: 30upx;
      height: 30upx;
      margin-right: 15upx;
    }
  }
  .mine-cell-r {
    .mine-cell-l-icon {
      width: 30upx;
      height: 30upx;
    }
    .mine-cell-r-icon {
      width: 15upx;
      height: 30upx;
      margin-right: 15upx;
    }
  }
}
.mine-cell:last-child {
  border-bottom: none;
}

.mine-c-cell-wap {
  padding-left: 54upx;
  .mine-cell {
    display: flex;
    margin-top: 30upx;
    .mine-cell-l {
      position: relative;
      .mine-cell-l-img {
        height: 160upx;
        width: 160upx;
        border-radius: 20upx;
      }
      .mine-cell-l-mark {
        position: absolute;
        display: inline-block;
        top: 0;
        left: 0;
        color: #fff;
        font-size: 14upx;
        height: 40upx;
        padding: 0 20upx 0 15upx;
        line-height: 40upx;
        border-radius: 20upx 0 40upx 0;
        background: #2cad89;
        background: linear-gradient(to right, #2cad89, #74d5b4);
      }
    }
    .mine-cell-r {
      flex: 1;
    }
    .mine-cell-close {
      width: 20upx;
      height: 20upx;
    }
  }
}
.mine-self-wap {
  width: 100%;
  height: 230rpx;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-bottom: 1upx solid #f7f1f1;
  .mine-self-txt {
    margin-left: 20upx;
  }
}
.mine-self-img {
  height: 160upx;
  width: 160upx;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 50upx;
}
.mine-self-wap::after {
  content: "";
  width: 100%;
  height: 230upx;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background: #fff;
}
</style>