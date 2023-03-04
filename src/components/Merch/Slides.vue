<script setup lang="ts">
    import { ref } from 'vue';

    const MAX = 10;
    const img_id = ref(1);
    const direction = ref(1);

    const previous = () => {
        direction.value = -1

        if (img_id.value > 1)
            img_id.value -= 1
        else 
            img_id.value = MAX
    }

    const next = () => {
        direction.value = 1

        if (img_id.value < MAX)
            img_id.value += 1
        else 
            img_id.value = 1
    }

    interface Props {
        path: string;
        multiple: boolean;
    }
    defineProps<Props>();
</script>

<template>
    <div class="flex items-center gap-2">
        <button v-if="multiple" @click="previous()">
            <img src="../../assets/arrow_down.svg" alt="toggle list" class="h-5 w-5 rotate-90 hover:brightness-125"/>
        </button>

        <TransitionGroup name="imgs" tag="div" class="overflow-hidden relative border-2 rounded-xl bg-white w-52 h-36">
            <div v-for="i in [img_id]" :key="i">
                <img :src="path + img_id + '.png'" alt="bandeira" class="absolute drop-shadow-2xl top-1.5 bottom-0 right-0 left-[22px] w-40" />
            </div>
        </TransitionGroup>

        <button v-if="multiple" @click="next()">
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