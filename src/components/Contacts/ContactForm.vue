<script setup lang="ts">
    import { ref } from 'vue';

    const title = ref('')
    const sender = ref('');
    const text = ref('');

    const sendEmail = () => {
        console.log('send email')
        // ...
    }

</script>

<template>
    <div class="border-2 rounded-xl bg-cr-beige drop-shadow-lg p-8 flex flex-col gap-3 flex-1">
        <p class="text-3xl font-shrikhand font-normal">Fala connosco!</p>
        <div>
            <p> Se tiveres alguma questão ou recomendação está à vontade para entrar em contacto connosco! </p>
            <p> Podes fazê-lo via este formulário ou pelos contactos listados nesta página. </p>
        </div>
        <form class="flex flex-col items-center gap-3 w-full h-full" @submit.prevent="sendEmail()">
            <input v-model="title" type="text" placeholder="Título" required>
            <input v-model="sender" type="email" placeholder="O teu email" required>
            <textarea v-model="text" type="text" placeholder="A tua mensagem" class="h-[200px] lg:h-full" required></textarea>

            <button class="custom_btn mt-4" type="submit">
                Enviar
            </button>
        </form>
    </div>
</template>

<style scoped>
    input, textarea {
        @apply w-full border-2 rounded-md py-1 px-2 bg-white resize-none
    }

    ::placeholder {
        @apply text-cr-brown opacity-70
    }
</style>