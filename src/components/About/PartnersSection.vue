<script setup lang="ts">
    import partners_json from '../../jsons/partners.json';
</script>

<template>
    <div class="flex flex-col gap-4">
        <p class="text-4xl font-shrikhand font-normal text-outline-white">
            Parcerias
        </p>
        <div class="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <a v-for="(partner, i) in partners_json.partners" :key="i" class="rounded-xl" :href="partner.link" target="_blank">
                <img :src="partner.logo" :alt="partner.name" class="w-20 h-20 rounded-xl" />
            </a>
        </div>
    </div>
</template>