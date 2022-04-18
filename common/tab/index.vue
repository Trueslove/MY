<template>
  <view
    class="tabbar"
    :style="{ 'padding-bottom': paddingBottomHeight + 'upx' }"
  >
    <view
      class="tabbar-item"
      v-for="(item, index) in list"
      :key="index"
      @click="tabbarChange(item.pagePath)"
    >
      <image
        class="item-img"
        :class="index == 2 ? 'item-img-2' : ''"
        :src="item.selectedIconPath"
        v-if="current == index"
      ></image>
      <image
        class="item-img"
        :class="index == 2 ? 'item-img-2' : ''"
        :src="item.iconPath"
        v-else
      ></image>
      <view
        class="item-name"
        :class="{ tabbarActive: current == index }"
        v-if="item.text"
        >{{ item.text }}</view
      >
    </view>
  </view>
</template>

<script>
export default {
  props: {
    current: Number,
  },
  data() {
    return {
      paddingBottomHeight: 0, //苹果X以上手机底部适配高度
      list: [
        {
          pagePath: "/pages/home/index",
          iconPath: "/static/tab/home.png",
          selectedIconPath: "/static/tab/homeActive.png",
          text: "首页",
        },
        {
          pagePath: "/pages/maiCircle/index",
          iconPath: "/static/tab/qun.png",
          selectedIconPath: "/static/tab/qunActive.png",
          text: "广场",
        },
        {
          pagePath: "/pages/timeDoor/index",
          iconPath: "/static/tab/time.png",
          selectedIconPath: "/static/tab/timeActive.png",
          text: "发布",
        },
        {
          pagePath: "/pages/cloundHome/index",
          iconPath: "/static/tab/zu.png",
          selectedIconPath: "/static/tab/zuActive.png",
          text: "消息",
        },
        {
          pagePath: "/pages/mine/index",
          iconPath: "/static/tab/user.png",
          selectedIconPath: "/static/tab/userActive.png",
          text: "我的",
        },
      ],
    };
  },
  created() {
    let that = this;
    uni.getSystemInfo({
      success: function (res) {
        let model = ["X", "XR", "XS", "11", "12", "13", "14", "15"];
        model.forEach((item) => {
          //适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
          if (
            res.model.indexOf(item) != -1 &&
            res.model.indexOf("iPhone") != -1
          ) {
            that.paddingBottomHeight = 40;
          }
        });
      },
    });
  },
  watch: {},
  methods: {
    tabbarChange(path) {
      uni.switchTab({
        url: path,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
uni-view {
  overflow: initial;
  z-index: 10000;
}
.tabbarActive {
  color: #42abf1 !important;
}
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 125upx;
  background-color: #ffffff;
  overflow: initial;
  z-index: 10000;
  .tabbar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100upx;
    position: relative;
    .item-img {
      width: 40upx;
      height: 40upx;
      margin-bottom: 8upx;
    }
    .item-img-2 {
      width: 60upx;
      height: 74upx;
      margin-top: -32upx;
    }
    .item-name {
      font-size: 12upx;
      color: #bbbec5;
    }
    .item-txt-2 {
      margin-top: 40upx;
    }
  }
}
</style>