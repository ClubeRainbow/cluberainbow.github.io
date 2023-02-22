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
            Gostarias de fazer parte do Clube?
        </p>
        <p>
            Podes te candidatar a um (ou mais) dos departamentos via os botões abaixo, que te <b>irão
            redirecionar para os formulários de candidatura</b>. O trabalho é voluntário, e qualquer estudante
            da Universidade do Minho se pode candidatar. Mais informações estarão disponíveis nos formulários,
            mas 
            <b>
                qualquer dúvida não hesites em nos 
                <button class="underline hover:text-cr-brown" @click="$router.push({name: 'contacts'})">
                    contactar
                </button>
                <span>!</span>
            </b>
        </p>
        <p class="text-center">
            <b>Candidaturas abertas até xx/xx/xxxx</b>
        </p>

        <div class="flex flex-wrap justify-center gap-2 whitespace-nowrap">
            <button class="dept_btn text-cr-purple" @click="">
                Dept. Recreativo
            </button>
            <button class="dept_btn text-cr-orange" @click="">
                Dept. Pedagógico
            </button>
            <button class="dept_btn text-cr-teal" @click="">
                Dept. Comunicação
            </button>
        </div>

    </div>
</template>

<style scoped>
    .dept_btn {
        @apply flex-1 border-2 rounded-md p-2 font-shrikhand font-normal hover:brightness-125
    }
</style>