<script setup lang="ts">
    import NextEvent from "../components/Info/NextEvent.vue";
    import Faq from "../components/Info/Faq.vue";
</script>

<template>
    <div class="flex flex-col gap-8 max-w-6xl mx-auto">
        <NextEvent id="event" />
        <Faq id="faq" />
    </div>
</template>