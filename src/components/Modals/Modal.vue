<script setup lang="ts">
    import Box from '../Box.vue';
</script>

<template>
    <div class="fixed z-40 top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.25)] px-4 sm:px-8 pt-12 md:pt-24">

        <Box class="w-full md:max-w-[1000px] mx-auto">
            <template #title>
                <div class="flex gap-2">
                    <slot name="title"></slot>
                    <button @click="$emit('close')" class="close">
                        <img src="../../assets/icon_x.svg" alt="close" class="h-7 w-7 md:h-9 md:w-9"/>
                    </button>
                </div>
            </template>

            <template #content>
                <slot name="content"></slot>
            </template>
        </Box>

    </div>
</template>

<style scoped>
    .close {
        @apply shrink-0 ml-auto -mr-4 mb-auto
        hover:brightness-110 focus:brightness-110
    }
</style>