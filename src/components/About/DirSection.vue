<script setup lang="ts">
    import members from '../../jsons/members.json';
    import MemberList from './MemberList.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <p class="title">
            Direção
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div class="flex flex-col gap-2 box">
                <p class="subtitle">
                    Direção
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                
                <MemberList :members="members.direçao" />
            </div>

            <div class="flex flex-col gap-2 box">
                <p class="subtitle">
                    Mesa da Assembleia Geral
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <MemberList :members="members.mesa" />
            </div>

            <div class="flex flex-col gap-2 box">
                <p class="subtitle">
                    Conselho Fiscal e Jurisdicional
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <MemberList :members="members.fiscal" />
            </div>

        </div>

    </div>
</template>