<script setup lang="ts">
import Stickers from '../components/Merch/Stickers.vue';
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

        <div class="flex flex-wrap gap-8 mx-auto mt-2">

            <Stickers path="/stickers/flags/" :max="10" :shrink="true" 
                title="Bandeiras" price="0,50€" 
                desc="Bandeiras de várias identidades LGBTQIA+"
                availability="Disponível nos nossos eventos!" />

            <Stickers path="/stickers/kittens/" :max="11"
                title="Gatinhos" design="Lee@mr_apple.pie" price="1€" 
                desc="Gatinhos com as cores de várias bandeiras LGBTQIA+"
                availability="Disponível nos nossos eventos!" />
        </div>
        
    </div>
</template>