<script setup lang="ts">
    import Box from '../Box.vue';
    import nextevent from '../../jsons/nextevent.json';
</script>

<template>
    <div class="flex flex-col gap-4">

        <h1> Próximo Evento </h1>

        <div class="flex flex-col md:flex-row gap-4">

            <Box class="w-full">
                <template #header>
                    <h2>{{ nextevent.name || 'Em breve...' }}</h2>
                </template>

                <template #content>
                    <p v-if="nextevent.desc">
                        {{ nextevent.desc }}
                    </p>

                    <p v-else class="mx-auto">
                        Em breve...
                    </p>
                </template>
            </Box>

            <a v-if="nextevent.img && nextevent.link" :href="nextevent.link" target="_blank">
                <img :src="nextevent.img" alt="próximo evento" class="rounded-xl" />
            </a>

        </div>

    </div>
</template>

<style scoped>
    a {
        @apply border-2 rounded-xl shadow-md h-fit mx-auto
        max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md
    }
</style>