<script setup lang="ts">
    import ContactIcons from '../ContactIcons.vue';
</script>

<template>
    <div class="flex flex-wrap lg:flex-col gap-x-4 justify-center items-center">
        <img src="../../assets/kaku2.png" alt="panda" class="h-52 w-52 md:h-60 md:w-60 lg:h-72 lg:w-72"/>
        <div class="contact_box">
            <ContactIcons class="flex flex-col gap-3" size="h-8 w-8 md:h-10 md:w-10" :text="true" />
        </div>
    </div>
</template>

<style scoped>
    .contact_box {
        @apply flex justify-center
        [@media(max-width:546px)]:border-y-2 
        [@media(max-width:546px)]:py-4 
        [@media(max-width:546px)]:px-8 
        [@media(max-width:546px)]:w-full 
        lg:border-y-2 lg:py-4 lg:px-8
    }
</style>