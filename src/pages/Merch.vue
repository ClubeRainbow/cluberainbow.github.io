<script setup lang="ts">
import Slides from '../components/Merch/Slides.vue';
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

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-2">

            <div class="flex flex-col gap-2 box py-4">
                <Slides path="/stickers/flags/" :max="10" :shrink="true"/>
                <div class="flex flex-col">
                    <p class="subtitle">
                        Bandeiras
                    </p>
                    <p>
                        <span class="font-shrikhand font-normal">Preço: </span>
                        0,50€
                    </p>
                    <p class="mt-1.5"> Bandeiras de várias identidades LGBTQIA+ </p>
                    <p class="italic"> Disponível nos nossos eventos! </p>
                </div>
            </div>

            <div class="flex flex-col gap-2 box py-4">
                <Slides path="/stickers/kittens/" :max="11"/>
                <div class="flex flex-col">
                    <p class="subtitle">
                        Gatinhos
                    </p>
                    <p>
                        <span class="font-shrikhand font-normal">Design: </span>
                        Lee -
                        <a href="https://www.instagram.com/mr_apple.pie" target="_blank">
                            @mr_apple.pie
                        </a>
                    </p>
                    <p>
                        <span class="font-shrikhand font-normal">Preço: </span>
                        1€
                    </p>
                    <p class="mt-1.5"> Gatinhos com as cores de várias bandeiras LGBTQIA+ </p>
                    <p class="italic"> Disponível nos nossos eventos! </p>
                </div>
            </div>

        </div>
        
    </div>
</template>