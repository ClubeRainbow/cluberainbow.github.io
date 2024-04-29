<script setup lang="ts">
    import Box from '../Box.vue';
    import Modal from './Modal.vue';

    interface Props {
        dept: {
            open: boolean,
            timelimit: string,
            name: string,
            color: string,
            link: string,
            functions: string[],
            reqs: string[]
        }
    }
    defineProps<Props>();
</script>

<template>
    <Modal :header_bg_color="`bg-cr-light-${dept.color}`">
        <template #header>
            <h2>
                Candidaturas para o 
                <h2 :class="`text-cr-${dept.color} inline`">
                    {{ dept.name }}
                </h2>
            </h2>
        </template>

        <template #content>
            <p>
                Gostarias de fazer parte do Clube? 
                <b>
                    As candidaturas estão abertas para o {{ dept.name }}{{ dept.timelimit ? ` até ${dept.timelimit}!` : '!' }}
                </b>
            </p>

            <div class="flex flex-col md:flex-row my-2 gap-4">
                <Box class="flex-1">
                    <template #header>
                        <p><b>Para este departamento, estamos à procura de:</b></p>
                    </template>
                    <template #content>
                        <ul>
                            <li v-for="func in dept.functions"> {{ func }} </li>
                        </ul>
                    </template>
                </Box>

                <Box class="flex-1">
                    <template #header>
                        <p><b>Para fazeres parte, precisas de:</b></p>
                    </template>
                    <template #content>
                        <ul>
                            <li>Ser <b>estudante ou alumni</b> da Universidade do Minho</li>
                            <li>Ter <b>Discord</b> (é a nossa principal plataforma de organização)</li>
                            <li v-for="req in dept.reqs"> {{ req }} </li>
                        </ul>
                    </template>
                </Box>
            </div>

            <p>
                Parece algo do teu interesse?
                Candidata-te via o formulário abaixo! 
                Mais informações estarão lá disponíveis, mas  
                <b>
                    qualquer dúvida não hesites em nos 
                    <button class="clickable" @click="$router.push({ name: 'contacts' })">
                        contactar
                    </button>.
                </b>
            </p>

            <a :href="dept.link" target="_blank">
                Formulário
            </a>
        </template>
    </Modal>
</template>

<style scoped>
    div>a {
        @apply flex items-center justify-center
        w-full md:w-2/3 mt-2 mx-auto py-2 px-4 
        border-2 rounded-lg bg-cr-medium-brown font-shrikhand 
        text-lg md:text-xl
        no-underline
    }
</style>