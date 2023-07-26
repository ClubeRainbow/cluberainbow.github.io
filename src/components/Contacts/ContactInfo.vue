<script setup lang="ts">
    import ContactIcons from '../ContactIcons.vue';
</script>

<template>
    <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
        <img src="../../assets/kaku2.png" alt="panda" class="bg-cr-beige drop-shadow-lg border-2 rounded-full h-60 w-60 lg:h-64 lg:w-64"/>
        <ContactIcons class="flex flex-col gap-5" size="h-10 w-10" :text="true" />
    </div>
</template>