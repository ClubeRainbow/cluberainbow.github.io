<script setup lang="ts">
    import Faq from "../components/Info/Faq.vue";
    import Events from "../components/Info/Events.vue";
</script>

<template>
    <div class="flex flex-col gap-10 max-w-6xl mx-auto">
        <Events id="events" />
        <Faq id="faq" />
    </div>
</template>