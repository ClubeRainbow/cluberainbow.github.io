<script setup lang="ts">
    import ContactForm from '../components/Contacts/ContactForm.vue';
    import ContactInfo from '../components/Contacts/ContactInfo.vue';
</script>

<template>
    <div class="flex flex-col gap-4 max-w-6xl mx-auto">
        <p class="title">
            Contactos
        </p>
        <div class="flex flex-col gap-10">
            <ContactInfo />
            <ContactForm />
        </div>
    </div>
</template>