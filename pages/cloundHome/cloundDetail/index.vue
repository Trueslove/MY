<template>
  <view class="ysj">
    <view class="ysj-map-wap">
      <view class="ysj-map-img">
        <img
          class="ysj-img"
          :src="'https://hmqn.zhijingyuntech.cn/' + surData[key].url + '.png'"
        />
      </view>
      <view class="ysj-xs-content">
        <p class="ysj-xs-c-text ysj-xs-c-frist">
          {{ surData[key].content }}
        </p>
        <template v-for="(item, index) in surData[key].list" >
          <p class="ysj-sur-title" v-if="item.title" :key="index">{{ item.title }}</p>
          <p class="ysj-xs-c-text" v-for="(itemC, indexC) in item.content" :key="indexC">
            {{ itemC }}
          </p>
        </template>
      </view>
    </view>
  </view>
</template>

<script>
import sexData from "./sex.json";
export default {
  data() {
    return {
      activeIndex: 0,
      key: "",
      surData: sexData,
    };
  },
  onLoad(option) {
    this.key = option.sur;
  },
  created() {},
  methods: {
    handleChangeActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="scss">
.ysj-map-img {
  position: relative;
  .ysj-map-sur {
    position: absolute;
    left: 20upx;
    top: 20upx;
    font-size: 50upx;
    font-weight: bold;
  }
}
.ysj {
  background: #fff;
  overflow: hidden;
}
.ysj-sur-title {
  color: #131313;
  font-size: 30upx;
  font-weight: bold;
  margin-top: 40upx;
}
.ysj-xs-c-frist::first-letter {
  font-size: 50upx;
  font-weight: bold;
}
.ysj-map-wap {
  padding: 0 20upx;
}
.ysj-xs-content {
  background: #c5c3b8;
  border-radius: 20upx;
  padding: 20upx;
  margin-top: 27upx;
  text-align: justify;
}
.ysj-xs-c-text {
  line-height: 50upx;
  text-indent: 56upx;
  text-align: justify;
}
.ysj-img {
  width: 100%;
}
</style>