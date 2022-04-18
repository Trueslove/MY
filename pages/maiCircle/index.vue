<template>
  <view class="maic">
    <view-tabbar :current="1"></view-tabbar>
    <!---------- 头部导航 ------------>
    <view class="maicircle-header">
      <view class="maicircle-h-nav">
        <span
          v-for="(item, index) in navList"
          :key="index"
          class="maic-nav-tit"
          :class="activeType == index ? 'maic-nav-active' : ''"
          @click="handleChangeIndex(index)"
          >{{ item }}</span
        >
      </view>
      <view class="maicircle-h-search">
        <input
          class="maicircle-search-input"
          v-model="searchValue"
          type="text"
        />
        <img
          class="maicircle-search-icon"
          src="https://hmqn.zhijingyuntech.cn/mq/seach.png"
          alt=""
        />
      </view>
    </view>
    <!-- <view class="ysj-header-wap">
      <view class="ysj-header">
        <span
          @click="handleChangeActive(0)"
          :class="activeIndex == 0 ? 'ysj-h-active' : ''"
          class="ysj-h-text ysj-h-text-r"
          style="padding: 0 10upx 0 30upx"
          >精华帖</span
        >
        <span
          @click="handleChangeActive(1)"
          :class="activeIndex == 1 ? 'ysj-h-active' : ''"
          style="padding: 0 30upx 0 10upx"
          class="ysj-h-text"
          >最新帖</span
        >
      </view>
      <img class="maic-banner" src="https://hmqn.zhijingyuntech.cn/swiper1.png" alt="" />
    </view> -->
    <!---------- 主体内容 ------------>
    <view class="maicircle-contet">
      <view class="maic-c-cell" v-for="(item, index) in listData" :key="index">
        <view class="maic-c-h">
          <img class="maic-c-h-img" :src="item.headUrl" alt="" />
          <span class="main-c-h-t">{{ item.name }}</span>
        </view>
        <view class="main-c-tit">{{ item.title }}</view>
        <view class="main-c-info">
          <view class="main-c-i-l">
            <view class="main-c-like">
              <img
                v-for="(itemL, indexL) in item.linkUrl"
                :key="indexL"
                class="maic-c-like-icon"
                :class="'maic-c-like-icon' + indexL"
                :src="itemL"
                alt=""
              />
            </view>
            <span>TA们觉得很赞</span>
          </view>
          <view class="main-c-i-r">
            <view
              class="main-i-r-flex"
              style="display: flex; align-items: center"
            >
              <img
                class="maic-c-r-flex-icon"
                src="https://hmqn.zhijingyuntech.cn/mq/lb02.png"
                alt=""
              />
              <span class="maic-c-r-span">{{ item.comment }}</span>
              <img
                class="maic-c-r-flex-icon"
                src="https://hmqn.zhijingyuntech.cn/mq/lb01.png"
                alt=""
              />
              <span class="maic-c-r-span">{{ item.like }}</span>
              <img
                class="maic-c-r-flex-icon"
                src="https://hmqn.zhijingyuntech.cn/mq/lb03.png"
                alt=""
              />
            </view>
          </view>
        </view>
        <view class="main-c-content">{{ item.content }}</view>
        <view class="main-c-img-wap">
          <img
            v-for="(itemC, indexc) in item.urlList"
            class="maic-c-img-item"
            :src="itemC"
            :key="indexc"
            alt=""
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Tabbar from "../../common/tab/index.vue";
export default {
  components: {
    "view-tabbar": Tabbar,
  },
  data() {
    return {
      activeType: 0, // 头部导航状态
      navList: ["推荐", "关注"],
      searchValue: "初一历史 5+3", // 搜索内容
      listData: [
        // title:标题 headUrl:头像 name:名称 content:内容 like:点赞数 comment:评论数 urlList:文章相关图片 linkUrl:点赞人头像
        {
          title: "三秦大地的由来",
          headUrl: "https://hmqn.zhijingyuntech.cn/head0.png",
          name: "西楚布衣",
          content:
            "项羽后引兵东问，都彭城(今徐州)，以中国最高统治者自居，大封诸侯。其中将刘邦封汉王，都南郑，辖陕南及巴、蜀之地……",
          like: 520,
          comment: 1314,
          urlList: [
            "https://hmqn.zhijingyuntech.cn/pic001.png",
            "https://hmqn.zhijingyuntech.cn/pic002.png",
            "https://hmqn.zhijingyuntech.cn/pic003.png",
          ],
          linkUrl: [
            "https://hmqn.zhijingyuntech.cn/head4.png",
            "https://hmqn.zhijingyuntech.cn/head2.png",
            "https://hmqn.zhijingyuntech.cn/head3.png",
          ],
        },
        {
          title: "刘邦成功的偶然与必然",
          headUrl: "https://hmqn.zhijingyuntech.cn/head3.png",
          name: "三国将军",
          content:
            "刘邦成功的原因：1、为草莽却知人善任 刘邦一介草莽，在乱世之中起兵，居然登上皇帝宝座，刘邦手下聚集众多英雄豪杰，其中不少人跟过项羽，但由于不被重用，才投奔刘邦，而刘邦知人善任，终获成功。 2、是无赖却豪放大方 有福同享，有难同当，刘邦一个无赖之徒，却深知感恩和激励的重要性，每次打了胜仗，都毫不吝啬封赏，对功臣加官进爵，对士兵也有物质奖励，手下的人故愿意跟着他出生入死。 3、好女色却收放有度 刘邦攻入咸阳，进入了阿房宫，见宫室里声色犬马、奇珍异宝，不计其数，单是美女就有几千人。刘邦对王宫里的美女期待已久，但考虑到时机不对，便忍住欲火，对一个好色之徒而言，实属不易。 4、性傲慢却从谏如流 大汉初立，百废待兴，刘邦重用了一批文人，为汉朝日后兴旺发达立下汗马功劳，刘邦虽是粗人，性情傲慢，却不是鲁盲无知之人，别人说的有理他能虚心接受，忠言虽逆耳，但他能广纳良言，得以兴邦。 ",
          like: 520,
          comment: 1314,
          urlList: [
            "https://hmqn.zhijingyuntech.cn/pic001.png",
            "https://hmqn.zhijingyuntech.cn/pic002.png",
            "https://hmqn.zhijingyuntech.cn/pic003.png",
          ],
          linkUrl: [
            "https://hmqn.zhijingyuntech.cn/head4.png",
            "https://hmqn.zhijingyuntech.cn/head2.png",
            "https://hmqn.zhijingyuntech.cn/head3.png",
          ],
        },
        {
          title: "三秦大地的由来",
          headUrl: "https://hmqn.zhijingyuntech.cn/head2.png",
          name: "西楚布衣",
          content:
            "项羽后引兵东问，都彭城(今徐州)，以中国最高统治者自居，大封诸侯。其中将刘邦封汉王，都南郑，辖陕南及巴、蜀之地……",
          like: 520,
          comment: 1314,
          urlList: [
            "https://hmqn.zhijingyuntech.cn/pic001.png",
            "https://hmqn.zhijingyuntech.cn/pic002.png",
            "https://hmqn.zhijingyuntech.cn/pic003.png",
          ],
          linkUrl: [
            "https://hmqn.zhijingyuntech.cn/head4.png",
            "https://hmqn.zhijingyuntech.cn/head2.png",
            "https://hmqn.zhijingyuntech.cn/head3.png",
          ],
        },
        {
          title: "三秦大地的由来",
          headUrl: "https://hmqn.zhijingyuntech.cn/head4.png",
          name: "西楚布衣",
          content:
            "项羽后引兵东问，都彭城(今徐州)，以中国最高统治者自居，大封诸侯。其中将刘邦封汉王，都南郑，辖陕南及巴、蜀之地……",
          like: 520,
          comment: 1314,
          urlList: [
            "https://hmqn.zhijingyuntech.cn/pic001.png",
            "https://hmqn.zhijingyuntech.cn/pic002.png",
            "https://hmqn.zhijingyuntech.cn/pic003.png",
          ],
          linkUrl: [
            "https://hmqn.zhijingyuntech.cn/head4.png",
            "https://hmqn.zhijingyuntech.cn/head2.png",
            "https://hmqn.zhijingyuntech.cn/head3.png",
          ],
        },
        {
          title: "三秦大地的由来",
          headUrl: "https://hmqn.zhijingyuntech.cn/head5.png",
          name: "西楚布衣",
          content:
            "项羽后引兵东问，都彭城(今徐州)，以中国最高统治者自居，大封诸侯。其中将刘邦封汉王，都南郑，辖陕南及巴、蜀之地……",
          like: 520,
          comment: 1314,
          urlList: [
            "https://hmqn.zhijingyuntech.cn/pic001.png",
            "https://hmqn.zhijingyuntech.cn/pic002.png",
            "https://hmqn.zhijingyuntech.cn/pic003.png",
          ],
          linkUrl: [
            "https://hmqn.zhijingyuntech.cn/head4.png",
            "https://hmqn.zhijingyuntech.cn/head2.png",
            "https://hmqn.zhijingyuntech.cn/head3.png",
          ],
        },
      ],
    };
  },
  onShow() {
    uni.hideTabBar({
      animation: false,
    });
  },
  methods: {
    // handleChangeActive(index) {
    //   this.activeIndex = index;
    // },
    handleChangeIndex(index) {
      this.activeType = index;
    },
  },
};
</script>

<style lang="scss">
.maic {
  height: calc(100vh - 62px);
  overflow: scroll;
}
.main-c-i-l {
  display: flex;
  align-items: center;
  .main-c-like {
    display: flex;
    align-items: center;
    width: 150upx;
    position: relative;
    .maic-c-like-icon {
      width: 55upx;
      height: 55upx;
      border-radius: 50%;
    }
    .maic-c-like-icon1 {
      position: absolute;
      left: 45upx;
    }
    .maic-c-like-icon2 {
      position: absolute;
      left: 90upx;
    }
  }
}
.ysj-header-wap {
  position: relative;
  margin-top: 38upx;
  height: 600upx;
  .ysj-header {
    position: relative;
    display: inline-block;
    margin: 54upx 0 0 28upx;
    background: #ffffff;
    border: 2upx solid #c4284d;
    opacity: 1;
    border-radius: 8upx;
    z-index: 1;
    .ysj-h-text {
      font-size: 25upx;
      line-height: 40upx;
      color: #707070;
    }
    .ysj-h-active {
      color: #c4284d;
      font-weight: bold;
    }
    .ysj-h-text-r::after {
      content: "|";
      margin-left: 25upx;
    }
  }
  .maic-banner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
}

.maicircle-contet {
  padding: 40upx 25upx 30upx;
  background: #fff;
  .maic-c-cell {
    margin-top: 37upx;
    .maic-c-h {
      display: flex;
      align-items: flex-end;
      .maic-c-h-img {
        width: 100upx;
        height: 100upx;
        border-radius: 50%;
        overflow-x: hidden;
      }
      .main-c-h-t {
        margin-left: 8upx;
        padding-bottom: 10upx;
        color: #404040;
        font-size: 30upx;
      }
    }
    .main-c-tit {
      font-size: 40upx;
      color: #404040;
      font-weight: bold;
      margin-top: 20upx;
    }
    .main-c-info {
      display: flex;
      justify-content: space-between;
      margin-top: 22upx;
      .main-c-i-r {
        .maic-c-r-flex {
          display: flex;
          align-items: center;
        }
      }
    }
    .maic-c-r-flex-icon {
      height: 30upx;
      width: 30upx;
      margin: 0 10upx;
    }
    .maic-c-r-span {
      color: #1b1b1b;
    }
    .main-c-content {
      margin-top: 10upx;
      color: #b3b3b3;
      line-height: 60upx;
      font-size: 40upx;
      font-weight: 400;
      text-indent: 80upx;
      text-align: justify;
    }
    .main-c-img-wap {
      display: flex;
      justify-content: space-between;
      margin-top: 20upx;
      .maic-c-img-item {
        height: 226upx;
        width: 226upx;
      }
    }
  }
}
.maicircle-header {
  position: fixed;
  top: 0;
  width: 100%;
  padding-top: 6upx;
  height: 66upx;
  border-bottom: 2upx solid #ff3266;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  z-index: 10;
  .maic-nav-tit {
    height: 60upx;
    padding: 0 30upx;
    color: #707070;
    font-size: 40upx;
    display: inline-block;
  }
  .maic-nav-active {
    font-weight: bold;
    border-bottom: 6upx solid #c3274d;
  }
  .maicircle-h-search {
    display: flex;
    align-items: center;
    padding-right: 26upx;
    .maicircle-search-input {
      width: 220upx;
      background: #c3294d;
      height: 36upx;
      line-height: 36upx;
      border-radius: 28upx;
      color: #fff;
      font-weight: bold;
      font-size: 28upx;
      padding: 0 20upx;
    }
    .maicircle-search-icon {
      margin-left: 10upx;
      width: 22upx;
      height: 22upx;
    }
  }
}
</style>