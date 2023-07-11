<script setup lang="ts">
    import ContactIcons from '../ContactIcons.vue';
</script>

<template>
    <div class="flex flex-wrap lg:flex-col gap-x-8 gap-y-4 justify-center items-center h-fit">
        <img src="../../assets/kaku2.png" alt="panda" class="h-52 w-52 md:h-60 md:w-60 lg:h-64 lg:w-64 border-2 rounded-full"/>
        <ContactIcons class="flex flex-col gap-3" size="h-8 w-8 md:h-10 md:w-10" :text="true" />
    </div>
</template>