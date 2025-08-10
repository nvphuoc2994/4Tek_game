<template>
  <div class="relative text-white">
    <Header />
    <main>
      <CountDown />
      <About />
      <Game />
      <Partner />
    </main>
    <ScrollButton />

    <Footer />
  </div>
</template>

<script setup>
import About from './components/About.vue';
import CountDown from './components/CountDown.vue';
import Footer from './components/Footer.vue';
import Game from './components/Game.vue';
import Header from './components/Header.vue';
import Partner from './components/Partner.vue';
import ScrollButton from './components/ScrollButton.vue';
</script>
