<script setup lang="ts">
    interface UsefulLink {
        desc: string,
        link: string
    }
    
    interface Props {
        ass: {
            name: string,
            desc: string,
            logo: string,
            page: string,
            insta?: string,
            email?: string,
            phone?: string,
            location?: string,
            schedule?: string,
            useful_links?: UsefulLink[]
        }
    }
    defineProps<Props>();
</script>

<template>
    <div class="flex flex-wrap md:flex-nowrap gap-6 box">
        
        <a class="h-fit mx-auto md:mx-0" :href="ass.page" target="_blank">
            <img :src="ass.logo" :alt="ass.name" class="max-h-40 border-2 rounded-xl" />
        </a>
        
        <div class="flex flex-col gap-2 w-full">
            
            <a class="flex items-center gap-2" :href="ass.page" target="_blank">
                <h3>{{ ass.name }}</h3>
                <img src="../../assets/icon_email.svg" alt="link" class="h-6 w-6" />
            </a>

            <p>{{ ass.desc }}</p>

            <hr class="border w-full my-2">

            <div class="flex flex-wrap gap-y-2 gap-x-8">
                
                <div class="flex flex-col gap-1">
                    <h3 class="mb-1">
                        Contactos:
                    </h3>

                    <a v-if="ass.insta" class="item" :href="'https://www.instagram.com/' + ass.insta" target="_blank">
                        <img src="../../assets/icon_insta.svg" alt="instagram" class="h-5 w-5" />
                        <span>@{{ ass.insta }}</span>
                    </a>

                    <template v-if="ass.email" >
                        <div v-for="(email, i) in ass.email.split('/')" class="item">
                            <img src="../../assets/icon_email.svg" alt="email" class="h-5 w-5" />
                            <span>{{ email }}</span>
                        </div>
                    </template>

                    <template v-if="ass.phone">
                        <div v-for="(phone, i) in ass.phone.split('/')" class="item">
                            <img src="../../assets/icon_email.svg" alt="phone" class="h-5 w-5" />
                            <span>{{ phone }}</span>
                        </div>
                    </template>
                </div>

                <div v-if="ass.location && ass.schedule" class="flex flex-col gap-1">
                    <h3 class="mb-1">
                        Local & Horário:
                    </h3>
                    <p>{{ ass.location }}</p>
                    <p>{{ ass.schedule }}</p>
                </div>

                <div v-if="ass.useful_links" class="flex flex-col gap-1">
                    <h3 class="mb-1">
                        Links Úteis:
                    </h3>
                    <a v-for="(use, i) in ass.useful_links" :key="i" class="item" :href="use.link" target="_blank">
                        <img src="../../assets/icon_email.svg" alt="link" class="h-5 w-5" />
                        <span>{{ use.desc }}</span>
                    </a>
                </div>

            </div>

        </div>

    </div>
</template>

<style scoped>
    .item {
        @apply flex items-center gap-1 
    }
</style>