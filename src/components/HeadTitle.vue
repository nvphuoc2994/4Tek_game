<script setup>
const { title, subtitle, class: className } = defineProps({
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    class: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div :class="['space-y-4 xl:space-y-10', className]">
        <h3 class="text-[40px] xl:text-[60px] font-bold leading-none font-playfair">{{ title }}</h3>
        <p class="text-[14px] xl:text-lg text-[#757575]">{{ subtitle }}</p>
    </div>
</template>