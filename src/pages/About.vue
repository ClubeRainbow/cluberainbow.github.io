<script setup lang="ts">
    import recreativo from '../jsons/recreativo.json';
    import pedagogico from '../jsons/pedagogico.json';
    import comms from '../jsons/comms.json';
    import MemberList from '../components/MemberList.vue';
</script>

<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div class="border-y rounded-lg p-4 flex flex-col gap-2">
                <p class="text-2xl font-shrikhand font-normal text-cr-purple text-outline-white">
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
                <MemberList :members="recreativo.members" />
            </div>

            <div class="border-y rounded-lg p-4 flex flex-col gap-2">
                <p class="text-2xl font-shrikhand font-normal text-cr-orange text-outline-white">
                    Departamento Pedagógico
                </p>
                <p> 
                    O Departamento Pedagógico é responsável pela <b>componente educativa</b> do Clube, e pela 
                    <b>organização de parcerias</b> com outras organizações. Graças a ele podemos organizar 
                    <b>palestras</b> e outros eventos educativos para discutir temas de grande importância 
                    com pessoas conhecedoras dos mesmos. 
                </p>
                <MemberList :members="pedagogico.members" />
            </div>

            <div class="border-y rounded-lg p-4 flex flex-col gap-2">
                <p class="text-2xl font-shrikhand font-normal text-cr-teal text-outline-white">
                    Departamento de Comunicação
                </p>
                <p> 
                    O Departamento de Comunicação é o responsável por <b>gerir as nossas redes sociais</b> 
                    (Instagram), <b>criar posts</b> informativos, e <b>divulgar</b> atividades e eventos do Clube. 
                </p>
                <p> 
                    A equipa de design deste departamento ajuda também no <b>desenvolvimento de merch</b> 
                    cuja venda ajuda a financiar o Clube e as suas atividades. 
                </p>
                <MemberList :members="comms.members" />
            </div> 
            
            <div class="border-y rounded-lg p-4 flex flex-col gap-2">
                <p class="text-2xl font-shrikhand font-normal text-outline-white">
                    Candidaturas
                </p>
                <p>
                    work in progress!
                </p>
            </div>

        </div>
    </div>
</template>

<style scoped>
    b {
        @apply text-black
    }
</style>