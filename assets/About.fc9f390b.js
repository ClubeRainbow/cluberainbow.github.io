import{d as _,r as x,o as a,c as r,a as e,n as j,e as d,w as A,T as S,F as y,g as E,t as p,b as t,h as w,p as C,i as D,u as V,_ as z,j as B,k as m,l as M}from"./index.d0db585b.js";const I="/assets/kaku.8bc034bc.png",L=[{name:"Ezra",pronouns:"he/they",contacts:{discord:"haz#0535"}},{name:"Vee",pronouns:"she/he",contacts:{insta:"@vikill06",discord:"hashida's artits#9801"}},{name:"V\xEDtor Gon\xE7alves",pronouns:"he/they",contacts:{insta:"@alas.itsvik",discord:"Vik Dumagon#9652"}},{name:"Bruno Gi\xE3o",pronouns:"they/them",contacts:{insta:"@gr3ybrun1x",discord:"GreyBrunix#0359"}},{name:"Ana Alice"}],P={members:L},F=[{name:"Vee",pronouns:"she/he",contacts:{insta:"@vikill06",discord:"hashida's artits#9801"}},{name:"Andr\xE9 Rodrigues",pronouns:"he/him",contacts:{insta:"@andrerodrigues47"}},{name:"Sandra",pronouns:"she/her",contacts:{insta:"@sandraibf"}},{name:"Andr\xE9",pronouns:"he/him",contacts:{insta:"@the.goofy.blue"}}],G={members:F},R=[{name:"Lee",contacts:{insta:"@mr_apple.pie"}},{name:"Dee",contacts:{insta:"@2bar6atos"}},{name:"Ezra",pronouns:"he/they",contacts:{discord:"haz#0535"}},{name:"Tom\xE9 Azevedo",pronouns:"qualquer pronome",contacts:{insta:"@tomevazevedo"}},{name:"Janaina Buvana",pronouns:"she/her",contacts:{insta:"@janebuvana"}}],O={members:R},T="/assets/arrow_down.031935a8.svg",N=o=>(C("data-v-162c5ecb"),o=o(),D(),o),J={class:"mb-2"},U=N(()=>e("p",{class:"font-shrikhand font-normal"}," Membros ",-1)),H={key:0,class:"grid grid-cols-2 gap-4 mt-2 text-sm"},K={class:"font-shrikhand font-normal text-base"},Q=["href"],W={key:0},X=_({__name:"MemberList",props:{members:null},setup(o){V(l=>({f8727832:c.value}));const s=x(!1),c=x(""),n=l=>{s.value=!s.value,c.value=60*Math.ceil(l.length/2)+20+"px"};return(l,b)=>(a(),r("div",J,[e("button",{class:"flex flex-row items-center gap-1.5 hover:brightness-125",onClick:b[0]||(b[0]=i=>n(o.members))},[U,e("img",{src:T,alt:"toggle list",class:j(["h-3 w-3",{"rotate-180":s.value}])},null,2)]),d(S,null,{default:A(()=>[s.value?(a(),r("div",H,[(a(!0),r(y,null,E(o.members,(i,q)=>{var v,f,g,$,k;return a(),r("div",{key:q},[e("p",null,[e("span",K,p(i.name),1),t(" "+p(i.pronouns?"("+i.pronouns+")":""),1)]),e("p",null,[e("a",{class:"hover:underline",href:"https://www.instagram.com/"+((v=i.contacts)==null?void 0:v.insta),target:"_blank"},p((f=i.contacts)==null?void 0:f.insta),9,Q),((g=i.contacts)==null?void 0:g.insta)&&(($=i.contacts)==null?void 0:$.discord)?(a(),r("span",W," / ")):w("",!0),e("span",null,p((k=i.contacts)==null?void 0:k.discord),1)])])}),128))])):w("",!0)]),_:1})]))}});const h=z(X,[["__scopeId","data-v-162c5ecb"]]);const Y={},u=o=>(C("data-v-8dfa1e8c"),o=o(),D(),o),Z={class:"border-y-2 p-4 flex flex-col gap-2"},ee={class:"flex items-center gap-2"},se=u(()=>e("img",{src:B,alt:"scroll up",class:"h-7 w-7 -rotate-90"},null,-1)),te=[se],oe=u(()=>e("p",{class:"text-2xl font-shrikhand font-normal text-outline-white"}," Candidaturas ",-1)),ae=u(()=>e("p",null," Gostarias de fazer parte do Clube? ",-1)),ne=u(()=>e("p",null,[t(" Podes te candidatar a um (ou mais) dos departamentos via os bot\xF5es abaixo, que te ir\xE3o "),e("b",null,"redirecionar para os formul\xE1rios de candidatura"),t(". O trabalho \xE9 volunt\xE1rio, e qualquer estudante da Universidade do Minho se pode candidatar. Mais informa\xE7\xF5es estar\xE3o dispon\xEDveis nos formul\xE1rios, mas qualquer d\xFAvida n\xE3o hesites em nos contactar! ")],-1)),re=u(()=>e("p",{class:"text-center"},[e("b",null,"Candidaturas abertas at\xE9 xx/xx/xxxx")],-1)),ie={class:"flex flex-wrap justify-center gap-2 whitespace-nowrap"};function le(o,s){return a(),r("div",Z,[e("div",ee,[e("button",{class:"hover:brightness-110",onClick:s[0]||(s[0]=c=>o.$emit("close"))},te),oe]),ae,ne,re,e("div",ie,[e("button",{class:"dept_btn text-cr-purple",onClick:s[1]||(s[1]=()=>{})}," Dept. Recreativo "),e("button",{class:"dept_btn text-cr-orange",onClick:s[2]||(s[2]=()=>{})}," Dept. Pedag\xF3gico "),e("button",{class:"dept_btn text-cr-teal",onClick:s[3]||(s[3]=()=>{})}," Dept. Comunica\xE7\xE3o ")])])}const ce=z(Y,[["render",le],["__scopeId","data-v-8dfa1e8c"]]),de={class:"grid grid-cols-1 md:grid-cols-2 gap-x-8"},ue={class:"border-t-2 p-4 flex flex-col gap-2"},pe=e("p",{class:"text-2xl font-shrikhand font-normal text-cr-purple text-outline-white"}," Departamento Recreativo ",-1),me=e("p",null,[t(" O Departamento Recreativo \xE9 o respons\xE1vel pela organiza\xE7\xE3o de "),e("b",null,"encontros e atividades"),t(" mais informais, focando-se especialmente na "),e("b",null,"componente social e de conv\xEDvio"),t(" do Clube. Os encontros organizados por este departamento servem tamb\xE9m para fomentar discuss\xF5es sobre temas relacionados com a comunidade LGBT+ ")],-1),_e=e("p",null,[t(" Para al\xE9m disto, este \xE9 tamb\xE9m respons\xE1vel por gerir o "),e("b",null,"servidor do Discord"),t(" e outros eventos online. ")],-1),he={class:"border-t-2 p-4 flex flex-col gap-2"},xe=e("p",{class:"text-2xl font-shrikhand font-normal text-cr-orange text-outline-white"}," Departamento Pedag\xF3gico ",-1),be=e("p",null,[t(" O Departamento Pedag\xF3gico \xE9 respons\xE1vel pela "),e("b",null,"componente educativa"),t(" do Clube, e pela "),e("b",null,"organiza\xE7\xE3o de parcerias"),t(" com outras organiza\xE7\xF5es. Gra\xE7as a ele podemos organizar "),e("b",null,"palestras"),t(" e outros eventos educativos para discutir temas de grande import\xE2ncia com pessoas conhecedoras dos mesmos. ")],-1),ve={class:"border-t-2 md:border-y-2 p-4 flex flex-col gap-2"},fe=e("p",{class:"text-2xl font-shrikhand font-normal text-cr-teal text-outline-white"}," Departamento de Comunica\xE7\xE3o ",-1),ge=e("p",null,[t(" O Departamento de Comunica\xE7\xE3o \xE9 o respons\xE1vel por "),e("b",null,"gerir as nossas redes sociais"),t(", "),e("b",null,"criar posts"),t(" informativos, e "),e("b",null,"divulgar"),t(" atividades e eventos do Clube. ")],-1),$e={key:0,class:"border-y-2 p-4 flex flex-col items-center justify-center"},ke=e("img",{src:I,alt:"panda",class:"w-80"},null,-1),we=_({__name:"DeptsSection",setup(o){const s=x(!1);return(c,n)=>(a(),r("div",de,[e("div",ue,[pe,me,_e,d(h,{members:m(P).members},null,8,["members"])]),e("div",he,[xe,be,d(h,{members:m(G).members},null,8,["members"])]),e("div",ve,[fe,ge,e("p",null,[t(" A equipa de design deste departamento ajuda tamb\xE9m no "),e("b",null,[t(" desenvolvimento de "),e("button",{class:"underline hover:text-cr-brown",onClick:n[0]||(n[0]=l=>c.$router.push({name:"merch"}))}," merch ")]),t(" cuja venda ajuda a financiar o Clube e as suas atividades. ")]),d(h,{members:m(O).members},null,8,["members"])]),s.value?(a(),M(ce,{key:1,onClose:n[2]||(n[2]=l=>s.value=!s.value)})):(a(),r("div",$e,[ke,e("button",{class:"-mt-6 z-20 custom_btn",onClick:n[1]||(n[1]=l=>s.value=!s.value)}," Candidaturas ")]))]))}}),ye=[{name:"Disque.pt",logo:"logo_disque.webp",link:"https://www.instagram.com/disque.pt/"},{name:"Rede Ex Aequo",logo:"logo_rea.webp",link:"https://www.rea.pt/"},{name:"CECRI",logo:"logo_cecri.webp",link:"https://cecri.pt/"}],Ee={partners:ye},Ce={class:"flex flex-col gap-2 border-y-2 p-4"},De=e("p",{class:"font-shrikhand font-normal text-outline-white text-2xl"}," Parcerias ",-1),ze={class:"flex flex-wrap justify-center md:justify-start items-center gap-4 mb-2"},qe=["href"],je=["src","alt"],Ae=_({__name:"PartnersSection",setup(o){return(s,c)=>(a(),r("div",Ce,[De,e("div",ze,[(a(!0),r(y,null,E(m(Ee).partners,(n,l)=>(a(),r("a",{key:l,class:"rounded-xl hover:outline",href:n.link,target:"_blank"},[e("img",{src:"/src/imgs/partners/"+n.logo,alt:n.name,class:"w-20 h-20 rounded-xl"},null,8,je)],8,qe))),128))])]))}}),Se={class:"flex flex-col gap-8"},Be=_({__name:"About",setup(o){return(s,c)=>(a(),r("div",Se,[d(we),d(Ae)]))}});export{Be as default};
