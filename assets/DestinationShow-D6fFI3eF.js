import{d as g,o as n,c as o,b as s,t as i,u as v,r as k,j as f,k as $,e as _,l as d,F as w,m as y,n as B,p as C,a as m,q as R,w as V}from"./index-biuabRlY.js";const b={class:"card"},D=["src","alt"],E={class:"card__text"},L=g({__name:"ExperiencesCard",props:{experience:{}},setup(l){const t=l;return(e,c)=>(n(),o("div",b,[s("img",{src:`/vue-4-router/images/${t.experience.image}`,alt:t.experience.name},null,8,D),s("span",E,i(t.experience.name),1)]))}}),N={class:"go-back"},F={__name:"GoBack",setup(l){const t=v(),e=()=>{t.back()};return(c,a)=>(n(),o("span",N,[s("button",{onClick:e},"Go Back")]))}},G={key:0,class:"destination"},S={class:"destination-details"},j=["src","alt"],q={key:1,class:"experiences"},M={class:"text-lime-600"},T={class:"cards"},A={__name:"DestinationShow",setup(l){const t=B(),e=k(null),c=async a=>{try{const r=await C(a);e.value=r}catch(r){console.error("Error fetching data:",r),e.value=null}};return f(()=>{const a=t.params.slug;c(a)}),$(()=>t.params.slug,async a=>{a&&c(a)}),(a,r)=>{var p;const h=m("RouterLink"),x=m("RouterView");return n(),o("div",null,[e.value?(n(),o("section",G,[s("h1",null,i(e.value.name),1),_(F),s("div",S,[s("img",{src:`/vue-4-router/images/${e.value.image}`,alt:e.value.name},null,8,j),s("p",null,i(e.value.description),1)])])):d("",!0),(p=e.value)!=null&&p.experiences.length?(n(),o("section",q,[s("h2",M,"Top experiences in "+i(e.value.name),1),s("div",T,[(n(!0),o(w,null,y(e.value.experiences,u=>(n(),R(h,{key:u.slug,to:{name:"experience.show",params:{experienceSlug:u.slug}}},{default:V(()=>[_(L,{experience:u},null,8,["experience"])]),_:2},1032,["to"]))),128))]),_(x)])):d("",!0)])}}};export{A as default};
