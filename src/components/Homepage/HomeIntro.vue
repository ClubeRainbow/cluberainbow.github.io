<script setup lang="ts">
    import Box from '../Box.vue';
</script>

<template>
    <Box>
        <template #header>
            <h1 class="text-center">Clube Rainbow</h1>
        </template>

        <template #content>
            <h4 class="flex justify-center text-center gap-1.5 my-1">
                <h4>✦</h4>
                <h4>Bem vinde ao Clube Rainbow!</h4> 
                <h4>✦</h4>
            </h4>
            <p>
                Somos uma iniciativa formada por estudantes da Universidade do Minho com o objetivo de <b>promover
                a educação sobre temas LGBTQIA+ e o convívio entre a comunidade</b>. Garantimos assim que existe um
                espaço para nós disponível todo o ano.
            </p>
            <p>
                Organizamos vários <b>encontros, palestras, e outros eventos</b> sobre os quais te podes manter a par
                através das nossas redes sociais!
            </p>
        </template>
    </Box>
</template>