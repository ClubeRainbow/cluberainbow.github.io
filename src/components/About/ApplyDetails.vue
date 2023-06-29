<script setup lang="ts">
    interface App {
        open: boolean,
        link: string,
        timelimit: string,
    }

    interface Props {
        recr: App,
        ped: App,
        comms: App,
    }
    defineProps<Props>();
</script>

<template>
    <div>

        <div class="flex items-center gap-2">
            <button class="hover:brightness-110" @click="$emit('close')">
                <img src="../../assets/icon_up.svg" alt="scroll up" class="h-7 w-7 -rotate-90"/>
            </button>
            
            <p class="text-2xl font-shrikhand font-normal text-outline-white">
                Candidaturas
            </p>
        </div>
        
        <p>
            Gostarias de fazer parte do Clube? As candidaturas estão abertas para
            {{ recr.open && ped.open && comms.open ? 'todos os departamentos' : 
                recr.open && ped.open ? 'o departamento recreativo e pedagógico' :
                recr.open && comms.open ? 'o departamento recreativo e de comunicação' :
                ped.open && comms.open ? 'o departamento pedagógico e de comunicação' :
                recr.open ? 'o departamento recreativo' :
                comms.open ? 'o departamento de comunicação' :
                ped.open ? 'o departamento pedagógico' : '' }}!
        </p>
        <p>
            Podes te candidatar 
                {{ (recr.open && ped.open) || (recr.open && comms.open) || (ped.open && comms.open) ?
                    'via os botões abaixo, que te irão' :
                    'via o botão abaixo, que te irá' }}
            redirecionar para o respetivo formulário de candidatura. 
            Mais informações estarão disponíveis nos formulários, mas 
            <b>
                qualquer dúvida não hesites em nos 
                <button class="underline hover:text-cr-brown" @click="$router.push({name: 'contacts'})">
                    contactar
                </button>
                <span>!</span>
            </b>
        </p>
        <p class="text-center">
            <b>
                Candidaturas abertas até 
                {{ recr.open ? recr.timelimit : ped.open ? ped.timelimit : comms.open ? comms.timelimit : '' }}
            </b>
        </p>

        <div class="flex flex-wrap justify-center gap-2 whitespace-nowrap">
            <a v-if="recr.open" class="dept_btn text-cr-purple" :href="recr.link" target="_blank">
                Dept. Recreativo
            </a>
            <a v-if="ped.open" class="dept_btn text-cr-orange" :href="ped.link" target="_blank">
                Dept. Pedagógico
            </a>
            <a v-if="comms.open" class="dept_btn text-cr-teal" :href="comms.link" target="_blank">
                Dept. Comunicação
            </a>
        </div>

    </div>
</template>

<style scoped>
    .dept_btn {
        @apply flex-1 border-2 rounded-md p-2 font-shrikhand font-normal text-center hover:brightness-125
    }
</style>