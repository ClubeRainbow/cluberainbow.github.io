<script setup lang="ts">
    import { Ref, ref, onMounted } from 'vue';
    
    const logoArea : Ref<Element | null> = ref(null)
    const titleArea : Ref<Element | null> = ref(null)
    const descArea : Ref<Element | null> = ref(null)
    const descHeight = ref(0)
    const intersection = ref(0)

    onMounted(() => {
        if (logoArea.value && titleArea.value && descArea.value) {
            const logoHeight = logoArea.value.clientHeight
            const titleHeight = titleArea.value.clientHeight
            descHeight.value = descArea.value.clientHeight
            intersection.value = logoHeight - titleHeight
        }
    })
    
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
    <div class="flex border-2 rounded-xl bg-cr-beige shadow-md custom-bg-total">
        
        <div ref="logoArea" class="logoArea" >
            <a :href="ass.page" target="_blank" class="rounded-xl">
                <img :src="ass.logo" :alt="ass.name" class="border-2 rounded-xl"/>
            </a>
        </div>
        
        <div class="flex flex-col w-full">
            
            <div ref="titleArea" class="titleArea">
                <a class="flex items-center gap-2" :href="ass.page" target="_blank">
                    <h3>{{ ass.name }}</h3>
                    <img src="../../assets/icon_email.svg" alt="link" class="h-6 w-6" />
                </a>

                <p class="font-semibold">{{ ass.desc }}</p>
            </div>

            <div ref="descArea" class="descArea">
                
                <div>
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

                <div v-if="ass.location && ass.schedule">
                    <h3 class="mb-1">
                        Local & Horário:
                    </h3>
                    <p>{{ ass.location }}</p>
                    <p>{{ ass.schedule }}</p>
                </div>

                <div v-if="ass.useful_links">
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
    .logoArea {
        @apply custom-bg-logo
        w-full aspect-square 
        max-w-[160px] max-h-[160px]
    }

    .titleArea {
        @apply flex flex-col gap-2 
        w-full rounded-tr-xl
        pt-5 pb-3
    }

    .descArea {
        @apply flex flex-wrap gap-x-4 xl:gap-x-8 
        custom-bg-desc -ml-0.5 mb-2
    }

    .descArea > div {
        @apply flex flex-col gap-1
        px-4 py-2
    }

    .custom-bg-total {
        background: linear-gradient(to top, #e4ddd3 v-bind(descHeight-4+'px'), #d4b9a5 1px)
    }
    .custom-bg-logo {
        border-bottom-right-radius: 12px;
        border-top-left-radius: 12px;
        padding: 20px;
        border-bottom: 2px solid transparent;
        border-right: 2px solid transparent;
        background: linear-gradient(#d4b9a5 0 0) padding-box,
            linear-gradient(to top, #745854 v-bind(intersection-12+'px'), #d4b9a5 1px) border-box;
    }

    .custom-bg-desc {
        border-bottom-right-radius: 12px;
        border-top-left-radius: 12px;
        padding: 2px;
        border-top: 2px solid transparent;
        border-left: 2px solid transparent;
        background: linear-gradient(#e4ddd3 0 0) padding-box,
            linear-gradient(to top, transparent v-bind(descHeight-intersection+12+'px'), #745854 1px) border-box;
    }    
    .item {
        @apply flex items-center gap-1 
    }
</style>