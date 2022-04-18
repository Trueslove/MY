<template>
  <view
    class="container time-door"
    @touchstart="onDynastyTouchStart"
    @touchend="onDynastyTouchMove"
  >
    <view-tabbar :current="2"></view-tabbar>
    <view v-if="!isShowTimeSplit" style="height: 100%;">
      <img
        class="time-door__bg"
        src="https://hmqn.zhijingyuntech.cn/timeDoor/bg.png"
        alt=""
      />
      <img
        class="time-door__chinese__bg"
        v-show="active.categoryIndex === ''"
        src="https://hmqn.zhijingyuntech.cn/timeDoor/bg_chinese.png"
        alt=""
      />
      <movable-area
        scale-area
        class="time-door__dynasty__fake"
        v-if="fake_dynasty"
      >
        <movable-view
          class="movable-view"
          direction="vertical"
          @scale="onScale"
          scale="true"
          scale-min="1"
          scale-max="1.7"
          :scale-value="scale"
          @dblclick="onScale"
        >
          <img src="https://hmqn.zhijingyuntech.cn/timeDoor/dynasty.png" alt="" />
        </movable-view>
      </movable-area>
      <view
        class="time-door__dynasty"
        v-else
      >
        <view class="time-door__dynasty__years">
          <view
            :class="[{ chinese: !item.val, chinese2: item.val < -2700 }]"
            v-for="(item, index) in years"
            :key="index"
            >{{ item.name }}</view
          >
        </view>
        <view class="time-door__dynasty__colors">
          <view v-for="(item, index) in dynastys" :key="index">
            <view
              class="col-block"
              :style="{
                height: calculateHeight(item),
                background: item.color,
              }"
            ></view>
          </view>
        </view>
        <view class="time-door__dynasty__chinesewrap">
          <view
            :class="[
              'name',
              {
                active: active.dynastyIndex === index,
                oneName: item.nameNum === 1,
                threeName: item.nameNum === 3,
                fourName: item.nameNum === 4,
              },
            ]"
            v-for="(item, index) in dynastys"
            :key="index"
            :style="{
              borderColor: item.color,
              top: calculateTop(index) + 'rpx',
              borderWidth: item.name ? '4upx' : 0
            }"
            @click="handleChooseDynasty(item, index)"
            >{{ item.name }}</view
          >
        </view>
      </view>
      <view class="time-door-movable-view-block">
        <view class="movable-view-right movable-right-block">
          <view class="movable-view-right-txt">
            时光切片
          </view>
        </view>
      </view>
      <view class="time-door__categorys__wrap">
        <view class="time-door__categorys">
          <view
            :class="[
              'time-door__category',
              { active: active.categoryIndex === index },
            ]"
            v-for="(item, index) in categorys"
            :key="index"
            @click="handleChooseCategory(item, index)"
          >
            <text>{{ item.name[0] }}</text>
            <text>{{ item.name[1] }}</text>
          </view>
        </view>
      </view>
      <dynasty-content
        v-if="active.dynastyName === '' || !specials.includes(active.dynastyName)"
        :name="active.dynastyName"
        :type="active.type"
        :from="active.dynasty.from"
        :to="active.dynasty.to"
      ></dynasty-content>
      <ancient-time v-else :type="active.dynastyName"></ancient-time>
    </view>
    <time-split v-else @handleHideSplit="isShowTimeSplit = false" :screenScale="screenScale"></time-split>
  </view>
</template>

<script>
import Tabbar from "../../common/tab/index.vue";
import dynastyContent from "./dynasty-content.vue";
import ancientTime from "./ancientTime.vue";
import dynastys from "./data/dynasty";
import timeSplit from './time-split.vue'
export default {
  components: { dynastyContent, "view-tabbar": Tabbar, ancientTime, timeSplit },
  name: "timedoor",
  data() {
    return {
      scale: 1,
      dynastys: dynastys,
      screenScale: 0,
      years: [],
      categorys: [
        { name: "帝王", id: 1 },
        { name: "名臣", id: 2 },
        { name: "名仕", id: 3 },
        { name: "典故", id: 4 },
        { name: "科技", id: 5 },
        { name: "艺术", id: 6 },
        { name: "文化", id: 7 },
      ],
      active: {
        dynasty: {},
        dynastyIndex: "",
        dynastyName: "",
        categoryIndex: "",
        type: "",
      },
      fake_dynasty: false,
      specials: ["旧石器", "新石器", "金石并用", "青铜器"],
      isShowTimeSplit: false
    };
  },
  onShow() {
    this.screenScale = this.handleCalculateScreenScale()
    console.log('aaa', this.screenScale);
    this.handleJumpPage()
    uni.hideTabBar({
      animation: false,
    });
  },
  onLoad(options) {
    this.handleJumpPage()
    this.years = ((from, to, space) => {
      const arr = [];
      for (let i = 0, len = Math.abs(from - to) / space; i <= len; i++) {
        if (i === 0) {
          arr.push({ name: "前300万年", val: -3200 });
        } else if (i === 1) {
          arr.push({ name: "前1万年", val: -2800 });
        } else {
          const temp = Math.abs(from) - i * space;
          if (temp === 0) {
            arr.push({ name: "公元", val: 0 });
          } else if (temp < 0) {
            arr.push({ name: -temp, val: -temp });
          } else {
            arr.push({ name: -temp, val: -temp });
          }
        }
      }
      return arr;
    })(-2600, 2000, 100);
  },
  methods: {
    handleCalculateScreenScale () {
      let screenScale = 0
      uni.getSystemInfo({
        success: function (res) {
          screenScale = 750 / res.screenWidth
        }
      });
      return screenScale
    },
    handleJumpPage () {
      if (uni.getStorageSync('isFromHome')) {
        this.isShowTimeSplit = true
        uni.removeStorageSync('isFromHome')
      }
    },
    calculateHeight(ob) {
      ob.height =
        (Math.abs(Number(ob.newFrom || ob.from) - Number(ob.newTo || ob.to)) /
          100) *
          Math.floor(25 * (2 / this.screenScale)) * this.screenScale;
      return String(ob.height) + "rpx";
    },
    calculateTop(index) {
      return this.dynastys.slice(0, index + 1).reduce((data, item, i) => {
        if (i === index) {
          data = Number(data) + item.height / 2 - 6;
        } else {
          data = Number(data) + item.height;
        }
        return data.toFixed(2);
      }, 0);
    },
    handleChooseDynasty(data, index) {
      this.active.type = "帝王";
      this.active.dynastyIndex = index;
      this.active.dynasty = data;
      this.active.dynastyName = data.name;
      this.handleChooseCategory(this.categorys[0], 0);
    },
    handleChooseCategory(data, index) {
      if (this.active.dynastyIndex === "") return;
      this.active.type = data.name;
      this.active.categoryIndex = index;
    },
    onScale() {
      setTimeout(() => {
        this.fake_dynasty = false;
      }, 100);
    },
    onDynastyTouchStart(e) {
      this.dynastyClientX = e.changedTouches[0].clientX;
      
    },
    onDynastyTouchMove(e) {
      if (this.dynastyClientX - e.changedTouches[0].clientX > 60) {
        this.isShowTimeSplit = true
      }
    },
  },
};
</script>

<style lang="scss">
.container {
  background: #001230;
  height: calc(100vh - 124upx);
}
.time-door {
  position: relative;
  &__bg {
    width: 100%;
    height: 100%;
  }
  &__chinese__bg {
    position: absolute;
    top: 160upx;
    right: 175upx;
    width: 136upx;
    height: 760upx;
  }
  .time-door__categorys__wrap {
    position: fixed;
    top: 30upx;
    right: -14upx;
    width: 90upx;
    height: calc(100vh - 174upx);
    animation: hideToShow2 3s;
  }

  &__categorys {
    position: absolute;
    top: 0;
    right: 0;
    overflow-y: scroll;
    height: 100%;
    view {
      width: 68upx;
      height: 180upx;
      border: 2upx solid;
      box-sizing: border-box;
      border-radius: 10upx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #000;
      color: #cccdce;
      & + view {
        margin-top: 16upx;
      }
      &.active {
        color: #efcc01;
        background: #390814;
      }
    }
    text {
      font-size: 28upx;
      & + text {
        margin-top: 30upx;
      }
    }
  }
  .movable-view {
    width: 150upx;
    height: 1532upx;
    position: relative;
    img {
      width: 100%;
      height: 1552upx;
    }
  }
  .time-door-movable-view-block{
    position: fixed;
    right: 0upx;
    top: 35%;
    width: 180upx;
    height: 320upx;
    overflow: hidden;
    .movable-view-right {
      position: absolute;
      right: 78upx;
      opacity: 1;
      border: 160upx solid transparent;
      border-right: 100upx solid rgba($color: #fff, $alpha: .3);
      width: 0;
      height: 0;
      z-index: -1;
      margin-left: -10upx;
    }
    .movable-right-block {
      animation-name: hideToShowRight; /*动画的名称*/
      animation-duration: 7s; /*动画时间*/
      animation-iteration-count: infinite; /*动作循环的次数：infinite 无限循环*/
    }
    @keyframes hideToShowRight {
      0% {
        right: 40upx;
        opacity: 0;
      }
      42.9% {
        right: 40upx;
        opacity: 0;
      }
      71.4% {
        right: 78upx;
        opacity: 1;
      }
      100% {
        right:40upx;
        opacity: 0;
      }
    }
    .movable-view-right::after {
      content: "";
      position: absolute;
      right: -700upx;
      top: -120upx;
      width: 600upx;
      height: 240upx;
      background: rgba($color: #fff, $alpha: .3);
    }
    .movable-view-right-txt {
      width: 40upx;
      margin: -72upx 0 0 60upx;
      color: #fff;
    }
  }
  .animated {
    animation-duration: 2s; /*动画时间*/
    animation-fill-mode: both; /*播放后的状态*/
    display: flex;
    align-items: center;
  }

  .animated {
    animation-iteration-count: infinite; /*动作循环的次数：infinite 无限循环*/
  }

  .animated {
    animation-duration: 1s; /*动画时间*/
  }

  .up,
  .around {
    height: 90%;
    font-family: "微软雅黑";
    font-size: 40upx;
    line-height: 90%;
  }
  .around {
    width: 10%;
  }

  .up {
    animation-name: upAnimation; /*动画的名称*/
    transform-origin: center bottom; /*设置动画旋转元素的基点为*/
    cursor: pointer;
  }
  .around {
    animation-name: aroundAnimation; /*动画的名称*/
    transform-origin: center bottom; /*设置动画旋转元素的基点为*/
    cursor: pointer;
  }
  @keyframes aroundAnimation {
    0% {
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0);
    }
    20% {
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(5upx, 0, 0);
    }
    40% {
      transition-timing-function: cubic-bezier(0.755, 0.5, 0.855, 0.06);
      transform: translate3d(10upx, 0, 0);
    }
    50% {
      transition-timing-function: cubic-bezier(0.755, 0.5, 0.855, 0.06);
      transform: translate3d(15upx, 0, 0);
    }
    60% {
      transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(10upx, 0upx, 0);
    }
    80% {
      transform: translate3d(5upx, 0, 0);
    }
    100% {
      display: none;
      transform: translate3d(0, 0, 0);
    }
  }

  &__dynasty__fake {
    position: fixed;
    width: 260upx;
    height: calc(100vh - 124upx);
    z-index: 1000;
    top: 0;
    left: 0;
    overflow-y: scroll;
    animation: hideToShow 3s;
  }

  &__dynasty {
    position: fixed;
    display: flex;
    height: calc(100vh - 124upx);
    z-index: 1000;
    top: 0;
    left: 0;
    overflow-y: scroll;
    animation: hideToShow 3s;
    &__years {
      width: 70upx;
      view {
        padding-left: 6upx;
        height: 50upx;
        font-size: 22upx;
        font-weight: bold;
        background: #fff;
        &.chinese {
          letter-spacing: 0;
          color: #ff1515;
          text-shadow: 0 0 #ff1515;
          font-weight: bolder;
          margin-top: -10upx;
        }
        &.chinese2 {
          padding-left: 2upx;
          padding-top: 40upx;
          box-sizing: border-box;
          letter-spacing: 0;
          height: 192upx;
        }
        &:last-child {
          height: 40upx;
        }
      }
    }
    &__colors {
      position: relative;
      z-index: 5;
      .col-block {
        width: 60upx;
      }
    }
    &__chinesewrap {
      position: relative;
      width: 130upx;
      .name {
        position: absolute;
        left: -20upx;
        transform: translateY(-50%);
        font-size: 26upx;
        letter-spacing: 10upx;
        text-indent: 8upx;
        border: 4upx solid;
        padding: 5upx 4upx;
        border-radius: 30upx;
        min-width: 110upx;
        line-height: 30upx;
        text-align: center;
        color: #fff;
        &.active {
          background: #fff;
          color: rgb(233, 74, 193) !important;
          border-color: rgb(233, 74, 193) !important;
          z-index: 10;
        }
        &.oneName {
          min-width: 80upx;
          left: -20upx;
        }
        &.threeName {
          left: -20upx;
          letter-spacing: 6upx;
          min-width: 140upx;
        }
        &.fourName {
          left: -20upx;
          text-indent: 4upx;
          letter-spacing: 2upx;
          min-width: 150upx;
        }
      }
    }
  }
  @keyframes hideToShow {
    0% {
      left: -260upx;
    }
    30% {
      left: -260upx;
    }
    100% {
      left: 0upx;
    }
  }
  @keyframes hideToShow2 {
    0% {
      right: -90upx;
    }
    30% {
      right: -90upx;
    }
    100% {
      right: -14upx;
    }
  }
}
</style>