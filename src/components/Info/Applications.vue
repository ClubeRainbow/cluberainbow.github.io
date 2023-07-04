<script setup lang="ts">
    const subarray = (small: string[], large: string[]) => {
        return small.every(s => large.includes(s))
    }

    interface Props {
        cand: {
            open : boolean,
            timelimit : string,
            deps : string[],
            recr_link : string,
            ped_link : string,
            comms_link : string
        }
    }
    defineProps<Props>();
</script>

<template>
    <div class="flex flex-col gap-4">

        <p class="text-4xl font-shrikhand font-normal text-outline-white whitespace-nowrap">
            Candidaturas
        </p>

        <p>
            Gostarias de fazer parte do Clube? As candidaturas estão abertas para
            {{ subarray(["recr", "ped", "comms"], cand.deps) ? 'todos os departamentos' : 
                subarray(["recr", "ped"], cand.deps) ? 'o departamento recreativo e pedagógico' :
                subarray(["recr", "comms"], cand.deps) ? 'o departamento recreativo e de comunicação' :
                subarray(["ped", "comms"], cand.deps) ? 'o departamento pedagógico e de comunicação' :
                cand.deps.includes("recr") ? 'o departamento recreativo' :
                cand.deps.includes("ped") ? 'o departamento pedagógico' : 
                cand.deps.includes("comms") ? 'o departamento de comunicação' : '' }}!
            <br>
            Podes te candidatar 
                {{ cand.deps.length > 1 ? 'via os botões abaixo, que te irão' : 'via o botão abaixo, que te irá' }}
            redirecionar para o respetivo formulário de candidatura.
        </p>

        <p>
            Mais informações estarão disponíveis nos formulários -  
            <b>
                qualquer dúvida não hesites em nos 
                <button class="underline hover:text-cr-brown" @click="">
                    contactar
                </button>
                <span>!</span>
            </b>
        </p>

        <p class="text-center">
            <b>
                Candidaturas abertas até {{ cand.timelimit }}
            </b>
        </p>

        <div class="flex flex-wrap justify-center gap-8 mx-8 whitespace-nowrap">
            <a v-if="cand.deps.includes('recr')" class="dept_btn text-cr-purple" :href="cand.recr_link" target="_blank">
                Dept. Recreativo
            </a>
            <a v-if="cand.deps.includes('ped')" class="dept_btn text-cr-orange" :href="cand.ped_link" target="_blank">
                Dept. Pedagógico
            </a>
            <a v-if="cand.deps.includes('comms')" class="dept_btn text-cr-teal" :href="cand.comms_link" target="_blank">
                Dept. Comunicação
            </a>
        </div>

    </div>
</template>

<style scoped>
    .dept_btn {
        @apply flex-1 border-2 rounded-md p-2 font-shrikhand font-normal text-xl text-center hover:brightness-125
    }
</style>