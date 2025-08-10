<script setup>
import { computed, inject } from 'vue';
import HeadTitle from './HeadTitle.vue';
import InforIcon from '@/assets/info.svg';
const i18n = inject('i18n');
const language = computed(() => i18n.getLocale());
const abouts = computed(() => ([
    {
        title: i18n.data[language.value].about.feature1.title,
        subtitle: i18n.data[language.value].about.feature1.subtitle,
        icon: InforIcon
    },
    {
        title: i18n.data[language.value].about.feature2.title,
        subtitle: i18n.data[language.value].about.feature2.subtitle,
        icon: InforIcon
    },
    {
        title: i18n.data[language.value].about.feature3.title,
        subtitle: i18n.data[language.value].about.feature3.subtitle,
        icon: InforIcon
    }
]))
</script>
<template>
    <section class="container xl:pt-[120px] text-black">
        <div class="flex flex-col xl:flex-row gap-10 max-w-[1160px] mx-auto">
            <div class="space-y-8 xl:space-y-20 flex-1">
                <div class="space-y-10">
                    <HeadTitle :title="$translate('about.title')" :subtitle="$translate('about.subtitle')" />
                </div>
                <div class="flex flex-row xl:flex-col gap-6 xl:gap-10">
                    <div>
                        <h4 class="text-[#079BEE] font-bold text-[44px] xl:text-[40px] !font-montserrat">600 <span
                                class="text-xl">M</span>+</h4>
                        <span class="text-2xl xl:text-xl font-bold">{{ $translate('about.users') }}</span>
                    </div>
                    <div>
                        <h4 class="text-[#079BEE] font-bold text-[44px] xl:text-[40px] !font-montserrat">135+</h4>
                        <span class="text-2xl xl:text-xl font-bold">{{ $translate('about.games') }}</span>
                    </div>
                </div>
            </div>
            <div class="bg-[#EEEEEE] -mx-4 px-4 py-10 xl:p-6 xl:px-[74px] flex items-center justify-center flex-1">
                <div class="space-y-10">
                    <div v-for="(about, index) in abouts" :key="`${about.title}-${index}`" class="flex gap-5 xl:gap-6">
                        <div
                            class="rounded-full bg-[#E3FCFF] flex-none w-10 h-10 xl:w-[50px] xl:h-[50px] flex items-center justify-center">
                            <img :src="about.icon" alt="info" />
                        </div>
                        <div class="space-y-2">
                            <h4 class="font-bold text-2xl !font-montserrat">{{ about.title }}</h4>
                            <span class="text-sm font-montserrat text-[#757575]">{{ about.subtitle }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-between flex-col items-center justify-center mt-10 xl:mt-[68px]">
            <img class="relative z-10 animate-float max-xl:w-[300px]" src="@/assets/Illustrator.png"
                alt="Illustrator" />
            <img src="@/assets/map.png" alt="map" class="-mt-[10%]" />
        </div>
    </section>
</template>

<style scoped>
@keyframes float {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(0);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}
</style>