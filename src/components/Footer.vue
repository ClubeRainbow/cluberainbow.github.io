<script setup lang="ts">
    const scrollToTop = () => {
        document.querySelector('#topbar')?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
</script>

<template>
    <div class="mx-8 py-2 relative grid grid-cols-1 sm:grid-cols-3 gap-2 flex">

        <div class="order-last sm:order-first flex items-center justify-center sm:justify-start gap-2">
            <a class="hover:brightness-110" href="https://discord.gg/5Z9YshrZah" target="_blank">
                <img src="../imgs/icon_discord.svg" alt="discord" class="h-8 w-8"/>
            </a>

            <a class="hover:brightness-110" href="https://www.instagram.com/clube.rainbow/" target="_blank">
                <img src="../imgs/icon_insta.svg" alt="instagram" class="h-8 w-8"/>
            </a>

            <button class="hover:brightness-110" @click="$router.push({name: 'contacts'})">
                <img src="../imgs/icon_email.svg" alt="email" class="h-8 w-8"/>
            </button>
        </div>

        <div class="col-span-1 flex flex-col items-center text-outline-white whitespace-nowrap">
            <p class="font-shrikhand font-normal text-xl">Clube Rainbow</p>
            <p class="text-sm">rainbow.clube.estudantes@gmail.com</p>
        </div>

        <button class="absolute right-0 top-4 flex items-center justify-end" @click="scrollToTop()">
            <img src="../imgs/icon_up.svg" alt="scroll up" class="h-8 w-8"/>
        </button>
        
    </div>
</template>