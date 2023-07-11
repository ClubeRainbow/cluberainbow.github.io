<script setup lang="ts">
    import { ref } from 'vue';
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
    <div class="flex flex-col gap-4 flex-1 box">
        
        <div class="flex flex-col gap-2">
            <p class="text-2xl md:text-3xl font-shrikhand font-normal">Fala connosco!</p>
            <div>
                <p>Se tiveres alguma questão ou recomendação está à vontade para entrar em contacto connosco!</p>
                <p>Podes fazê-lo via este formulário ou pelos contactos listados nesta página.</p>
            </div>
        </div>
        
        <form class="flex flex-col items-center gap-3 w-full h-full" 
            action="https://formspree.io/f/xdornybk" method="POST">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                <select name="subject" v-model="subject" required>
                    <option value="" disabled>Motivo da mensagem</option>
                    <option value="[CR Website] Dúvida Geral">Dúvida (Geral)</option>
                    <option value="[CR Website] Dúvida LGBTQIA+">Dúvida LGBTQIA+</option>
                    <option value="[CR Website] Dúvida Candidaturas">Dúvida sobre Candidaturas</option>
                    <option value="[CR Website] Sugestão Geral">Sugestão (Geral)</option>
                    <option value="[CR Website] Parceria">Parceria ou Colaboração</option>
                    <option value="[CR Website] Outro">Outro</option>
                </select>
                <input name="From:" v-model="email" type="email" placeholder="O teu email..." required>
            </div>

            <textarea name="Message:" v-model="message" type="text" placeholder="A tua mensagem..." class="h-[250px] md:h-[200px] lg:h-min-[150px]" required></textarea>

            <button class="custom_btn mt-2" type="submit">
                Enviar
            </button>
        </form>

    </div>
</template>

<style scoped>
    input, textarea, select {
        @apply bg-cr-off-white w-full border-2 rounded-md py-1 px-2 resize-none text-sm md:text-base
    }

    option {
        @apply font-semibold
    }

    ::placeholder {
        @apply text-cr-brown opacity-70
    }

    .custom_btn {
        @apply w-full md:w-9/12 bg-cr-red-beige border-2 rounded-lg p-2 
        text-xl md:text-2xl font-shrikhand font-normal
        hover:brightness-110 focus:brightness-110
    }
</style>