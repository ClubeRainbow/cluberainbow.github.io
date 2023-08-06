<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const emit = defineEmits(['close']);

  const about_options = ref(false)
  const info_options = ref(false)
  const merch_options = ref(false)
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
        
        <button class="beige_option" @click="redirect('home')">
            <h3>Página Inicial</h3>
        </button>

        <div>
            <button class="red_option" @click="about_options = !about_options; list_size='248px'">
                <h3>Sobre Nós</h3>
                <img src="../assets/icon_arrow.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : about_options }"/>
            </button>

            <Transition>
                <div v-if="about_options" class="sub_section">
                    <button class="beige_option mt-4" @click="redirect('about')">
                        <h3>Sobre o Clube Rainbow</h3>
                    </button>
                    <button class="beige_option" @click="redirect('about', '#depts')">
                        <h3>Departamentos</h3>
                    </button>
                    <button class="beige_option" @click="redirect('about', '#dir')">
                        <h3>Direção</h3>
                    </button>
                    <button class="beige_option mb-2" @click="redirect('about', '#partners')">
                        <h3>Parcerias</h3>
                    </button>
                </div>
            </Transition>
        </div>

        <div>
            <button class="red_option" @click="info_options = !info_options; list_size='136px'">
                <h3>Informações</h3>
                <img src="../assets/icon_arrow.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : info_options }"/>
            </button>

            <Transition>
                <div v-if="info_options" class="sub_section">
                    <button class="beige_option mt-4" @click="redirect('info')">
                        <h3>Eventos</h3>
                    </button>
                    <button class="beige_option mb-2" @click="redirect('info', '#faq')">
                        <h3>FAQ</h3>
                    </button>
                </div>
            </Transition>
        </div>

        <div>
            <button class="red_option" @click="merch_options = !merch_options; list_size='80px'">
                <h3>Merch</h3>
                <img src="../assets/icon_arrow.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : merch_options }"/>
            </button>
            
            <Transition>
                <div v-if="merch_options" class="sub_section">
                    <button class="beige_option mt-4 mb-2" @click="redirect('merch')">
                        <h3>Autocolantes</h3>
                    </button>
                </div>
            </Transition>
        </div>

        <button class="beige_option" @click="redirect('resources')">
            <h3>Recursos Úteis</h3>
        </button>

        <button class="beige_option" @click="redirect('contacts')">
            <h3>Contactos</h3>
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
    .sub_section {
        @apply mx-auto w-11/12 flex flex-col gap-2
    }
    .beige_option {
        @apply 
        border-2 rounded-xl bg-cr-beige shadow-md py-2 px-4
        w-full text-center
    }
    .beige_option:hover > h3,
    .beige_option:focus > h3 {
        @apply brightness-125
    }
    .red_option {
        @apply 
        flex justify-center items-center gap-2
        border-2 rounded-xl bg-cr-red-beige shadow-md py-2 px-4
        w-full text-center
        hover:brightness-110 
        focus:brightness-110
    }
    .red_option > h3 {
        text-shadow: none
    }
</style>