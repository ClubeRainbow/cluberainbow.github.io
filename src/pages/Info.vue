<script setup lang="ts">
    import Faq from "../components/Info/Faq.vue";
    import Calendar from "../components/Info/Calendar.vue";
    import Applications from "../components/Info/Applications.vue";
    import info from '../jsons/info.json';
</script>

<template>
    <div class="flex flex-col gap-8">
        <Calendar id="calendar" :next_event="info.next_event" />
        <Applications id="apps" :cand="info.candidaturas" />
        <Faq id="faq"/>
    </div>
</template>