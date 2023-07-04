<script setup lang="ts">
    const subarray = (small: string[], large: string[]) => {
        return small.every(s => large.includes(s))
    }

    interface Props {
        cand: {
            open : boolean,
            timelimit : string,
            depts : string[],
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

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div class="lg:col-span-2 flex flex-col gap-4">
                <p>
                    Gostarias de fazer parte do Clube? As candidaturas estão abertas para
                    {{ subarray(["recr", "ped", "comms"], cand.depts) ? 'todos os departamentos' : 
                        subarray(["recr", "ped"], cand.depts) ? 'o departamento recreativo e pedagógico' :
                        subarray(["recr", "comms"], cand.depts) ? 'o departamento recreativo e de comunicação' :
                        subarray(["ped", "comms"], cand.depts) ? 'o departamento pedagógico e de comunicação' :
                        cand.depts.includes("recr") ? 'o departamento recreativo' :
                        cand.depts.includes("ped") ? 'o departamento pedagógico' : 
                        cand.depts.includes("comms") ? 'o departamento de comunicação' : '' }}!
                    <br>
                    Podes te candidatar 
                        {{ cand.depts.length > 1 ? 'via os botões abaixo, que te irão' : 'via o botão abaixo, que te irá' }}
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
            </div>


            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
                <a v-if="cand.depts.includes('recr')" class="dept_btn text-outline-white text-cr-purple" :href="cand.recr_link" target="_blank">
                    Dept. Recreativo
                </a>
                <a v-if="cand.depts.includes('ped')" class="dept_btn text-outline-white text-cr-orange" :href="cand.ped_link" target="_blank">
                    Dept. Pedagógico
                </a>
                <a v-if="cand.depts.includes('comms')" class="dept_btn text-outline-white text-cr-teal" :href="cand.comms_link" target="_blank">
                    Dept. Comunicação
                </a>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .dept_btn {
        @apply border-2 rounded-md py-2 px-4
        font-shrikhand font-normal text-xl lg:text-2xl text-center align-middle
        hover:brightness-125 focus:brightness-125
    }
</style>