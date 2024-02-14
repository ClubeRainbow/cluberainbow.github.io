<script setup lang="ts">
    defineProps<{ title_bg_color?: string }>();
</script>

<template>
    <div class="flex flex-col bg-cr-beige shadow-md">
        <div class="border-2 rounded-t-xl py-3 px-6 md:px-8" 
            :class="title_bg_color ? title_bg_color : 'bg-cr-medium-brown'">
            <slot name="title"></slot>
        </div>
        <div class="flex flex-col gap-2 h-full border-x-2 border-b-2 rounded-b-xl pt-4 pb-5 px-6 md:px-8">
            <slot name="content"></slot>
        </div>
    </div>
</template>