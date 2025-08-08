<script setup lang="ts">
import LanguageDropdown from './LanguageDropdown.vue';
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
}
</script>

<template>
    <header class="relative z-20 flex justify-between items-center py-5 container">
        <a href="/" class="w-[68px] xl:w-[163px]">
            <h1>
                <img class="w-full h-auto" src="@/assets/logo.svg" alt="Logo">
            </h1>
        </a>
        <div class="items-center space-x-[80px] hidden xl:flex">
            <nav class="flex space-x-[80px] text-sm">
                <a href="#" class="hover:text-yellow-400 uppercase font-bold">{{ $translate('header.about') }}</a>
                <a href="#" class="hover:text-yellow-400 uppercase font-bold">{{ $translate('header.games') }}</a>
                <a href="#" class="hover:text-yellow-400 uppercase font-bold">{{ $translate('header.partners') }}</a>
                <a href="#" class="hover:text-yellow-400 uppercase font-bold">{{ $translate('header.contact') }}</a>
            </nav>
            <LanguageDropdown />
        </div>
        <button class="xl:hidden" @click="toggleMenu">
            <img src="@/assets/bar.svg" alt="bar">
        </button>
        <div class="xl:hidden fixed top-0 left-0 w-full h-full bg-white z-50" v-if="menuOpen">
            <div>
                <div class="flex justify-between p-4">
                    <LanguageDropdown />
                    <button @click="toggleMenu" class="w-[40px] h-[40px]">
                        <img src="@/assets/close.svg" alt="close">
                    </button>
                </div>
                <nav class="flex flex-col text-sm mt-4 px-4 text-center text-black divide-y divide-[#C4C4C4]">
                    <a href="#" class="uppercase font-bold py-6">{{ $translate('header.about') }}</a>
                    <a href="#" class="uppercase font-bold py-6">{{ $translate('header.games') }}</a>
                    <a href="#" class="uppercase font-bold py-6">{{ $translate('header.partners')
                        }}</a>
                    <a href="#" class="uppercase font-bold py-6">{{ $translate('header.contact') }}</a>
                </nav>
            </div>
        </div>
    </header>
</template>
