<template>
    <div class="flex flex-col gap-1 w-full">
        <button class="option title" @click="$router.push({name: 'home'}); $emit('close');">
            Página Inicial
        </button>

        <button class="option title" @click="$router.push({name: 'about'}); $emit('close');">
            Quem Somos
        </button>

        <button class="option title" @click="$router.push({name: 'info'}); $emit('close');">
            Informação
        </button>

        <button class="option title" @click="$router.push({name: 'support'}); $emit('close');">
            Como Apoiar
        </button>

        <button class="option title" @click="$router.push({name: 'associations'}); $emit('close');">
            Associações
        </button>

        <button class="option title" @click="$router.push({name: 'contacts'}); $emit('close');">
            Contactos
        </button>
    </div>
</template>

<style scoped>
    .option {
        @apply border-2 rounded-md w-full p-2 text-center hover:text-cr-light-brown
    }
</style>