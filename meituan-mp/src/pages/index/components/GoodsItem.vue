

<script>
</script>

<template>
    <view class="goods">
        <view
          class="goods-item"
          v-for="(item, index) in goods"
          :key="index"
        >
            {{ item.goods.title }}
        </view>
    </view>
</template>

<style></style>