<script setup lang="ts">
    import ContactIcons from '../ContactIcons.vue';
</script>

<template>
    <div class="flex flex-col justify-center items-center">
        <img src="../../assets/kaku2.png" alt="panda" class="h-52 md:h-60 lg:h-64"/>
        <div class="border-y-2 py-6 px-8 w-full flex justify-center items-center">
            <ContactIcons class="flex flex-col gap-3" size="h-8 w-8 md:h-10 md:w-10" :text="true" />
        </div>
    </div>
</template>