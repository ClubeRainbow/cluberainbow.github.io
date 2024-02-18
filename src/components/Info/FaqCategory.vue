<script setup lang="ts">
    import { ref } from "vue";
    const show_list = ref(false)
    const list_size = ref('')

    interface Props {
        title: string;
        items: number;
    }
    defineProps<Props>();
</script>

<template>
    <div class="flex flex-col">
        
        <button class="title_btn" @click="show_list = !show_list; list_size = (200*items).toString() + 'px'">
            <h3>{{ title }}</h3>
            <img src="../../assets/icon_arrow.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : show_list }"/>
        </button>

        <Transition> 
            <div v-if="show_list">
                <div class="flex flex-col w-11/12 mx-auto -mb-3.5 mt-4">
                    <slot></slot>
                </div>
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