<script setup lang="ts">
    import { ref } from "vue";
    import DeptsSection from '../components/About/DeptsSection.vue';
    import DirSection from '../components/About/DirSection.vue';
    import PartnersSection from '../components/About/PartnersSection.vue';
    import ModalCand from '../components/ModalCand.vue';

    const show_modal = ref(false)
    const dept_cand = ref('')
</script>

<template>
    <ModalCand v-if="show_modal" :dept="dept_cand" @close="show_modal = false" />
    
    <div class="flex flex-col gap-8">
        
        <div id="clube" class="flex flex-col gap-4">
            <p class="title">
                Sobre o Clube Rainbow
            </p>
            <p>
                under construction
            </p>
        </div>
        
        <DeptsSection id="depts" @show_modal="dept => { dept_cand = dept; show_modal = true; }"/>
        <DirSection id="dir" />
        <PartnersSection id="partners" />
    </div>
</template>

