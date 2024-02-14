<script setup lang="ts">
    import { useRouter } from 'vue-router';
    const router = useRouter()

    interface Props {
        size: string,
    }
    defineProps<Props>();
</script>

<template>
    <div>
        <a href="https://discord.gg/5Z9YshrZah" target="_blank">
            <img src="../assets/icon_discord.svg" alt="discord" :class="size" />
        </a>

        <a href="https://www.instagram.com/clube.rainbow/" target="_blank">
            <img src="../assets/icon_insta.svg" alt="instagram" :class="size" />
        </a>
        
        <button @click="router.push({ name: 'contacts' })">
            <img src="../assets/icon_email.svg" alt="email" :class="size" />
        </button>
    </div>
</template>

<style scoped>
    a, button { 
        @apply hover:brightness-110 focus:brightness-110 hover:no-underline focus:no-underline
    }
</style>