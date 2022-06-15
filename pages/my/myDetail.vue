
<template>
  <view class="my-d">
    <view class="my-d-tit">个人主页</view>
    <view class="my-d-pz">
        <view class="my-d-pz-img">
            <img class="my-d-pz-header" src="../../static/my/header.png" alt=""/>
            <img class="my-d-pz-p" src="../../static/my/pz.png" alt=""/>
        </view>
        <view class="my-d-input">
            <input class="my-d-i-input" placeholder="请输入签名" v-model="name" type="text" />
            <img class="my-d-i-edit" src="../../static/my/edit.png" alt=""/>
        </view>
    </view>

    <view class="my-d-info">
        <view class="my-d-cell">
            <view class="my-d-cell-l">性别</view>
            <view class="my-d-cell-r">
                <view class="my-d-cell-value">男</view>
                <img class="my-d-cell-r-arrow" src="../../static/my/arrow.png" alt="" />
            </view>
        </view>
        <view class="my-d-cell">
            <view class="my-d-cell-l">出生日期</view>
            <view class="my-d-cell-r">
                <view class="my-d-cell-value">2005-12-24</view>
                <img class="my-d-cell-r-arrow" src="../../static/my/arrow.png" alt="" />
            </view>
        </view>
        <view class="my-d-cell">
            <view class="my-d-cell-l">手机号码</view>
            <view class="my-d-cell-r">
                <view class="my-d-cell-value">18612345678</view>
                <img class="my-d-cell-r-arrow" src="../../static/my/arrow.png" alt="" />
            </view>
        </view>
        <view class="my-d-cell">
            <view class="my-d-cell-l">个性签名</view>
            <view class="my-d-cell-r">
                <view class="my-d-cell-value" style="color:#9D96FF">未设置</view>
                <img class="my-d-cell-r-arrow" src="../../static/my/arrow.png" alt="" />
            </view>
        </view>
    </view>


            <u-popup :show="true" @close="close">
                <view>
                    <text>出淤泥而不染，濯清涟而不妖</text>
                </view>
            </u-popup>
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

  }
};
</script>

<style lang="scss" scoped>
.my-d-info {
    margin-top: 100upx;
    padding: 30upx;
    .my-d-cell {
        display: flex;
        justify-content: space-between;
        height: 90upx;
        align-items: center;
        background: #FAFAFF;
        border-radius: 20upx;
        padding: 0 20upx;
        margin-bottom: 24upx;
        .my-d-cell-l {
            font-size: 30upx;
            color: #333;
        }
        .my-d-cell-r {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            .my-d-cell-value {
                color: #999999;
                padding: 0 5upx;
                font-size: 30upx;
            }
            .my-d-cell-r-arrow {
                width:40upx;
                height: 40upx;
            }
        }
    }
}
.my-d {
  background: url("https://s1.ax1x.com/2022/06/09/XyE6T1.png") no-repeat;
  background-size: 269px 115px;
  padding-top:var(--status-bar-height);
}
.my-d-pz {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .my-d-input {
        margin-top: 30upx;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .my-d-i-input {
            width: 304upx;
            height: 66upx;
            line-height: 66upx;
            border-bottom: 1upx solid #dddddd;
            padding: 0 12upx;
            font-size: 36upx;
            color: #333;

        }
        .my-d-i-edit{
            width: 26upx;
            height: 24upx;
        }
    }
    .my-d-pz-img {
        width: 175upx;
        height: 175upx;
        position: relative;
        .my-d-pz-header {
            width: 100%;
            height: 100%;
        }
        .my-d-pz-p {
            position: absolute;
            bottom: 5upx;
            right: 20upx;
            height: 48upx;
            width: 48upx;
        }
    }
}
.my-d-tit {
  font-size: 20px;
  color: #333;
  font-weight: 600;
  padding: 15px 0 20px;
  text-align: center;
}
</style>