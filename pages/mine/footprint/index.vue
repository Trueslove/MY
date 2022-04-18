<template>
  <!---------- 我的印记 ---------->
    <view class="mine-content">
      <view class="mine-c-cell-wap">
        <view class="mine-cell" v-for="(item, index) in listData" :key="index" @click="handleToPageDetail">
          <view class="mine-cell-l">
            <img
              class="mine-cell-l-img"
              :src="item.imgUrl"
              alt=""
            />
            <span class="mine-cell-l-mark mine-cell-l-mark1" v-if="item.isPreferred">优选</span>
            <span class="mine-cell-l-mark" v-if="item.xianM">限免</span>
          </view>
          <view class="mine-cell-r">
              <view class="mine-cell-tit-wap">
                  <span class="mine-cell-tit-mark" v-if="item.isEnd">完结</span>
                  <span class="mine-cell-tit">{{item.title}}</span>
              </view>
              <view class="mine-cell-r-c">{{item.content}}</view>
              <view class="mine-cell-r-read">
                <img class="mine-cell-r-play" src="../../../static/home/play.png" alt="" />
                  <span>{{item.read}}万</span>
              </view>
          </view>
          <img class="mine-cell-close" src="../../../static/home/close.png" alt="" />
        </view>
      </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            listData: [
                {imgUrl: "https://img1.baidu.com/it/u=2963188968,1332394090&fm=26&fmt=auto", title: "五代十国", isEnd: false, content: "聆听你不知道的华夏历史故事", read: 112, xianM: false, isPreferred: false},
                {imgUrl: "https://img1.baidu.com/it/u=2963188968,1332394090&fm=26&fmt=auto", title: "斗罗大陆", isEnd: true, content: "聆听你不知道的华夏历史故事", read: 243, xianM: false, isPreferred: false},
                {imgUrl: "https://img1.baidu.com/it/u=2963188968,1332394090&fm=26&fmt=auto", title: "斗破苍穹", isEnd: false, content: "聆听你不知道的华夏历史故事", read: 112, xianM: true, isPreferred: false},
                {imgUrl: "https://img1.baidu.com/it/u=2963188968,1332394090&fm=26&fmt=auto", title: "星辰变", isEnd: false, content: "聆听你不知道的华夏历史故事", read: 112, xianM: false, isPreferred: true},
            ]
        }
    },
    methods: {
      handleToPageDetail(type) {
        uni.navigateTo({
          url: "/pages/detail/index",
        });
      },
    },
}
</script>

<style lang="scss" scoped>
.mine-c-cell-wap {
  background: #fff;
  padding-left: 54upx;
  .mine-cell {
    display: flex;
    padding: 20upx 0 0;
    position: relative;
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
       .mine-cell-l-mark1 {
        background: linear-gradient(to right, #2F2946, #544F87);

       }
    }
    .mine-cell-r {
      flex: 1;
      border-bottom: 2upx solid #cecece;
      padding: 0 0 30upx 20upx;
      .mine-cell-tit-wap {
          .mine-cell-tit-mark {
              line-height: 35upx;
              padding: 0 10upx;
              color: #7A7063;
              border: 1upx solid #7A7063;
              border-radius: 6upx;
              margin-right: 20upx;
              font-size: 16upx;
          }
          .mine-cell-tit {
              color: #101010;
              font-size: 30upx;
              font-weight: bold;
          }
      }
      .mine-cell-r-c {
        margin-top: 10upx;
        color: #646464;
      }
      .mine-cell-r-read {
          color: #646464;
          margin-top: 30upx;
          .mine-cell-r-play {
            width: 17upx;
            height: 20upx;
            margin-right: 10upx;
          }
      }
    }
    .mine-cell-close {
        position: absolute;
        right: 20upx;
        top: 35upx;
      width: 20upx;
      height: 20upx;
    }
  }
}
.mine-self-wap {
  display: flex;
  justify-content: left;
  align-items: center;
  background: #ffffff;
  text-align: center;
  font-size: 40upx;
  padding: 0 0 40upx 40upx;
  color: #404040;
  .mine-self-img {
    height: 160upx;
    width: 160upx;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 30upx;
  }
}

</style>