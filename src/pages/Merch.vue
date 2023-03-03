<script setup lang="ts">
    import Divider from '../components/Divider.vue';
    import Slides from '../components/Merch/Slides.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        
        <p class="text-4xl font-shrikhand font-normal text-outline-white whitespace-nowrap">
            Apoia-nos
        </p>

        <div>
            <p>
                Somos uma iniciativa sem fins lucrativos, no entanto precisamos sempre de fundos para 
                nos ajudar a organizar e publicitar eventos futuros. 
            </p>
            <p>
                Não pedimos doações, mas temos autocolantes disponíveis para venda nos nossos eventos.
            </p>
        </div>

        <Divider />

        <div class="flex flex-wrap gap-5 justify-center lg:justify-start">
            <Slides path="/stickers/flags/" :multiple="true" />
            <div class="flex flex-col">
                <p class="text-2xl font-shrikhand font-normal">
                    Bandeiras
                </p>
                <p> Bandeiras de várias identidades LGBT+. </p>
                <p> Disponível nos nossos eventos! </p>
                <p class="mt-auto"> work in progress </p>
            </div>
        </div>
        
    </div>
</template>