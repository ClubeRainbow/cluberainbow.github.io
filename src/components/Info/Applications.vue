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

        <p class="title">
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
                        <button class="click" @click="$router.push({ name: 'contacts' })">
                            contactar
                        </button>!
                    </b>
                </p>

                <p class="text-center">
                    <b>
                        Candidaturas abertas até {{ cand.timelimit }}
                    </b>
                </p>
            </div>


            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
                <button v-if="cand.depts.includes('recr')" :href="cand.recr_link" target="_blank"
                    class="dept_btn text-cr-purple bg-cr-light-purple">
                    Dept. Recreativo
                </button>
                <button v-if="cand.depts.includes('ped')" :href="cand.ped_link" target="_blank"
                    class="dept_btn text-cr-orange bg-cr-light-orange">
                    Dept. Pedagógico
                </button>
                <button v-if="cand.depts.includes('comms')" :href="cand.comms_link" target="_blank"
                    class="dept_btn text-cr-teal bg-cr-light-teal">
                    Dept. Comunicação
                </button>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .dept_btn {
        @apply border-2 rounded-md py-2 px-4
        flex items-center justify-center
        font-shrikhand font-normal text-xl lg:text-2xl text-center align-middle
        hover:brightness-110 focus:brightness-110
    }
</style>