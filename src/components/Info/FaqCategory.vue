<script setup lang="ts">
    import { ref } from "vue";
    const show_answer = ref(false)

    interface Props {
        title: string;
    }
    defineProps<Props>();
</script>

<template>
    <div class="flex flex-col gap-4">
        
        <button class="title_btn box py-3 md:py-4" @click="show_answer = !show_answer">
            <h3 style="text-shadow:none">{{ title }}</h3>
            <img src="../../assets/arrow_down.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : show_answer }"/>
        </button>

        <Transition> 
            <div v-if="show_answer" class="flex flex-col gap-2 w-11/12 mx-auto">
                <slot></slot>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
    .title_btn {
        @apply flex items-center justify-between md:justify-start text-left gap-2 
        bg-cr-red-beige
        hover:brightness-110 focus:brightness-110
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