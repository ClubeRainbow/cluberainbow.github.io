<script setup lang="ts">
    import cands from '../../jsons/candidaturas.json';
</script>

<template>
    <div class="flex flex-col sm:flex-row gap-x-4 gap-y-2">
        <button @click="$router.push({name: 'info'})" class="bg-cr-red-beige">
            Eventos
        </button>
        <button @click="$router.push({name: 'info', hash: '#faq'})" class="bg-cr-red-beige">
            FAQ
        </button>
        <button @click="$emit('show_modal')" 
            :class="{'bg-stone-300 text-stone-500' : !cands.open,
                     'bg-cr-red-beige' : cands.open }">
            Candidaturas
        </button>
    </div>
</template>

<style scoped>
    button {
        @apply flex-1 flex items-center justify-center py-1 px-4
        border-2 rounded-lg drop-shadow-lg
        font-shrikhand text-base md:text-lg whitespace-nowrap
        hover:brightness-110 focus:brightness-110
    }
</style>