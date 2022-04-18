<template>
  <view class="time-door__time-split"
    @touchstart="onDynastyTouchStart"
    @touchend="onDynastyTouchMove"
  >
    <view-tabbar :current="2"></view-tabbar>
    <img
      src="https://hmqn.zhijingyuntech.cn/timeDoor/bg.png"
      alt=""
      class="bg"
    />
    <img
      class="time-split__chinese__bg"
      v-if="fake_dynasty"
      src="https://hmqn.zhijingyuntech.cn/timeDoor/bg_chinese.png"
      alt=""
    />
    <movable-area
      scale-area
      class="time-split__dynasty__fake"
      v-if="fake_dynasty"
    >
      <movable-view
        class="movable-view"
        direction="vertical"
        @scale="onScale"
        scale="true"
        scale-min="1"
        scale-max="1.4"
        :scale-value="scale"
        @dblclick="onScale"
      >
        <img
          src="https://hmqn.zhijingyuntech.cn/timeDoor/time_split_left.png"
          alt=""
        />
      </movable-view>
    </movable-area>
    <view class="wrap" v-else>
      <view class="time-split__dynasty__wrap">
        <view class="time-split__dynasty__cursor_wrap">
          <img
            @touchstart="touchStart"
            @touchend="touchEnd"
            @touchmove.stop="touchMove"
            class="time-split__dynasty--cursor"
            :style="{ top: cursorImgTop + 'rpx' }"
            src="https://hmqn.zhijingyuntech.cn/timeDoor/cursor.png"
            alt=""
          />
        </view>
        <scroll-view
          class="time-split__dynasty__content"
          scroll-y="true"
          scroll-x="true"
          :scroll-top="1100"
          :throttle="false"
          @scroll="handleScroll"
          @click="handleClick"
        >
          <view
            class="time-split__dynasty"
            v-for="(item, i) in dynastys"
            :key="i"
            :style="{
              width: `${
                item.width === '100%' ? item.width : item.width + 'rpx'
              }`,
              height: `${item.height}rpx`,
              left: `${item.left}rpx`,
              top: `${item.top}rpx`,
              background: `${item.color}`,
            }"
          >
            <text>{{ item.name }}</text>
          </view>
        </scroll-view>
      </view>
      <view class="movable-view-block">
        <view class="movable-view-right movable-right-block">
          <view class="movable-view-right-txt">
            时间门
          </view>
        </view>
      </view>
      <view class="time-split__detail"
      >
        <view class="time-split__detail__title">
          <img
            src="https://hmqn.zhijingyuntech.cn/timeDoor/time_siplit_title.png"
            alt=""
          />
        </view>
        <swiper class="time-split__detail__map" :current="currentMap">
          <swiper-item v-for="(item, i) in curDynasty.imgs" :key="i">
            <img class="home-swiper" :src="item" />
          </swiper-item>
        </swiper>
        <view class="time-split__detail__decribe">
          <view class="time-split__detail__decribe__title">{{
            curDynasty.title || curDynasty.name
          }}</view>
          <view
            class="time-split__detail__decribe__subtitle"
            :style="{ opacity: curDynasty.from ? 1 : 0 }"
          >
            <text class="park">公元</text>
            <text :class="['year', { scope: curSplitContent}]">{{ curDynasty.curYear }}</text>
            年
          </view>
          <view
            class="time-split__detail__decribe__ruler"
            :style="{ opacity: curDynasty.from ? 1 : 0 }"
          >
            <img
              class="cursor_position"
              src="https://hmqn.zhijingyuntech.cn/timeDoor/cursor_position.png"
              alt=""
              :style="{ left: rulerImgLeft }"
              @touchstart="rulerTouchStart"
              @touchend="rulerTouchEnd"
              @touchmove="rulerTouchMove"
            />
            <img
              class="ruler"
              src="https://hmqn.zhijingyuntech.cn/timeDoor/time_axis.png"
            />
            <text class="time-split__detail__decribe__ruler--year">{{
              curDynasty.from
            }}</text>
            <text class="time-split__detail__decribe__ruler--year right">{{
              curDynasty.to
            }}</text>
          </view>
          <view
            class="time-split__detail__decribe__text"
            v-if="!curDynasty.describtion"
          >
            <view class="time-split__detail__decribe__text__book"
              >《华脉》</view
            >
            <view class="time-split__detail__decribe__text__content"
              >多维度展示中华大历史</view
            >
            <view class="time-split__detail__decribe__text__subtitle"
              >（文字需替换）</view
            >
          </view>
          <view class="time-split__detail__decribe__text" v-else>
            <view class="time-split__detail__decribe__text__content">
              <view v-for="(p, i) in curDynasty.describtion.split('\n')" :key="i">
                <view class="pre" v-if="p">{{ p }}</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import splitDynastys from "./data/split_dynastys.js";
import SplitContents from './data/split_content';
import Tabbar from "../../common/tab/index.vue";
export default {
  components: { "view-tabbar": Tabbar },
  data() {
    return {
      scrollTop: 0,
      cursorImgTop: 474,
      totalCursorImgTop: 2600,
      rulerImgLeft: 0,
      rulerImgLeftEnd: 0,
      currentMap: 0,
      dynastys: splitDynastys,
      splitContents: SplitContents,
      fake_dynasty: false,
      scale: 1,
      curDynasty: {},
      curSplitContent: {}
    };
  },
  props: {
    screenScale: Number
  },
  watch: {
    totalCursorImgTop: {
      handler(val) {
        const index = splitDynastys.findIndex((item) => {
          if (item.show === false) return false;
          return (
            Number(item.top) < (val + 30) &&
            Number(item.top) + Number(item.height) > (val + 30)
          );
        });
        if (index >= 0) {
          this.currentMap = 0
          const data = { ...splitDynastys[index] };
          data.curYear = data.from;
          if (data.curYear < 0) {
            data.curYear = '前' + Math.abs(data.curYear)
          }
          this.curDynasty = data;
          this.curSplitContent = this.splitContents[data.name] || this.splitContents[data.title]
          this.curInitContent = data.describtion
          if (this.curSplitContent) {
            this.curDynasty.curYear = this.curSplitContent.time
          }
          this.rulerImgLeft = 16 * 2 + "rpx";
        }
      },
      immediate: true,
    },
  },
  onShow() {
    uni.hideTabBar({
      animation: false,
    });
  },
  methods: {
    handleScroll(e) {
      this.scrollTop = e.detail.scrollTop;
      this.cursorImgTop = this.totalCursorImgTop - e.detail.scrollTop * this.screenScale;
    },
    handleClick(event) {
      this.touchMove(event);
    },
    touchStart(event) {},
    touchEnd(event) {
      this.lock = false;
    },
    touchMove(event) {
      this.cursorImgTop = event.changedTouches[0].clientY * this.screenScale - 30;
      this.totalCursorImgTop = this.cursorImgTop + this.scrollTop * this.screenScale;
    },
    rulerTouchStart(event) {
      this.noJump = true
      this.initrulerImgLeft = event.changedTouches[0].clientX;
    },
    rulerTouchEnd(event) {
      this.noJump = false
      this.rulerImgLeftEnd = Number(String(this.rulerImgLeft).slice(0, -3));
    },
    rulerTouchMove(event) {
      const data =
        this.rulerImgLeftEnd +
        (event.changedTouches[0].clientX - this.initrulerImgLeft) * 2;
      if (data > 16 * 2 && data < 196 * 2) {
        this.rulerImgLeft = data + "rpx";
        const curYear = (
          ((data - 16 * 2) / (196 * 2 - 16 * 2)) *
            (this.curDynasty.to - this.curDynasty.from) +
          Number(this.curDynasty.from)
        ).toFixed(0);
        if (curYear < 0) {
          this.curDynasty.curYear = '前' + Math.abs(curYear)
        } else {
          this.curDynasty.curYear = curYear
        }
        if (this.curSplitContent) {
          let index = -1
          this.curSplitContent.list.forEach((item, i) => {
            if (item.time <= Number(curYear)) {
              index = i
            }
          })
          this.currentMap = index + 1
          if (index > -1) {
            this.curDynasty.describtion = this.curSplitContent.list[index].content
          } else {
            this.curDynasty.describtion = this.curInitContent
          }
        }
      }
    },
    onScale() {
      setTimeout(() => {
        this.fake_dynasty = false;
      }, 200);
    },
    onDynastyTouchStart(e) {
      this.dynastyClientX = this.noJump ? Infinity : e.changedTouches[0].clientX;
    },
    onDynastyTouchMove(e) {
      if (e.changedTouches[0].clientX - this.dynastyClientX > 60) {
        this.$emit('handleHideSplit')
      }
    },
  },
};
</script>

<style lang="scss">
.time-door__time-split {
  width: 100%;
  height: calc(100vh - 124upx);
  overflow: hidden;
  background: #001427;
  img.bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .time-split__chinese__bg {
    position: absolute;
    top: 160upx;
    right: 175upx;
    width: 136upx;
    height: 760upx;
  }
  .time-split__dynasty__fake {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    width: 250upx;
    height: calc(100vh - 124upx);
  }
   .movable-view-block{
    position: fixed;
    left: 230upx;
    top: 40%;
    width: 130upx;
    height: 320upx;
    overflow: hidden;
    .movable-view-right {
      position: absolute;
      left:40upx;
      opacity: 1;
      border: 160upx solid transparent;
      border-left: 100upx solid rgba($color: #fff, $alpha: .3);
      width: 0;
      height: 0;
      z-index: -1;
      margin-left: -10upx;
    }
    .movable-right-block {
      animation-name: hideToShowRight2; /*动画的名称*/
      animation-duration: 7s; /*动画时间*/
      animation-iteration-count: infinite; /*动作循环的次数：infinite 无限循环*/
    }
    @keyframes hideToShowRight2 {
      0% {
        left: -50upx;
        opacity: 0;
      }
      42.9% {
        left: -50upx;
        opacity: 0;
      }
      71.4% {
        left: 40upx;
        opacity: 1;
      }
      100% {
        left:-50upx;
        opacity: 0;
      }
    }
    .movable-view-right::after {
      content: "";
      position: absolute;
      right: 100upx;
      top: -120upx;
      width: 600upx;
      height: 240upx;
      background: rgba($color: #fff, $alpha: .3);
    }
    .movable-view-right-txt {
      width: 40upx;
      margin: -80upx 0 0 -100upx;
      color: #fff;
    }
  }
  .movable-view {
    width: 180upx;
    height: 3038upx;
    img {
      width: 100%;
      height: 3000upx;
    }
  }
  .time-split__dynasty__wrap {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    width: 250upx;
    height: calc(100vh - 124upx);
    overflow-y: scroll;
    animation: hideToShow 2s;
    .time-split__dynasty__cursor_wrap {
      position: fixed;
      left: 180upx;
      top: 0;
      opacity: 1;
      z-index: 10;
      padding-top: 10upx;
      width: 80upx;
      height: 100vh;
      text-align: center;
      box-sizing: border-box;
      animation: hideToVisible 2s;
    }
    .time-split__dynasty--cursor {
      position: absolute;
      right: 8upx;
      top: 0;
      z-index: 10;
      display: inline-block;
      width: 76upx;
      height: 61upx;
    }
    .time-split__dynasty__content {
      position: absolute;
      top: 0;
      width: 230upx;
      // height: 4548upx;
      height: calc(100vh - 62px);
      -webkit-box-shadow: 12upx 0 12upx 0 rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 12upx 0 12upx 0 rgba(0, 0, 0, 0.75);
      box-shadow: 12upx 0 12upx 0 rgba(0, 0, 0, 0.75);
    }
    .time-split__dynasty {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 22upx;
      letter-spacing: 2upx;
    }
  }
  .time-split__detail {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    opacity: 1;
    padding-left: 250upx;
    width: 100%;
    box-sizing: border-box;
    animation: hideToVisible2 3s;
    &__title {
      padding-top: 80upx;
      img {
        display: block;
        width: 400upx;
        height: 59upx;
        margin: 0 auto;
      }
    }
    &__map {
      margin-left: -20upx;
      padding-top: 8upx;
      width: 520upx;
      height: 390upx;
      background: rgba(0,0,0, .4);
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__decribe {
      padding: 0 30upx 0 0;
      &__title {
        font-size: 50upx;
        color: #f6d23c;
        letter-spacing: 40upx;
      }
      &__subtitle {
        color: #fff;
        font-size: 24upx;
        text-align: right;
        .park {
          letter-spacing: 8upx;
          margin-right: 20upx;
        }
        .year {
          padding-right: 30upx;
          letter-spacing: 6upx;
          font-size: 40upx;
          color: #00edff;
          &.scope{
            color: #fff;
            letter-spacing: 2upx;
            font-size: 30upx;
            font-weight: bold;
          }
        }
      }
      &__ruler {
        position: relative;
        margin: 28upx auto 0;
        width: 450upx;
        height: 60upx;
        .ruler {
          width: 100%;
          height: 100%;
        }
        .cursor_position {
          position: absolute;
          top: -14upx;
          width: 40upx;
          height: 50upx;
          z-index: 10;
        }
        &--year {
          position: absolute;
          bottom: 0;
          left: 20upx;
          font-weight: bold;
          &.right {
            left: auto;
            right: 20upx;
          }
        }
      }
      &__text {
        margin-top: 20upx;
        padding-left: 16upx;
        text-align: justify;
        color: #fff;
        width: 100%;
        height: calc(100vh - 870upx);
        overflow-y: scroll;
        &__book {
          margin-bottom: 10upx;
          font-size: 40upx;
          color: #00edff;
          letter-spacing: 20upx;
        }
        &__content {
          padding-bottom: 10upx;
          font-size: 30upx;
          letter-spacing: 10upx;
          .pre{
            margin-bottom: 40upx;
          }
        }
        &__subtitle {
          letter-spacing: 10upx;
          font-size: 22upx;
        }
      }
    }
  }
  @keyframes hideToShow {
    0% {
      left: -250upx;
    }
    30% {
      left: -250upx;
    }
    100% {
      left: 0upx;
    }
  }
  @keyframes hideToVisible {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes hideToVisible2 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>