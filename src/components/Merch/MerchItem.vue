<script setup lang="ts">
    import Slides from './Slides.vue';

    interface Props {
        path: string;
        max: number;
        img_size: string;
        title: string;
        design?: string;
        price: string;
        desc: string;
        collab?: string;
        availability: string;
    }
    defineProps<Props>();
</script>

<template>
    <div class="box">
        
        <Slides :path="path" :max="max" :size="img_size"/>
        
        <div class="flex flex-col h-full">
            <h3>{{ title }}</h3>
            
            <p v-if="design">
                <span class="font-shrikhand">Design: </span>
                <a :href="'https://www.instagram.com/' + design" target="_blank">
                    @{{ design }}
                </a>
            </p>

            <p v-if="price">
                <span class="font-shrikhand">Preço: </span>
                {{ price }}
            </p>

            <div class="mt-1.5 mb-3">
                <p> {{ desc }} </p>
                <p v-if="collab" class="text-xs md:text-sm"> {{ collab }} </p>
            </div>
            
            <p class="mt-auto mx-auto w-fit font-semibold"> {{ availability }} </p>
        </div>

    </div>
</template>

<style scoped>
    .box {
        @apply flex flex-col gap-2 
        border-2 rounded-xl bg-cr-beige shadow-md
        py-4 px-6 md:px-8
    }
</style>