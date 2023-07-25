<script setup lang="ts">
import HomeIntro from '../components/Homepage/HomeIntro.vue';
import HomeBtns from '../components/Homepage/HomeBtns.vue';
import ContactIcons from '../components/ContactIcons.vue';
</script>

<template>
    <div class="flex flex-col-reverse items-center md:flex-row md:items-start gap-6">

        <div class="flex flex-col gap-6 w-full md:w-[600px] my-auto">
            <HomeIntro />
            <HomeBtns />
        </div>

        <ContactIcons class="shrink-0 flex md:my-0 md:flex-col gap-4" size="h-10 w-10" />
    </div>
</template>