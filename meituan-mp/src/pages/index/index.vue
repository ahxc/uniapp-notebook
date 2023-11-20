<script>
import store from '../../store/index';
import CustomNavbar from './components/CustomNavBar.vue';

export default {
  components: { CustomNavbar },
  data() {
    return {
      goods: [
        {
          "id": 6,
          "title": "猪肉",
          "inventory": 100,
          "putaway": 1,
          "sale": 1,
          "units": "斤",
          "price": 600,
          "originalPrice": 800,
          "addtime": 1581919619,
          "storeid": 1,
          "typeid": 1,
          "titlepic": "https://cdn.shop.leimingyun.com/goodsList/3b4592a232204fb58a1318e604683ec8.jpg",
          "userBuyRestrict": 0,
          "specification": [{ "黄色": 90.1 }, { "黑色": 80 }, { "白色": 70.5 }],
        },
      ],// 商品信息
      searchPlaceHolder: '老兵冒菜-钵钵鸡', // 搜索栏广告预置项
      searchAdItems: [
        { id: 1, text: '烧烤' },
        { id: 2, text: '小炒' },
        { id: 3, text: '火锅' },
      ], // 搜索栏广告备选项
    };
  },
  onLoad() {
  },
  methods: {
    // 滚动到顶部触发事件
    scrollTop() {

    },

    // 滚动事件
    scrolling() {

    },

    // 搜索事件
    search() {

    },

    // 搜索标签点击事件
    tagClick() {

    },
  },
};
</script>

<template>
  <view class="container">
    <scroll-view
      class="index-scroll-view"
      scroll-y="true"
      @scrolltoupper="scrollTop"
      @scroll="scrolling"
    >
      <CustomNavbar />
    </scroll-view>
  </view>
</template>

<style lang="less">
@import './index.less';
</style>
