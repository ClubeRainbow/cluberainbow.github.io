<script setup lang="ts">
    import Modal from './Modal.vue';
    import info from '../../jsons/info.json';
</script>

<template>
    <Modal>
        <template v-if="info.cands.open">
            
            <h2>Candidaturas Abertas!</h2>
            
            <div class="flex flex-col gap-4">
                <p>
                    Gostarias de fazer parte do Clube Rainbow? 
                    Qualquer pessoa pode participar nos nossos eventos, mas caso queiras ajudar na organização por 
                    de trás dos mesmos, aproveita agora - <b>as candidaturas para os departamentos do
                    Clube Rainbow estão abertas até {{info.cands.timelimit}}!</b>
                </p>
                <ul class="mx-auto flex flex-col gap-2">
                    <li>Cada departamento tem diferentes funções - 
                        <u>sabe mais sobre eles e consulta quais estão abertos através do botão abaixo!</u>
                    </li>
                    <li>Podes candidatar-te a mais que um departamento se vários estiverem abertos, mas só serás colocade em um;</li>
                    <li>O trabalho é voluntário e não remunerado;</li>
                    <li>Apenas aceitamos estudantes e alumni da Universidade do Minho.</li>
                </ul>
                
                <button class="w-full" @click="$router.push({name: 'about', hash: '#depts'})">
                    Consultar Departamentos
                </button>
            </div>
            
        </template>

        <template v-else>

            <h2>Candidaturas Fechadas</h2>

            <div class="flex flex-col gap-4">
                <p>
                    Gostarias de fazer parte do Clube Rainbow? 
                    Qualquer pessoa pode participar nos nossos eventos, mas caso queiras ajudar na organização por 
                    de trás dos mesmos, deves candidatar-te a um dos nossos departamentos.
                </p>
                <p>
                    Infelizmente, <b>as candidaturas para os departamentos do Clube Rainbow estão fechadas</b> de momento.
                </p>
                <p>
                    Mas não te preocupes! As candidaturas abrem sempre pelo menos uma vez por ano, logo, terás sempre
                    outras oportunidades para te candidatares. Fica atente às nossas 
                    <button class="click" @click="$router.push({name: 'contacts'})">redes sociais</button> para que 
                    possas ser notificade quando estas abrirem novamente!
                </p>
                <button @click="$emit('close')">
                    Voltar
                </button>
            </div>
            
        </template>
        
    </Modal>
</template>

<style scoped>
    div > button {
        @apply w-full md:w-2/3 mt-2 mx-auto py-2 px-4 
        border-2 rounded-lg bg-cr-red-beige drop-shadow-lg
        font-shrikhand text-lg md:text-xl
        hover:brightness-110 focus:brightness-110
    }
</style>