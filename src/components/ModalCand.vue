<script setup lang="ts">
    import info from '../jsons/info.json';

    const getwords = (dept : string) => {
        if (dept==='ped') return 'Departamento Pedagógico'
        else if (dept==='recr') return 'Departamento Recreativo'
        else if (dept==='comms') return 'Departamento de Comunicação'
    }

    const getlink = (dept : string) => {
        if (dept==='ped') return info.candidaturas.ped_link
        else if (dept==='recr') return info.candidaturas.recr_link
        else if (dept==='comms') return info.candidaturas.comms_link
    }

    interface Props {
        dept: string;
    }
    defineProps<Props>();
</script>

<template>
    <div class="fixed z-10 top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.25)] px-4 pt-12 md:pt-32">

        <div class="relative flex flex-col gap-4 w-full md:max-w-[1000px] mx-auto box py-6 px-8">
    
            <p class="subtitle2">
                Candidaturas para o 
                <span class="subtitle2"
                    :class="{ 'text-cr-orange' : dept==='ped',
                            'text-cr-purple' : dept==='recr',
                            'text-cr-teal' : dept==='comms' }">
                    {{ getwords(dept) }}
                </span>
            </p>

            <div class="flex flex-col gap-2">
                <p>
                    Gostarias de fazer parte do Clube? 
                    <u>
                        As candidaturas estão abertas para o {{ getwords(dept) }}
                        até {{ info.candidaturas.timelimit }}!
                    </u>
                </p>

                <div class="flex flex-wrap gap-y-2 gap-x-12">
                    <div>
                        <p><b>Para este departamento, estamos à procura de:</b></p>
                        <ul class="list-disc ml-12">
                            <li>função 1</li>
                            <li>função 2</li>
                            <li>função 3</li>
                        </ul>
                    </div>

                    <div>
                        <p><b>Para fazeres parte, precisas de:</b></p>
                        <ul class="list-disc ml-12">
                            <li>Ser estudante ou alumni da Universidade do Minho</li>
                            <li>Ter Discord (é a nossa principal plataforma de organização)</li>
                            <li>...</li>
                        </ul>
                    </div>
                </div>
                
                <p>
                    Podes candidatar-te a mais que um departamento, mas só serás colocade em um.
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

            <button @click="$emit('close')" class="absolute top-3 right-3 hover:brightness-110 focus:brightness-110">
                <img src="../assets/x.svg" alt="scroll up" class="h-8 w-8"/>
            </button>

        </div>
    </div>
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