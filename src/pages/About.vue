<script setup lang="ts">
    import { ref } from "vue";
    import AboutSection from "../components/About/AboutSection.vue";
    import DeptsSection from '../components/About/DeptsSection.vue';
    import DirSection from '../components/About/DirSection.vue';
    import PartnersSection from '../components/About/PartnersSection.vue';
    import ModalDeptCand from '../components/Modals/ModalDeptCand.vue';

    const show_modal = ref(false)
    const dept_data = ref(null)
</script>

<template>
    <ModalDeptCand v-if="show_modal && dept_data" :dept="dept_data" @close="show_modal = false" />
    
    <div class="flex flex-col gap-10 max-w-6xl mx-auto">
        <AboutSection id="clube" />
        <DeptsSection id="depts" @show_modal="dept => { dept_data = dept; show_modal = true; }"/>
        <DirSection id="dir" />
        <PartnersSection id="partners" class="hidden" />
    </div>
</template>

