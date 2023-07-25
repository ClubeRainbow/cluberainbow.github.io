<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const emit = defineEmits(['close', 'show_options']);
  const windowWidth = ref(window.innerWidth);

  const about_options = ref(false)
  const info_options = ref(false)

  addEventListener("resize", () => { windowWidth.value = window.innerWidth});
  
  const redirect = (dest: string, scroll?: string) => {
    if (router.currentRoute.value.name === dest)
        emit('close', scroll)
    else
        router.push({name: dest, hash: scroll})
  }
</script>

<template>
    <div v-if="windowWidth >= 1180" class="mx-8 flex justify-between gap-x-4">
      
        <button class="topbar_option hover:bg-[rgba(190,0,0,0.25)] focus:bg-[rgba(190,0,0,0.25)]" 
            @click="redirect('home')">
            Página Inicial
        </button>
      
        <div class="w-full relative" @mouseover="about_options=true" @mouseleave="about_options=false" @focusin="about_options=true">
            
            <button class="topbar_option sub_button hover:bg-[rgba(255,110,0,0.25)] focus:bg-[rgba(255,110,0,0.25)]" 
                :class="{ 'bg-[rgba(255,110,0,0.25)]' : router.currentRoute.value.name === 'about' || about_options }"
                @click="redirect('about')">
                Sobre Nós
                <img src="../assets/arrow_down.svg" alt="toggle list" class="h-3 w-3 xl-topbar:h-4 xl-topbar:w-4" :class="{ 'rotate-180' : about_options }"/>
            </button>

            <div v-if="about_options" class="sub_section">
                <button class="sub_option" @click="redirect('about', '#clube')">
                    Sobre o Clube Rainbow
                </button>
                <button class="sub_option" @click="redirect('about', '#depts')">
                    Departamentos
                </button>
                <button class="sub_option" @click="redirect('about', '#dir')">
                    Direção
                </button>
                <button class="sub_option rounded-b-lg" @click="redirect('about', '#partners')" @focusout="about_options=false">
                    Parcerias
                </button>
            </div>
        </div>
            
        <div class="w-full relative" @mouseover="info_options=true" @mouseleave="info_options=false" @focusin="info_options=true">
            
            <button class="topbar_option sub_button hover:bg-[rgba(255,140,0,0.25)] focus:bg-[rgba(255,140,0,0.25)]" 
                :class="{ 'bg-[rgba(255,140,0,0.25)]' : router.currentRoute.value.name === 'info' || info_options }"
                @click="redirect('info')" >
                Informações
                <img src="../assets/arrow_down.svg" alt="toggle list" class="h-3 w-3 xl-topbar:h-4 xl-topbar:w-4" :class="{ 'rotate-180' : info_options }"/>
            </button>

            <div v-if="info_options" class="sub_section">
                <button class="sub_option" @click="redirect('info', '#events')">
                    Eventos
                </button>
                <button class="sub_option rounded-b-lg" @click="redirect('info', '#faq')" @focusout="info_options=false">
                    FAQ
                </button>
            </div>
        </div>

        <button class="w-20 shrink-0" @click="redirect('home')">
            <img src="../assets/logo.webp" alt="logo clube rainbow" class="-mb-11" />
        </button>

        <button class="topbar_option hover:bg-[rgba(0,200,0,0.25)] focus:bg-[rgba(0,200,0,0.25)]"
            :class="{ 'bg-[rgba(0,200,0,0.25)]' : router.currentRoute.value.name === 'merch'}"
            @click="redirect('merch')">
            Merch
        </button>

        <button class="topbar_option hover:bg-[rgba(0,180,110,0.25)] focus:bg-[rgba(0,180,110,0.25)]"
            :class="{ 'bg-[rgba(0,180,110,0.25)]' : router.currentRoute.value.name === 'resources'}" 
            @click="redirect('resources')">
            Recursos Úteis
        </button>

        <button class="topbar_option hover:bg-[rgba(40,0,190,0.25)] focus:bg-[rgba(40,0,190,0.25)]" 
            :class="{ 'bg-[rgba(40,0,190,0.25)]' : router.currentRoute.value.name === 'contacts'}" 
            @click="redirect('contacts')">
            Contactos
        </button>
      
    </div>

    <div v-else class="mx-8 flex items-center justify-center relative">
        <button class="absolute left-0 bottom-2 hover:brightness-110 focus:brightness-110" @click="$emit('show_options')">
            <img src="../assets/icon_menu.svg" alt="menu" class="h-8 w-8"/>
        </button>
        <button class="w-20 shrink-0" @click="redirect('home')">
            <img src="../assets/logo.webp" alt="logo clube rainbow" class="z-20 -mb-11"/>
        </button>
    </div>
</template>

<style scoped>
    .sub_button {
        @apply flex justify-between items-center gap-2 px-2 xl-topbar:px-3 h-full
    }
    .sub_section {
        @apply absolute top-full w-full flex flex-col gap-1 z-20
    }
    .sub_option {
        @apply bg-cr-red-beige border py-1 hover:brightness-110 hover:underline focus:brightness-110 focus:underline
    }
</style>