<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import TopBar from './components/TopBar.vue';
  import FooterVue from './components/Footer.vue'
  const router = useRouter();
</script>

<template>
  <div class="bg-cr-beige min-h-screen min-w-screen py-8" 
      :class="{ 'bg-gradient' : router.currentRoute.value.name !== 'home'}">

    <TopBar />

    <div class="border-y-2" 
      :class="{ 'p-8 mx-8' : router.currentRoute.value.name === 'home',
                'py-8 px-16 bg-cr-beige' : router.currentRoute.value.name !== 'home' }">
      <router-view></router-view>
    </div>

    <FooterVue />

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