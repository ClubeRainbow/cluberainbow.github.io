<script setup lang="ts">
  import { ref } from "vue";
  const windowWidth = ref(window.innerWidth);
  addEventListener("resize", () => { windowWidth.value = window.innerWidth});
</script>

<template>
    <div v-if="windowWidth >= 1050" class="mx-8 flex justify-between gap-x-4">
      
        <button class="topbar_option hover:bg-[rgba(190,0,0,0.25)]" @click="$router.push({name: 'home'})">
            Página Inicial
        </button>
      
        <button class="topbar_option hover:bg-[rgba(255,110,0,0.25)]" @click="$router.push({name: 'about'})">
            Quem Somos
        </button>

        <button class="topbar_option hover:bg-[rgba(255,140,0,0.25)]" @click="$router.push({name: 'info'})">
            Informações
        </button>

        <img src="../assets/logo.webp" alt="logo clube rainbow" class="z-20 w-20 h-20 -mb-10"/>

        <button class="topbar_option hover:bg-[rgba(0,200,0,0.25)]" @click="$router.push({name: 'merch'})">
            Apoia-nos
        </button>

        <button class="topbar_option hover:bg-[rgba(0,180,110,0.25)]" @click="$router.push({name: 'resources'})">
            Recursos Úteis
        </button>

        <button class="topbar_option hover:bg-[rgba(40,0,190,0.25)]" @click="$router.push({name: 'contacts'})">
            Contactos
        </button>
      
    </div>

    <div v-else class="mx-8 flex items-center justify-center relative">
      <button class="absolute left-0 bottom-2 hover:brightness-110" @click="$emit('show_options')">
        <img src="../assets/icon_menu.svg" alt="menu" class="h-8 w-8"/>
      </button>
      <img src="../assets/logo.webp" alt="logo clube rainbow" class="z-20 w-20 h-20 -mb-10"/>
    </div>
</template>