<script setup>
import store from '../../../store';
import { ref, defineProps } from 'vue';

import SearchBar from './Searchbar.vue';

const { state = {} } = store;

// 获取安全边距top，防止阻挡
const top = ref(0);
const { safeAreaInsets } = uni.getSystemInfoSync();
top.value = safeAreaInsets.top;

const props = defineProps({
    translateLine: Boolean,// 是否滚动到了切换动画和布局的位置
});

// 地址栏点击事件
function addressClick() {
}

</script>

<template>
    <view :style="{ paddingTop: top + 'px', backgroundColor: '#ffd100' }">
        <view v-if="false">
            <view
              style="display: flex;align-items: center;height: 40px;"
              @click="addressClick"
            >
                <uni-icons
                  type="location"
                  color="black"
                  size="20"
                ></uni-icons>
                <text style="font-weight: bold;font-size: 12px;">
                    {{ state.location }}
                </text>
                <uni-icons
                  type="forward"
                  size="12"
                ></uni-icons>
            </view>
        </view>
        <view v-else>
            <SearchBar v-bind="props" />
        </view>
    </view>
</template>

<style lang="less"></style>