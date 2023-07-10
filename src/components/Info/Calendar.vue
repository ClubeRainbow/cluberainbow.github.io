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

        <div class="flex flex-wrap gap-y-4 gap-x-12">  
            
            <div class="flex flex-col gap-2 w-full md:w-auto">
                <p class="text-2xl font-shrikhand font-normal text-outline-white">
                    Próximo Evento:
                </p>
                <a class="mx-auto md:mx-0" :href="next_event.link" target="_blank">
                    <img :src="next_event.img" alt="próximo evento" class="max-w-96 max-h-96 border-2 rounded-xl" />
                </a>
            </div>
            
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-shrikhand font-normal text-outline-white">
                    Publicações & Atividades:
                </p>
                <p>
                    under construction
                </p>
            </div>
        </div>

    </div>
</template>