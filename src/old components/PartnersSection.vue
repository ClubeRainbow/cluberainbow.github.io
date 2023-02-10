<script setup lang="ts">
  import { Ref, ref } from "vue";
  const show : Ref<boolean> = ref(false);
</script>

<template>

    <div class="mb-8">
        
        <button class="flex items-center justify-center hover:text-cr-light-brown" @click="show = !show">
            <span class ="font-shrikhand text-2xl mr-1">Parcerias</span>
            <svg
              class="float-right w-7 h-7 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              :class="{ 'rotate-180': show, 'rotate-0': !show }"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
        </button>

        <Transition>
            <div v-show="show" class="bg-cr-off-white py-1 px-2 rounded-lg flex justify-center my-1 text-xs md:text-sm">
                etc etc etc
            </div>
        </Transition>
        
    </div>

</template>