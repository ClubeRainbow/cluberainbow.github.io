<script setup lang="ts">
    import NextEvent from './NextEvent.vue';
    import events from '../../jsons/events.json';
</script>

<template>
    <div class="flex flex-col gap-4">

        <h1> Eventos </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-8">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 md:col-span-2">
                <div class="flex flex-col gap-1">
                    <h3>Palestras</h3>
                    <p>
                        Palestras com diferentes oradores convidades para falar sobre diversos temas
                        relacionados com a comunidade LGBTQIA+.
                    </p>
                    <p>
                        <span class="font-shrikhand">Próximo: </span>
                        <a v-if="events.next.link && events.next.type === 'palestra'" :href="events.next.link" class="click"
                            target="_blank">
                            {{ events.next.name }}, {{ events.next.date }}
                        </a>
                        <span v-else>Por anunciar...</span>
                    </p>
                </div>

                <div class="flex flex-col gap-1">
                    <h3>Meets</h3>
                    <p>
                        Encontros organizados pelo Clube Rainbow para falarmos
                        entre nós sobre diversas temáticas LGBTQIA+.
                    </p>
                    <p>
                        <span class="font-shrikhand">Próximo: </span>
                        <a v-if="events.next.link && events.next.type === 'meet'" :href="events.next.link" class="click"
                            target="_blank">
                            {{ events.next.name }}, {{ events.next.date }}
                        </a>
                        <span v-else>Por anunciar...</span>
                    </p>
                </div>

                <div class="flex flex-col gap-1">
                    <h3>Hangouts</h3>
                    <p>
                        Oportunidades de convívio mais casuais.
                    </p>
                    <p>
                        <span class="font-shrikhand">Próximo: </span>
                        <a v-if="events.next.link && events.next.type === 'hangout'" :href="events.next.link" class="click"
                            target="_blank">
                            {{ events.next.name }}, {{ events.next.date }}
                        </a>
                        <span v-else>Por anunciar...</span>
                    </p>
                </div>

                <div class="flex flex-col gap-1">
                    <h3>Eventos Online</h3>
                    <p>
                        Eventos online casuais no nosso
                        <a class="click" href="https://discord.gg/5Z9YshrZah" target="_blank">
                            servidor de Discord.
                        </a>
                    </p>

                    <p>
                        <span class="font-shrikhand">Próxima Game Night: </span>
                        <span>{{ events.online.game_night ? events.online.game_night : 'Por anunciar...' }}</span>
                    </p>

                    <p>
                        <span class="font-shrikhand">Próxima Film Night: </span>
                        <span>{{ events.online.film_night ? events.online.film_night : 'Por anunciar...' }}</span>
                    </p>
                </div>

            </div>

            <NextEvent class="md:col-span-2 xl:col-span-1"/>

        </div>

    </div>
</template>