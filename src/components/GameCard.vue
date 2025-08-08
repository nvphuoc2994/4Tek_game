<template>
    <div
        class="rounded-2xl relative shadow flex flex-col min-h-[268px] xl:min-h-full shadow-[0px_4px_10px_0px_#00000040] overflow-hidden">
        <img :src="image" :alt="title" class="w-full h-full object-cover" />
        <div
            class="p-2 xl:px-8 xl:py-10 absolute bottom-0 left-0 h-full w-full z-10 text-white gap-1 xl:gap-4 bg-gradient-to-t from-[#0007e03b] to-transparent flex flex-col justify-end">
            <h3 class="text-xl xl:text-[48px] leading-none !font-montserrat font-bold xl:mb-2">{{ title }}</h3>
            <p class="text-sm font-montserrat">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
const { title, description, image } = defineProps({
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        default: '',
    },
});
</script>