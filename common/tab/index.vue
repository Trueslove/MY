<template>
  <!-- :style="{ 'padding-bottom': paddingBottomHeight + 'upx' }" -->

  <view class="tabbar">
    <view
      class="tabbar-item"
      v-for="(item, index) in list"
      :key="index"
      @click="tabbarChange(item)"
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
          text: "广场",
        },
        {
          pagePath: "/pages/diary/index",
          iconPath: "/static/tab/diary.png",
          selectedIconPath: "/static/tab/diaryActive.png",
          text: "私密日记",
        },
        {
          pagePath: "/pages/add/index",
          iconPath: "/static/tab/add.png",
          selectedIconPath: "/static/tab/add.png",
          text: "广场",
        },
        {
          pagePath: "/pages/info/index",
          iconPath: "/static/tab/info.png",
          selectedIconPath: "/static/tab/infoActive.png",
          text: "消息",
        },
        {
          pagePath: "/pages/my/index",
          iconPath: "/static/tab/my.png",
          selectedIconPath: "/static/tab/myActive.png",
          text: "我的",
        },
      ],
    };
  },
  created() {
    // let that = this;
    // uni.getSystemInfo({
    //   success: function (res) {
    //     let model = ["X", "XR", "XS", "11", "12", "13", "14", "15"];
    //     model.forEach((item) => {
    //       //适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
    //       if (
    //         res.model.indexOf(item) != -1 &&
    //         res.model.indexOf("iPhone") != -1
    //       ) {
    //         that.paddingBottomHeight = 40;
    //       }
    //     });
    //   },
    // });
  },
  watch: {},
  methods: {
    tabbarChange(row) {
      uni.setNavigationBarTitle({ title: row.text });
      uni.switchTab({
        url: row.pagePath,
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
  height: calc(100 + safe-area-inset-bottom) upx;
  background-color: #ffffff;
  overflow: initial;
  z-index: 10000;
  .tabbar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100 + safe-area-inset-bottom) upx;
    position: relative;
    padding-bottom: constant(safe-area-inset-bottom); //兼容 IOS<11.2
    padding-bottom: env(safe-area-inset-bottom); //兼容 IOS>11.2
    .item-img {
      width: 50upx;
      height: 50upx;
      margin-bottom: 6upx;
    }
    .item-img-2 {
      width: 84upx;
      height: 84upx;
      margin-top: -32upx;
    }
    .item-name {
      font-size: 24upx;
      color: #333;
    }
    .item-txt-2 {
      margin-top: 40upx;
    }
  }
}
</style>