<script setup lang="ts">
    import ContactIcons from '../ContactIcons.vue';
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <img src="../../assets/kaku2.png" alt="panda" class="w-72 md:w-full"/>

        <div class="w-full border-y-2 p-6">
            <ContactIcons class="flex flex-col gap-3" size="h-10 w-10" :text="true" />
        </div>
    </div>
</template>