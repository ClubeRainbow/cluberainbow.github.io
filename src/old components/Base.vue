<script setup lang="ts">
import DeptsSection from "./DeptsSection.vue";
import ContactsSection from "./ContactsSection.vue";
import PartnersSection from "./PartnersSection.vue";
import ApplySection from "./ApplySection.vue";
import FAQSection from "./FAQSection.vue";
</script>

<template>
  <div class="bg-gradient-to-r from-cr-purple via-cr-teal to-cr-orange px-[9vw] pt-8">
    
    <img src="./imgs/logo.webp" alt="logo clube rainbow" class="w-32 h-32 md:w-36 md:h-36 flex justify-center mx-auto -mb-12">
    
    <div class="bg-cr-beige text-cr-brown px-8 py-2">

      <h1 class="text-4xl md:text-5xl text-center font-shrikhand pt-14 mx-4 mb-4">
        Clube Rainbow
      </h1>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <p class="col-span-2 text-sm md:text-base">
          <hl>Bem vinde ao Clube Rainbow!</hl> 🏳‍🌈
          <br>
          Somos uma iniciativa formada por estudantes da Universide do Minho com o objetivo de promover
          a educação sobre temas LGBT+ e o convívio entre a comunidade. Garantimos assim que existe um
          espaço para nós disponível todo o ano!
          <br>
          Organizamos vários encontros, palestras, e outros eventos sobre os quais te podes manter a par
          através da nossa página de Instagram e/ou Discord. Qualquer dúvida, não hesites em nos contactar :)
        </p>
        <ContactsSection class="col-span-2 md:col-span-1"/>
      </div>

      <FAQSection />
      <DeptsSection />
      <ApplySection />
      <PartnersSection /> 

    </div>

  </div>
</template>
