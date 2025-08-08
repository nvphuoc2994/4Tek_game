<template>
    <div class="fixed bottom-5 right-5 z-10">
        <button class="cursor-pointer" @click="scrollTo">
            <img class="max-xl:w-[60px] max-xl:h-[60px]" src="@/assets/scrollTo.svg" alt="Arrow" :class="['transition-all', !isTop ? 'rotate-180' : '']">
        </button>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
const isTop = ref(true);
const scrollTo = () => {
    if (window.scrollY === 0) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        isTop.value = false;
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        isTop.value = true;
    }
};

onMounted(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            isTop.value = true;
        } else {
            isTop.value = false;
        }
    });
});
onUnmounted(() => {
    window.removeEventListener('scroll', () => {
        if (window.scrollY === 0) {
            isTop.value = true;
        } else {
            isTop.value = false;
        }
    });
});
</script>
