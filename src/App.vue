<script setup lang="ts">
import DeptsSection from "./components/DeptsSection.vue";
import ContactsSection from "./components/ContactsSection.vue";
</script>

<template>
  <div class="bg-gradient-to-r from-cr-purple via-cr-teal to-cr-orange px-[9vw] pt-8">
    
    <img src="./imgs/logo.webp" alt="logo clube rainbow" class="w-32 h-32 md:w-36 md:h-36 flex justify-center mx-auto -mb-12">
    
    <div class="bg-cr-beige text-cr-brown px-8 py-2">

      <h1 class="text-4xl md:text-5xl text-center font-shrikhand pt-14 mx-4 mb-4">
        ✧ Clube Rainbow ✧
      </h1>

      <div class="grid grid-cols-2 text-sm md:text-base md:grid-cols-3 gap-4 mb-4">
        <p class="col-span-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
        <ContactsSection class="col-span-2 md:col-span-1"/>
      </div>

      <DeptsSection />

      <div class="mb-4">
        <p class ="font-shrikhand text-2xl">Candidaturas</p>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua.
        </div>
      </div>

      <div class ="mb-8" > 
        <p class ="font-shrikhand text-2xl">Parcerias</p>
        <div class="bg-cr-off-white py-1 px-2 rounded-lg flex justify-center my-1">
          etc etc etc
        </div>
      </div>

    </div>

  </div>
</template>
