<script setup lang="ts">
    import { ref } from 'vue';
    const subject = ref('')
    const email = ref('')
    const message = ref('')

    window.onload = () => {
        subject.value = ''
        email.value = ''
        message.value = ''
    }
</script>

<template>
    <div class="border-2 rounded-xl bg-cr-beige drop-shadow-lg p-8 flex flex-col gap-3 flex-1">
        <p class="text-3xl font-shrikhand font-normal">Fala connosco!</p>
        <div>
            <p> Se tiveres alguma questão ou recomendação está à vontade para entrar em contacto connosco! </p>
            <p> Podes fazê-lo via este formulário ou pelos contactos listados nesta página. </p>
        </div>
        <form class="flex flex-col items-center gap-3 w-full h-full" 
            action="https://formspree.io/f/xdornybk" method="POST">
            <select name="subject" v-model="subject" required>
                <option value="" disabled>Motivo da mensagem</option>
                <option value="[CR Website] Dúvida Geral">Dúvida (Geral)</option>
                <option value="[CR Website] Dúvida LGBTQIA+">Dúvida LGBTQIA+</option>
                <option value="[CR Website] Dúvida Candidaturas">Dúvida sobre Candidaturas</option>
                <option value="[CR Website] Sugestão Geral">Sugestão (Geral)</option>
                <option value="[CR Website] Sugestão Media">Sugestão de Media LGBTQIA+</option>
                <option value="[CR Website] Parceria">Parceria ou Colaboração</option>
                <option value="[CR Website] Outro">Outro</option>
            </select>
            <input name="From:" v-model="email" type="email" placeholder="O teu email..." required>
            <textarea name="Message:" v-model="message" type="text" placeholder="A tua mensagem..." class="h-[200px] lg:h-full" required></textarea>

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