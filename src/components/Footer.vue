<script setup lang="ts">
    import ContactIcons from './ContactIcons.vue';
</script>

<template>
    <div class="relative grid grid-cols-1 md:grid-cols-3 gap-2 mx-8 py-2 -mb-4 md:mb-0">

        <ContactIcons class="order-last md:order-first mx-auto md:mr-auto md:ml-0 gap-2" size="h-8 w-8" />

        <div class="flex flex-col items-center text-outline-white whitespace-nowrap">
            <h4>Clube Rainbow</h4>
            <p class="text-xs md:text-sm">rainbow.clube.estudantes@gmail.com</p>
        </div>
    </div>
</template>