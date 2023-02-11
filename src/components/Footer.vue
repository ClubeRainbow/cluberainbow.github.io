<script setup lang="ts">
    const scrollToTop = () => {
        document.querySelector('#topbar')?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
</script>

<template>
    <div class="mx-8 py-2 relative grid grid-cols-1 sm:grid-cols-3 gap-2 flex">

        <div class="order-last sm:order-first flex items-center justify-center sm:justify-start gap-2">
            <img src="../imgs/discord.svg" alt="discord" class="h-8 w-8"/>
            <img src="../imgs/insta.svg" alt="instagram" class="h-8 w-8"/>
            <img src="../imgs/email.svg" alt="email" class="h-8 w-8"/>
        </div>

        <div class="col-span-1 flex flex-col items-center text-sm whitespace-nowrap">
            <p class="title">Clube Rainbow</p>
            <p class="text-outline-white">rainbow.clube.estudantes@gmail.com</p>
        </div>

        <button class="absolute right-0 top-4 flex items-center justify-end" @click="scrollToTop()">
            <img src="../imgs/btn_up.svg" alt="scroll up" class="h-8 w-8"/>
        </button>
        
    </div>
</template>