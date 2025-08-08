<template>
    <footer class="bg-black">
        <div class="bg-[url('@/assets/foot-bg.jpg')] bg-cover">
            <div class="container">
                <div class="flex max-xl:flex-col justify-between py-[50px] xl:py-[100px] gap-10 max-xl:gap-[70px]">
                    <div class="space-y-10 max-xl:flex max-xl:flex-col max-xl:items-center">
                        <a href="/" class="flex items-center w-[163px]">
                            <img class="w-full h-auto" src="@/assets/logo.svg" alt="logo">
                        </a>
                        <ul class="flex items-center gap-6">
                            <li>
                                <a href="#"><img src="@/assets/twister.svg" alt="twitter"></a>
                            </li>
                            <li>
                                <a href="#"><img src="@/assets/fb.svg" alt="fb"></a>
                            </li>
                            <li>
                                <a href="#"><img src="@/assets/ins.svg" alt="instagram"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex gap-10 max-xl:gap-[70px] max-xl:flex-col basis-[60%]">
                        <div class="space-y-5 xl:space-y-10 ">
                            <h4 class="!font-montserrat font-bold text-2xl">{{ $translate('footer.address') }}</h4>
                            <div class="space-y-5 xl:space-y-10">
                                <div class="flex gap-3 items-start">
                                    <img src="@/assets/location.svg" alt="">
                                    <div class="space-y-3 text-sm font-light mt-2">
                                        <p>{{ $translate('footer.location1') }}</p>
                                        <p>{{ $translate('footer.location2') }}</p>
                                    </div>
                                </div>
                                <div class="flex gap-3 items-start">
                                    <img src="@/assets/phone.svg" alt="">
                                    <div class="space-y-3 text-sm font-light mt-2">
                                        <p>(+1) 555-0108-000<span class="mx-2">{{ $translate('footer.or')
                                                }}</span>(+236) 555-0108</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-5 xl:space-y-10">
                            <h4 class="!font-montserrat font-bold text-2xl">{{ $translate('footer.subcribe') }}</h4>
                            <div class="pt-2 space-y-3">
                                <p class="text-sm font-light">{{ $translate('footer.des') }}</p>
                                <div class="flex w-full">
                                    <input type="email" :placeholder="$translate('banner.email')"
                                        class="w-full placeholder:text-white border text-sm border-white border-r-0 p-3 rounded-l-lg bg-transparent text-white focus:outline-none">
                                    <button
                                        class="bg-transparent text-white px-3 py-4 border border-white border-l-0 rounded-r-lg cursor-pointer">
                                        <img class="filter invert brightness-200" src="@/assets/arrow-right.svg" alt="Arrow Right">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-7 text-center text-lg">
            <p>{{ $translate('footer.copy') }}</p>
        </div>
    </footer>
</template>
