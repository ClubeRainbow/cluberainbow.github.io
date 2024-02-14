<script setup lang="ts">
    import { ref } from "vue";
    const show_answer = ref(false)

    interface Props {
        question: string;
    }
    defineProps<Props>();
</script>

<template>
    <button class="flex flex-col rounded-xl shadow-md mb-4" @click="show_answer = !show_answer">
        
        <div class="question">
            <h4>{{ question }}</h4>
            <img src="../../assets/icon_arrow.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : show_answer }"/>
        </div>

        <div class="answer">
            <Transition>
                <div v-if="show_answer">
                    <div class="px-4 md:px-6 pt-8 pb-5">
                        <slot></slot>
                    </div>
                </div>
            </Transition>
        </div>

    </button>
</template>

<style scoped>
    .question {
        @apply flex items-center justify-between md:justify-start text-left gap-3 
        bg-cr-light-brown border-2 rounded-xl
        px-4 md:px-6 py-3 md:py-4 
        -mb-4 z-20
    }
    .answer {
        @apply flex flex-col text-left gap-2
        bg-cr-beige border-x-2 border-b-2 rounded-b-xl 
        z-10
    }
    button:hover > .question,
    button:focus > .question {
        @apply brightness-110
    }
    .v-enter-active, .v-leave-active {
        max-height: 250px;
        transition: max-height 0.7s ease;
        overflow: hidden;
    }
    .v-enter-from, .v-leave-to {    
        max-height: 0px;
        transition: max-height 0.7s ease;
        overflow: hidden;
    }
</style>