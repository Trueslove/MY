<template>
  <view class="time-door__star-detail">
    <view-tabbar :current="2"></view-tabbar>
    <img class="time-door__bg" src="https://hmqn.zhijingyuntech.cn/timeDoor/bg.png" alt="">
    <view class="time-door__star-detail__wrap">
     <view class="time-door__star__header">
      <view>三 国</view>
      <view>
        <text>{{ 220 }}年 — {{ 265 }}年 </text>
      </view>
    </view>
      <view class="star-detail__relation">
        <view class="star-detail__relation__person">
          <view class="wrap">
            <img src="https://hmqn.zhijingyuntech.cn/officer/202.png" />
            <text>{{ detail.name }}</text>
          </view>
        </view>
        <view class="star-detail__relation__abouts__wrap">
          <view :class="['star-detail__relation__about', `about${index + 1}`]" v-for="(child, index) in detail.list" :key="index">
            <view class="title">{{ child.title }}</view>
            <view :class="['friend', { relation: friend.relative }, { third: index === 2 }]" :style="{ top: `${friend.top}rpx`, left: `${friend.left}rpx` }" v-for="(friend, j) in child.friends" :key="j">
              <view v-if="friend.relative">{{ friend.relative}}</view>
              <text>{{ friend.name }}</text>
            </view>
          </view>
        </view>
      </view>
      <view class="star-detail__detail">
        <view class="star-detail__detail__title">
          <text class="name">{{ detail.name }}</text> {{ detail.age ? detail.age : '' }}
        </view>
        <view class="star-detail__detail__content">{{ detail.content }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import Tabbar from "../../common/tab/index.vue";
export default {
  components: { "view-tabbar": Tabbar, },
  data () {
    return {
      detail: {
        name: '诸葛亮',
        // age: '（181年 - 234年10月8日）',
        content: `三国时期蜀汉丞相 ，字孔明，号卧龙（也作伏龙），汉族，徐州琅琊阳都（今山东临沂市沂南县）人，
          三国时期蜀汉丞相，杰出的政治家、军事家、散文家、书法家、发明家。
          在世时被封为武乡侯，死后追谥忠武侯，东晋政权因其军事才能特追封他为武兴王。
          其散文代表作有《出师表》、《诫子书》等。
          曾发明木牛流马、孔明灯等，并改造连弩，叫做诸葛连弩，可一弩十矢俱发。于建兴十二年（234
          年）在五丈原（今宝鸡岐山境内）逝世。
          刘禅追谥其为忠武侯，故后世常以武侯、诸葛武侯尊称诸葛亮。诸葛亮一生鞠躬尽瘁、
          死而后已，是中国传统文化中忠臣与智者的代表人物。`,
        list: [
          {
            title: '族系', friends: [
              { relative: '父', name: '诸葛珪', top: '-10', left: '70' },
              { relative: '妻', name: '黄月英', top: '50', left: '-20' },
              { relative: '兄', name: '诸葛瑾', top: '50', left: '160' },
              { relative: '子', name: '诸葛瞻', top: '100', left: '-40' },
              { relative: '弟', name: '诸葛均', top: '100', left: '180' },
              { relative: '长孙', name: '诸葛尚', top: '160', left: '-40' },
              { relative: '孙', name: '诸葛京', top: '220', left: '-40' }
            ]
          }, {
            title: '敌对', friends: [
              { name: '周瑜', top: '30', left: '40' },
              { name: '孙权', top: '90', left: '30' },
              { name: '吕蒙', top: '160', left: '-20' },
              { name: '曹操', top: '140', left: '90' },
              { name: '司马懿', top: '160', left: '190' },
              { name: '孟获', top: '220', left: '90' }
            ]
          }, {
            title: '朋友圈', friends: [
              { name: '刘备', top: '-10', left: '90' },
              { name: '关羽', top: '30', left: '200' },
              { name: '张飞', top: '80', left: '150' },
              { name: '赵云', top: '150', left: '220' },
              { name: '鲁肃', top: '160', left: '100' },
              { name: '庞统', top: '220', left: '30' },
              { name: '徐庶', top: '220', left: '180' }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.time-door__star-detail{
  position: relative;
  height: calc(100vh - 124upx);
  .time-door__bg{
    width: 100%;
    height: 100%;
  }
  .time-door__star__header{
    position: absolute;
    top: 0;
    right: 40upx;
    text-align: center;
    view:first-child{
      margin-top: 20upx;
      color: #d09b07;
      font-size: 50upx;
      letter-spacing: 50upx;
      text-indent: 50upx;
    }
    view:last-child{
      display: inline-block;
      margin: 20upx auto 0;
      padding: 6upx 20upx;
      color: #ddd;
      font-size: 30upx;
      letter-spacing: 2upx;
      background: #600303;
      border: 2upx solid #a16005;
      border-radius: 10upx;
      text:first-child{
        display: block;
        text-align: left;
      }
    }
  }
  &__wrap{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100vh - 124upx);
    overflow-y: scroll;
    padding-bottom: 30upx;
  }
  .star-detail__relation{
    position: relative;
    top: 80upx;
    width: 100%;
    height: 720upx;
    color: #fff;
    &__person{
      position: absolute;
      left: 50%;
      top: 280upx;
      transform: translateX(-50%);
      width: 270upx;
      height: 270upx;
      background: rgba(0,0,0,.4);
      border-radius: 50%;
      border: 2upx dashed #999;
      .wrap{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 160upx;
        height: 160upx;
        border: 4upx solid #fff;
        border-radius: 50%;
        overflow: hidden;
      }
      img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background: red;
      }
      text{
        position: absolute;
        left: 0;
        bottom: 0upx;
        width: 100%;
        height: 50upx;
        line-height: 40upx;
        text-align: center;
        font-size: 20upx;
        background: rgba(0,0,0,.3);
      }
    }
    &__abouts__wrap{
      height: 100%;
      animation: relationToShow 1.5s;
    }
    &__about{
      position: absolute;
      width: 290upx;
      height: 290upx;
      border: 2upx dashed #999;
      border-radius: 50%;
      &.about1{
        left: 140upx;
        top: 56upx;
        background: rgba(0, 39, 104, .5);
        .title{
          right: 60upx;
          bottom: 20upx;
          background: rgb(51, 153, 255);
        }
      }
      &.about2{
        left: 40upx;
        top: 420upx;
        background: rgba(255, 204, 0, .15);
        .title{
          right: 30upx;
          top: 40upx;
          background: rgb(255, 204, 0);
          color: #333;
        }
      }
      &.about3{
        right: 16upx;
        top: 380upx;
        background: rgba(255, 102, 204, .2);
        .title{
          left: 10upx;
          top: 70upx;
          background: rgb(255, 102, 204);
        }
      }
      .title{
        position: absolute;
        width: 100upx;
        height: 100upx;
        border-radius: 50%;
        text-align: center;
        line-height: 100upx;
        font-size: 30upx;
        font-weight: bold;
        color: #000;
      }
      .friend{
        position: absolute;
        padding: 2upx 6upx;
        color: #fff;
        border-radius: 4upx;
        font-size: 22upx;
        &.relation{
          min-width: 180upx;
          text{
            border-color: rgb(0, 48, 116);
            border-left: none;
            background: #000;
          }
        }
        &.third{
          text{
            border-color: rgb(106, 63, 134);
            border-left: none;
            background: rgb(80, 4, 55);
          }
        }
        view{
          padding: 0 8upx;
          border-radius: 6upx;
          display: inline-block;
          color: #fff;
          background: rgb(0, 102, 255);
        }
        text{
          padding: 6upx 8upx;
          letter-spacing: 2upx;
          background: rgb(117, 44, 0);
          border: 2upx solid rgb(161, 114, 62);
          border-radius: 4upx;
          font-size: 24upx;
          white-space: nowrap;
        }
      }
    }
  }
  .star-detail__detail{
    margin-top: 80upx;
    margin-left: auto;
    margin-right: auto;
    padding: 60upx 40upx 20upx;
    width: 620upx;
    box-sizing: border-box;
    border: 1px solid #FFE95B;
    border-radius: 6px;
    color: #d6c970;
    background: rgba(0,0,0, .5);
    font-size: 30upx;
    &__title{
      font-size: 30upx;
      font-weight: bold;
      line-height: 60upx;
      .name{
        font-size: 40upx;
      }
    }
    &__content{
      text-align: justify;
      line-height: 50upx;
      letter-spacing: 4upx;
    }
  }
  @keyframes relationToShow {
    0%{
      opacity: 0;
      transform: scale(.5);
    }
    30%{
      opacity: 0;
      transform: scale(.5);
    }
    100%{
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
