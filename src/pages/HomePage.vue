<script setup lang="ts">
    import { ref } from "vue";
    import HomeIntro from '../components/Homepage/HomeIntro.vue';
    import HomeBtns from '../components/Homepage/HomeBtns.vue';
    import ContactIcons from '../components/ContactIcons.vue';
    import ModalCands from '../components/Modals/ModalCands.vue';

    const show_modal = ref(false)
</script>

<template>
    <ModalCands v-if="show_modal" @close="show_modal = false" />

    <div class="flex flex-col-reverse md:flex-row items-center md:items-start gap-x-6 gap-y-4">

        <div class="flex flex-col gap-6 w-full md:min-w-[600px] md:max-w-[50%]">
            <HomeIntro />
            <HomeBtns @show_modal="show_modal = true"/>
        </div>

        <ContactIcons class="shrink-0 flex -mt-1 md:my-0 md:flex-col gap-4" size="h-10 w-10" />
    </div>
</template>