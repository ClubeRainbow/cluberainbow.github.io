<script setup lang="ts">
    import events from '../../jsons/events.json';
</script>

<template>
    <div class="flex flex-col gap-2 items-center justify-center text-center w-full box px-6 md:px-8 pb-6 pt-4 bg-cr-red-beige">
        <h3>Próximo Evento</h3>
        
        <div class="img_space">
            <a v-if="events.next.img && events.next.link" :href="events.next.link" target="_blank">
                <img :src="events.next.img" alt="próximo evento" class="rounded-xl" />
            </a>
            <p v-else class="text-xl md:text-2xl font-shrikhand">
                Em breve...
            </p>
        </div>
    </div>
</template>

<style scoped>
    .img_space {
        @apply w-full aspect-square
        max-w-[300px] max-h-[300px] 
        md:max-w-[400px] md:max-h-[400px] 
        xl:max-w-full xl:max-h-full
        flex items-center justify-center 
        border-2 rounded-xl bg-cr-beige
    }
    .img_space > a:hover,
    .img_space > a:focus {
        @apply brightness-100
    }
</style>