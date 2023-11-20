

<script setup>
import { defineProps, onMounted, ref, reactive } from 'vue';

const props = defineProps({
  translateLine: Boolean,// 是否滚动到了切换动画和布局的位置
});

onMounted(() => {
  console.log(props);
});

const searchPlaceHolder = ref('老兵冒菜');
const searchAdItems = reactive([]);

// 点击搜索栏事件
function search(params) {

}
</script>

<template>
  <view>
    <uni-search-bar
      class="{searchBar:props.translateLine,searchBarTranslated:props.translateLine}"
      :placeholder="searchPlaceHolder"
      radius="20"
      clearButton="none"
      cancelButton="always"
      cancelText="搜索"
      @focus="search"
      @cancel="search"
    ></uni-search-bar>

    <!-- 搜索备选 -->
    <view
      class="search-bar-items"
      v-if="true"
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
.search-bar {
  height: 40px;
}

// 切换后的搜索栏
.search-bar-translated {
  height: 20px;
}

.search-bar-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  uni-tag {
    padding-left: 10px;
    padding-bottom: 5px;

    text {
      color: black;
      background-color: #f8f8f8;
      border: 0px;
    }
  }
}
</style>