import{d as r,r as c,o as p,c as u,a as e,x as i,y as m,z as _,p as v,k as f,A as g,_ as h,g as d,C as b}from"./index.3e21d3fa.js";import{_ as C}from"./kaku2.b1c6113c.js";const x=a=>(v("data-v-17a52f4c"),a=a(),f(),a),E={class:"flex flex-col gap-4 w-full box"},w=x(()=>e("div",{class:"flex flex-col gap-2"},[e("p",{class:"text-2xl md:text-3xl font-shrikhand"},"Fala connosco!"),e("div",null,[e("p",null,"Se tiveres alguma quest\xE3o ou recomenda\xE7\xE3o est\xE1 \xE0 vontade para entrar em contacto connosco!"),e("p",null,"Podes faz\xEA-lo via este formul\xE1rio ou pelos contactos listados nesta p\xE1gina.")])],-1)),A={class:"flex flex-col items-center gap-3 w-full h-full",action:"https://formspree.io/f/xdornybk",method:"POST"},F={class:"grid grid-cols-1 md:grid-cols-2 gap-3 w-full"},y=g('<option value="" disabled data-v-17a52f4c>Motivo da mensagem</option><option value="[CR Website] D\xFAvida Geral" data-v-17a52f4c>D\xFAvida (Geral)</option><option value="[CR Website] D\xFAvida LGBTQIA+" data-v-17a52f4c>D\xFAvida LGBTQIA+</option><option value="[CR Website] D\xFAvida Candidaturas" data-v-17a52f4c>D\xFAvida sobre Candidaturas</option><option value="[CR Website] Sugest\xE3o Geral" data-v-17a52f4c>Sugest\xE3o (Geral)</option><option value="[CR Website] Parceria" data-v-17a52f4c>Parceria ou Colabora\xE7\xE3o</option><option value="[CR Website] Outro" data-v-17a52f4c>Outro</option>',7),S=[y],I=x(()=>e("button",{class:"custom_btn mt-3",type:"submit"}," Enviar ",-1)),D=r({__name:"ContactForm",setup(a){const o=c(""),s=c(""),n=c("");return window.onbeforeunload=()=>{o.value="",s.value="",n.value=""},(q,t)=>(p(),u("div",E,[w,e("form",A,[e("div",F,[i(e("select",{name:"subject","onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),required:""},S,512),[[m,o.value]]),i(e("input",{name:"From:","onUpdate:modelValue":t[1]||(t[1]=l=>s.value=l),type:"email",placeholder:"O teu email...",required:""},null,512),[[_,s.value]])]),i(e("textarea",{name:"Message:","onUpdate:modelValue":t[2]||(t[2]=l=>n.value=l),type:"text",placeholder:"A tua mensagem...",class:"h-[250px]",required:""},null,512),[[_,n.value]]),I])]))}});const $=h(D,[["__scopeId","data-v-17a52f4c"]]),G={class:"flex flex-wrap justify-center items-center gap-x-8 gap-y-4"},R=e("img",{src:C,alt:"panda",class:"bg-cr-beige drop-shadow-lg border-2 rounded-full h-60 w-60 lg:h-64 lg:w-64"},null,-1),V=r({__name:"ContactInfo",setup(a){return(o,s)=>(p(),u("div",G,[R,d(b,{class:"flex flex-col gap-5",size:"h-10 w-10",text:!0})]))}}),W={class:"flex flex-col gap-4 max-w-6xl mx-auto"},k=e("p",{class:"title"}," Contactos ",-1),B={class:"flex flex-col gap-10"},P=r({__name:"Contacts",setup(a){return(o,s)=>(p(),u("div",W,[k,e("div",B,[d(V),d($)])]))}});export{P as default};