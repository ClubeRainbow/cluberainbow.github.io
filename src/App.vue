<script setup lang="ts">
import DeptsSection from "./components/DeptsSection.vue";
import ContactsSection from "./components/ContactsSection.vue";
</script>

<template>
  <div class="bg-gradient-to-r from-cr-purple via-cr-teal to-cr-orange px-32 pt-8">
    
    <img src="./imgs/logo.webp" alt="logo clube rainbow" class="w-36 h-36 flex justify-center mx-auto -mb-12">
    
    <div class="bg-cr-beige text-cr-brown px-8">

      <h1 class="text-5xl text-center font-shrikhand pt-16 mx-4 mb-4">
        Clube Rainbow
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <ContactsSection class="mb-8" />
      <DeptsSection />

      <p class ="font-shrikhand text-2xl mb-2">
        Candidaturas
      </p>

      <p class ="font-shrikhand text-2xl pb-2" >
        Parcerias
      </p>

    </div>

  </div>
</template>
