<script setup lang="ts">
import { Dept } from "./DeptsSection.vue";
import { Ref, ref } from "vue";
defineProps<{ dept: Dept }>()

const showmembers : Ref<boolean> = ref(false);
</script>

<template>
  <div class="flow-root border border-cr-brown rounded-xl pt-4 px-6 pb-2">
      
    <h1
      class ="font-shrikhand text-2xl mb-2"        
      :class="{
          'text-cr-purple': dept.name === 'Recreativo',
          'text-cr-teal': dept.name === 'de Comunicação',
          'text-cr-orange': dept.name === 'Pedagógico',
        }">
        Departamento {{ dept.name }}
    </h1>

    <div class="text-xs md:text-sm">
      <div class = "text-cr-brown mb-2" v-html="dept.desc"></div>

      <button class="bg-cr-off-white py-1 px-2 rounded-lg -mr-2 font-bold float-right hover:underline"
        @click="showmembers = !showmembers">
        <p v-if="showmembers">- Membros</p>
        <p v-else>+ Membros</p>
      </button>

      <ul v-show="showmembers" class="pt-4">
        <li v-for="(member, index) in dept.members" :key="index">
          • {{ member }}
        </li>
      </ul>
    </div>
  
  </div>
</template>