import{d as h,r as m,o as a,c as n,g as r,e as d,w as k,F as b,f as y,a as e,n as $,l as w,h as B,p as C,i as E,_,j as S,t as i,b as v}from"./index.1a74b303.js";const p=s=>(C("data-v-95599218"),s=s(),E(),s),D={class:"flex items-center gap-2 mx-auto"},I=p(()=>e("img",{src:_,alt:"toggle list",class:"h-5 w-5 rotate-90 hover:brightness-125 focus:brightness-125"},null,-1)),A=[I],G=["src"],L=p(()=>e("img",{src:_,alt:"toggle list",class:"h-5 w-5 -rotate-90 hover:brightness-125 focus:brightness-125"},null,-1)),N=[L],T=h({__name:"Slides",props:{path:null,max:null,shrink:{type:Boolean}},setup(s){B(l=>({"3f3a1c89":o.value}));const t=m(1),o=m(1),f=l=>{o.value=-1,t.value>1?t.value-=1:t.value=l},g=l=>{o.value=1,t.value<l?t.value+=1:t.value=1};return(l,c)=>(a(),n("div",D,[s.max>1?(a(),n("button",{key:0,onClick:c[0]||(c[0]=u=>f(s.max))},A)):r("",!0),d(w,{name:"imgs",tag:"div",class:"overflow-hidden relative w-52 h-40"},{default:k(()=>[(a(!0),n(b,null,y([t.value],u=>(a(),n("div",{key:u},[e("img",{src:s.path+t.value+".webp",alt:"sticker",class:$(["absolute inset-x-0 mx-auto",{"h-32 top-3":s.shrink,"h-40":!s.shrink}])},null,10,G)]))),128))]),_:1}),s.max>1?(a(),n("button",{key:1,onClick:c[1]||(c[1]=u=>g(s.max))},N)):r("",!0)]))}});const V=S(T,[["__scopeId","data-v-95599218"]]),Q={class:"flex flex-col gap-2 flex-1 box py-4"},j={class:"flex flex-col"},z={class:"subtitle"},F={key:0},P=e("span",{class:"font-shrikhand font-normal"},"Design: ",-1),q=["href"],M={key:1},H=e("span",{class:"font-shrikhand font-normal"},"Pre\xE7o: ",-1),J={class:"mt-1.5"},K={class:"italic"},x=h({__name:"Stickers",props:{path:null,max:null,shrink:{type:Boolean},title:null,design:null,price:null,desc:null,availability:null},setup(s){return(t,o)=>(a(),n("div",Q,[d(V,{path:s.path,max:s.max,shrink:s.shrink},null,8,["path","max","shrink"]),e("div",j,[e("p",z,i(s.title),1),s.design?(a(),n("p",F,[P,v(" "+i(s.design.split("@")[0])+" - ",1),e("a",{href:"https://www.instagram.com/"+s.design.split("@")[1],target:"_blank"}," @"+i(s.design.split("@")[1]),9,q)])):r("",!0),s.price?(a(),n("p",M,[H,v(" "+i(s.price),1)])):r("",!0),e("p",J,i(s.desc),1),e("p",K,i(s.availability),1)])]))}}),O={class:"flex flex-col gap-4"},R=e("p",{class:"title"}," Autocolantes ",-1),U=e("div",null,[e("p",null," Somos uma iniciativa sem fins lucrativos, no entanto precisamos sempre de fundos para nos ajudar a organizar e publicitar eventos futuros. Para tal, vendemos diferentes autocolantes LGBTQIA+ nos nossos eventos. "),e("p",null," Nesta p\xE1gina podes consultar os v\xE1rios autocolantes que temos dispon\xEDveis! ")],-1),W={class:"flex flex-wrap gap-8 mx-auto mt-2"},Y=h({__name:"Merch",setup(s){return(t,o)=>(a(),n("div",O,[R,U,e("div",W,[d(x,{path:"/stickers/flags/",max:10,shrink:!0,title:"Bandeiras",price:"0,50\u20AC",desc:"Bandeiras de v\xE1rias identidades LGBTQIA+",availability:"Dispon\xEDvel nos nossos eventos!"}),d(x,{path:"/stickers/kittens/",max:11,title:"Gatinhos",design:"Lee@mr_apple.pie",price:"1\u20AC",desc:"Gatinhos com as cores de v\xE1rias bandeiras LGBTQIA+",availability:"Dispon\xEDvel nos nossos eventos!"})])]))}});export{Y as default};
