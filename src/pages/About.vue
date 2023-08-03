<script setup lang="ts">
    import { ref } from "vue";
    import DeptsSection from '../components/About/DeptsSection.vue';
    import DirSection from '../components/About/DirSection.vue';
    import PartnersSection from '../components/About/PartnersSection.vue';
    import ModalDeptCand from '../components/Modals/ModalDeptCand.vue';

    const show_modal = ref(false)
    const dept_cand = ref('')
</script>

<template>
    <ModalDeptCand v-if="show_modal" :dept="dept_cand" @close="show_modal = false" />
    
    <div class="flex flex-col gap-10 max-w-6xl mx-auto">
        
        <div id="clube" class="flex flex-col gap-4">
            <h1> Sobre o Clube Rainbow </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        
        <DeptsSection id="depts" @show_modal="dept => { dept_cand = dept; show_modal = true; }"/>
        <DirSection id="dir" />
        <PartnersSection id="partners" />
    </div>
</template>

