<script>
import Vue from "vue";
export default {
  onLaunch: function () {
    //  this.$store.commit('initApp');
    uni.onTabBarMidButtonTap(function (e) {
      uni.navigateTo({
        url: "/pages/add/index",
        animationType: "slide-in-bottom", // 动画类型
        animationDuration: 150, // 窗口动画持续时间，单位为 ms
        fail(err) {
          console.log(err);
        },
      });
    });
    uni.getSystemInfo({
      success: function (e) {
        // #ifndef MP
        Vue.prototype.StatusBar = e.statusBarHeight;
        if (e.platform == "android") {
          Vue.prototype.CustomBar = e.statusBarHeight + 50;
        } else {
          Vue.prototype.CustomBar = e.statusBarHeight + 45;
        }
        // #endif
        // #ifdef MP-WEIXIN
        Vue.prototype.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        Vue.prototype.Custom = custom;
        Vue.prototype.CustomBar =
          custom.bottom + custom.top - e.statusBarHeight;
        // #endif
        // #ifdef MP-ALIPAY
        Vue.prototype.StatusBar = e.statusBarHeight;
        Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
        // #endif
        Vue.mixin({
          data() {
            return {
              StatusBar: Vue.prototype.StatusBar,
              CustomBar: Vue.prototype.CustomBar,
            };
          },
        });
      },
    });
  },
};
</script>

<style lang="scss">
/* #ifndef APP-PLUS-NVUE */
@import "./style/main.css";
@import "./style/common.scss";
button {
  /*消除button的默认样式*/
  /*这种写法是对所有的button标签同时生效*/
  margin: 0px;
  padding: 0px;
  /*自定义边框*/
  border: 0px;
  /*消除默认点击蓝色边框效果*/
  outline: none;
  border-radius: none;
}
uni-button:after {
  border-radius: 0 !important;
}
image {
  max-width: inherit !important;
}
/* #endif */
</style>
