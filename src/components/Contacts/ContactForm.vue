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
            <select v-model="title" required>
                <option value="" disabled>Motivo da mensagem</option>
                <option value="Dúvida Clube">Dúvida sobre o Clube Rainbow</option>
                <option value="Dúvida LGBTQIA+">Dúvida LGBTQIA+</option>
                <option value="Dúvida Candidaturas">Dúvida sobre Candidaturas</option>
                <option value="Sugestão">Sugestão (Geral)</option>
                <option value="Sugestão Media">Sugestão de Media LGBTQIA+</option>
                <option value="Parceria">Parceria ou Colaboração</option>
                <option value="Outro">Outro</option>
            </select>
            <input v-model="sender" type="email" placeholder="O teu email..." required>
            <textarea v-model="text" type="text" placeholder="A tua mensagem..." class="h-[200px] lg:h-full" required></textarea>

            <button class="custom_btn mt-4" type="submit">
                Enviar
            </button>
        </form>
    </div>
</template>

<style scoped>
    input, textarea, select {
        @apply bg-cr-off-white w-full border-2 rounded-md py-1 px-2 resize-none
    }

    option {
        @apply font-semibold
    }

    ::placeholder {
        @apply text-cr-brown opacity-70
    }
</style>