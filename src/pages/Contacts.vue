<script setup lang="ts">
    import ContactForm from '../components/Contacts/ContactForm.vue';
    import ContactInfo from '../components/Contacts/ContactInfo.vue';
</script>

<template>
    <div class="flex flex-col-reverse md:flex-row justify-center gap-8">
        <ContactForm />
        <ContactInfo />
    </div>
</template>