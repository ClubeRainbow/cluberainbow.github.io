<script setup lang="ts">
import ContactIcons from '../components/ContactIcons.vue';
import info from '../jsons/info.json';
</script>

<template>
    <div class="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-between gap-y-8 gap-x-12">

        <div class="my-auto border-2 rounded-xl drop-shadow-lg bg-cr-beige w-full md:w-[600px] p-8 flex flex-col gap-y-4">

            <p class="text-4xl font-shrikhand font-normal text-outline-white">
                Clube Rainbow
            </p>

            <p class="text-xl font-shrikhand font-normal">
                Bem vinde ao Clube Rainbow! 🌈
            </p>

            <p>
                Somos uma iniciativa formada por estudantes da Universidade do Minho com o objetivo de <b>promover
                a educação sobre temas LGBT+ e o convívio entre a comunidade</b>. Garantimos assim que existe um
                espaço para nós disponível todo o ano.
            </p>

            <p>
                Organizamos vários <b>encontros, palestras, e outros eventos</b> sobre os quais te podes manter a par
                através da nossa página de Instagram e/ou Discord. 
            </p>

            <p>
                Qualquer dúvida,
                <button class="click" @click="$router.push({ name: 'contacts' })">
                    não hesites em nos contactar!
                </button>
            </p>

            <hr class="border my-2">

            <p class="text-xl font-shrikhand font-normal">
                Que eventos organizam?
            </p>

            <p>
                Queres saber mais sobre os nossos eventos e atividades? Segue o nosso
                <a class="click" href="https://www.instagram.com/clube.rainbow/" target="_blank">
                    Instagram</a>
                ou consulta a nossa
                <button class="click" @click="$router.push({ name: 'info' })">
                    página de informações!
                </button>
            </p>

            <p class="text-xl font-shrikhand font-normal">
                Como posso ajudar?
            </p>

            <p>
                Caso queiras ajudar na organização das atividades do Clube, podes candidatar-te a 
                um dos nossos 
                <button class="click" @click="$router.push({name: 'about', hash: '#depts'})">
                    departamentos
                </button>, dependendo daquilo que gostarias de ajudar com.
                Atualmente, as <b>candidaturas estão 
                <button class="click" @click="$router.push({name: 'info', hash: '#apps'})">
                    {{ info.candidaturas.open ? 'abertas' : 'fechadas' }}
                </button>.</b>
            </p>

        </div>

        <ContactIcons class="shrink-0 flex -my-2 md:my-0 md:flex-col gap-4" size="h-10 w-10" />

    </div>
</template>