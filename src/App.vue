<template>
    <div class="box">
        <RouterView v-slot="{ Component }">
            <Transition name="fade">
                <component :is="Component" />
            </Transition>
        </RouterView>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

</script>

<style lang="scss" scoped>
.box {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background: bisque;
}

.fade-enter-from {
    opacity: 0;
    transform: translateX(-100%);
}

.fade-enter-to {
    /*定义进入完成后的位置 和 透明度 */
    transform: translateX(0%);
    opacity: 1;
}

.fade-leave-active,
.fade-enter-active {
    transition: all 0.5s ease-out;
}

.fade-leave-from {
    /* 页面离开时一开始的css样式,离开后为leave-to，经过active渐渐透明 */
    transform: translateX(0%);
    opacity: 1;
}

.fade-leave-to {
    /* 这个是离开后的透明度通过下面的active阶段渐渐变为0 */
    transform: translateX(100%);
    opacity: 0;
}
</style>
