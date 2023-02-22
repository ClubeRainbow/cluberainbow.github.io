<script setup lang="ts">
    import ContactIcons from '../ContactIcons.vue';
</script>

<template>
    <div class="flex flex-col flex-1">
        <p class="text-4xl font-shrikhand font-normal text-outline-white">
            Contactos
        </p>

        <img src="../../assets/kaku2.png" alt="panda" class="mx-auto w-[300px] lg:max-w-[75%] lg:w-full"/>

        <div class="w-full border-y-2 p-6">
            <div class="flex items-center justify-center">
                <ContactIcons class="flex flex-col gap-3" size="h-10 w-10" :text="true" />
            </div>
        </div>
    </div>
</template>