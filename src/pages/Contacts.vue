<script setup lang="ts">
    import ContactForm from '../components/Contacts/ContactForm.vue';
    import ContactInfo from '../components/Contacts/ContactInfo.vue';
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
    </div>
</template>