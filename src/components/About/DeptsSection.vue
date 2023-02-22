<script setup lang="ts">
    import { ref } from 'vue';
    import recreativo from '../../jsons/recreativo.json';
    import pedagogico from '../../jsons/pedagogico.json';
    import comms from '../../jsons/comms.json';
    import MemberList from './MemberList.vue';
    import ApplyDetails from './ApplyDetails.vue';

    const show_apply = ref(false)
</script>

<template>
    <div class="custom_grid">
            
        <div>
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

        <div>
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

        <div>
            <p class="text-2xl font-shrikhand font-normal text-cr-teal text-outline-white">
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
                    <button class="underline hover:text-cr-brown" @click="$router.push({name: 'merch'})">
                        merch
                    </button>
                </b>
                cuja venda ajuda a financiar o Clube e as suas atividades. 
            </p>
            <MemberList :members="comms.members" />
        </div>
        
        <div v-if="!show_apply" class="items-center justify-center">
            <img src="../../assets/kaku.png" alt="panda" class="w-80" />
            
            <button class="-mt-8 z-20 custom_btn" @click="show_apply = !show_apply">
                Candidaturas
            </button>
        </div>

        <ApplyDetails v-else @close="show_apply = !show_apply"/>

    </div>
</template>

<style scoped>
    .custom_grid {
        @apply grid grid-cols-1 md:grid-cols-2 gap-4
    }

    .custom_grid > div {
        @apply border-2 rounded-xl bg-cr-beige drop-shadow-lg py-4 px-6 flex flex-col gap-2
    }
</style>