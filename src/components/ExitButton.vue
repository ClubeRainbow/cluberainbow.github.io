<script setup lang="ts">
    addEventListener("keydown", (e: KeyboardEvent) => { 
        if (e.key==="Escape") 
            exit()
    });
    const exit = async () => {
        window.open('https://www.google.com/search?q=receitas+de+massa', '_blank', 'noopener noreferrer');
        window.open('https://www.google.com/', '_self', 'noopener noreferrer');
    }
</script>

<template>
    <button class="exit_btn" @click="exit()">
      <h4>Sair!</h4>
      <img src="../assets/icon_exit.svg" alt="sair" class="h-8 w-8"/>
    </button>
</template>

<style scoped>
    .exit_btn {
        @apply 
        fixed bottom-4 md:bottom-8 right-4 md:right-8 
        flex gap-3 items-center 
        border-2 rounded-lg bg-cr-medium-brown shadow-md z-30
        py-1 px-2.5 md:py-1.5 md:px-3
        hover:brightness-110 focus:brightness-110
    }
</style>