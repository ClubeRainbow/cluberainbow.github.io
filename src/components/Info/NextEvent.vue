<script setup lang="ts">
    import events from '../../jsons/events.json';
</script>

<template>
    <div class="flex flex-col gap-2 items-center mx-auto w-full">
        <h3>Próximo Evento</h3>
        
        <div class="max-w-[300px] max-h-[300px] md:max-w-[400px] md:max-h-[400px] xl:max-w-full xl:max-h-full flex items-center justify-center border-2 rounded-xl bg-cr-beige drop-shadow-md">
            <a v-if="events.next.img && events.next.link" :href="events.next.link" target="_blank" class="alt_highlight">
                <img :src="events.next.img" alt="próximo evento" class="rounded-xl" />
            </a>
            <p v-else class="text-xl md:text-2xl font-shrikhand font-normal">
                Em breve...
            </p>
        </div>
    </div>
</template>

<style scoped>
    .alt_highlight {
        @apply hover:brightness-100 focus:brightness-100
    }
</style>