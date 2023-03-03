<script setup lang="ts">
    import { ref } from 'vue';

    const MAX = 10;
    const img_id = ref(1);

    const browse = (direction: 'right' | 'left') => {
        if (direction === 'right') {
            if (img_id.value < MAX)
                img_id.value += 1
            else 
                img_id.value = 1
        }
        else if (direction === 'left') {
            if (img_id.value > 1)
                img_id.value -= 1
            else
                img_id.value = MAX
        }
    }

    interface Props {
        path: string;
        multiple: boolean;
    }
    defineProps<Props>();
</script>

<template>
    <div class="flex items-center gap-2">
        <button v-if="multiple" @click="browse('left')">
            <img src="../../assets/arrow_down.svg" alt="toggle list" class="h-5 w-5 rotate-90 hover:brightness-110"/>
        </button>

        <div class="flex items-center justify-center border-2 rounded-xl bg-white px-4 w-48 h-36">
            <img :src="path + img_id + '.png'" alt="bandeira" class="drop-shadow-2xl animation" />
        </div>

        <button v-if="multiple" @click="browse('right')">
            <img src="../../assets/arrow_down.svg" alt="toggle list" class="h-5 w-5 -rotate-90 hover:brightness-110"/>
        </button>
    </div>
</template>

<style scoped>
    /* ... */
</style>