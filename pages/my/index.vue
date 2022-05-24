
<template>
  <view class="my">
    <!-- 头像信息 -->
    <view class="my-header">
      <view class="my-header-l">
        <img
          class="my-h-l-img"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_360_360%2F49%2F30%2F5c%2F49305c22cf635b01bb610c57a89867b6.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654051564&t=71333c5a5adcbfb07f5e6ff4803a2157"
          alt=""
        />
      </view>
      <view class="my-header-c">
        <view class="my-h-c-tit">点击登录MY+</view>
        <view class="my-h-c-edit">
          <img class="my-h-c-icon" src="../../static/my/autograph.png" alt="" />
          <view class="my-h-c-e-txt">快设置自己的个性签名哦～</view>
        </view>
      </view>
      <view class="my-header-r">
        <view class="header-r-i-wap">
          <span class="header-r-i-num">3</span>
          <img class="header-r-i" src="../../static/home/info.png" alt="" />
        </view>
        <img class="header-r-s" src="../../static/home/setting.png" alt="" />
      </view>
    </view>
    <!-- 信息 -->
    <view class="my-info">
      <view class="my-i-c">
        <view class="my-i-c-cell">
          <view class="my-i-c-cell-tit">关注</view>
          <view>10</view>
        </view>
        <view class="my-i-c-cell">
          <view class="my-i-c-cell-tit">粉丝</view>
          <view>10</view>
        </view>
        <view class="my-i-c-cell">
          <view class="my-i-c-cell-tit">点赞与收藏</view>
          <view>10</view>
        </view>
      </view>
    </view>
    <!-- 菜单列表 -->
    <view class="my-meun">
      <view class="my-meun-cell">
        <img class="my-meun-c-icon" src="../../static/my/Imprint.png" alt="" />
        <view class="my-meun-c-txt">我的印记</view>
      </view>
      <view class="my-meun-cell">
        <img
          class="my-meun-c-icon"
          src="../../static/my/collection.png"
          alt=""
        />
        <view class="my-meun-c-txt">我的收藏</view>
      </view>
      <view class="my-meun-cell">
        <img
          class="my-meun-c-icon"
          src="../../static/my/footprint.png"
          alt=""
        />
        <view class="my-meun-c-txt">我的足迹</view>
      </view>
      <view class="my-meun-cell">
        <img class="my-meun-c-icon" src="../../static/my/release.png" alt="" />
        <view class="my-meun-c-txt">我的发布</view>
      </view>
    </view>
    <view class="my-border"></view>
    <!-- 单元格 -->
    <view class="my-cell-wap">
      <view class="my-cell">
        <view class="my-cell-l">
          <img style="width:12px;height:15px" src="../../static/my/security.png" alt="" />
          <view class="my-cell-l-txt">账号安全</view>
        </view>
        <view class="my-cell-r">
          <img class="my-cell-l-icon" src="../../static/my/arrow.png" alt="" />
        </view>
      </view>
      <view class="my-cell">
        <view class="my-cell-l">
          <img style="width:14px;height:14px" src="../../static/my/feedback.png" alt="" />
          <view class="my-cell-l-txt">意见反馈</view>
        </view>
        <view class="my-cell-r">
          <img class="my-cell-l-icon" src="../../static/my/arrow.png" alt="" />
        </view>
      </view>
      <view class="my-cell">
        <view class="my-cell-l">
          <img style="width:15px;height:15px" src="../../static/my/about.png" alt="" />
          <view class="my-cell-l-txt">关于MY+</view>
        </view>
        <view class="my-cell-r">
          <img class="my-cell-l-icon" src="../../static/my/arrow.png" alt="" />
        </view>
      </view>
      <view class="my-cell">
        <view class="my-cell-l">
          <img style="width:15px;height:15px" src="../../static/my/loginOut.png" alt="" />
          <view class="my-cell-l-txt">退出登录</view>
        </view>
        <view class="my-cell-r">
          <img class="my-cell-l-icon" src="../../static/my/arrow.png" alt="" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.my {
  background: url("../../static/diary/bgh.png") no-repeat;
  background-size: 269px 115px;
  overflow: hidden;
}
.my-cell-wap {
  background: #fff;
  padding: 0 15px;
  .my-cell {
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1PX solid #f2f2f2;
    .my-cell-l {
      display: flex;
      align-items: center;
    }
    .my-cell-r {
      display: flex;
      align-items: center;
    }
    .my-cell-l-icon {
      height: 18px;
      width: 14px;
    }
    .my-cell-l-txt {
      font-size: 15px;
      color: #333;
      margin-left: 10px;
    }
  }
  .my-cell:last-child {
    border-bottom: none;
  }
}
.my-border {
  height: 5px;
  width: 100%;
  background: #f4f5f9;
}
.my-meun {
  display: flex;
  justify-content: space-around;
  margin-top: -10px;
  padding-bottom: 23px;
  .my-meun-cell {
    text-align: center;
  }
  .my-meun-c-icon {
    height: 44px;
    width: 44px;
  }
  .my-meun-c-txt {
    margin-top: 15px;
    color: #333;
    font-size: 12px;
    letter-spacing: 1px;
  }
}
.my-info {
  padding: 0 15px;
  background: url("../../static/my/bj.png") no-repeat;
  background-size: 360px 153px;
  background-position: 15px;
  margin-top: -30px;
  .my-i-c {
    width: 100%;
    display: flex;
    height: 153px;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    color: #fff;
  }
  .my-i-c-cell-tit {
    font-size: 15px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
  }
}
.my-header {
  padding: 15px;
  height: 83px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .my-header-l {
    position: relative;
    .my-h-l-img {
      height: 51px;
      width: 51px;
      border-radius: 50%;
      border: 2px solid #fff;
    }
  }
  .my-header-c {
    margin-left: 8px;
    flex: 1;
    .my-h-c-tit {
      font-size: 17px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      line-height: 24px;
      letter-spacing: 1px;
    }
    .my-h-c-edit {
      display: flex;
      align-items: center;
      height: 20px;
      background: #ffffff;
      box-shadow: 0px 1px 5px 0px rgba(154, 162, 255, 0.2);
      border-radius: 10px;
      padding: 4px 8px;
      transform: scale(0.8);
      width: 176px;
      margin: 4px 0 0 -18px;
      .my-h-c-icon {
        height: 9px;
        width: 10px;
      }
    }
    .my-h-c-e-txt {
      font-size: 8px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #7181e2;
      margin-left: 5px;
    }
  }
  .my-header-r {
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