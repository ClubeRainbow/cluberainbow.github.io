<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const emit = defineEmits(['close']);

  const about_options = ref(false)
  const info_options = ref(false)
  const list_size = ref('')
  
  const redirect = (dest: string, scroll?: string) => {
    if (router.currentRoute.value.name === dest)
        emit('close', scroll)
    else
        router.push({name: dest, hash: scroll})
  }
</script>

<template>
    <div class="flex flex-col gap-2 w-full">
        <button class="mobile_menu_option" @click="redirect('home')">
            Página Inicial
        </button>

        <div>
            <button class="mobile_menu_option sub_button" @click="about_options = !about_options; list_size='248px'">
                Sobre Nós
                <img src="../assets/arrow_down.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : about_options }"/>
            </button>

            <Transition>
                <div v-if="about_options" class="sub_section">
                    <button class="sub_option mt-4" @click="redirect('about', '#clube')">
                        Sobre o Clube Rainbow
                    </button>
                    <button class="sub_option" @click="redirect('about', '#depts')">
                        Departamentos
                    </button>
                    <button class="sub_option" @click="redirect('about', '#dir')">
                        Direção
                    </button>
                    <button class="sub_option mb-2" @click="redirect('about', '#partners')">
                        Parcerias
                    </button>
                </div>
            </Transition>
        </div>

        <div>
            <button class="mobile_menu_option sub_button" @click="info_options = !info_options; list_size='192px'">
                Informações
                <img src="../assets/arrow_down.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : info_options }"/>
            </button>

            <Transition>
                <div v-if="info_options" class="sub_section">
                    <button class="sub_option mt-4" @click="redirect('info', '#events')">
                        Eventos
                    </button>
                    <button class="sub_option mb-2" @click="redirect('info', '#faq')">
                        FAQ
                    </button>
                </div>
            </Transition>
        </div>

        <button class="mobile_menu_option" @click="redirect('merch')">
            Merch
        </button>

        <button class="mobile_menu_option" @click="redirect('resources')">
            Recursos Úteis
        </button>

        <button class="mobile_menu_option" @click="redirect('contacts')">
            Contactos
        </button>
    </div>
</template>

<style scoped>
    .v-enter-active, .v-leave-active {
        max-height: v-bind(list_size);
        transition: max-height 0.5s ease;
        overflow: hidden;
    }

    .v-enter-from, .v-leave-to {    
        max-height: 0px;
        transition: max-height 0.5s ease;
        overflow: hidden;
    }
    .sub_button {
        @apply flex justify-center items-center gap-2 px-4 h-full
    }

    .sub_section {
        @apply mx-auto w-11/12 flex flex-col gap-2
    }

    .sub_option {
        @apply font-shrikhand text-xl 
        w-full border-2 rounded-md p-2 text-center 
        bg-cr-red-beige
        hover:brightness-110 
        focus:brightness-110
    }
</style>