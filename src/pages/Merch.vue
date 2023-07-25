<script setup lang="ts">
import MerchItem from '../components/Merch/MerchItem.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        
        <p class="title">
            Autocolantes
        </p>

        <div>
            <p>
                Somos uma iniciativa sem fins lucrativos, no entanto precisamos sempre de fundos para 
                nos ajudar a organizar e publicitar eventos futuros. Para tal, vendemos diferentes 
                autocolantes LGBTQIA+ nos nossos eventos.
            </p>
            <p>
                Nesta página podes consultar os vários autocolantes que temos disponíveis!
            </p>
        </div>

        <div class="custom_grid">
            <MerchItem path="/stickers/flags/" :max="10" img_size="h-32 top-3"
                title="Bandeiras" price="0,50€" 
                desc="Bandeiras de várias identidades LGBTQIA+"
                availability="Disponível nos nossos eventos!" />

            <MerchItem path="/stickers/kittens/" :max="11" img_size="h-40"
                title="Gatinhos" design="mr_apple.pie" price="1€" 
                desc="Gatinhos com as cores de várias bandeiras LGBTQIA+"
                availability="Disponível nos nossos eventos!" />

            <MerchItem path="/stickers/pride" :max="1" img_size="h-52 top-[-24px]"
                title="Celebração do Pride" design="santomago_art" price="1€" 
                desc="Amigues a celebrar o Pride."
                collab="Colaboração com vencedor do concurso Pride Sticker 2022."
                availability="Disponível nos nossos eventos!" />

            <MerchItem path="/stickers/brick" :max="1" img_size="h-[11.5rem] top-[-13px]"
                title="Tijolo de Stonewall" design="halluprism" price="1€" 
                desc="O primeiro tijolo atirado nas revoltas de Stonewall."
                collab="Colaboração com participante do concurso Pride Sticker 2022."
                availability="Disponível nos nossos eventos!" />
        </div>
        
    </div>
</template>

<style scoped>
    .custom_grid {
        @apply grid grid-cols-1 w-full 
        [@media(min-width:860px)]:grid-cols-2 [@media(min-width:860px)]:w-auto 
        gap-8 mx-auto mt-2 
    }
</style>