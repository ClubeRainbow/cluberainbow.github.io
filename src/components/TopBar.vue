<script setup lang="ts">
  import { ref } from "vue";
  const windowWidth = ref(window.innerWidth);
  addEventListener("resize", () => { windowWidth.value = window.innerWidth});
</script>

<template>
    <div v-if="windowWidth >= 1180" class="mx-8 flex justify-between gap-x-4">
      
        <button class="title hover:bg-[rgba(190,0,0,0.25)]" @click="$router.push({name: 'home'})">
            Página Inicial
        </button>
      
        <button class="title hover:bg-[rgba(255,110,0,0.25)]" @click="$router.push({name: 'about'})">
            Quem Somos
        </button>

        <button class="title hover:bg-[rgba(255,140,0,0.25)]" @click="$router.push({name: 'info'})">
            Informa-te
        </button>

        <img src="../imgs/logo.webp" alt="logo clube rainbow" class="w-20 h-20 -mb-10 -mx-8"/>

        <button class="title hover:bg-[rgba(0,200,0,0.25)]" @click="$router.push({name: 'support'})">
            Como Apoiar
        </button>

        <button class="title hover:bg-[rgba(0,180,110,0.25)]" @click="$router.push({name: 'associations'})">
            Associações
        </button>

        <button class="title hover:bg-[rgba(40,0,190,0.25)]" @click="$router.push({name: 'contacts'})">
            Contactos
        </button>
      
    </div>

    <div v-else class="mx-8 flex items-center justify-center relative">
      <button class="absolute left-0 hover:text-cr-light-brown" @click="$emit('show_options')">
        Menu Btn
      </button>
      <img src="../imgs/logo.webp" alt="logo clube rainbow" class="w-20 h-20 -mb-10"/>
    </div>
</template>