<script setup lang="ts">
    import ContactIcons from './ContactIcons.vue';
    const scrollToTop = () => {
        document.querySelector('#topbar')?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
</script>

<template>
    <div class="relative grid grid-cols-1 md:grid-cols-3 gap-2 mx-8 py-2">

        <ContactIcons class="order-last md:order-first flex items-center justify-center md:justify-start gap-2" size="h-8 w-8" />

        <div class="col-span-1 flex flex-col items-center text-outline-white whitespace-nowrap">
            <h4>Clube Rainbow</h4>
            <p class="text-xs md:text-sm">rainbow.clube.estudantes@gmail.com</p>
        </div>

        <button class="absolute right-0 top-4 flex items-center justify-end hover:brightness-110 focus:brightness-110" @click="scrollToTop()">
            <img src="../assets/icon_up.svg" alt="scroll up" class="h-8 w-8"/>
        </button>
        
    </div>
</template>