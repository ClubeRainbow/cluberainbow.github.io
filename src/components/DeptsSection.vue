<script lang="ts">
export interface Dept {
    name: string;
    desc: string;
    members: string[];
}
</script>

<script setup lang="ts">
import DeptInfo from "./DeptInfo.vue";

const depts : Dept[] = [
  {
    name: "Recreativo",
    desc: ` <p> O Departamento Recreativo é o responsável pela organização de 
      <hl>encontros e atividades</hl> 
      mais informais, focando-se especialmente na 
      <hl>componente social e de convívio</hl> 
      do Clube. 
      Os encontros organizados por este departamento servem também para fomentar discussões 
      sobre temas relacionados com a comunidade LGBT+ </p>
      <br>
      <p> Para além disto, este é também responsável por gerir o 
      <hl>servidor do Discord</hl>
      e outros eventos online. </p>
    `,
    members: ["a","b","c"],
  },
  {
    name: "de Comunicação",
    desc: ` <p> O Departamento de Comunicação é o responsável por 
      <hl>gerir as nossas redes sociais</hl> 
      (Instagram), <hl>criar posts</hl>
      informativos, e 
      <hl>divulgar</hl>
      atividades e eventos do Clube. </p>
      <br>
      <p> A equipa de design deste departamento ajuda também no 
      <hl>desenvolvimento de merch</hl> cuja venda ajuda a 
      financiar o Clube e as suas atividades. </p>`,
    members: ["d","e","f"],
  },
  {
    name: "Pedagógico",
    desc: ` <p> O Departamento Pedagógico é responsável pela 
      <hl>componente educativa</hl> 
      do Clube, e pela 
      <hl>organização de parcerias</hl>
      com outras organizações. Graças a ele podemos organizar 
      <hl>palestras</hl> 
      e outros eventos educativos
      para discutir temas de grande importância com pessoas conhecedoras dos mesmos. </p>`,
    members: ["g","h","i"],
  }
]
</script>

<template>

    <h1 class="text-2xl font-shrikhand mb-4">
      Quem somos?
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <div v-for="(dept, index) in depts" :key="index">
          <DeptInfo :dept="dept" />
      </div>
    </div>

</template>