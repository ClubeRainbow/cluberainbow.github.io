<script setup lang="ts">
    import { useSlots } from 'vue'
    const slots = useSlots()

    interface Props {
        title_bg_color?: string
    }
    defineProps<Props>();
</script>

<template>
    <div class="flex flex-col bg-cr-beige rounded-xl shadow-md">
        <div v-if="slots.title" 
            class="border-2 rounded-t-xl py-3 px-6 md:px-8" 
            :class="title_bg_color ? title_bg_color : 'bg-cr-medium-brown'">
            <slot name="title"></slot>
        </div>
        <div class="flex flex-col h-full gap-2 pt-4 pb-5 px-6 md:px-8"
            :class="{ 'border-x-2 border-b-2 rounded-b-xl' : slots.title, 
                        'border-2 rounded-xl' : !slots.title }">
            <slot name="content"></slot>
        </div>
    </div>
</template>