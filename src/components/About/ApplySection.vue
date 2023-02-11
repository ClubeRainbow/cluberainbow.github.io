<template>
    <div>

        <p class="text-2xl font-shrikhand font-normal text-outline-white">
            Candidaturas
        </p>

        <div class="flex flex-col gap-2 mb-2">
            <p>
                Gostarias de fazer parte do Clube?
            </p>
            <p>
                Podes te candidatar a um (ou mais) dos departamentos via os botões abaixo, que te irão
                redirecionar para os formulários de candidatura. O trabalho é voluntário, e qualquer estudante
                da Universidade do Minho se pode candidatar. Mais informações estarão disponíveis nos formulários,
                mas qualquer dúvida não hesites em nos contactar!
            </p>
            <p>
                Candidaturas abertas até x
            </p>
        </div>

        <div class="w-full flex gap-2 whitespace-nowrap">
            <button class="text-cr-purple">
                Dept. Recreativo
            </button>
            <button class="text-cr-orange">
                Dept. Pedagógico
            </button>
            <button class="text-cr-teal">
                Dept. Comunicação
            </button>
        </div>

    </div>
</template>

<style scoped>
    div > button {
        @apply border-2 rounded-md w-full p-2 font-shrikhand font-normal hover:brightness-125
    }
</style>