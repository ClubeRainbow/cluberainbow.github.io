<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const emit = defineEmits(['close', 'show_options']);
  const windowWidth = ref(window.innerWidth);

  addEventListener("resize", () => { windowWidth.value = window.innerWidth});
  
  const redirect = (dest: string) => {
    if (router.currentRoute.value.name === dest)
        emit('close')
    else
        router.push({name: dest})
  }
</script>

<template>
    <div v-if="windowWidth >= 1050" class="mx-8 flex justify-between gap-x-4">
      
        <button class="topbar_option hover:bg-[rgba(190,0,0,0.25)]" 
            @click="redirect('home')">
            Página Inicial
        </button>
      
        <button class="topbar_option hover:bg-[rgba(255,110,0,0.25)]" 
            :class="{ 'bg-[rgba(255,110,0,0.25)]' : router.currentRoute.value.name === 'about'}"
            @click="redirect('about')">
            Sobre Nós
        </button>

        <button class="topbar_option hover:bg-[rgba(255,140,0,0.25)]" 
            :class="{ 'bg-[rgba(255,140,0,0.25)]' : router.currentRoute.value.name === 'info'}"
            @click="redirect('info')">
            Informações
        </button>

        <button class="w-20 shrink-0" @click="redirect('home')">
            <img src="../assets/logo.webp" alt="logo clube rainbow" class="z-20 -mb-11" />
        </button>

        <button class="topbar_option hover:bg-[rgba(0,200,0,0.25)]"
            :class="{ 'bg-[rgba(0,200,0,0.25)]' : router.currentRoute.value.name === 'merch'}"
            @click="redirect('merch')">
            Merch
        </button>

        <button class="topbar_option hover:bg-[rgba(0,180,110,0.25)]"
            :class="{ 'bg-[rgba(0,180,110,0.25)]' : router.currentRoute.value.name === 'resources'}" 
            @click="redirect('resources')">
            Recursos
        </button>

        <button class="topbar_option hover:bg-[rgba(40,0,190,0.25)]" 
            :class="{ 'bg-[rgba(40,0,190,0.25)]' : router.currentRoute.value.name === 'contacts'}" 
            @click="redirect('contacts')">
            Contactos
        </button>
      
    </div>

    <div v-else class="mx-8 flex items-center justify-center relative">
        <button class="absolute left-0 bottom-2 hover:brightness-110" @click="$emit('show_options')">
            <img src="../assets/icon_menu.svg" alt="menu" class="h-8 w-8"/>
        </button>
        <button class="w-20 shrink-0" @click="redirect('home')">
            <img src="../assets/logo.webp" alt="logo clube rainbow" class="z-20 -mb-11"/>
        </button>
    </div>
</template>