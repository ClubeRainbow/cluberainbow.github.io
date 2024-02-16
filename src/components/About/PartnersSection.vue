<script setup lang="ts">
    import partners_json from '../../jsons/partners.json';
</script>

<template>
    <div class="flex flex-col gap-4">
        <h1> Parcerias </h1>
        <div class="box">
            <a v-for="(partner, i) in partners_json.partners" :key="i" class="rounded-xl" :href="partner.link" target="_blank">
                <img :src="partner.logo" :alt="partner.name" class="w-20 h-20 rounded-xl" />
            </a>
        </div>
    </div>
</template>

<style scoped>
    .box {
        @apply flex flex-wrap justify-center items-center gap-4 md:gap-6
        border-2 rounded-xl bg-cr-beige shadow-md
        p-4 md:px-6
    }
</style>