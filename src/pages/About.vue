<script setup lang="ts">
    import DeptsSection from '../components/About/DeptsSection.vue';
    import DirSection from '../components/About/DirSection.vue';
    import PartnersSection from '../components/About/PartnersSection.vue';
</script>

<template>
    <div class="flex flex-col gap-8">
        
        <div id="clube" class="flex flex-col gap-4">
            <p class="title">
                Sobre o Clube Rainbow
            </p>
            <p>
                under construction
            </p>
        </div>
        
        <DeptsSection id="depts" />
        <DirSection id="dir" />
        <PartnersSection id="partners" />
    </div>
</template>

