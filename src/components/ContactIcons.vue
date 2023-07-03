<script setup lang="ts">
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const hover_email = ref(false)
    const copy_confirm = ref(false)
    const email = 'rainbow.clube.estudantes@gmail.com'

    const clickEmail = (text?: boolean) => {
        if (text) {
            navigator.clipboard.writeText(email)
            copy_confirm.value = true
        }
        else
            router.push({ name: 'contacts' })
    }

    interface Props {
        size: string,
        text?: boolean,
    }
    defineProps<Props>();
</script>

<template>
    <div class="relative sm:text-lg">
        <a href="https://discord.gg/5Z9YshrZah" target="_blank">
            <img src="../assets/icon_discord.svg" alt="discord" :class="size" />
            <span v-if="text" class="text-outline-white">discord.gg/5Z9YshrZah</span>
        </a>

        <a href="https://www.instagram.com/clube.rainbow/" target="_blank">
            <img src="../assets/icon_insta.svg" alt="instagram" :class="size" />
            <span v-if="text" class="text-outline-white">@clube.rainbow</span>
        </a>
        
        <button @click="clickEmail(text)" 
            @mouseover="hover_email=true" @mouseleave="hover_email=false" 
            @focusin="hover_email=true" @focusout="copy_confirm=false; hover_email=false">

            <img src="../assets/icon_email.svg" alt="email" :class="size" />
            <span v-if="text" class="text-outline-white">{{ email }}</span>
        </button>

        <div v-if="text" class="absolute -bottom-3 left-0 right-0 mx-auto w-[100px] text-sm brightness-125 whitespace-nowrap">
            <span v-if="copy_confirm">Email copiado!</span>
            <span v-else-if="hover_email">Clica para copiar</span>
        </div>
    </div>
</template>

<style scoped>
    a, button {
        @apply flex items-center gap-2 hover:brightness-110
    }
</style>