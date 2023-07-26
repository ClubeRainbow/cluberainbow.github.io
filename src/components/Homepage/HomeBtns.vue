<template>
    <div class="flex flex-col sm:flex-row gap-x-4 gap-y-2">
        <button @click="$router.push({name: 'info'})">
            Eventos
        </button>
        <button @click="$router.push({name: 'info', hash: '#faq'})">
            FAQ
        </button>
        <button @click="">
            Candidaturas
        </button>
    </div>
</template>

<style scoped>
    button {
        @apply flex-1 flex items-center justify-center py-1 px-4
        border-2 rounded-lg bg-cr-red-beige drop-shadow-lg
        font-shrikhand text-base md:text-lg whitespace-nowrap
        hover:brightness-110 focus:brightness-110
    }
</style>