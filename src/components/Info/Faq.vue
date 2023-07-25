<script setup lang="ts">
import info from '../../jsons/info.json';
</script>

<template>
    <div class="flex flex-col gap-4">

        <p class="title">
            FAQ
        </p>

        <div class="flex flex-col gap-2">
            <p class="subsubtitle">
                ✦ Como posso fazer parte? ✦
            </p>

            <p>
                Todes são bem vindes a participar nos eventos do Clube Rainbow,
                mas caso queiras fazer parte da sua organização, deves candidatar-te a 
                um dos nossos departamentos -
                <button class="click" @click="$router.push({name: 'about', hash: '#depts'})">
                    sabe mais sobre eles aqui!
                </button>
            </p>
        </div>

        <div class="flex flex-col gap-2">
            <p class="subsubtitle">
                ✦ Quem pode participar nos eventos? ✦
            </p>
            <p>
                aaa
            </p>
        </div>

        <div class="flex flex-col gap-2">
            <p class="subsubtitle">
                ✦ Onde/quando são os eventos? ✦
            </p>
            <p>
                aaa
            </p>
        </div>

        <div class="flex flex-col gap-2">
            <p class="subsubtitle">
                ✦ Posso entrar no Discord se... ✦
            </p>
            <p>
                aaa
            </p>
        </div>


    </div>
</template>