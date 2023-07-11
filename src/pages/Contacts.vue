<script setup lang="ts">
    import ContactForm from '../components/Contacts/ContactForm.vue';
    import ContactInfo from '../components/Contacts/ContactInfo.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <p class="title">
            Contactos
        </p>
        <div class="flex flex-col lg:flex-row gap-y-8 gap-x-12">
            <ContactInfo />
            <ContactForm /> 
        </div>
    </div>
</template>