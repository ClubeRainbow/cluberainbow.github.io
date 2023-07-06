<script setup lang="ts">
    import members from '../../jsons/members.json';
    import MemberList from './MemberList.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <p class="text-4xl font-shrikhand font-normal text-outline-white">
            Departamentos
        </p>

        <div class="flex flex-col gap-8">

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="flex flex-col gap-2 h-min box">
                    <p class="text-2xl font-shrikhand font-normal text-outline-white">
                        Direção
                    </p>
                    <p>
                        under construction
                    </p>
                </div>
                <div class="flex flex-col gap-2 h-min box">
                    <p class="text-2xl font-shrikhand font-normal text-outline-white">
                        Mesa
                    </p>
                    <p>
                        under construction
                    </p>
                </div>
                <div class="flex flex-col gap-2 h-min box">
                    <p class="text-2xl font-shrikhand font-normal text-outline-white">
                        Conselho Fiscal
                    </p>
                    <p>
                        under construction
                    </p>
                </div>
            </div>
            
            <div class="flex flex-col md:flex-row gap-x-8 box">
                <div class="flex flex-col gap-2">
                    <p class="text-2xl lg:text-3xl font-shrikhand font-normal text-cr-purple text-outline-white">
                        Departamento Recreativo
                    </p>
                    <p>
                        O Departamento Recreativo é o responsável pela organização de <b>encontros e atividades</b>
                        mais informais, focando-se especialmente na <b>componente social e de convívio</b> do Clube.
                        Os encontros organizados por este departamento servem também para fomentar discussões
                        sobre temas relacionados com a comunidade LGBT+
                    </p>
                    <p>
                        Para além disto, este é também responsável por gerir o <b>servidor do Discord</b>
                        e outros eventos online.
                    </p>
                    <MemberList :members="members.recr" />
                </div>
                <img src="../../assets/kaku2.png" alt="panda" class="m-auto h-72 w-72"/>
            </div>

            <div class="flex flex-col md:flex-row-reverse gap-x-8 box">
                <div class="flex flex-col gap-2">
                    <p class="text-2xl lg:text-3xl font-shrikhand font-normal text-cr-orange text-outline-white">
                        Departamento Pedagógico
                    </p>
                    <p>
                        O Departamento Pedagógico é responsável pela <b>componente educativa</b> do Clube, e pela
                        <b>organização de parcerias</b> com outras organizações. Graças a ele podemos organizar
                        <b>palestras</b> e outros eventos educativos para discutir temas de grande importância
                        com pessoas conhecedoras dos mesmos.
                    </p>
                    <MemberList :members="members.ped" />
                </div>
                <img src="../../assets/kaku2.png" alt="panda" class="m-auto h-72 w-72"/>
            </div>

            <div class="flex flex-col md:flex-row gap-x-8 box">
                <div class="flex flex-col gap-2">
                    <p class="text-2xl lg:text-3xl font-shrikhand font-normal text-cr-teal text-outline-white">
                        Departamento de Comunicação
                    </p>
                    <p>
                        O Departamento de Comunicação é o responsável por <b>gerir as nossas redes sociais</b>,
                        <b>criar posts</b> informativos, e <b>divulgar</b> atividades e eventos do Clube.
                    </p>
                    <p>
                        A equipa de design deste departamento ajuda também no
                        <b>
                            desenvolvimento de
                            <button class="underline hover:text-cr-brown" @click="$router.push({ name: 'merch' })">
                                merch
                            </button>
                        </b>
                        cuja venda ajuda a financiar o Clube e as suas atividades.
                    </p>
                    <MemberList :members="members.comms" />
                </div>
                <img src="../../assets/kaku2.png" alt="panda" class="m-auto h-72 w-72"/>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .box {
        @apply border-2 rounded-xl bg-cr-beige drop-shadow-lg py-6 px-12
    }
</style>