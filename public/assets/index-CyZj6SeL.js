import{d as p,b as c,T as d,a as m}from"./index-B3GXhXFg.js";import u from"./popupForm-Diwtudca.js";import{y as b,w as h,a6 as g}from"./index-PFvgZIwd.js";import{e as f,ar as _,m as k,o as n,h as y,s as t,N as I,V as E,l as r}from"./vue-CwFJaX1P.js";import"./index-JTTiPgQY.js";import"./validate-BsCjhJOi.js";import"./index-CkJ5YQgv.js";const w={class:"default-main ba-table-box"},B=f({name:"auth/admin",__name:"index",setup(z){const{t:e}=b.useI18n(),i=h(),o=p(["edit","delete"]);o[1].display=l=>l.id!=i.id;const a=new c(new g("/admin/auth.Admin/"),{column:[{type:"selection",align:"center",operator:!1},{label:e("Id"),prop:"id",align:"center",operator:"=",operatorPlaceholder:e("Id"),width:70},{label:e("auth.admin.username"),prop:"username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.nickname"),prop:"nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.grouping"),prop:"group_name_arr",align:"center",operator:!1,render:"tags"},{label:e("auth.admin.head portrait"),prop:"avatar",align:"center",render:"image",operator:!1},{label:e("auth.admin.mailbox"),prop:"email",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.mobile"),prop:"mobile",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.Last login"),prop:"last_login_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("Create time"),prop:"create_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("State"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:e("Disable"),1:e("Enable")}},{label:e("Operate"),align:"center",width:"100",render:"buttons",buttons:o,operator:!1}],dblClickNotEditColumn:[void 0,"status"]},{defaultItems:{status:"1"}});return _("baTable",a),a.mount(),a.getIndex(),(l,q)=>{const s=k("el-alert");return n(),y("div",w,[t(a).table.remark?(n(),I(s,{key:0,class:"ba-table-alert",title:t(a).table.remark,type:"info","show-icon":""},null,8,["title"])):E("",!0),r(d,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":t(e)("Quick search placeholder",{fields:t(e)("auth.admin.username")+"/"+t(e)("auth.admin.nickname")})},null,8,["quick-search-placeholder"]),r(m),r(u)])}}});export{B as default};
