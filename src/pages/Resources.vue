<script setup lang="ts">
import associations_json from '../jsons/associations.json';
</script>

<template>
    <div class="flex flex-col gap-4">
        
        <p class="text-4xl font-shrikhand font-normal text-outline-white whitespace-nowrap">
            Associações
        </p>

        <div class="flex flex-col gap-6 mx-auto">
            <div v-for="(ass, i) in associations_json.associations" :key="i" 
                class="flex gap-6 p-8 border-2 rounded-xl drop-shadow-lg bg-cr-beige">
                
                <a class="h-fit" :href="ass.page" target="_blank">
                    <img :src="ass.logo" :alt="ass.name" class="max-h-40 border-2 rounded-xl" />
                </a>
                
                <div class="flex flex-col gap-2">
                    <p class="text-2xl font-shrikhand font-normal text-outline-white">
                        {{ ass.name }}
                    </p>

                    <p>
                        {{ ass.desc }}
                    </p>

                    <div class="flex flex-col gap-1">
                        <button v-if="ass.insta" class="contact" :href="'https://www.instagram.com/' + ass.insta" target="_blank">
                            <img src="../assets/icon_insta.svg" alt="instagram" class="h-5 w-5" />
                            <span>@{{ ass.insta }}</span>
                        </button>
                        
                        <div v-if="ass.email" class="contact">
                            <img src="../assets/icon_email.svg" alt="email" class="h-5 w-5" />
                            <span>{{ ass.email }}</span>
                        </div>
                        
                        <div v-if="ass.phone" class="contact">
                            <img src="../assets/icon_email.svg" alt="email" class="h-5 w-5" />
                            <span>{{ ass.phone }}</span>
                        </div>
                    </div>

                    <div class="flex flex-col">
                        <p v-if="ass.location"><b>Local:</b> {{ ass.location }}</p>
                        <p v-if="ass.schedule"><b>Horário:</b> {{ ass.schedule }}</p>
                    </div>
                </div>
                
            </div>
        </div>


    </div>
</template>

<style scoped>
    .contact {
        @apply flex items-center gap-1 
    }

    button, a {
        @apply hover:brightness-110 hover:underline focus:brightness-110 focus:underline
    }
</style>