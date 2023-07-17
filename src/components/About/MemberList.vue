<script setup lang="ts">
    import { ref } from 'vue';

    const show_members = ref(false)
    const list_size = ref('')

    const toggleMemberList = (members: Member[]) => {
        show_members.value = !show_members.value
        list_size.value = (75*(Math.ceil(members.length/2))) + 'px'
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
        members: Member[]
    }
    defineProps<Props>();
</script>

<template>
    <div>
        <button class="flex flex-row items-center gap-1.5" @click="toggleMemberList(members)">
            <p class="font-shrikhand font-normal text-base md:text-lg">
                Membros
            </p>
            <img src="../../assets/arrow_down.svg" alt="toggle list" class="h-3 w-3" :class="{ 'rotate-180' : show_members }"/>
        </button>

        <Transition>     
            <div v-if="show_members" class="grid grid-cols-2 gap-4 mt-2 max-w-[600px]">

                <div v-for="(member, i) in members" :key="i">

                    <p v-if="member.role" class="font-shrikhand font-normal">
                        {{ member.role }}
                    </p>

                    <p class="mb-1">
                        <span :class="{ 'font-shrikhand font-normal' : !member.role }">
                            {{ member.name }}
                        </span>
                        <span class="small">{{ member.pronouns ? ' ('+member.pronouns+')' : '' }}</span>
                    </p>
                    
                    <div v-if="member.contacts" class="flex flex-col gap-1.5">
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