<template>
  <view class="time-door__content__wrap">
    <view v-if="name" class="time-door__content__header">
      <view>{{ name.length === 1 ? name + '朝' : name }}</view>
      <view v-if="to > 0">{{ `${(from < 0) ? '前' : ''}` + Math.abs(from) }}年 — {{ `${(to < 0) ? '前' : ''}` + Math.abs(to) }}年</view>
      <view v-else>
         <text>{{ `${(from < 0) ? '前' : ''}` + Math.abs(from) }}年 — </text>
        <text> — {{ `${(to < 0) ? '前' : ''}` + Math.abs(to) }}年</text>
      </view>
    </view>
    <view :class="['time-door__content', { marginTop: to < 0, animationKing: type === '帝王', animationStory: type === '典故', animationStar: type === '名仕', animationOfficer: type === '名臣' }]">
      <view class="time-door__story" v-if="type === '典故'">
        <view v-for="(item, i) in storys" :key="i">
          <text class="time-door__story--num">{{ item.num }}</text>
          <view class="time-door__story__wrap">
            <text :style="{ color: item.color }">{{ item.thing }}</text>
          </view>
          <!-- <text class="time-door__story--year">{{ item.year }}</text> -->
        </view>
      </view>
      <view :class="['time-door__king', { dong: name === '东汉' }]" v-if="type === '帝王'">
        <view :class="['time-door__king--column', 'column' + i, { three_row: kings.length === 3 }]" v-for="(item, i) in kings" :key="i">
          <view :class="['time-door__king__wrap', { sepcial1: '夏' === name, sepcial2: '商' === name }]" v-for="(child, index) in kings[i]" :key="index">
            <img :src="child.img" alt="" />
            <h6>{{ child.name }}</h6>
            <!-- <p>{{ child.time }}</p> -->
          </view>
        </view>
      </view>
      <view class="time-door__kingStory" v-if="type === '帝王' && kingStory.length">
        <view v-for="(item, i) in kingStory" :key="i">
          <view v-if="item.type" class="type">{{ item.type }}</view>
          <view v-if="item.type2" class="type2">{{ item.type2 }}</view>
          <view v-for="(child, index) in item.content.split('\n')" :key="index">
            <view :class="['name', { type2Name: item.type2 !== undefined }]" v-if="index % 2 || item.type2 !== undefined">{{ child }}</view>
            <text class="text" v-else>{{ child }}</text>
          </view>
        </view>
      </view>
      <!-- <view class="time-door__star" v-if="type === '名仕'">
        <view
          class="time-door__star__wrap"
          v-for="(item, i) in stars"
          :key="i"
          :style="{
            opacity: item.opacity,
            transform: `translate(${item.left}rpx, ${item.top}rpx) scale(${item.scale})`,
          }"
          @click="goStarDetail"
        >
          <img :src="item.img" alt="" />
          <p>{{ item.name }}</p>
        </view>
      </view> -->
      <view :class="['time-door__officer', { one__row: officers.length < 3 }]" v-if="type === '名臣' || type === '名仕'">
        <view :class="['time-door__officer--column', 'column' + i]" v-for="(item, i) in officers" :key="i">
          <view
            :class="['time-door__officer__wrap']" v-for="(child, index) in officers[i]"
            :key="index"
            @click="goOfficerDetail(child)"
          >
            <img :src="child.img" alt="" />
            <h6>{{ child.name }}</h6>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import kings from './data/kings'
import stars from './data/stars'
import storys from './data/storys'
import officers from './data/officers'
import kingStory from './data/kingStory'
export default {
  props: {
    type: String,
    name: String,
    from: String,
    to: String
  },
  data () {
    return {
      storys: [],
      kings: [],
      stars: [],
      officers: [],
      kingStory: []
    }
  },
  watch: {
    name: {
      handler (val) {
        this.storys = storys[val] || []
        this.kings = kings[val] || []
        this.stars = stars[val] || []
        this.officers = officers[val] || []
        this.kingStory = kingStory[val] || []
      },
      immediate: true
    }
  },
  methods: {
    goStarDetail () {
      uni.navigateTo({
        url: '/pages/timeDoor/star-detail',
      })
    },
    goOfficerDetail (data) {
      if (data.name === '诸葛亮') {
        uni.navigateTo({
          url: `/pages/timeDoor/star-detail?name=${data.name}`,
        })
      } else {
        uni.navigateTo({
          url: `/pages/timeDoor/officer-detail?name=${data.name}`,
        })
      }
    }
  }
}
</script>

<style lang="scss">
  .time-door__content__wrap{
    position: fixed;
    top: 0;
    left: 260upx;
    width: calc(100% - 320upx);
    height: calc(100vh - 134upx);
    overflow-y: scroll;
    .time-door__content{
      &.marginTop{
        top: 240upx;
      }
      &.animationKing{
        position: absolute;
        top: 240upx;
        opacity: 1;
        animation: kingToShow 2s;
      }
      &.animationOfficer{
        position: absolute;
        top: 240upx;
        opacity: 1;
        animation: kingToShow 2s;
      }
      &.animationStory{
        transform: scale(1);
        opacity: 1;
        animation: storyToShow 2s;
      }
      &.animationStar{
        transform: scale(1);
        opacity: 1;
        animation: starToShow 2s;
      }
      &__header{
        margin-left: -50upx;
        margin-bottom: 40upx;
        text-align: center;
        view:first-child{
          margin-top: 60upx;
          color: #d09b07;
          font-size: 50upx;
          letter-spacing: 50upx;
          text-indent: 50upx;
        }
        view:last-child{
          display: inline-block;
          margin: 20upx auto 0;
          padding: 0 20upx;
          line-height: 50upx;
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
          text:last-child{
            margin-left: 100upx;
          }
        }
      }
      .time-door__story{
        padding-right: 30upx;
        box-sizing: border-box;
        &>view{
          margin-top: -10upx;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          &:nth-child(even){
            align-items: flex-end;
          }
        }
        &--num{
          font-size: 30upx;
          color: #fff;
          letter-spacing: 4upx;
          font-weight: bold;
        }
        &__wrap{
          min-width: 50%;
          padding: 8upx 20upx;
          border: 2upx solid #4F586A;
          border-radius: 10upx;
          text-align: center;
          letter-spacing: 4upx;
          background: #000;
          text{
            
            }
        }
        &--year{
          margin-top: 6upx;
          padding: 4upx 8upx;
          font-size: 18upx;
          letter-spacing: 4upx;
          color: #ddd;
          background: #000000;
        }
      }
      .time-door__king.dong{
        .time-door__king--column {
          &.column0{
            margin-top: 100upx;
          }
          &.column1{
            margin-top: 0;
          }
        }
      }
      .time-door__king{
        justify-content: space-around !important;
        &--column.three_row{
          &.column0{
            margin-left: 20upx;
          }
          &.column1{
            margin-left: -20upx;
          }
          &.column2{
            margin-left: -20upx;
          }
        }
      }
      .time-door__officer.one__row{
         justify-content: space-around;
      }
      .time-door__king, .time-door__officer{
        margin-top: 50upx;
        box-sizing: border-box;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 420upx;
        &--column {
          // width: 60upx;
          // background: linear-gradient(180deg, rgba(52,142,158,1) 0%, rgba(52,142,158,0) 100%);
          &.column1{
            margin-top: 100upx;
          }
          &.column2{
            margin-top: 200upx;
          }
          .time-door__king__wrap, .time-door__officer__wrap{
            margin-bottom: 68upx;
            min-width: 160upx;
            color: #FFCC33;
            text-align: center;
            letter-spacing: 2upx;
            &.sepcial1{
              margin-bottom: 150upx;
            }
            &.sepcial2{
              margin-bottom: 100upx;
            }
            img{
              width: 120upx;
              height: 120upx;
              border-radius: 32upx;
            }
            h6{
              margin: 0 auto;
              text-align: center;
              // width: 124upx;
              font-size: 20upx;
            }
            p{
              font-size: 20upx;
            }
          }
          .time-door__officer__wrap{
            min-width: 120upx;
            max-width: 120upx;
            h6{
              width: 100%;
              color: #ddd;
              letter-spacing: 4upx;
            }
          }
        }
      }
      .time-door__star{
        &__wrap{
          position: relative;
          display: inline-block;
          width: 150upx;
          height: 150upx;
          background: pink;
          border-radius: 50%;
          border: 4upx solid #fff;
          box-sizing: border-box;
          color: #fff;
          overflow: hidden;
          box-shadow: 5px 0px 15px 5px #000000;
          img{
            border-radius: 50%;
            width: 100%;
            height: 100%;
          }
          p{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 50upx;
            line-height: 50upx;
            text-align: center;
            font-size: 20upx;
            letter-spacing: 2upx;
            background: rgba(0,0,0, .4);
          }
        }
      }
    }
    .time-door__kingStory{
      font-size: 30upx;
      line-height: 50upx;
      color: #fff;
      .type{
        margin-top: 20upx;
        color: red;
      }
      .type2{
        color: #14d3d9;
      }
      .name{
        color: #FFCC33;
      }
      .type2Name{
        padding-left: 20upx;
      }
    }
    @keyframes kingToShow {
      0% {
        opacity: 0;
        top: 400upx;
      }
      100% {
        opacity: 1;
        top: 240upx;
      }
    }
    @keyframes storyToShow {
      0% {
        opacity: 0;
        transform: scale(.5);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes starToShow {
      0% {
        opacity: 0;
        transform: scale(.5);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
</style>