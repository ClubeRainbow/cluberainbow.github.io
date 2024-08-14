<script setup lang="ts">
    import Box from '../components/Box.vue';
    import MerchItem from '../components/Merch/MerchItem.vue';
</script>

<template>
    <div class="flex flex-col gap-4 max-w-6xl mx-auto">
        
        <h1> Merch </h1>

        <Box>
            <template #header>
                <h2>Autocolantes</h2>
            </template>
            <template #content>
                <p>
                    Somos uma iniciativa <b>sem fins lucrativos</b>, no entanto precisamos sempre de fundos para 
                    nos ajudar a organizar e publicitar eventos futuros. Para tal, vendemos diferentes 
                    <b>autocolantes LGBTQIA+</b> nos nossos eventos.
                </p>
                <p>
                    Nesta página podes consultar os vários autocolantes que temos disponíveis!
                </p>
            </template>
        </Box>

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
        @apply grid grid-cols-1 
        [@media(min-width:850px)]:grid-cols-2
        gap-8 w-full mt-2 
    }
</style>