import{b as n,d as u,T as p,a as c}from"./index-B3GXhXFg.js";import i from"./popupForm-C-Ufi8vC.js";import{y as d,a6 as m}from"./index-PFvgZIwd.js";import{e as b,p as g,ar as f,m as h,o,h as _,s as a,N as y,V as k,l as t}from"./vue-CwFJaX1P.js";import"./index-JTTiPgQY.js";import"./validate-BsCjhJOi.js";import"./index-CkJ5YQgv.js";const I={class:"default-main ba-table-box"},F=b({name:"user/user",__name:"index",setup(E){const{t:e}=d.useI18n(),l=g(),r=new n(new m("/admin/user.User/"),{column:[{type:"selection",align:"center",operator:!1},{label:e("Id"),prop:"id",align:"center",operator:"=",operatorPlaceholder:e("Id"),width:70},{label:e("user.user.User name"),prop:"username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("user.user.nickname"),prop:"nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("user.user.grouping"),prop:"group.name",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),render:"tag"},{label:e("user.user.head portrait"),prop:"avatar",align:"center",render:"image",operator:!1},{label:e("user.user.Gender"),prop:"gender",align:"center",render:"tag",custom:{0:"info",1:"",2:"success"},replaceValue:{0:e("Unknown"),1:e("user.user.male"),2:e("user.user.female")}},{label:e("user.user.mobile"),prop:"mobile",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("user.user.Last login IP"),prop:"last_login_ip",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),render:"tag"},{label:e("user.user.Last login"),prop:"last_login_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("Create time"),prop:"create_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("State"),prop:"status",align:"center",render:"tag",custom:{disable:"danger",enable:"success"},replaceValue:{disable:e("Disable"),enable:e("Enable")}},{label:e("Operate"),align:"center",width:"100",render:"buttons",buttons:u(["edit","delete"]),operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{gender:0,money:"0",score:"0",status:"enable"}});return r.mount(),r.getIndex(),f("baTable",r),(z,q)=>{const s=h("el-alert");return o(),_("div",I,[a(r).table.remark?(o(),y(s,{key:0,class:"ba-table-alert",title:a(r).table.remark,type:"info","show-icon":""},null,8,["title"])):k("",!0),t(p,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":a(e)("Quick search placeholder",{fields:a(e)("user.user.User name")+"/"+a(e)("user.user.nickname")})},null,8,["quick-search-placeholder"]),t(c,{ref_key:"tableRef",ref:l},null,512),t(i)])}}});export{F as default};
