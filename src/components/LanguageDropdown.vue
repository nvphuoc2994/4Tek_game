<template>
    <div class="relative inline-block z-10">
        <button @click="toggleDropdown" class="flex items-center px-3 xl:px-4 xl:py-2 focus:outline-none max-xl:bg-[#F6F6F6] max-xl:rounded-lg max-xl:border max-xl:border-[#AFAFAF]">
            <img :src="languages[selectedLanguage]?.flag" alt="Selected Flag" class="w-[34px] mr-2">
            <img src="@/assets/arrow-down.svg" alt="Arrow Down" class="w-[10px] ml-2 max-xl:hidden">
            <img src="@/assets/arrow-down-black.svg" alt="Arrow Down" class="w-[10px] hidden max-xl:block">
        </button>
        <div v-if="isOpen"
            class="absolute max-xl:left-0 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 divide-y px-2 divide-[#C4C4C4]">
            <div v-for="(lang, index) in Object.keys(languages)" :key="index" @click="selectLanguage(lang)"
                class="flex items-center text-black py-1 cursor-pointer">
                <img src="@/assets/tick.svg" alt="Tick"
                    :class="['w-6 mr-2 transition-opacity duration-300', { 'opacity-0': selectedLanguage !== lang }]" />
                <img :src="languages[lang].flag" alt="Flag" class="w-[34px] mr-2">
                <span class="text-[10px] font-bold">{{ languages[lang].name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject, watch, computed } from 'vue';
import vnFlag from '@/assets/vn.svg';
import usFlag from '@/assets/us.svg';
const i18n = inject('i18n')
const selectedLanguage = computed(() => i18n.getLocale());

const languages = computed(() => ({
    vi: { name: i18n.data[selectedLanguage.value].language.vietnam, flag: vnFlag },
    en: { name: i18n.data[selectedLanguage.value].language.english, flag: usFlag },
}));

const isOpen = ref(false);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const selectLanguage = (lang) => {
    i18n.setLocale(lang);
    isOpen.value = false;
};

const handleClickOutside = (event) => {
    const dropdown = document.querySelector('.relative');
    if (dropdown && !dropdown.contains(event.target)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>