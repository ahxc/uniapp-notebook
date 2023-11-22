
<script setup>
import NavBar from './components/NavBar.vue';
import { ref, onBeforeMount } from 'vue';
import SearchBar from './components/SearchBar.vue';

// import store from '../../store/';

// store.commit('setSystemInfo', uni.getSystemInfoSync());
// const { state = {} } = store;

// 滚动到顶部触发事件
function scrollTop(params) {

}

// 滚动世界
function scrolling(params) {

}

// 滚动到了切换动画的位置
const translate_line = ref(false);
onBeforeMount(() => {
  console.log(11111, state.systemInfo);
});
</script>

<template>
  <view class="index">
    <NavBar :translate_line="translate_line" />
    <view class="scroll-view-container">
      <scroll-view
        class="scroll-view"
        :style="{ height: }"
        scroll-x="false"
        scroll-y="true"
      >
        <SearchBar :translate_line="translate_line" />
        <!-- <SwiperBar />
        <SwiperBar />
        <SwiperBar />
        <SwiperBar />
        <SwiperBar /> -->
      </scroll-view>
    </view>
  </view>
</template>

<style lang="less" scoped>
@import './index.less';
</style>
