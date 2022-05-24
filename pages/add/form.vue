<template>
  <view class="form">
    <view class="form-header">
      <view class="form-h-l">取消</view>
      <view class="form-h-tit">记录心情</view>
      <view class="form-h-send">发送</view>
    </view>
    <view class="form-content">
      <textarea
        name=""
        id=""
        maxlength="500"
        class="form-textarea"
        placeholder="这一刻自己的心情…"
      ></textarea>
    </view>
    <view class="form-upload">
      <view class="form-u-cell">
        <img
          class="form-u-img"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic01.1sucai.com%2F180115%2F330814-1P11516240997.jpg&refer=http%3A%2F%2Fpic01.1sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654149257&t=5fca011ffd12e32f0f5d7147687542dc"
          alt=""
        />
      </view>
      <view class="form-u-cell">
        <img
          class="form-u-img"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic01.1sucai.com%2F180115%2F330814-1P11516240997.jpg&refer=http%3A%2F%2Fpic01.1sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654149257&t=5fca011ffd12e32f0f5d7147687542dc"
          alt=""
        />
      </view>
      <view class="form-u-cell">
        <img
          class="form-u-img"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic01.1sucai.com%2F180115%2F330814-1P11516240997.jpg&refer=http%3A%2F%2Fpic01.1sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654149257&t=5fca011ffd12e32f0f5d7147687542dc"
          alt=""
        />
      </view>
      <view class="form-u-cell form-u-add">
        <img class="form-u-add-icon" src="../../static/add/add.png" alt="" />
      </view>
    </view>

    <view class="form-audit-wap">
      <img class="form-audit-icon" src="../../static/add/audit.png" alt="" />
      <view class="form-audit-txt">说出你的心情</view>
    </view>
    <view class="form-footer">
      <view class="form-f-cell" @click="handleAddImg">
        <img src="../../static/add/img.png" class="form-f-c-icon" alt="" />
        <view>加图片</view>
      </view>
      <view class="form-f-cell" @click="handleAudit">
        <img
          src="../../static/add/music.png"
          style="width: 15px; height: 16px"
          class="form-f-c-icon"
          alt=""
        />
        <view>加音乐</view>
      </view>
      <view class="form-f-cell" @click="handleAddAddress">
        <img
          src="../../static/add/address.png"
          style="width: 13px; height: 16px"
          class="form-f-c-icon"
          alt=""
        />
        <view>添加位置</view>
      </view>
      <view class="form-f-cell" @click="handleAddGk">
        <img
          src="../../static/add/gk.png"
          style="width: 17px; height: 17px"
          class="form-f-c-icon"
          alt=""
        />
        <view>公开</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    handleAddImg() {
      uni.chooseImage({
        success: (chooseImageRes) => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          uni.uploadFile({
            url: "https://www.example.com/upload", //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: "file",
            formData: {
              user: "test",
            },
            success: (uploadFileRes) => {
              console.log(uploadFileRes.data);
            },
          });
        },
      });
      console.log("添加图片");
    },
    handleAudit() {
      console.log("添加音乐");
    },
    handleAddAddress() {
      console.log("添加地址");
    },
    handleAddGk() {
      console.log("关注");
    },
  },
};
</script>

<style lang="scss" scoped>
.form-upload {
  display: flex;
  padding: 15px;
  flex-wrap: wrap;
  .form-u-cell {
    width: 108px;
    height: 108px;
    object-fit: cover;
    margin: 0 0 5px 5px;
  }
  .form-u-cell:nth-child(3n) {
    margin-right: 0;
  }
  .form-u-img {
    width: 100%;
    height: 100%;
  }
  .form-u-add-icon {
    width: 23px;
    height: 23px;
  }
  .form-u-add {
    background: #f7f7f7;
    border: 1px dotted #bdbdbd;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.form-audit-wap {
  position: fixed;
  bottom: 55px;
  left: 15px;
  background: #ffffff;
  width: 108px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #eca9d7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  .form-audit-icon {
    width: 9px;
    height: 13px;
    margin-right: 5px;
  }
}
.form-footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(157, 150, 255, 0.1);
  z-index: 10;
  .form-f-cell {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    display: flex;
    align-items: center;
    .form-f-c-icon {
      width: 16px;
      height: 16px;
      margin-right: 7px;
    }
  }
}
.form-textarea {
  width: 380px;
  height: 200px;
  padding: 0 20px;
  font-size: 14px;
  color: #333333;
  line-height: 20px;
  text-align: justify;
}
.form-header {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  padding: 0 16px;
  .form-h-l {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
  }
  .form-h-tit {
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
  }
  .form-h-send {
    width: 60px;
    height: 30px;
    background: linear-gradient(270deg, #eeaad7 0%, #9d96ff 100%);
    border-radius: 15px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 30px;
    text-align: center;
  }
}
.form {
  background: url("../../static/diary/bgh.png") no-repeat;
  background-size: 269px 115px;
  overflow: hidden;
}
</style>