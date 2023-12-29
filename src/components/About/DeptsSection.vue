<script setup lang="ts">
    import cands from '../../jsons/candidaturas.json';
    import members from '../../jsons/members.json';
    import MemberList from './MemberList.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <h1> Departamentos </h1>

        <div class="flex flex-col gap-8">
            
            <div class="flex flex-wrap gap-x-8 box">
                
                <div class="flex flex-col gap-2 flex-1">
                    <h2 class="text-cr-orange">Departamento Pedagógico</h2>
                    <p>
                        O Departamento Pedagógico é responsável pela <b>componente educativa</b> do Clube, e pela
                        <b>organização de parcerias</b> com outras organizações. Graças a ele podemos organizar
                        <b>palestras</b> e outros eventos educativos para discutir temas de grande importância
                        com pessoas conhecedoras dos mesmos.
                    </p>
                    
                    <MemberList :members="members.ped" type="dept" />
                    
                    <div v-if="cands.open" class="mt-auto">
                        <button class="cand_btn" :disabled="!cands.ped.open" @click="$emit('show_modal', cands.ped)">
                            {{ cands.ped.open ? 'Candidaturas Abertas!' : 'Candidaturas Indisponíveis' }}
                        </button>
                    </div>
                </div>

                <img src="../../assets/ped.png" alt="panda" />   
            </div>
            
            <div class="flex flex-wrap flex-row-reverse gap-x-8 box">
                
                <div class="flex flex-col gap-2 flex-1">
                    <h2 class="text-cr-purple">Departamento Recreativo</h2>
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

                    <MemberList :members="members.recr" type="dept" />
                    
                    <div v-if="cands.open" class="mt-auto">
                        <button class="cand_btn" :disabled="!cands.recr.open" @click="$emit('show_modal', cands.recr)">
                            {{ cands.recr.open ? 'Candidaturas Abertas!' : 'Candidaturas Indisponíveis' }}
                        </button>
                    </div>
                </div>

                <img src="../../assets/kaku2.png" alt="panda"/>                
            </div>

            <div class="flex flex-wrap gap-x-8 box">
                
                <div class="flex flex-col gap-2 flex-1">
                    <h2 class="text-cr-teal">Departamento de Comunicação</h2>
                    <p>
                        O Departamento de Comunicação é o responsável por <b>gerir as nossas redes sociais</b>,
                        <b>criar posts</b> informativos, e <b>divulgar</b> atividades e eventos do Clube.
                    </p>
                    <p>
                        A equipa de design deste departamento ajuda também no
                        <b>
                            desenvolvimento de
                            <button class="click" @click="$router.push({ name: 'merch' })">
                                merch
                            </button>
                        </b>
                        cuja venda ajuda a financiar o Clube e as suas atividades.
                    </p>
                    
                    <MemberList :members="members.comms" type="dept" />

                    <div v-if="cands.open" class="mt-auto">
                        <button class="cand_btn" :disabled="!cands.comms.open" @click="$emit('show_modal', cands.comms)">
                            {{ cands.comms.open ? 'Candidaturas Abertas!' : 'Candidaturas Indisponíveis' }}
                        </button>
                    </div>
                </div>

                <img src="../../assets/comms.png" alt="panda"/>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
    .cand_btn {
        @apply font-shrikhand text-base md:text-lg sm:whitespace-nowrap
        mt-2 w-full border-2 px-6 md:px-10 py-1 rounded-lg bg-cr-red-beige
        hover:brightness-110 focus:brightness-110
        disabled:bg-stone-300 disabled:text-stone-500 disabled:hover:brightness-100
    }

    img {
        @apply m-auto w-60 h-60 md:w-64 md:h-64 lg:w-72 lg:h-72
    }
</style>