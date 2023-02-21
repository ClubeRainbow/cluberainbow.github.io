<script setup lang="ts">
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const copied = ref(false)
    const email = 'rainbow.clube.estudantes@gmail.com'

    const clickEmail = (text?: boolean) => {
        if (text) {
            navigator.clipboard.writeText(email)
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
    <div>
        <a href="https://discord.gg/5Z9YshrZah" target="_blank">
            <img src="../assets/icon_discord.svg" alt="discord" :class="size" />
            <span v-if="text" class="hover:underline">discord.gg/5Z9YshrZah</span>
        </a>

        <a href="https://www.instagram.com/clube.rainbow/" target="_blank">
            <img src="../assets/icon_insta.svg" alt="instagram" :class="size" />
            <span v-if="text">@clube.rainbow</span>
        </a>
        
        <button @click="clickEmail(text)" @focusin="copied = true" @focusout="copied = false">
            <img src="../assets/icon_email.svg" alt="email" :class="size" />
            <template v-if="text">
                <span>{{ email }}</span>
                <span v-if="copied" class="brightness-125">Email copiado!</span>
            </template>
        </button>
    </div>
</template>

<style scoped>
    a, 
    button {
        @apply flex items-center gap-2 hover:brightness-110
    }

    a:hover > span, 
    button:hover > span:nth-child(2) {
        @apply underline
    }
</style>