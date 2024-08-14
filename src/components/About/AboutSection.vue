<script setup lang="ts">
    import Box from '../Box.vue';
</script>

<template>
    <div class="flex flex-col gap-4">

        <h1> Sobre o Clube Rainbow </h1>

        <div class="flex flex-col lg:flex-row gap-4">

            <Box class="w-full">
                <template #header>
                    <h2> Quem Somos? </h2>
                </template>
                <template #content>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                </template>
            </Box>

            <div class="img_box">
                <img src="../../assets/photos.jpg" alt="fotos" class="border-2 rounded-xl" />
            </div>
        </div>

    </div>
</template>