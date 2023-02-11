<script setup lang="ts">
</script>

<template>
    <div class="my-auto border-2 rounded-lg shadow-md bg-cr-beige w-full md:w-[600px] p-8">
        
        <p class="text-4xl font-shrikhand font-normal mb-2">Clube Rainbow</p>
        
        <p>
            <b class="text-black">Bem vinde ao Clube Rainbow!</b> 🏳‍🌈
            <br>
            Somos uma iniciativa formada por estudantes da Universide do Minho com o objetivo de promover
            a educação sobre temas LGBT+ e o convívio entre a comunidade. Garantimos assim que existe um
            espaço para nós disponível todo o ano!
            <br>
            Organizamos vários encontros, palestras, e outros eventos sobre os quais te podes manter a par
            através da nossa página de Instagram e/ou Discord. Qualquer dúvida, não hesites em nos contactar :)
            <br>
            <br>
            Não somos uma iniciativa com capacidade para ajudar pessoas da comunidade que precisem de apoio urgente
            ou mais direto, mas disponibilizamos informação e contactos de outras associações que possam ajudar.
            <b class="text-black">Clica no botão abaixo se precisares de apoio!</b>
        </p>
        
        <div class="flex justify-center mt-4">
            <button class="border-2 rounded-lg font-shrikhand font-normal text-2xl py-2 px-4 hover:text-cr-light-brown"
                @click="$router.push({name: 'associations'})">
                Onde Pedir Ajuda
            </button>
        </div>

    </div>
</template>