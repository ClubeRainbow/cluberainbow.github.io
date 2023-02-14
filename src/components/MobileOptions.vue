<template>
    <div class="flex flex-col gap-1 w-full">
        <button class="mobile_menu_option" @click="$router.push({name: 'home'}); $emit('close');">
            Página Inicial
        </button>

        <button class="mobile_menu_option" @click="$router.push({name: 'about'}); $emit('close');">
            Quem Somos
        </button>

        <button class="mobile_menu_option" @click="$router.push({name: 'info'}); $emit('close');">
            Informações
        </button>

        <button class="mobile_menu_option" @click="$router.push({name: 'merch'}); $emit('close');">
            Apoia-nos
        </button>

        <button class="mobile_menu_option" @click="$router.push({name: 'resources'}); $emit('close');">
            Recursos Úteis
        </button>

        <button class="mobile_menu_option" @click="$router.push({name: 'contacts'}); $emit('close');">
            Contactos
        </button>
    </div>
</template>