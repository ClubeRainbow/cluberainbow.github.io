<script setup lang="ts">
    import info from '../../jsons/info.json';
</script>

<template>
    <div class="flex flex-col gap-4">

        <h1> Eventos </h1>

        <div class="flex flex-col md:flex-row gap-y-4 gap-x-12">  
            
            <div class="flex flex-col gap-2">
                <h3>Próximo Evento:</h3>
                
                <div class="mx-auto h-64 w-64 sm:h-72 sm:w-72 lg:h-96 lg:w-96 flex items-center justify-center border-2 rounded-xl bg-cr-beige drop-shadow-md">
                    <a v-if="info.next_event.img && info.next_event.link" :href="info.next_event.link" target="_blank" class="alt_highlight">
                        <img :src="info.next_event.img" alt="próximo evento" class="rounded-xl" />
                    </a>
                    <p v-else class="text-xl md:text-2xl font-shrikhand font-normal">
                        Em breve...
                    </p>
                </div>
            </div>
            
            <div class="flex flex-col gap-2">
                <h3>Calendário:</h3>
                <p>
                    under construction
                </p>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .alt_highlight {
        @apply hover:brightness-100 focus:brightness-100
    }
</style>