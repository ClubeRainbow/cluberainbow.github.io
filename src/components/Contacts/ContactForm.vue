<script setup lang="ts">
    import { ref } from 'vue';
    import Box from '../Box.vue';

    const subject = ref('')
    const email = ref('')
    const message = ref('')

    window.onbeforeunload = () => {
        subject.value = ''
        email.value = ''
        message.value = ''
    }
</script>

<template>
    <Box>
        <template #header>
            <h2>Fala connosco!</h2>
        </template>

        <template #content>
            <p>Se tiveres alguma questão ou recomendação está à vontade para entrar em contacto connosco!</p>
            <p>Podes fazê-lo via este formulário ou pelos contactos listados nesta página.</p>
        
            <form class="flex flex-col items-center gap-3 mt-3 w-full h-full" 
                action="https://formspree.io/f/xdornybk" method="POST">

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                    <select name="subject" v-model="subject" required>
                        <option value="" disabled>Motivo da mensagem</option>
                        <option value="[CR Website] Dúvida">Dúvida (Geral)</option>
                        <option value="[CR Website] Dúvida LGBTQIA+">Dúvida LGBTQIA+</option>
                        <option value="[CR Website] Sugestão">Sugestão (Geral)</option>
                        <option value="[CR Website] Candidatura">Candidatura</option>
                        <option value="[CR Website] Parceria">Parceria ou Colaboração</option>
                        <option value="[CR Website] Outro">Outro</option>
                    </select>
                    <input name="From:" v-model="email" type="email" placeholder="O teu email..." required>
                </div>

                <textarea name="Message:" v-model="message" type="text" placeholder="A tua mensagem..." class="h-[250px]" required></textarea>

                <button class="custom_btn mt-3" type="submit">
                    Enviar
                </button>

            </form>
        </template>
    </Box>
</template>

<style scoped>
    input, textarea, select {
        @apply bg-cr-off-white w-full border-2 rounded-md py-1 px-2 resize-none text-sm md:text-base
    }
    ::placeholder {
        @apply text-cr-brown opacity-70
    }
    .custom_btn {
        @apply w-full sm:w-2/3 bg-cr-medium-brown border-2 rounded-lg p-2 
        text-xl md:text-2xl font-shrikhand
        hover:brightness-110 focus:brightness-110
    }
</style>