<script setup lang="ts">
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
    <Modal>
        
        <h2>
            Candidaturas para o 
            <h2 :class="dept.color + ' inline'">
                {{ dept.name }}
            </h2>
        </h2>

        <div class="flex flex-col gap-2 md:mx-4">
            
            <p>
                Gostarias de fazer parte do Clube? 
                <b>
                    As candidaturas estão abertas para o {{ dept.name }}
                    até {{ dept.timelimit }}!
                </b>
            </p>

            <div class="flex flex-wrap gap-y-2 gap-x-12">
                <div>
                    <p><u>Para este departamento, estamos à procura de:</u></p>
                    <ul class="ml-6">
                        <li v-for="(func, i) in dept.functions"> {{ func }} </li>
                    </ul>
                </div>

                <div>
                    <p><u>Para fazeres parte, precisas de:</u></p>
                    <ul class="ml-6">
                        <li>Ser estudante ou alumni da Universidade do Minho</li>
                        <li>Ter Discord (é a nossa principal plataforma de organização)</li>
                        <li v-for="(req, i) in dept.reqs"> {{ req }} </li>
                    </ul>
                </div>
            </div>

            <p>
                Parece algo do teu interesse?
                Candidata-te via o formulário abaixo! 
                Mais informações estarão lá disponíveis, mas  
                <b>
                    qualquer dúvida não hesites em nos 
                    <button class="click" @click="$router.push({ name: 'contacts' })">
                        contactar
                    </button>.
                </b>
            </p>
        </div>

        <a class="custom_btn" :href="dept.link" target="_blank">
            Formulário
        </a>
        
    </Modal>
</template>

<style scoped>
    .custom_btn {
        @apply font-shrikhand text-base md:text-lg 
        border-2 rounded-lg bg-cr-red-beige
        flex items-center justify-center px-4 py-1
        w-full max-w-lg mx-auto mt-2 
        no-underline
    }
</style>