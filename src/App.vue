<script setup lang="ts">
  import { ref, watch } from "vue";
  import { useRouter } from 'vue-router';
  import TopBar from './components/TopBar.vue';
  import MobileOptions from "./components/MobileOptions.vue";
  import FooterVue from './components/Footer.vue';
  import ExitButton from "./components/ExitButton.vue";
  
  const router = useRouter();
  const show_options = ref(false);

  watch(
    () => router.currentRoute.value.fullPath,
    async () => { show_options.value = false }
  );

  const scrollTo = async (scroll: string) => {
    show_options.value = false
    router.push({hash: scroll ? scroll : ''})
  }
</script>

<template>
  <div class="relative py-8 min-h-screen xl:overflow-hidden" 
      :class="{ 'bg-gradient' : router.currentRoute.value.name !== 'home' || show_options,
                'h-full flex flex-col' : router.currentRoute.value.name === 'home' && !show_options }">

    <ExitButton />

    <TopBar id="topbar" @show_options="show_options = !show_options" @close="s => scrollTo(s)" />

    <div class="border-y-2 pt-16 pb-10" 
      :class="{ 'md:px-12 mx-8 flex-1 xl:flex xl:items-center' : router.currentRoute.value.name === 'home' && !show_options,
                'px-8 sm:px-12 md:px-28 lg:px-48 bg-cr-beige' : router.currentRoute.value.name !== 'home' || show_options }">
      <MobileOptions v-if="show_options" @close="s => scrollTo(s)"/>
      <router-view v-else></router-view>
    </div>

    <FooterVue />

    <template v-if="router.currentRoute.value.name === 'home'">
      <img src="./assets/bg_top.png" alt="imagem de fundo 1" class="-z-10 w-full absolute top-0"/>
      <img src="./assets/bg_bottom.png" alt="imagem de fundo 2" class="-z-10 w-full absolute bottom-0 xl:bottom-[-50px]"/>
    </template>

  </div>
</template>