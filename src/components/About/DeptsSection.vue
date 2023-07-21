<script setup lang="ts">
    import info from '../../jsons/info.json';
    import members from '../../jsons/members.json';
    import MemberList from './MemberList.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <p class="title">
            Departamentos
        </p>

        <div class="flex flex-col gap-8">
            
            <div class="flex flex-col lg:flex-row gap-x-8 box">
                
                <div class="flex flex-col gap-2">
                    <p class="subtitle2 text-cr-orange">
                        Departamento Pedagógico
                    </p>
                    <p>
                        O Departamento Pedagógico é responsável pela <b>componente educativa</b> do Clube, e pela
                        <b>organização de parcerias</b> com outras organizações. Graças a ele podemos organizar
                        <b>palestras</b> e outros eventos educativos para discutir temas de grande importância
                        com pessoas conhecedoras dos mesmos.
                    </p>
                    
                    <MemberList :members="members.ped" type="dept" :class="{'mb-2' : info.candidaturas.depts.includes('ped')}"/>
                    
                    <button v-if="info.candidaturas.depts.includes('ped')" class="cand_btn"
                        @click="$router.push({name: 'info', hash: '#apps'})">
                        Candidaturas Abertas!
                    </button>
                </div>

                <img src="../../assets/kaku2.png" alt="panda" class="m-auto w-72 h-72"/>   
            </div>
            
            <div class="flex flex-col lg:flex-row-reverse gap-x-8 box">
                
                <div class="flex flex-col gap-2">
                    <p class="subtitle2 text-cr-purple">
                        Departamento Recreativo
                    </p>
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

                    <MemberList :members="members.recr" type="dept" :class="{'mb-2' : info.candidaturas.depts.includes('recr')}"/>
                    
                    <button v-if="info.candidaturas.depts.includes('recr')" class="cand_btn"
                        @click="$router.push({name: 'info', hash: '#apps'})">
                        Candidaturas Abertas!
                    </button>
                </div>

                <img src="../../assets/kaku2.png" alt="panda" class="m-auto w-72 h-72"/>                
            </div>

            <div class="flex flex-col lg:flex-row gap-x-8 box">
                
                <div class="flex flex-col gap-2">
                    <p class="subtitle2 text-cr-teal">
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
                            <button class="click" @click="$router.push({ name: 'merch' })">
                                merch
                            </button>
                        </b>
                        cuja venda ajuda a financiar o Clube e as suas atividades.
                    </p>
                    
                    <MemberList :members="members.comms" type="dept" :class="{'mb-2' : info.candidaturas.depts.includes('comms')}"/>

                    <button v-if="info.candidaturas.depts.includes('comms')" class="cand_btn"
                        @click="$router.push({name: 'info', hash: '#apps'})">
                        Candidaturas Abertas!
                    </button>
                </div>

                <img src="../../assets/kaku2.png" alt="panda" class="m-auto w-72 h-72"/>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
    .cand_btn {
        @apply font-shrikhand font-normal text-base md:text-lg 
        mt-auto w-full border-2 px-6 md:px-10 py-1 rounded-lg bg-cr-red-beige
        hover:brightness-110 focus:brightness-110
    }
</style>