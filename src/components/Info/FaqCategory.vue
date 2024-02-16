<script setup lang="ts">
    import { ref } from "vue";
    const show_answer = ref(false)
    const list_size = ref('')

    interface Props {
        title: string;
        items: number;
    }
    defineProps<Props>();
</script>

<template>
    <div class="flex flex-col">
        
        <button class="title_btn" @click="show_answer = !show_answer; list_size = (200*items).toString() + 'px'">
            <h3>{{ title }}</h3>
            <img src="../../assets/icon_arrow.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : show_answer }"/>
        </button>

        <Transition> 
            <div v-if="show_answer" class="flex flex-col gap-3 w-11/12 mx-auto">
                <slot></slot>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
    .title_btn {
        @apply flex items-center justify-between md:justify-start text-left gap-2 
        border-2 rounded-xl bg-cr-medium-brown shadow-md
        px-4 md:px-6 py-3 md:py-4
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