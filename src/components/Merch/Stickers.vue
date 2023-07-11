<script setup lang="ts">
    import Slides from './Slides.vue';

    interface Props {
        path: string;
        max: number;
        shrink?: boolean;
        title: string;
        design?: string;
        price: string;
        desc: string;
        availability: string;
    }
    defineProps<Props>();
</script>

<template>
    <div class="flex flex-col gap-2 flex-1 box py-4">
        
        <Slides :path="path" :max="max" :shrink="shrink"/>
        
        <div class="flex flex-col">
            <p class="subtitle">{{ title }}</p>
            
            <p v-if="design">
                <span class="font-shrikhand font-normal">Design: </span>
                {{ design.split('@')[0] }} -
                <a :href="'https://www.instagram.com/' + design.split('@')[1]" target="_blank">
                    @{{ design.split('@')[1] }}
                </a>
            </p>

            <p v-if="price">
                <span class="font-shrikhand font-normal">Preço: </span>
                {{ price }}
            </p>

            <p class="mt-1.5"> {{ desc }} </p>
            <p class="italic"> {{ availability }} </p>
        </div>

    </div>
</template>