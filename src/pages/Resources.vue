<script setup lang="ts">
import associations_json from '../jsons/associations.json';
import Association from '../components/Resources/Association.vue'
</script>

<template>
    <div class="flex flex-col gap-4">
        
        <p class="title whitespace-nowrap">
            Recursos Úteis
        </p>

        <div class="flex flex-col gap-6 mx-auto">
            <Association v-for="(ass, i) in associations_json.associations" :key="i" :ass="ass" />
        </div>

    </div>
</template>