<template>
    <div class="homeBox">
        <router-link to="/open">open</router-link>
        <router-link to="/metrics">metrics</router-link>
        <router-link to="/timeoff">timeoff</router-link>
        <router-link to="/transparentPricing">transparentPricing</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/404">404</router-link>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style scoped lang="scss">
.homeBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: green;
}
</style>
