import{b as y,T as g,a as I}from"./index-B3GXhXFg.js";import{u as k,a as L,P as E}from"./popupForm-C1US_yrU.js";import{y as v,a6 as w}from"./index-PFvgZIwd.js";import{e as N,p as T,M as x,a as C,ar as q,aE as R,B as S,m as u,W as U,o as n,h as z,s as a,N as m,V as i,l,O as p,i as A,Z as B,k as D,T as P}from"./vue-CwFJaX1P.js";import"./index-JTTiPgQY.js";import"./index-CkJ5YQgv.js";import"./validate-BsCjhJOi.js";const F={class:"default-main ba-table-box"},G={class:"table-header-operate-text"},$=N({name:"user/moneyLog",__name:"index",setup(K){const{t:e}=v.useI18n(),d=T(),b=x().query.user_id??"",t=C({userInfo:{}}),r=new y(new w(k),{column:[{type:"selection",align:"center",operator:!1},{label:e("Id"),prop:"id",align:"center",operator:"=",operatorPlaceholder:e("Id"),width:70},{label:e("user.moneyLog.User ID"),prop:"user_id",align:"center",width:70},{label:e("user.moneyLog.User name"),prop:"user.username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("user.moneyLog.User nickname"),prop:"user.nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("user.moneyLog.Change balance"),prop:"money",align:"center",operator:"RANGE",sortable:"custom"},{label:e("user.moneyLog.Before change"),prop:"before",align:"center",operator:"RANGE",sortable:"custom"},{label:e("user.moneyLog.After change"),prop:"after",align:"center",operator:"RANGE",sortable:"custom"},{label:e("user.moneyLog.remarks"),prop:"memo",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),showOverflowTooltip:!0},{label:e("Create time"),prop:"create_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160}],dblClickNotEditColumn:["all"]},{defaultItems:{user_id:b,memo:""}},{},{onSubmit:()=>{s(r.comSearch.form.user_id)}});r.mount(),r.getIndex(),q("baTable",r);const s=o=>{o&&R(o)>0?L(o).then(c=>{t.userInfo=c.data.user}):t.userInfo={}};return s(r.comSearch.form.user_id),S(()=>r.comSearch.form.user_id,o=>{r.form.defaultItems.user_id=o,s(o)}),(o,c)=>{const f=u("el-alert"),h=u("el-button"),_=U("blur");return n(),z("div",F,[a(r).table.remark?(n(),m(f,{key:0,class:"ba-table-alert",title:a(r).table.remark,type:"info","show-icon":""},null,8,["title"])):i("",!0),l(g,{buttons:["refresh","add","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":a(e)("Quick search placeholder",{fields:a(e)("user.moneyLog.User name")+"/"+a(e)("user.moneyLog.User nickname")})},{default:p(()=>[a(A)(t.userInfo)?i("",!0):B((n(),m(h,{key:0,class:"table-header-operate"},{default:p(()=>[D("span",G,P(t.userInfo.username+"(ID:"+t.userInfo.id+") "+a(e)("user.moneyLog.balance")+":"+t.userInfo.money),1)]),_:1})),[[_]])]),_:1},8,["quick-search-placeholder"]),l(I,{ref_key:"tableRef",ref:d},null,512),l(E)])}}});export{$ as default};
