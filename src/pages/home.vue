<template>
    <div class="homeBox">
        <router-link to="/open">open</router-link>
        <router-link to="/metrics">metrics</router-link>
        <router-link to="/timeoff">timeoff</router-link>
        <router-link to="/transparentPricing">transparentPricing</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/404">404</router-link>
        <!-- 图片 -->
        <input type="file" @change="handleImageChange" />
        <!-- 显示图片 -->
        <img :src="imageUrl" alt="image" class="imgStyle" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const imageUrl = ref('')

const handleImageChange = (e: Event) => {
    console.log('handleImageChange', e)
    const file = (e.target as HTMLInputElement).files?.[0]
    if (file) {
        console.log('file', file)
        imageUrl.value = URL.createObjectURL(file)
    }
}
</script>

<style scoped lang="scss">
.homeBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 110vh;
    background-color: green;
}

.imgStyle {
    width: 100px;
    height: 100px;
}
</style>
