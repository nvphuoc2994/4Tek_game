<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import background from '@/assets/background.png';
import backgroundMobile from '@/assets/background-mb.png'
const targetDate = new Date('2025-09-05T15:42:00+07:00'); // Example target date (30 days from now)
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const email = ref('');

const updateCountdown = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        days.value = 0;
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
        return;
    }

    days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((difference % (1000 * 60)) / 1000);
};

let interval = null;
onMounted(() => {
    interval = setInterval(updateCountdown, 1000);
});
onUnmounted(() => {
    clearInterval(interval);
});

const subscribe = () => {
    console.log(email.value);
};
</script>

<template>
    <section class="relative">
        <div class="relative md:max-w-[780px] mx-auto">
            <div class="relative z-10 text-center px-4 pt-6 xl:pt-[130px] pb-12 xl:pb-[180px]">
                <h1 class="text-[40px] xl:text-[80px] font-bold mb-10 xl:mb-6 leading-[50px] xl:leading-[120px] font-playfair">{{
                    $translate('banner.title') }}</h1>
                <div
                    class="bg-white text-black p-6 px-6 xl:py-6 xl:px-10 rounded-2xl shadow-[0px_4px_10px_0px_#00000040] mb-10 xl:mb-[100px] flex justify-between items-center">
                    <div class="flex relative flex-col gap-3">
                        <span class="text-[36px] xl:text-[60px] leading-[45px] xl:leading-[64px] font-bold font-playfair">{{ days }}</span>
                        <span class="font-bold text-sm xl:text-base capitalize">{{ $translate('banner.days') }}</span>
                    </div>
                    <span class="text-[40px] xl:text-[60px] leading-[64px] mb-4">:</span>
                    <div class="flex relative flex-col gap-3">
                        <span class="text-[36px] xl:text-[60px] leading-[45px] xl:leading-[64px] font-bold font-playfair">{{ hours }}</span>
                        <span class="font-bold text-sm xl:text-base capitalize">{{ $translate('banner.hours') }}</span>
                    </div>
                    <span class="text-[40px] xl:text-[60px] leading-[64px] mb-4">:</span>
                    <div class="flex relative flex-col gap-3">
                        <span class="text-[36px] xl:text-[60px] leading-[45px] xl:leading-[64px] font-bold font-playfair">{{ minutes }}</span>
                        <span class="font-bold text-sm xl:text-base capitalize">{{ $translate('banner.minutes') }}</span>
                    </div>
                    <span class="text-[40px] xl:text-[60px] leading-[64px] mb-4">:</span>
                    <div class="flex relative flex-col gap-3">
                        <span class="text-[36px] xl:text-[60px] leading-[45px] xl:leading-[64px] font-bold font-playfair">{{ seconds }}</span>
                        <span class="font-bold text-sm xl:text-base capitalize">{{ $translate('banner.seconds') }}</span>
                    </div>
                </div>
                <div class="max-w-[560px] mx-auto">
                    <p class="text-sm xl:text-lg mb-8">
                        {{ $translate('banner.subtitle') }}
                    </p>
                    <div class="flex w-full">
                        <input v-model="email" type="email" :placeholder="$translate('banner.email')"
                            class="w-full p-3 rounded-l-lg bg-white text-black focus:outline-none text-[14px]">
                        <button @click="subscribe" class="bg-white text-black px-3 py-4 rounded-r-lg cursor-pointer">
                            <img src="@/assets/arrow-right.svg" alt="Arrow Right">
                        </button>
                    </div>
                </div>
                <div class="xl:absolute bottom-0 right-full max-xl:max-w-[250px] mt-5 ml-[20%] xl:w-[662px] xl:h-[665px] xl:-mr-[60px]">
                    <img src="@/assets/author.png" class="w-full h-full" alt="author">
                </div>
            </div>

        </div>
        <div class="absolute -z-10 w-full xl:h-[1017px] h-[608px] bottom-[280px] xl:bottom-0 left-1/2 transform -translate-x-1/2">
            <img :src="background" alt="Background"
                class="w-auto h-full object-cover object-center mx-auto">
            <img :src="backgroundMobile" alt="Background"
                class="w-auto h-full object-cover object-center mx-auto hidden xl:hidden">
        </div>
    </section>
</template>