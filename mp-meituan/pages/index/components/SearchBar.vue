 


<script setup>
import { ref, defineProps, onMounted } from 'vue';

const props = defineProps();

const searchPlaceHolder = ref('老兵冒菜');
const searchAdItems = [
    {
        text: '烧烤',
        id: '1',
    },
    {
        text: '测试',
        id: '1',
    },
];

// 点击搜索栏事件
function search(params) {

}

onMounted(() => {
    console.log(props);
});
</script>

<template>
    <view class="container">
        <!-- 搜索栏 -->
        <view>
            <uni-search-bar
              class="search-bar"
              :placeholder="searchPlaceHolder"
              radius="20"
              clearButton="none"
              cancelButton="always"
              cancelText="搜索"
              @focus="search"
              @cancel="search"
            ></uni-search-bar>
        </view>

        <!-- 搜索备选 -->
        <view
          class="search-bar-items"
          v-if="!props.translate_line"
        >
            <uni-tag
              size="small"
              v-for="(item, index) in searchAdItems"
              :text="item.text"
              :key="index"
              circle="true"
              @click="tagClick"
            ></uni-tag>
        </view>
    </view>
</template>

<style lang="less" scoped>
@import './index.less';
</style>
