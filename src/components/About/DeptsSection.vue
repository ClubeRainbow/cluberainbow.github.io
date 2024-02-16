<script setup lang="ts">
    import cands from '../../jsons/candidaturas.json';
    import members from '../../jsons/members.json';
    import Box from '../Box.vue';
    import MemberList from './MemberList.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <h1> Departamentos </h1>

        <div class="flex flex-col gap-8">
            
            <Box title_bg_color="bg-cr-light-orange">
                <template #title>
                    <h2 class="text-cr-orange">Departamento Pedagógico</h2>
                </template>
                <template #content>
                    <p>
                        O Departamento Pedagógico é responsável pela <b>componente educativa</b> do Clube, e pela
                        <b>organização de parcerias</b> com outras organizações. Graças a ele podemos organizar
                        <b>palestras</b> e outros eventos educativos para discutir temas de grande importância
                        com pessoas conhecedoras dos mesmos.
                    </p>

                    <div class="relative flex flex-col gap-4 md:mt-2">
                        <MemberList :members="members.ped" type="dept" :cand_btn="cands.open" />
                    
                        <button v-if="cands.open" :disabled="!cands.ped.open" @click="$emit('show_modal', cands.ped)">
                            {{ cands.ped.open ? 'Candidaturas Abertas!' : 'Candidaturas Indisponíveis' }}
                        </button>
                    </div>
                </template>
            </Box>

            <Box title_bg_color="bg-cr-light-purple">
                <template #title>
                    <h2 class="text-cr-purple">Departamento Recreativo</h2>
                </template>
                <template #content>
                    <p>
                        O Departamento Recreativo é o responsável pela organização de <b>encontros e atividades</b>
                        mais informais, focando-se especialmente na <b>componente social e de convívio</b> do Clube.
                        Os encontros organizados por este departamento servem também para fomentar discussões
                        sobre temas relacionados com a comunidade LGBT+
                    </p>
                    <p>
                        Para além disto, este é também responsável por gerir o nosso <b>servidor do Discord</b>
                        e outros eventos online.
                    </p>
                    
                    <div class="relative flex flex-col gap-4 md:mt-2">
                        <MemberList :members="members.recr" type="dept" :cand_btn="cands.open" />
                        
                        <button v-if="cands.open" :disabled="!cands.recr.open" @click="$emit('show_modal', cands.recr)">
                            {{ cands.recr.open ? 'Candidaturas Abertas!' : 'Candidaturas Indisponíveis' }}
                        </button>
                    </div>
                </template>
            </Box>

            <Box title_bg_color="bg-cr-light-teal">
                <template #title>
                    <h2 class="text-cr-teal">Departamento de Comunicação</h2>
                </template>
                <template #content>
                    <p>
                        O Departamento de Comunicação é o responsável por <b>gerir as nossas redes sociais</b>,
                        <b>criar posts</b> informativos, e <b>divulgar</b> atividades e eventos do Clube.
                    </p>
                    <p>
                        A equipa de design deste departamento ajuda também no
                        <b>
                            desenvolvimento de
                            <button class="clickable" @click="$router.push({ name: 'merch' })">
                                merch
                            </button>
                        </b>
                        cuja venda ajuda a financiar o Clube e as suas atividades.
                    </p>
                    
                    <div class="relative flex flex-col gap-4 md:mt-2">
                        <MemberList :members="members.comms" type="dept" :cand_btn="cands.open" />

                        <button v-if="cands.open" :disabled="!cands.comms.open" @click="$emit('show_modal', cands.comms)">
                            {{ cands.comms.open ? 'Candidaturas Abertas!' : 'Candidaturas Indisponíveis' }}
                        </button>
                    </div>
                </template>
            </Box>
            
        </div>
    </div>
</template>

<style scoped>
    div>button {
        @apply flex items-center justify-center 
        md:absolute md:top-0 md:right-0
        font-shrikhand text-base md:text-lg sm:whitespace-nowrap
        border-2 py-1.5 px-4 md:px-6 rounded-lg bg-cr-medium-brown
        w-full md:w-auto
        hover:brightness-110 focus:brightness-110
        disabled:bg-stone-300 disabled:text-stone-500 disabled:hover:brightness-100
    }
</style>