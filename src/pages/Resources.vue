<script setup lang="ts">
import associations_json from '../jsons/associations.json';
import Association from '../components/Resources/Association.vue'
</script>

<template>
    <div class="flex flex-col gap-4 max-w-6xl mx-auto">
        
        <h1 class="whitespace-nowrap">
            Recursos Úteis
        </h1>

        <div class="flex flex-col gap-6 w-full">
            <Association v-for="(ass, i) in associations_json.associations" :key="i" :ass="ass" />
        </div>

    </div>
</template>