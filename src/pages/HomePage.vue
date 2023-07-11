<script setup lang="ts">
import ContactIcons from '../components/ContactIcons.vue';
import info from '../jsons/info.json';
</script>

<template>
    <div class="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-between gap-y-6 gap-x-12">

        <div class="my-auto w-full md:w-[600px] flex flex-col gap-y-4 box py-6">

            <p class="title">
                Clube Rainbow
            </p>

            <p class="subsubtitle">
                Bem vinde ao Clube <span class="subsubtitle whitespace-nowrap">Rainbow! 🌈</span>
            </p>

            <p>
                Somos uma iniciativa formada por estudantes da Universidade do Minho com o objetivo de <b>promover
                a educação sobre temas LGBTQIA+ e o convívio entre a comunidade</b>. Garantimos assim que existe um
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

            <div class="flex items-center gap-2">
                <hr class="border w-full">
                ✦
                <hr class="border w-full">
            </div>

            <p class="subsubtitle">
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

            <p class="subsubtitle">
                Como posso fazer parte?
            </p>

            <p>
                Todes são bem vindes a participar nos eventos do Clube Rainbow,
                mas caso queiras fazer parte da sua organização, deves candidatar-te a 
                um dos nossos 
                <button class="click" @click="$router.push({name: 'about', hash: '#depts'})">
                    departamentos.
                </button>
                Atualmente, as <b>candidaturas estão 
                <button class="click" @click="$router.push({name: 'info', hash: '#apps'})">
                    {{ info.candidaturas.open ? 'abertas' : 'fechadas' }}
                </button>.</b>
            </p>

        </div>

        <ContactIcons class="shrink-0 flex md:my-0 md:flex-col gap-4" size="h-10 w-10" />

    </div>
</template>