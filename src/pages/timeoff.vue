<template>
    <div class="timeoffBox">
        timeoff
        <button @click="router.push('/')">back to home</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped lang="scss">
.timeoffBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: bisque;
}
</style>
