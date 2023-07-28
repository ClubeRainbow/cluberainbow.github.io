<script setup lang="ts">
    import members from '../../jsons/members.json';
    import MemberList from './MemberList.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <h1> Direção </h1>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div class="flex flex-col gap-2 box">
                <h3>Direção</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                
                <MemberList :members="members.direçao" type="dir" />
            </div>

            <div class="flex flex-col gap-2 box">
                <h3>Mesa da Assembleia Geral</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <MemberList :members="members.mesa" type="dir" />
            </div>

            <div class="flex flex-col gap-2 box">
                <h3>Conselho Fiscal e Jurisdicional</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <MemberList :members="members.fiscal" type="dir" />
            </div>

        </div>

    </div>
</template>