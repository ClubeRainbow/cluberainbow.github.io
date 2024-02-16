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
        
        <button class="reg_option" @click="redirect('home')">
            <h3>Página Inicial</h3>
        </button>

        <div>
            <button class="highlighted_option" @click="about_options = !about_options; list_size='248px'">
                <h3>Sobre Nós</h3>
                <img src="../assets/icon_arrow.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : about_options }"/>
            </button>

            <Transition>
                <div v-if="about_options" class="sub_section">
                    <button @click="redirect('about')">
                        <h3>Sobre o Clube</h3>
                    </button>
                    <button @click="redirect('about', '#depts')">
                        <h3>Departamentos</h3>
                    </button>
                    <button @click="redirect('about', '#dir')">
                        <h3>Direção</h3>
                    </button>
                    <button @click="redirect('about', '#partners')">
                        <h3>Parcerias</h3>
                    </button>
                </div>
            </Transition>
        </div>

        <div>
            <button class="highlighted_option" @click="info_options = !info_options; list_size='136px'">
                <h3>Informações</h3>
                <img src="../assets/icon_arrow.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : info_options }"/>
            </button>

            <Transition>
                <div v-if="info_options" class="sub_section">
                    <button @click="redirect('info')">
                        <h3>FAQ</h3>
                    </button>
                </div>
            </Transition>
        </div>

        <div>
            <button class="highlighted_option" @click="merch_options = !merch_options; list_size='80px'">
                <h3>Merch</h3>
                <img src="../assets/icon_arrow.svg" alt="toggle list" class="h-4 w-4" :class="{ 'rotate-180' : merch_options }"/>
            </button>
            
            <Transition>
                <div v-if="merch_options" class="sub_section">
                    <button @click="redirect('merch')">
                        <h3>Autocolantes</h3>
                    </button>
                </div>
            </Transition>
        </div>

        <button class="reg_option" @click="redirect('resources')">
            <h3>Recursos Úteis</h3>
        </button>

        <button class="reg_option" @click="redirect('contacts')">
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
    .reg_option {
        @apply 
        border-2 rounded-xl bg-cr-light-brown shadow-md py-2 px-4
        w-full text-center
    }
    .highlighted_option {
        @apply 
        flex justify-center items-center gap-2
        border-2 rounded-xl bg-cr-medium-brown shadow-md py-2 px-4
        w-full text-center
    }
    .reg_option:hover, .highlighted_option:hover,
    .reg_option:focus, .highlighted_option:focus { @apply brightness-110 }
    .reg_option > h3, .highlighted_option > h3 { text-shadow: none }
    .sub_section {
        @apply mx-auto w-11/12 flex flex-col gap-2
    }
    .sub_section > button { @apply reg_option }
    .sub_section > button:first-child { @apply mt-3 }
    .sub_section > button:last-child { @apply mb-1 }
</style>