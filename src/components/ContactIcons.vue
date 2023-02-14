<script setup lang="ts">
    interface Props {
        size: string,
    }
    defineProps<Props>();
</script>

<template>
    <div>
        <a class="hover:brightness-110" href="https://discord.gg/5Z9YshrZah" target="_blank">
            <img src="../assets/icon_discord.svg" alt="discord" :class="size" />
        </a>

        <a class="hover:brightness-110" href="https://www.instagram.com/clube.rainbow/" target="_blank">
            <img src="../assets/icon_insta.svg" alt="instagram" :class="size" />
        </a>
        
        <button class="hover:brightness-110" @click="$router.push({ name: 'contacts' })">
            <img src="../assets/icon_email.svg" alt="email" :class="size" />
        </button>
    </div>
</template>