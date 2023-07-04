<script setup lang="ts">
    import DeptsSection from '../components/About/DeptsSection.vue';
    import PartnersSection from '../components/About/PartnersSection.vue';
</script>

<template>
    <div class="flex flex-col gap-8">
        
        <div id="clube" class="flex flex-col gap-4">
            <p class="text-4xl font-shrikhand font-normal text-outline-white whitespace-nowrap">
                Sobre o Clube Rainbow
            </p>
            <p>
                under construction
            </p>
        </div>
        
        <DeptsSection id="depts" />
        <PartnersSection id="partners" />
    </div>
</template>

