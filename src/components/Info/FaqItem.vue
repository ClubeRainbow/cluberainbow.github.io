<script setup lang="ts">
    import { ref } from "vue";
    const show_answer = ref(false)

    interface Props {
        question: string;
    }
    defineProps<Props>();
</script>

<template>
    <button class="flex flex-col gap-2 box py-3 md:py-4" @click="show_answer = !show_answer">
        
        <div class="question_text">
            <h4>{{ question }}</h4>
            <img src="../../assets/icon_arrow.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : show_answer }"/>
        </div>

        <Transition>
            <div v-if="show_answer" class="flex flex-col text-left gap-2">
                <slot></slot>
            </div>
        </Transition>
    </button>
</template>

<style scoped>
    .question_text {
        @apply flex items-center justify-between md:justify-start text-left gap-3
    }
    button:hover > .question_text,
    button:focus > .question_text {
        @apply brightness-125
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