<script setup lang="ts">
    import partners_json from '../../jsons/partners.json';
</script>

<template>
    <div class="flex flex-col gap-2 border-y-2 p-4">
        <p class="font-shrikhand font-normal text-outline-white text-2xl">
            Parcerias
        </p>
        <div class="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-2">
            <a v-for="(partner, i) in partners_json.partners" :key="i" class="rounded-xl hover:outline" :href="partner.link" target="_blank">
                <img :src="'/src/imgs/partners/'+partner.logo" :alt="partner.name" 
                class="w-20 h-20 rounded-xl" />
            </a>
        </div>
    </div>
</template>