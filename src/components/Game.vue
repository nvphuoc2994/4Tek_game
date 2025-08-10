<script setup>
import { computed, inject } from 'vue';
import game1 from '@/assets/game1.jpg';
import game2 from '@/assets/game2.jpg';
import game3 from '@/assets/game3.jpg';
import game4 from '@/assets/game4.jpg';
import game5 from '@/assets/game5.jpg';
import game6 from '@/assets/game6.jpg';
import game7 from '@/assets/game7.jpg';
import game8 from '@/assets/game8.jpg';
import game9 from '@/assets/game9.jpg';
import game10 from '@/assets/game10.jpg';
import game11 from '@/assets/game11.jpg';
import game12 from '@/assets/game12.jpg';
const i18n = inject('i18n');
const language = computed(() => i18n.getLocale());
const games = computed(() => ([
    {
        title: i18n.data[language.value].games.game1.title,
        description: i18n.data[language.value].games.des,
        image: game1
    },
    {
        title: i18n.data[language.value].games.game2.title,
        description: i18n.data[language.value].games.des,
        image: game2
    },
    {
        title: i18n.data[language.value].games.game3.title,
        description: i18n.data[language.value].games.des,
        image: game3
    },
    {
        title: i18n.data[language.value].games.game4.title,
        description: i18n.data[language.value].games.des,
        image: game4
    },
    {
        title: i18n.data[language.value].games.game5.title,
        description: i18n.data[language.value].games.des,
        image: game5
    },
    {
        title: i18n.data[language.value].games.game6.title,
        description: i18n.data[language.value].games.des,
        image: game6
    },
    {
        title: i18n.data[language.value].games.game7.title,
        description: i18n.data[language.value].games.des,
        image: game7
    },
    {
        title: i18n.data[language.value].games.game8.title,
        description: i18n.data[language.value].games.des,
        image: game8
    },
    {
        title: i18n.data[language.value].games.game9.title,
        description: i18n.data[language.value].games.des,
        image: game9
    },
    {
        title: i18n.data[language.value].games.game10.title,
        description: i18n.data[language.value].games.des,
        image: game10
    },
    {
        title: i18n.data[language.value].games.game11.title,
        description: i18n.data[language.value].games.des,
        image: game11
    },
    {
        title: i18n.data[language.value].games.game12.title,
        description: i18n.data[language.value].games.des,
        image: game12
    }
]))
</script>
<template>

    <section class="container pt-12 xl:py-[120px] mb-12 xl:mb-[120px] text-black">
        <HeadTitle class="text-center max-w-[860px] mx-auto" :title="$translate('games.title')"
            :subtitle="$translate('games.subtitle')" />
        <div class="grid grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-10 auto-rows-fr mt-10 xl:mt-20">
            <GameCard v-for="(item, index) in games" :key="item.title" :title="item.title"
                :description="item.description" :image="item.image"
                :class="(index % 4 === 1 || index % 4 === 3) ? 'translate-y-8 xl:translate-y-[120px]' : ''" />
        </div>
    </section>

</template>