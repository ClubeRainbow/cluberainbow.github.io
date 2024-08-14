<script setup lang="ts">
    import { ref } from 'vue';

    const hover_email = ref(false)
    const copy_confirm = ref(false)
    const clickEmail = () => {
        navigator.clipboard.writeText('rainbow.clube.estudantes@gmail.com')
        copy_confirm.value = true
    }
</script>

<template>
    <div class="flex flex-col xl:flex-row bg-cr-beige rounded-xl shadow-md">
        
        <button @click="clickEmail()" 
            @mouseover="hover_email = true" @mouseleave="hover_email = false"
            @focusin="hover_email = true" @focusout="copy_confirm = false; hover_email = false">

            <img src="../../assets/icon_email.svg" alt="email" />
            <div>
                <div class="flex items-center gap-2">
                    <h4>Email</h4>
                    <div class="brightness-125 whitespace-nowrap">
                        <span v-if="copy_confirm" class="text-xs md:text-sm">(Email copiado!)</span>
                        <span v-else-if="hover_email" class="text-xs md:text-sm">(Clica para copiar)</span>
                    </div>
                </div>

                <p class="text-outline-white">rainbow.clube.estudantes<wbr/>@gmail.com</p>
            </div>
        </button>

        <div class="grow flex flex-col md:flex-row">
            <a href="https://www.instagram.com/clube.rainbow/" target="_blank" >
                <img src="../../assets/icon_insta.svg" alt="instagram" />
                <div>
                    <h4>Instagram</h4>
                    <p class="text-outline-white">@clube.rainbow</p>
                </div>
            </a>

            <a href="https://discord.gg/5Z9YshrZah" target="_blank" >
                <img src="../../assets/icon_discord.svg" alt="discord" />
                <div>
                    <h4>Discord</h4>
                    <p class="text-outline-white">discord.gg/5Z9YshrZah</p>
                </div>
            </a>
        </div>

    </div>
</template>

<style scoped>
    a, button {
        @apply flex items-center gap-4 shrink-0 py-3 px-6
        hover:brightness-110 focus:brightness-110 
        hover:no-underline focus:no-underline
    }
    button {
        @apply border-2 rounded-t-xl xl:rounded-l-xl xl:rounded-tr-none
    }
    a:first-child {
        @apply grow border-x-2 border-b-2 md:border-r-0 md:border-l-2 xl:border-y-2 xl:border-x-0
        md:rounded-bl-xl xl:rounded-bl-none
    }
    a:last-child {
        @apply grow border-x-2 border-b-2 xl:border-t-2
        rounded-b-xl md:rounded-bl-none xl:rounded-tr-xl
    }
    a > img, button > img {
        @apply h-10 w-10
    }
    a > div, button > div {
        @apply flex flex-col text-left
    }
    div > p {
        @apply text-base md:text-lg
    }
    a:hover > div > p:last-child,
    button:hover > div > p:last-child {
        @apply underline
    }
</style>