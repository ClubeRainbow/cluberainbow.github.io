<script setup lang="ts">
    import { ref } from 'vue';

    const img_id = ref(1);
    const direction = ref(1);

    const previous = (max: number) => {
        direction.value = -1

        if (img_id.value > 1)
            img_id.value -= 1
        else 
            img_id.value = max
    }

    const next = (max: number) => {
        direction.value = 1

        if (img_id.value < max)
            img_id.value += 1
        else 
            img_id.value = 1
    }

    interface Props {
        path: string;
        max: number;
        shrink?: boolean;
    }
    defineProps<Props>();
</script>

<template>
    <div class="flex items-center gap-2 mx-auto">
        <button v-if="max > 0" @click="previous(max)">
            <img src="../../assets/arrow_down.svg" alt="toggle list" class="h-5 w-5 rotate-90 hover:brightness-125"/>
        </button>

        <TransitionGroup name="imgs" tag="div" class="overflow-hidden relative w-52 h-40">
            <div v-for="i in [img_id]" :key="i">
                <img :src="path + img_id + '.webp'" alt="sticker" class="absolute inset-x-0 mx-auto"
                    :class="{'h-32 top-3' : shrink, 'h-40' : !shrink }" />
            </div>
        </TransitionGroup>

        <button v-if="max > 0" @click="next(max)">
            <img src="../../assets/arrow_down.svg" alt="toggle list" class="h-5 w-5 -rotate-90 hover:brightness-125"/>
        </button>
    </div>
</template>

<style scoped>
    .imgs-enter-active,
    .imgs-leave-active {
        transition: all 0.5s ease;
    }
    .imgs-enter-from {
        transform: translate( calc(v-bind(direction)*100%) , 0);
    }
    .imgs-leave-to {
        transform: translate( calc(v-bind(direction)*-100%) , 0);
    }
</style>