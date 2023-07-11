<script setup lang="ts">
    interface Props {
        next_event: {
            link: string,
            img: string
        }
    }
    defineProps<Props>();
</script>

<template>
    <div class="flex flex-col gap-4">

        <p class="title">
            Calendário
        </p>

        <div class="flex flex-col md:flex-row gap-y-4 gap-x-12">  
            
            <div class="flex flex-col gap-2">
                <p class="subtitle">
                    Próximo Evento:
                </p>
                <div class="mx-auto h-64 w-64 sm:h-72 sm:w-72 lg:h-96 lg:w-96 flex items-center justify-center border-2 rounded-xl bg-cr-beige drop-shadow-lg">
                    <a v-if="next_event.link && next_event.img" :href="next_event.link" target="_blank" class="alt_highlight">
                        <img :src="next_event.img" alt="próximo evento" class="rounded-xl" />
                    </a>
                    <p v-else class="text-xl md:text-2xl font-shrikhand font-normal">
                        Em breve...
                    </p>
                </div>
            </div>
            
            <div class="flex flex-col gap-2">
                <p class="subtitle md:whitespace-nowrap">
                    Publicações & Atividades:
                </p>
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