<script setup lang="ts">
    import DeptsSection from '../components/About/DeptsSection.vue';
    import PartnersSection from '../components/About/PartnersSection.vue';
</script>

<template>
    <div class="flex flex-col gap-8">
        <p class="text-4xl font-shrikhand font-normal text-outline-white whitespace-nowrap">
            Quem Somos
        </p>
        <DeptsSection />
        <PartnersSection />
    </div>
</template>

