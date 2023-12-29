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
    <div class="flex flex-col gap-2 box py-4">
        
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

            <div class="my-1.5">
                <p> {{ desc }} </p>
                <p v-if="collab" class="text-xs md:text-sm"> {{ collab }} </p>
            </div>
            
            <p class="mt-auto w-fit font-semibold bg-cr-red-beige"> {{ availability }} </p>
        </div>

    </div>
</template>