<script setup lang="ts">
import Divider from '../components/Divider.vue';
import ContactIcons from '../components/ContactIcons.vue';
</script>

<template>
    <div class="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-between gap-y-8 gap-x-12">

        <div class="my-auto border-2 rounded-lg shadow-md bg-cr-beige w-full md:w-[600px] p-8 flex flex-col gap-y-4">

            <p class="text-4xl font-shrikhand font-normal">
                Clube Rainbow
            </p>

            <div>
                <p>
                    <b>Bem vinde ao Clube Rainbow!</b> 🏳‍🌈
                </p>

                <p>
                    Somos uma iniciativa formada por estudantes da Universide do Minho com o objetivo de <b>promover
                    a educação sobre temas LGBT+ e o convívio entre a comunidade</b>. Garantimos assim que existe um
                    espaço para nós disponível todo o ano.
                </p>

                <p>
                    Organizamos vários encontros, palestras, e outros eventos sobre os quais te podes manter a par
                    através da nossa página de Instagram e/ou Discord. 
                </p>

                <p>
                    Qualquer dúvida,
                    <button class="text-black hover:text-cr-brown" @click="$router.push({ name: 'contacts' })">
                        <u>não hesites em nos contactar!</u>
                    </button>
                </p>
            </div>

            <Divider />

            <p>
                Caso queiras saber mais sobre as nossas atividades, podes consultar o nosso
                <a class="text-black hover:text-cr-brown" href="https://www.instagram.com/clube.rainbow/"
                    target="_blank">
                    <u>Instagram</u>
                </a>
                ou clicar no botão abaixo!
            </p>

            <div class="flex justify-center">
                <button class="custom_btn" @click="$router.push({ name: 'info' })">
                    Informações
                </button>
            </div>

            <Divider />

            <p>
                Caso estejas à procura de <b>apoio ou recursos informativos</b>, consulta a nossa secção de recursos!
                Lá também estão disponíveis os contactos de várias organizações portuguesas que te poderão ajudar.
            </p>

            <div class="flex justify-center">
                <button class="custom_btn" @click="$router.push({ name: 'resources' })">
                    Recursos Úteis
                </button>
            </div>

        </div>

        <ContactIcons class="shrink-0 flex -my-2 md:my-0 md:flex-col gap-4" size="h-10 w-10" />

    </div>
</template>