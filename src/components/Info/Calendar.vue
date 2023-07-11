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

        <p class="text-4xl font-shrikhand font-normal text-outline-white">
            Calendário
        </p>

        <div class="flex flex-col md:flex-row gap-y-4 gap-x-12">  
            
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-shrikhand font-normal text-outline-white">
                    Próximo Evento:
                </p>
                <div class="mx-auto h-72 w-72 lg:h-96 lg:w-96 border-2 rounded-xl bg-cr-beige drop-shadow-lg flex items-center justify-center">
                    <button v-if="next_event.link && next_event.img" :href="next_event.link" target="_blank">
                        <img :src="next_event.img" alt="próximo evento" class="rounded-xl" />
                    </button>
                    <p v-else class="text-2xl font-shrikhand font-normal">
                        Em breve...
                    </p>
                </div>
            </div>
            
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-shrikhand font-normal text-outline-white md:whitespace-nowrap">
                    Publicações & Atividades:
                </p>
                <p>
                    under construction
                </p>
            </div>
        </div>

    </div>
</template>