<script setup lang="ts">
    import { ref } from 'vue';

    const show_members = ref(false)
    const list_size = ref('')
    const windowWidth = ref(window.innerWidth);

    addEventListener("resize", () => { windowWidth.value = window.innerWidth});

    const toggleMemberList = (members: number, type: string) => {
        show_members.value = !show_members.value
        
        if (type==='dept' && windowWidth.value > 500)
            list_size.value = (90*(Math.ceil(members/2))) + 'px'
        
        else if (members > 0)
            list_size.value = (80*members) + 'px'
        
        else
            list_size.value = '30px'
    }

    interface Member {
        role?: string,
        name: string,
        pronouns?: string,
        contacts?: {
            insta?: string,
            discord?: string,
        },
    }

    interface Props {
        members: Member[],
        type: string,
        cand_btn?: boolean
    }
    defineProps<Props>();
</script>

<template>
    <div>
        <button class="flex flex-row items-center gap-1.5" :class="{ 'md:my-2' : cand_btn }"
            @click="toggleMemberList(members.length, type)">
            <p class="font-shrikhand text-base md:text-lg">
                Membros
            </p>
            <img src="../../assets/icon_arrow.svg" alt="toggle list" class="h-3 w-3" :class="{ 'rotate-180' : show_members }"/>
        </button>

        <Transition>     
            <div v-if="show_members">
                
                <div v-if="members.length" class="grid grid-cols-1 gap-y-4 gap-x-12 pt-2" 
                    :class="{ '[@media(min-width:500px)]:grid-cols-2' : type==='dept', 'md:pt-3' : cand_btn }">

                    <div v-for="(member, i) in members" :key="i">

                        <p class="flex flex-wrap-reverse items-center gap-x-1 mb-1 w-full border-b">

                            <div class="flex flex-wrap items-center gap-x-1 mr-auto">
                                <span class="font-shrikhand">
                                    {{ member.name }}
                                </span>
                                <span v-if="member.pronouns" class="small">
                                    ({{ member.pronouns }})
                                </span>
                            </div>

                            <span v-if="member.role" class="font-shrikhand small">
                                {{ member.role }}
                            </span>

                        </p>

                        <div v-if="member.contacts" class="flex flex-col gap-0.5">
                            <div v-if="member.contacts.discord" class="item">
                                <img src="../../assets/icon_discord.svg" alt="discord" class="h-4 w-4" />
                                <span class="small"> {{ member.contacts.discord }} </span>
                            </div>
                            <a v-if="member.contacts.insta" :href="'https://www.instagram.com/' + member.contacts.insta" target="_blank" class="item">
                                <img src="../../assets/icon_insta.svg" alt="instagram" class="h-4 w-4" />
                                <span class="small">@{{ member.contacts.insta }}</span>
                            </a>
                        </div>

                    </div>
                </div>

                <div v-else>
                    <span class="small">A ser definido...</span>
                </div>

            </div>
        </Transition>
    </div>
</template>

<style scoped>
    button {
        @apply hover:brightness-125 focus:brightness-125 hover:underline focus:underline
    }
    .small {
        @apply whitespace-nowrap text-xs md:text-sm
    }
    .item {
        @apply flex items-center gap-1
    }
    .v-enter-active, .v-leave-active {
        max-height: v-bind(list_size);
        transition: max-height 0.5s ease;
        overflow: hidden;
    }
    .v-enter-from, .v-leave-to {    
        max-height: 0px;
        transition: max-height 0.5s ease;
        overflow: hidden;
    }
</style>