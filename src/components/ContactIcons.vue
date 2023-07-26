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
    <div>
        <a href="https://discord.gg/5Z9YshrZah" target="_blank">
            <img src="../assets/icon_discord.svg" alt="discord" :class="size" />
            
            <div v-if="text" class="flex flex-col text-left">
                <p class="sizing font-shrikhand">Discord</p>
                <p class="sizing text-outline-white">discord.gg/5Z9YshrZah</p>
            </div>
        </a>

        <a href="https://www.instagram.com/clube.rainbow/" target="_blank">
            <img src="../assets/icon_insta.svg" alt="instagram" :class="size" />
            
            <div v-if="text" class="flex flex-col text-left">
                <p class="sizing font-shrikhand">Instagram</p>
                <p class="sizing text-outline-white">@clube.rainbow</p>
            </div>
        </a>
        
        <button @click="clickEmail(text)" 
            @mouseover="hover_email=true" @mouseleave="hover_email=false" 
            @focusin="hover_email=true" @focusout="copy_confirm=false; hover_email=false">

            <img src="../assets/icon_email.svg" alt="email" :class="size" />
            
            <div v-if="text" class="flex flex-col text-left">
                
                <div class="flex items-center gap-2">
                    <p class="sizing font-shrikhand">Email</p>
                    <div class="brightness-125 whitespace-nowrap">
                        <span v-if="copy_confirm" class="text-xs md:text-sm">(Email copiado!)</span>
                        <span v-else-if="hover_email" class="text-xs md:text-sm">(Clica para copiar)</span>
                    </div>
                </div>

                <p class="sizing text-outline-white">{{ email }}</p>
            </div>
        </button>
    </div>
</template>

<style scoped>
    a, button { 
        @apply flex items-center gap-3 
        hover:brightness-110 focus:brightness-110 
        hover:no-underline focus:no-underline
    }

    .sizing {
        @apply text-base md:text-lg
    }
</style>