
<template>
  <view>
    <tabbar :current="0"></tabbar>
    <!-- 头部 -->
    <view class="home-header">
      <view class="home-header-tit">
        <!-- <view class="header-l"> </view> -->
        <view class="header-c"> MY+ </view>
        <!-- <view class="header-r">
          <view class="header-r-i-wap">
            <span class="header-r-i-num">3</span>
            <img class="header-r-i" src="../../static/home/info.png" alt="" />
          </view>
          <img class="header-r-s" src="../../static/home/setting.png" alt="" />
        </view> -->
      </view>
      <img class="home-h-logo" src="../../static/home/logo.png" alt="" />
      <view class="home-h-img">
        <text class="home-hi-txt">你若爱，生活哪里都可爱。</text>
        <img class="home-h-three" src="../../static/home/three.png" alt="" />
      </view>
    </view>

    <!-- 主内容 -->
    <view class="home-content">
      <view class="home-c-cell" v-for="item in 4" :key="item">
        <!-- 用户信息 -->
        <view class="home-c-info">
          <view class="home-info-l">
            <img
              class="home-info-l-img"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic01.1sucai.com%2F180115%2F330814-1P11516240997.jpg&refer=http%3A%2F%2Fpic01.1sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653981448&t=d3ac3f1fbe1805abe71c8d0ede7bf98b"
              alt=""
            />
            <view class="home-info-l-i">
              <view class="home-info-l-t">
                <view class="home-info-l-tit">老王不痴迷</view>
                <img
                  style="width: 14px; height: 15px"
                  src="../../static/home/music.png"
                  alt=""
                />
              </view>
              <view class="home-info-l-time">22-03-07</view>
            </view>
          </view>
          <view class="home-info-r">
            <text class="home-info-r-g">+ 关注</text>
          </view>
        </view>
        <!-- 发布内容 -->
        <view class="home-c-article">
            第一次见面看你不太顺眼，没想到后来越看越不顺眼 哇哈哈哈哈哈～
        </view>
        <!-- 发布图片 -->
        <view class="home-c-img-wap">
            <img class="home-img-cell" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F3a%2F70%2F5a%2F3a705a651f88de6b3f7dd526231e03d6.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653983215&t=ce9f8d2a25da7272247f6703274fc4fa" alt="" />
            <img class="home-img-cell" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F3a%2F70%2F5a%2F3a705a651f88de6b3f7dd526231e03d6.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653983215&t=ce9f8d2a25da7272247f6703274fc4fa" alt="" />
            <img class="home-img-cell" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F3a%2F70%2F5a%2F3a705a651f88de6b3f7dd526231e03d6.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653983215&t=ce9f8d2a25da7272247f6703274fc4fa" alt="" />
            <img class="home-img-cell" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F3a%2F70%2F5a%2F3a705a651f88de6b3f7dd526231e03d6.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653983215&t=ce9f8d2a25da7272247f6703274fc4fa" alt="" />
            <img class="home-img-cell" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F3a%2F70%2F5a%2F3a705a651f88de6b3f7dd526231e03d6.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653983215&t=ce9f8d2a25da7272247f6703274fc4fa" alt="" />
        </view>
        <!-- 功能 -->
        <view class="home-c-handle">
            <view class="home-handle-cell">
                <img class="home-handle-icon" src="../../static/home/share.png" alt="" />
                <text class="home-handle-txt">100</text>
            </view>
            <view class="home-handle-cell">
                <img class="home-handle-icon" src="../../static/home/share.png" alt="" />
                <text class="home-handle-txt">100</text>
            </view>
            <view class="home-handle-cell">
                <img class="home-handle-icon" src="../../static/home/share.png" alt="" />
                <text class="home-handle-txt">100</text>
            </view>
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
    // this.$http
    //     .request({
    //       url: "/couponOrder/queryOrder",
    //       method: "get",
    //       data: {
    //         orderId: "79840010002",
    //         storeNo: "HZ02",
    //       },
    //     })
    //     .then((res) => {
    //       let { data } = res;
    //       this.listData = data;
    //     })
    //     .catch((err) => {
    //       this.isShowLoading = false;
    //       return;
    //     });
  }
};
</script>

<style lang="scss" scoped>
.home-content {
  background: #f4f5f9;
  .home-c-cell {
    padding: 15px;
    background: #fff;
    margin-bottom: 5px;
    .home-c-handle {
        padding-top:var(--status-bar-height);
        display: flex;
        justify-content: space-around;
        margin-top: 8px;
        .home-handle-cell {
            display: flex;
            align-items: center;
            .home-handle-icon {
                height: 12px;
                width: 12px;
            }
            .home-handle-txt {
                margin-left: 5px;
                color: #666;
                font-size: 13px;
            }
        }
    }
    .home-c-img-wap {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        .home-img-cell {
            height: 111px;
            width: 111px;
            border-radius: 5px;
            object-fit: cover;
            margin: 0 5px 5px 0;
        }
        .home-img-cell:nth-child(3n) {
            margin-right: 0;
        }
    }
    .home-c-article {
        color: #000;
        font-size: 14px;
        line-height: 20px;
        margin: 10px 0 12px 0;
    }
    .home-c-info {
      display: flex;
      justify-content: space-between;
      .home-info-l {
        display: flex;
        align-items: center;

        .home-info-l-img {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          overflow: hidden;
          object-fit: cover;
          margin-right: 12px;
        }
        .home-info-l-i {
          .home-info-l-t {
            display: flex;
            align-items: center;
            .home-info-l-tit {
              font-size: 13px;
              color: #9d96ff;
              font-weight: 600;
              margin-right: 8px;
              line-height: 19px;
            }
          }
          .home-info-l-time {
            color: #c0bff4;
            font-size: 12px;
            line-height: 17px;
          }
        }
      }
      .home-info-r {
        .home-info-r-g {
          padding: 3px 10px;
          border-radius: 14px;
          border: 1px solid #9d96ff;
          color: #9d96ff;
          font-size: 11px;
        }
      }
    }
  }
  .home-c-cell:last-child {
    margin-bottom: 0;
  }
}
.home-header {
  background: url("https://s1.ax1x.com/2022/06/09/XyEaWT.png") no-repeat;
  background-size: 100% 115px;
  padding: 15px 18px 20px;
  .home-header-tit {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home-h-img {
    display: flex;
    align-items: center;
    margin-left: 12px;
  }
  .home-h-logo {
    width: 81px;
    height: 20px;
    margin: 19px 0 12px 12px;
  }
  .home-hi-txt {
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }
  .home-h-three {
    width: 32px;
    height: 24px;
  }
  .header-c {
    font-weight: 600;
    font-size: 20px;
    color: #333;
  }
  .header-r {
    display: flex;
    align-items: center;
    .header-r-i-wap {
      position: relative;
      display: flex;
      align-items: center;
      .header-r-i-num {
        position: absolute;
        right: -15px;
        top: -13px;
        padding: 0px 5px;
        background: #fd5e51;
        border-radius: 5px 5px 5px 0px;
        font-size: 8px;
        color: #fff;
        min-width: 12px;
        text-align: center;
        transform: scale(0.7);
      }
    }

    .header-r-s {
      width: 15px;
      height: 14px;
      margin-left: 20px;
    }
    .header-r-i {
      width: 13px;
      height: 16px;
    }
  }
}
</style>