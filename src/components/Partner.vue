<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const modules = [Navigation];
</script>

<template>
    <section class="bg-[#F6F6F6] py-10 xl:py-[120px] text-black">
        <div class="container">
            <h3 class="text-[40px] xl:text-[60px] font-bold leading-none font-playfair text-center">{{ $translate('partner.title') }}
            </h3>
            <div class="mt-10 max-xl:-mx-4 xl:mt-20 relative">
                <Swiper loop :modules="modules" :slides-per-view="3" :centered-slides="true" :space-between="12" :breakpoints="{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }" :navigation="{
                    nextEl: '.custom-next-button',
                    prevEl: '.custom-prev-button',
                }">
                    <SwiperSlide>
                        <img src="@/assets/partner1.png" alt="partner" class="w-full h-auto object-contain" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="@/assets/partner2.png" alt="partner" class="w-full h-auto object-contain" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="@/assets/partner3.png" alt="partner" class="w-full h-auto object-contain" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="@/assets/partner4.png" alt="partner" class="w-full h-auto object-contain" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="@/assets/partner5.png" alt="partner" class="w-full h-auto object-contain" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="@/assets/partner6.png" alt="partner" class="w-full h-auto object-contain" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="@/assets/partner7.png" alt="partner" class="w-full h-auto object-contain" />
                    </SwiperSlide>
                </Swiper>
                <div
                    class="custom-next-button absolute bg-[#c2c2c2] rounded-xl top-1/2 left-4 xl:-left-12 transform rotate-180 -translate-y-1/2 shadow-[0px_-4px_10px_2px_#D9D9D9] flex items-center justify-center cursor-pointer z-10">
                    <img src="@/assets/arrow-left.svg" alt="next">
                </div>
                <div
                    class="custom-prev-button absolute bg-[#c2c2c2] rounded-xl top-1/2 right-4 xl:-right-12 transform -translate-y-1/2 shadow-[0px_4px_10px_2px_#D9D9D9] flex items-center justify-center cursor-pointer z-10">
                    <img src="@/assets/arrow-left.svg" alt="prev">
                </div>

            </div>
        </div>

    </section>
</template>