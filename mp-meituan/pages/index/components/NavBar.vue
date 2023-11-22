<script setup>
import store from '../../../store';
import { ref, toRefs, defineProps, onMounted, reactive, onBeforeMount, } from 'vue';
import SearchBar from './SearchBar.vue';

const { state = {} } = store;

// 获取安全边距top，防止阻挡
const top = ref(0);
const { safeAreaInsets } = uni.getSystemInfoSync();
top.value = safeAreaInsets.top || 0;
const menuButton = uni.getMenuButtonBoundingClientRect();

const props = defineProps();


// 地址栏点击事件
function addressClick() {
}

onBeforeMount(() => {
})

</script>

<template>
  <view class="nav-bar">
    <view :style="{ paddingTop: menuButton.top + 'px', }">
      <view :style="{ height: menuButton.height + 4 + 'px', display: 'flex', alignItems: 'center' }">
        <view
          v-if="!props.translate_line"
          @click="addressClick"
        >
          <uni-icons
            style="font-weight: bold;"
            type="location"
            color="black"
            size="16"
          ></uni-icons>
          <text style="font-weight: bold;font-size: 12px;">
            {{ state.location }}
          </text>
          <uni-icons
            type="forward"
            size="12"
          ></uni-icons>
        </view>
        <SearchBar
          v-else
          v-bind="props"
        />
      </view>
    </view>
  </view>
</template>

<style lang="less" scoped>
@import './index.less';
</style>