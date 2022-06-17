
<template>
  <view class="opinion header-bj">
    <navTab></navTab>
    <view class="opinion-content">
      <view class="opinion-c-tit">您最满意的是什么？（可多选）</view>
      <view class="opinion-c-check">
        <view
          class="opinion-c-cell"
          v-for="(item, index) in checkData"
          :key="index"
          :class="item.isCheck ? 'opinion-c-cell-active' : ''"
          @click="handleChangeActive(index)"
          >{{ item.name }}</view
        >
      </view>
      <view class="opinion-c-yj">
        <textarea
          class="opinion-c-text"
          placeholder="请填写您的宝贵意见或者建议～"
        ></textarea>
        <view class="opinion-c-file">
          <view class="opinion-c-f-upload">
            <view class="opinion-c-f-u">
              <img class="opinion-c-f-u-pz" src="../../static/pz.png" alt="" />
              <view class="opinion-c-f-u-txt">添加照片</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="opinion-foot">提交</view>
  </view>
</template>

<script>
import navTab from "../../common/navTab/index";
export default {
  data() {
    return {
      checkData: [
        { name: "私密日记", id: 0, isCheck: true },
        { name: "有背景音乐", id: 1, isCheck: false },
        { name: "可以发语音", id: 2, isCheck: false },
        { name: "随时记录", id: 3, isCheck: false },
        { name: "隐私保护", id: 4, isCheck: false },
        { name: "其他", id: 5, isCheck: false },
      ],
    };
  },
  components: {
    navTab,
  },
  onLoad(options) {},
  methods: {
    handleChangeActive(index) {
      let row = this.checkData[index];
      row.isCheck = !row.isCheck;
      this.$set(this.checkData, index, row);
    },
  },
};
</script>

<style lang="scss" scoped>
.opinion {
  background-color: #f7f8fa;
  padding: 0 32upx;
  min-height: 100vh;
  .opinion-foot {
    height: 80upx;
    background: #9d96ff;
    box-shadow: 0 8upx 30upx 0 rgba(47, 51, 253, 0.3);
    border-radius: 40upx;
    font-size: 30upx;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 80upx;
    text-align: center;
    margin-top: 87upx;
  }
  .opinion-c-yj {
    margin-top: 13upx;
    height: 347upx;
    background: #f9fafb;
    border-radius: 20upx;
    padding: 15upx 35upx 30upx;
    width: 100%;
    .opinion-c-file {
      .opinion-c-f-upload {
        width: 126upx;
        height: 126upx;
        border-radius: 20upx;
        border: 1upx solid #cecece;
        display: flex;
        justify-self: center;
        align-items: center;
      }
      .opinion-c-f-u-txt {
        font-size: 20upx;
        transform: scale(0.8);
        font-weight: 600;
        color: #666666;
        line-height: 28upx;
      }
      .opinion-c-f-u {
        margin: auto;
        text-align: center;
      }
      .opinion-c-f-u-pz {
        width: 40upx;
        height: 28upx;
      }
    }
    .opinion-c-text {
      height: 140upx;
      padding-right: 30upx;
      text-align: justify;
    }
  }
  .opinion-c-tit {
    font-size: 30upx;
    font-weight: 500;
    color: #333333;
    line-height: 42upx;
    margin-bottom: 60upx;
  }
  .opinion-c-check {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .opinion-c-cell {
    height: 60upx;
    border-radius: 31px;
    border: 1upx solid #dcdcdc;
    line-height: 60upx;
    text-align: center;
    width: 192upx;
    margin-bottom: 30upx;
    font-size: 26upx;
    color: #999;
  }

  .opinion-c-cell-active {
    border: 2upx solid #9d96ff;
    color: #9d96ff;
  }
  .opinion-content {
    background: #ffffff;
    padding: 30upx;
    border-radius: 20upx;
  }
}
</style>