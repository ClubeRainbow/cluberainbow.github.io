<script setup lang="ts">
    import { ref } from 'vue';

    const show_members = ref(false)
    const list_size = ref('')

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
        <button class="font-shrikhand font-normal hover:brightness-125" 
            @click="show_members = !show_members; list_size = (60*(members.length/2) - 16) + 'px'">
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
        height: v-bind(list_size);
        transition: height 0.5s ease;
        overflow: hidden;
    }

    .v-enter-from, .v-leave-to {    
        height: 0px;
        transition: height 0.5s ease;
        overflow: hidden;
    }
</style>