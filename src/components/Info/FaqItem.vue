<script setup lang="ts">
    import { ref } from "vue";
    const show_answer = ref(false)

    interface Props {
        question: string;
    }
    defineProps<Props>();
</script>

<template>
    <div class="flex flex-col gap-2 box py-3 md:py-4">
        
        <button class="question_btn" @click="show_answer = !show_answer">
            <h4>{{ question }}</h4>
            <img src="../../assets/arrow_down.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : show_answer }"/>
        </button>

        <Transition> 
            <slot v-if="show_answer"></slot>
        </Transition>
    </div>
</template>

<style scoped>
    .question_btn {
        @apply flex items-center justify-between md:justify-start text-left gap-3
        hover:brightness-125 focus:brightness-125 hover:underline focus:underline
    }

    .v-enter-active, .v-leave-active {
        max-height: 250px;
        transition: max-height 0.5s ease;
        overflow: hidden;
    }
    .v-enter-from, .v-leave-to {    
        max-height: 0px;
        transition: max-height 0.5s ease;
        overflow: hidden;
    }
</style>