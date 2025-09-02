<template>
    <div class="openBox">
        open
        <button @click="router.push('/')">back to home</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped lang="scss">
.openBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: aquamarine;
}
</style>
