<script setup lang="ts">
    import { ref } from 'vue';

    const show_members = ref(false)
    const list_size = ref('')

    const toggleMemberList = (members: Member[]) => {
        show_members.value = !show_members.value
        list_size.value = (60*(Math.ceil(members.length/2))) + 20 + 'px' 
        /*
            list_size is bigger than necessary on purpose, so that the sliding animation 
            doesn't stop short regardless of number of members
        */
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
            <div v-if="show_members" class="grid grid-cols-2 gap-4 mt-2">

                <div v-for="(member, i) in members" :key="i">

                    <p v-if="member.role" class="font-shrikhand font-normal">
                        {{ member.role }}
                    </p>

                    <p>
                        <span :class="{ 'font-shrikhand font-normal' : !member.role }">
                            {{ member.name }}
                        </span>
                        <span class="small">{{ member.pronouns ? ' ('+member.pronouns+')' : '' }}</span>
                    </p>
                    
                    <p v-if="!member.role">
                        <a v-if="member.contacts?.insta" :href="'https://www.instagram.com/' + member.contacts.insta" target="_blank" class="small">
                            @{{ member.contacts?.insta }}
                        </a>
                        <span v-if="member.contacts?.insta && member.contacts?.discord" class="small"> / </span>
                        <span class="small"> {{ member.contacts?.discord }} </span>
                    </p>

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
        @apply text-xs md:text-sm
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