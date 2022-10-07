<script lang="ts">
export interface Dept {
    name: string;
    desc: string;
    members: string[];
}
</script>

<script setup lang="ts">
import DeptInfo from "./DeptInfo.vue";

const depts : Dept[] = [
  {
    name: "Recreativo",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
    members: ["a","b","c"],
  },
  {
    name: "de Comunicação",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
    members: ["d","e","f"],
  },
  {
    name: "Pedagógico",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
    members: ["g","h","i"],
  }
]
</script>

<template>

    <h1 class="text-2xl font-shrikhand mb-4">
      Quem somos?
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <div v-for="(dept, index) in depts" :key="index">
          <DeptInfo :dept="dept" />
      </div>
    </div>

</template>