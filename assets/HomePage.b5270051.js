import{_ as m,o as r,c as d,a as e,b as o,d as _,n as b,u as i,e as x,w as v,t as h,F as p,p as g,f as C,r as $,g as E,h as c,C as w}from"./index.5775a484.js";import{i as u}from"./info.e41be7ba.js";import{M as k}from"./Modal.f22ac33d.js";const y={},q={class:"flex flex-col gap-4 box py-6"},z=e("h1",{class:"text-center md:text-left"}," Clube Rainbow ",-1),B=e("h4",{class:"text-center md:text-left"},[o(" \u2726 Bem vinde ao Clube "),e("h4",{class:"inline whitespace-nowrap"},"Rainbow! \u2726")],-1),I=e("p",null,[o(" Somos uma iniciativa formada por estudantes da Universidade do Minho com o objetivo de "),e("b",null,"promover a educa\xE7\xE3o sobre temas LGBTQIA+ e o conv\xEDvio entre a comunidade"),o(". Garantimos assim que existe um espa\xE7o para n\xF3s dispon\xEDvel todo o ano. ")],-1),M=e("p",null,[o(" Organizamos v\xE1rios "),e("b",null,"encontros, palestras, e outros eventos"),o(" sobre os quais te podes manter a par atrav\xE9s das nossas redes sociais! ")],-1),F=[z,B,I,M];function R(n,a){return r(),d("div",q,F)}const S=m(y,[["render",R]]),A={class:"flex flex-col sm:flex-row gap-x-4 gap-y-2"},H=_({__name:"HomeBtns",setup(n){return(a,s)=>(r(),d("div",A,[e("button",{onClick:s[0]||(s[0]=t=>a.$router.push({name:"info"})),class:"bg-cr-red-beige"}," Eventos "),e("button",{onClick:s[1]||(s[1]=t=>a.$router.push({name:"info",hash:"#faq"})),class:"bg-cr-red-beige"}," FAQ "),e("button",{onClick:s[2]||(s[2]=t=>a.$emit("show_modal")),class:b({"bg-stone-300 text-stone-500":!i(u).cands.open,"bg-cr-red-beige":i(u).cands.open})}," Candidaturas ",2)]))}});const V=m(H,[["__scopeId","data-v-59d31cb1"]]),l=n=>(g("data-v-c7d4635b"),n=n(),C(),n),G=l(()=>e("h2",null,"Candidaturas Abertas!",-1)),N={class:"flex flex-col gap-4"},Q=l(()=>e("ul",{class:"mx-auto flex flex-col gap-2"},[e("li",null,[o("Cada departamento tem diferentes fun\xE7\xF5es - "),e("u",null,"sabe mais sobre eles e consulta quais est\xE3o abertos atrav\xE9s do bot\xE3o abaixo!")]),e("li",null,"Podes candidatar-te a mais que um departamento se v\xE1rios estiverem abertos, mas s\xF3 ser\xE1s colocade em um;"),e("li",null,"O trabalho \xE9 volunt\xE1rio e n\xE3o remunerado;"),e("li",null,"Apenas aceitamos estudantes e alumni da Universidade do Minho.")],-1)),j=l(()=>e("h2",null,"Candidaturas Fechadas",-1)),D={class:"flex flex-col gap-4"},O=l(()=>e("p",null," Gostarias de fazer parte do Clube Rainbow? Qualquer pessoa pode participar nos nossos eventos, mas caso queiras ajudar na organiza\xE7\xE3o por de tr\xE1s dos mesmos, deves candidatar-te a um dos nossos departamentos. ",-1)),P=l(()=>e("p",null,[o(" Infelizmente, "),e("b",null,"as candidaturas para os departamentos do Clube Rainbow est\xE3o fechadas"),o(" de momento. ")],-1)),T=_({__name:"ModalCands",setup(n){return(a,s)=>(r(),x(k,null,{default:v(()=>[i(u).cands.open?(r(),d(p,{key:0},[G,e("div",N,[e("p",null,[o(" Gostarias de fazer parte do Clube Rainbow? Qualquer pessoa pode participar nos nossos eventos, mas caso queiras ajudar na organiza\xE7\xE3o por de tr\xE1s dos mesmos, aproveita agora - "),e("b",null,"as candidaturas para os departamentos do Clube Rainbow est\xE3o abertas at\xE9 "+h(i(u).cands.timelimit)+"!",1)]),Q,e("button",{class:"w-full",onClick:s[0]||(s[0]=t=>a.$router.push({name:"about",hash:"#depts"}))}," Consultar Departamentos ")])],64)):(r(),d(p,{key:1},[j,e("div",D,[O,P,e("p",null,[o(" Mas n\xE3o te preocupes! As candidaturas abrem sempre pelo menos uma vez por ano, logo, ter\xE1s sempre outras oportunidades para te candidatares. Fica atente \xE0s nossas "),e("button",{class:"click",onClick:s[1]||(s[1]=t=>a.$router.push({name:"contacts"}))},"redes sociais"),o(" para que possas ser notificade quando estas abrirem novamente! ")]),e("button",{onClick:s[2]||(s[2]=t=>a.$emit("close"))}," Voltar ")])],64))]),_:1}))}});const U=m(T,[["__scopeId","data-v-c7d4635b"]]),L={class:"flex flex-col-reverse md:flex-row items-center md:items-start gap-x-6 gap-y-4"},J={class:"flex flex-col gap-6 w-full md:min-w-[600px] md:max-w-[50%]"},Y=_({__name:"HomePage",setup(n){const a=$(!1);return(s,t)=>(r(),d(p,null,[a.value?(r(),x(U,{key:0,onClose:t[0]||(t[0]=f=>a.value=!1)})):E("",!0),e("div",L,[e("div",J,[c(S),c(V,{onShow_modal:t[1]||(t[1]=f=>a.value=!0)})]),c(w,{class:"shrink-0 flex md:my-0 md:flex-col gap-4",size:"h-10 w-10"})])],64))}});export{Y as default};
