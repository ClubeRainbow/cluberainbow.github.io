<script setup lang="ts">
    defineProps<{title_bg_color?: string}>();
</script>

<template>
    <div class="flex flex-col bg-cr-beige rounded-xl shadow-md">
        <div class="title" :class="title_bg_color ? title_bg_color : 'bg-cr-medium-brown'">
            <slot name="title"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>
    .title {
        @apply border-2 rounded-xl 
        py-3 px-6 md:px-8 
        -mb-4 z-10
    }
    .content {
        @apply flex flex-col h-full gap-2 
        border-2 rounded-b-xl
        pt-7 pb-5 px-6 md:px-8
    }
</style>