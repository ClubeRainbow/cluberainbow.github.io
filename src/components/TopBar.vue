<template>
    <div class="mx-8 flex justify-between gap-x-4">
      
        <button class="hover:bg-[rgba(190,0,0,0.25)]" @click="$router.push({name: 'home'})">
            Página Inicial
        </button>
      
        <button class="hover:bg-[rgba(255,110,0,0.25)]" @click="$router.push({name: 'about'})">
            Sobre Nós
        </button>

        <button class="hover:bg-[rgba(255,140,0,0.25)]" @click="$router.push({name: 'info'})">
            Informa-te
        </button>

        <img src="../imgs/logo.webp" alt="logo clube rainbow" class="w-20 h-20 -mb-10 lg:-mx-8"/>

        <button class="hover:bg-[rgba(0,200,0,0.25)]" @click="$router.push({name: 'support'})">
            Como Apoiar
        </button>

        <button class="hover:bg-[rgba(0,180,110,0.25)]" @click="$router.push({name: 'associations'})">
            Associações
        </button>

        <button class="hover:bg-[rgba(40,0,190,0.25)]" @click="$router.push({name: 'contacts'})">
            Contactos
        </button>
      
    </div>
</template>

<style scoped>
    div > button {
        @apply rounded-t-lg px-4 font-shrikhand font-normal text-xl text-outline
    }
    .text-outline {
        text-shadow:
            -1px -1px 0 white,  
            1px -1px 0 white,
            -1px 1px 0 white,
            1px 1px 0 white;
    }
</style>