<script setup lang="ts">
    import Modal from './Modal.vue';
    import info from '../../jsons/info.json';

    const getwords = (dept : string) => {
        if (dept==='ped') return 'Departamento Pedagógico'
        else if (dept==='recr') return 'Departamento Recreativo'
        else if (dept==='comms') return 'Departamento de Comunicação'
    }

    const getlink = (dept : string) => {
        if (dept==='ped') return info.cands.ped.link
        else if (dept==='recr') return info.cands.recr.link
        else if (dept==='comms') return info.cands.comms.link
    }

    interface Props {
        dept: string;
    }
    defineProps<Props>();
</script>

<template>
    <Modal>
        
        <h2>
            Candidaturas para o 
            <h2 class="inline"
                :class="{ 'text-cr-orange' : dept==='ped',
                        'text-cr-purple' : dept==='recr',
                        'text-cr-teal' : dept==='comms' }">
                {{ getwords(dept) }}
            </h2>
        </h2>

        <div class="flex flex-col gap-2">
            
            <p>
                Gostarias de fazer parte do Clube? 
                <b>
                    As candidaturas estão abertas para o {{ getwords(dept) }}
                    até {{ info.cands.timelimit }}!
                </b>
            </p>

            <div class="flex flex-wrap gap-y-2 gap-x-12">
                <div>
                    <p><u>Para este departamento, estamos à procura de:</u></p>
                    <ul class="ml-6">
                        <li>função 1</li>
                        <li>função 2</li>
                        <li>função 3</li>
                    </ul>
                </div>

                <div>
                    <p><u>Para fazeres parte, precisas de:</u></p>
                    <ul class="ml-6">
                        <li>Ser estudante ou alumni da Universidade do Minho</li>
                        <li>Ter Discord (é a nossa principal plataforma de organização)</li>
                        <li>...</li>
                    </ul>
                </div>
            </div>
            
            <p>
                Podes candidatar-te a mais que um departamento se vários estiverem abertos, 
                mas só serás colocade em um.
                O trabalho é voluntário e não remunerado.
            </p>

            <p>
                Mais informações estarão disponíveis no formulário abaixo, mas  
                <b>
                    qualquer dúvida não hesites em nos 
                    <button class="click" @click="$router.push({ name: 'contacts' })">
                        contactar
                    </button>!
                </b>
            </p>
        </div>

        <a class="custom_btn" :href="getlink(dept)" target="_blank">
            Formulário
        </a>
        
    </Modal>
</template>

<style scoped>
    .custom_btn {
        @apply font-shrikhand text-base md:text-lg 
        border-2 rounded-lg bg-cr-red-beige
        flex items-center justify-center px-4 py-1
        w-full max-w-lg mx-auto mt-2 
        no-underline
    }
</style>