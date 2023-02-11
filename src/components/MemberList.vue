<script setup lang="ts">
    import { ref } from 'vue';

    const show_members = ref(false)
    const list_size = ref('')

    const toggleMemberList = (members: Member[]) => {
        show_members.value = !show_members.value
        list_size.value = (60*(Math.ceil(members.length/2))) + 'px' //value always has at least 16px extra
    }

    interface Member {
        name: string,
        pronouns?: string,
        contact?: string,
    }

    interface Props {
        members: Member[],
    }
    defineProps<Props>();
</script>

<template>
    <div>
        <button class="font-shrikhand font-normal hover:brightness-125" @click="toggleMemberList(members)">
            {{ show_members ? 'Membros -' : 'Membros +'}}
        </button>

        <Transition>
            <div v-if="show_members" class="grid grid-cols-2 gap-4 mt-2 text-sm">
                <div v-for="(member, i) in members" :key="i">
                    <p>
                        <span class="font-shrikhand font-normal text-base">
                            {{ member.name }}
                        </span>
                        {{ member.pronouns ? '('+member.pronouns+')' : '' }}
                    </p>
                    <p>
                        {{ member.contact }}
                    </p>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
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