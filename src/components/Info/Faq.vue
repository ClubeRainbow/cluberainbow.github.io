<script setup lang="ts">
    import FaqCategory from "./FaqCategory.vue";
    import FaqItem from "./FaqItem.vue";
    import cands from '../../jsons/candidaturas.json';
</script>

<template>
    <div class="flex flex-col gap-4">

        <h1> FAQ </h1>

        <FaqCategory title="Perguntas Gerais" :items="3">
            <FaqItem question="O Clube Rainbow é apenas para estudantes da UM?">
                <p>
                    O Clube Rainbow foi criado com es estudantes da Universidade do Minho em mente,
                    mas <b>todes são bem-vindes a participar nos nossos eventos e atividades!</b>
                </p>
                <p>
                    Apenas a organização do Clube em si é gerida apenas por estudantes e alumni da UM.
                </p>
            </FaqItem>

            <FaqItem question="Pessoas fora da comunidade LGBTQIA+ podem participar?">
                <p>
                    Claro! Embora o Clube seja especialmente direcionado para membros da comunidade LGBTQIA+,
                    <b>nunca iremos excluir ninguém das nossas atividades por não fazer parte da comunidade.</b>
                </p>
                <p>
                    Afinal, não queremos apenas criar um grupo que nos aproxime de pessoas com uma realidade mais
                    próxima da nossa
                    - queremos também mostrar a nossa realidade aos outros.
                </p>
            </FaqItem>

            <FaqItem question="Como posso fazer parte?">
                <p>
                    Qualquer pessoa pode participar nos nossos eventos, mas se quiseres fazer
                    parte da organização do Clube Rainbow, <b>deves candidatar-te a
                        um dos nossos departamentos -
                        <button class="clickable" @click="$router.push({ name: 'about', hash: '#depts' })">
                            podes saber mais sobre eles aqui!
                        </button></b>
                </p>
                <p>
                    Atualmente, <b>as candidaturas estão
                        {{ cands.open ? 'abertas.' : 'fechadas.' }}</b>
                    No entanto, elas abrem sempre pelo menos uma vez por ano, por isso se não te puderes
                    candidatar agora, terás sempre outras oportunidades.
                    Por favor tem em atenção que <b>apenas aceitamos estudantes e alumni da Universidade do Minho.</b>
                </p>
            </FaqItem>
        </FaqCategory>

        <FaqCategory title="Eventos" :items="3">
            <FaqItem question="Que tipo de eventos organizam?">
                <p>
                    Nós organizamos vários tipos de eventos, nomeadamente...
                </p>
                <p>
                    <b>Palestras</b> - eventos em que convidamos uma pessoa com conhecimento sobre um dado tema a falar e apresentar algo sobre o mesmo. Estas pessoas são normalmente convidades de outras organizações que fazem trabalho relevante para o tema.
                </p>
                <p>
                    <b>Mesas Redondas</b> - eventos semelhantes às palestras, mas em que temos várias pessoas convidadas e também perguntas preparadas para lhes dirigir, de maneira a melhor compreender um dada temática.
                </p>
                <p>
                    <b>Encontros</b> - eventos mais informais, em que procuramos abrir a discussão entre todas as pessoas participantes sobre um certo tema. Normalmente, preparamos algumas questões para ajudar a fomentar a conversa e debate.
                </p>
                <p>
                    <b>Convívios</b> - saídas e outros eventos mais lúdicos que têm como fim apenas promover o convívio num ambiente mais casual.
                </p>
            </FaqItem>
            <FaqItem question="Onde/quando são os eventos?">
                <p>
                    Os nossos eventos decorrem <b>sobretudo no campus de Gualtar da Universidade do Minho</b>, 
                    mas ocasionalmente poderemos organizar algo no resto da cidade de Braga. 
                    Futuramente, gostaríamos também de organizar eventos no campus de Azurém!
                </p>
                <p>
                    Relativamente à frequência dos eventos,
                    <button class="clickable" @click="$router.push({ name: 'info', hash: '#events' })">
                        consulta a nossa calendarização acima.
                    </button>
                </p>
            </FaqItem>

            <FaqItem question="É preciso inscrição para os eventos?">
                <p>
                    <b>Não é necessária inscrição para a maior parte dos nossos eventos, mas quando tal for necessária,
                        iremos indicá-lo
                        junto com o anúncio do evento no nosso Instagram.</b>
                    Normalmente, esta inscrição serve só para fins estatísticos - por isso podes aparecer
                    mesmo que não te tenhas inscrito.
                </p>
                <p>
                    Os nossos eventos são também sempre de entrada gratuita.
                </p>
            </FaqItem>
        </FaqCategory>

        <FaqCategory title="Merch" :items="1">
            <FaqItem question="Posso comprar merch fora dos eventos?">
                <p>
                    <b>Atualmente, não.</b> Apenas vendemos merch nos nossos eventos ou quando vamos a marchas do pride,
                    pois, de momento, não teríamos facilidade em realizar vendas de outro modo para todes es interessades.
                </p>
            </FaqItem>
            <FaqItem question="Vão ter mais merch disponível para além de autocolantes?">
                <p>
                    <b>De momento estamos apenas a vender autocolantes</b>, mas é algo que consideramos fazer de futuro! 
                </p>
            </FaqItem>
        </FaqCategory>

        <FaqCategory title="Discord" :items="2">
            <FaqItem question="O que é o Discord?">
                <p>
                    O Discord é uma aplicação de chat, que permite criar e participar em vários servidores.
                    Cada servidor opera como um chat de grupo com vários canais ou fóruns,
                    que podem ser dedicados a diferentes temas.
                </p>
                <p>
                    O Clube Rainbow tem um servidor de Discord próprio, sendo este <b>uma plataforma de socialização
                        mais informal, onde poderás conhecer outras pessoas LGBTQIA+, falar dos teus hobbies,
                        participar em eventos online, entre outros!</b>
                    Graças ao Discord, garantimos que existe sempre algum espaço disponível para nós mesmo quando
                    não podemos estar juntes num espaço físico.
                </p>
                <p>
                    O servidor dispõe também de canais privados que são utilizados exclusivamente pela organização
                    do Clube para o planeamento de eventos e afins. Daí ser necessário utilizares a aplicação
                    caso queiras fazer parte dos departamentos do Clube.
                </p>
                <p>
                    <b>
                        Para te juntares ao nosso servidor do Discord, consulta a nossa
                        <button class="clickable" @click="$router.push({ name: 'contacts' })">
                            página de contactos
                        </button>
                        ou
                        <a class="clickable" href="https://discord.gg/5Z9YshrZah" target="_blank">
                            utiliza este link!
                        </a>
                    </b>
                </p>
            </FaqItem>

            <FaqItem question="Posso entrar no servidor do Discord se não for estudante da UM?">
                <p>
                    Sim! O servidor do Discord, tal como os nossos eventos, é <b>aberto a todes</b>.
                    Podes entrar mesmo que não estudes na UM ou não faças parte da comunidade LGBTQIA+.
                </p>
            </FaqItem>
        </FaqCategory>

        <div class="w-full -mb-4">
            <FaqItem question="Preciso de ajuda!" class="w-full">
                <p>
                    O Clube Rainbow não é qualificado para prestar apoio de emergência,
                    mas existem várias outras associações que te poderão ajudar!
                </p>
                <p>
                    <b>
                        Consulta a nossa
                        <button class="clickable" @click="$router.push({ name: 'resources' })">
                            página de recursos úteis,
                        </button>
                    </b>
                    onde poderás encontrar os contactos de várias associações portuguesas
                    que te poderão prestar auxílio, dependendo daquilo que precisas.
                </p>
            </FaqItem>
        </div>

        <div class="w-full -mb-4">
            <FaqItem question="Tenho outra dúvida..." class="w-full">
                <p>
                    Sem problema,
                    <button class="clickable" @click="$router.push({ name: 'contacts' })">
                        entra em contacto connosco
                    </button>
                    e teremos todo o gosto em ajudar!
                </p>
            </FaqItem>
        </div>

    </div>
</template>