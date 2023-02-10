<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import TopBar from './components/TopBar.vue';
  import FooterVue from './components/Footer.vue'
  const router = useRouter();
</script>

<template>
  <div class="relative min-h-screen min-w-screen py-8 overflow-hidden" 
      :class="{ 'bg-gradient' : router.currentRoute.value.name !== 'home'}">

    <TopBar />

    <div class="border-y-2 pt-16 pb-8 " 
      :class="{ 'md:px-12 mx-8' : router.currentRoute.value.name === 'home',
                'px-8 md:px-16 bg-cr-beige' : router.currentRoute.value.name !== 'home' }">
      <router-view></router-view>
    </div>

    <FooterVue />

    <template v-if="router.currentRoute.value.name === 'home'">
      <img src="./imgs/top_bg.png" alt="imagem de fundo 1" class="-z-10 w-full absolute top-0 right-0"/>
      <img src="./imgs/bottom_bg.png" alt="imagem de fundo 2" class="-z-10 w-full absolute bottom-0 right-0"/>
    </template>

  </div>
</template>

<style scoped>
  .bg-gradient {
    background: linear-gradient(
        90deg, 
        #FF9393 0%, 
        #F3A86A 25%, 
        #FFD85A 50%, 
        #79E8AC 75%, 
        #A3A0E7 100% )
  }
</style>