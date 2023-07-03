<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const emit = defineEmits(['close']);
  
  const redirect = (dest: string) => {
    if (router.currentRoute.value.name === dest)
        emit('close')
    else
        router.push({name: dest})
  }
</script>

<template>
    <div class="flex flex-col gap-1 w-full">
        <button class="mobile_menu_option" @click="redirect('home')">
            Página Inicial
        </button>

        <button class="mobile_menu_option" @click="redirect('about')">
            Sobre Nós
        </button>

        <button class="mobile_menu_option" @click="redirect('info')">
            Informações
        </button>

        <button class="mobile_menu_option" @click="redirect('merch')">
            Merch
        </button>

        <button class="mobile_menu_option" @click="redirect('resources')">
            Recursos
        </button>

        <button class="mobile_menu_option" @click="redirect('contacts')">
            Contactos
        </button>
    </div>
</template>