<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from 'vue-router';
  import TopBar from './components/TopBar.vue';
  import MobileOptions from "./components/MobileOptions.vue";
  import FooterVue from './components/Footer.vue';
  
  const router = useRouter();
  const show_options = ref(false);
</script>

<template>
  <div class="relative min-h-screen min-w-screen py-8 overflow-hidden" 
      :class="{ 'bg-gradient' : router.currentRoute.value.name !== 'home' || show_options }">

    <TopBar id="topbar" @show_options="show_options = !show_options"/>

    <div class="border-y-2 pb-8" 
      :class="{ 'pt-16 md:px-12 mx-8' : router.currentRoute.value.name === 'home' && !show_options,
                'pt-12 px-8 md:px-16 bg-cr-beige' : router.currentRoute.value.name !== 'home' || show_options }">
      <MobileOptions v-if="show_options" @close="show_options = !show_options"/>
      <router-view v-else></router-view>
    </div>

    <FooterVue />

    <template v-if="router.currentRoute.value.name === 'home'">
      <img src="./imgs/bg_top.png" alt="imagem de fundo 1" class="-z-10 w-full absolute top-0 right-0"/>
      <img src="./imgs/bg_bottom.png" alt="imagem de fundo 2" class="-z-10 w-full absolute bottom-0 right-0"/>
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