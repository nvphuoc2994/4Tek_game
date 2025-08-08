<template>
  <div class="relative text-white">
    <Header />
    <main>
      <CountDown />
      <section class="container xl:pt-[120px] text-black">
        <div class="flex flex-col xl:flex-row gap-10 max-w-[1160px] mx-auto">
          <div class="space-y-8 xl:space-y-20 flex-1">
            <div class="space-y-10">
              <HeadTitle :title="$translate('about.title')" :subtitle="$translate('about.subtitle')" />
            </div>
            <div class="flex flex-row xl:flex-col gap-6 xl:gap-10">
              <div>
                <h4 class="text-[#079BEE] font-bold text-[44px] xl:text-[40px] !font-montserrat">600 <span class="text-xl">M</span>+</h4>
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
                <div class="rounded-full bg-[#E3FCFF] flex-none w-10 h-10 xl:w-[50px] xl:h-[50px] flex items-center justify-center">
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
          <img class="relative z-10 animate-float max-xl:w-[300px]" src="@/assets/Illustrator.png" alt="Illustrator" />
          <img src="@/assets/map.png" alt="map" class="-mt-[10%]" />
        </div>
      </section>

      <section class="container pt-12 xl:py-[120px] mb-12 xl:mb-[120px] text-black">
        <HeadTitle class="text-center max-w-[860px] mx-auto" :title="$translate('games.title')"
          :subtitle="$translate('games.subtitle')" />
        <div class="grid grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-10 auto-rows-fr mt-10 xl:mt-20">
          <GameCard v-for="(item, index) in games" :key="item.title" :title="item.title" :description="item.description"
            :image="item.image" :class="(index % 4 === 1 || index % 4 === 3) ? 'translate-y-8 xl:translate-y-[120px]' : ''" />
        </div>
      </section>

      <Partner />
    </main>
    <ScrollButton />

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject, computed } from 'vue';
import Header from './components/Header.vue';
import CountDown from './components/CountDown.vue';
import InforIcon from '@/assets/info.svg';
import HeadTitle from './components/HeadTitle.vue';
import GameCard from './components/GameCard.vue';
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
import Partner from './components/Partner.vue';
import Footer from './components/Footer.vue';
import ScrollButton from './components/ScrollButton.vue';
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

@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(2deg);
  }

  75% {
    transform: rotate(-2deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.animate-wiggle {
  animation: wiggle 2s ease-in-out infinite;
}
</style>
