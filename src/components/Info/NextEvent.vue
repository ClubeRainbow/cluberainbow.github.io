<script setup lang="ts">
    import events from '../../jsons/events.json';
</script>

<template>
    <div class="relative flex flex-col-reverse gap-2 items-center justify-center text-center w-full px-6 md:px-8 pb-6 pt-4">
        
        <a v-if="events.next.img && events.next.link" :href="events.next.link" target="_blank" class="img_space z-30">
            <img :src="events.next.img" alt="próximo evento" class="rounded-xl" />
        </a>

        <div v-else class="img_space z-30">
            <p class="text-xl md:text-2xl font-shrikhand">
                Em breve...
            </p>
        </div>

        <h3 class="z-30">Próximo Evento</h3>

        <div class="absolute top-0 w-full h-full box bg-cr-medium-brown">
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
    a:hover,
    a:focus {
        @apply brightness-100
    }
    a.img_space:hover + h3, 
    a.img_space:focus + h3,
    a.img_space:hover ~ div, 
    a.img_space:focus ~ div {
        @apply brightness-110
    }
</style>