import{e as F,p as I,aj as N,a as j,m as f,W as u,o as n,N as s,O as d,Z as b,h as B,U as g,T as c,s as e,k as _,j as Z,l as i,_ as D,a6 as z,V as v,a5 as y}from"./vue-CwFJaX1P.js";import{y as T}from"./index-PFvgZIwd.js";import{F as r}from"./index-CkJ5YQgv.js";import{b as m}from"./validate-BsCjhJOi.js";const W={class:"title"},A=F({__name:"popupForm",setup($){const p=I(),l=N("baTable"),{t:o}=T.useI18n(),x=j({effectime:[m({name:"required",title:o("adszoneZone.effectime")}),m({name:"date",title:o("adszoneZone.effectime")})],expiretime:[m({name:"required",title:o("adszoneZone.expiretime")}),m({name:"date",title:o("adszoneZone.expiretime")})],create_time:[m({name:"date",title:o("adszoneZone.create_time")})],update_time:[m({name:"date",title:o("adszoneZone.update_time")})]});return(K,t)=>{const k=f("el-form"),w=f("el-scrollbar"),V=f("el-button"),h=f("el-dialog"),C=u("drag"),U=u("zoom"),P=u("loading"),S=u("blur");return n(),s(h,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":!!e(l).form.operate,onClose:e(l).toggleForm,width:"50%"},{header:d(()=>[b((n(),B("div",W,[g(c(e(l).form.operate?e(o)(e(l).form.operate):""),1)])),[[C,[".ba-operate-dialog",".el-dialog__header"]],[U,".ba-operate-dialog"]])]),footer:d(()=>[_("div",{style:Z("width: calc(100% - "+e(l).form.labelWidth/1.8+"px)")},[i(V,{onClick:t[12]||(t[12]=a=>e(l).toggleForm(""))},{default:d(()=>[g(c(e(o)("Cancel")),1)]),_:1}),b((n(),s(V,{loading:e(l).form.submitLoading,onClick:t[13]||(t[13]=a=>e(l).onSubmit(p.value)),type:"primary"},{default:d(()=>[g(c(e(l).form.operateIds&&e(l).form.operateIds.length>1?e(o)("Save and edit next item"):e(o)("Save")),1)]),_:1},8,["loading"])),[[S]])],4)]),default:d(()=>[b((n(),s(w,{class:"ba-table-form-scrollbar"},{default:d(()=>[_("div",{class:D(["ba-operate-form","ba-"+e(l).form.operate+"-form"]),style:Z("width: calc(100% - "+e(l).form.labelWidth/2+"px)")},[e(l).form.loading?v("",!0):(n(),s(k,{key:0,ref_key:"formRef",ref:p,onKeyup:t[11]||(t[11]=z(a=>e(l).onSubmit(p.value),["enter"])),model:e(l).form.items,"label-position":"right","label-width":e(l).form.labelWidth+"px",rules:x},{default:d(()=>[e(l).form.items.zone_id?v("",!0):(n(),s(r,{key:0,label:e(o)("adszoneZone.zone_id"),type:"remoteSelect",modelValue:e(l).form.items.zone_id,"onUpdate:modelValue":t[0]||(t[0]=a=>e(l).form.items.zone_id=a),prop:"zone_id","input-attr":{pk:"adszone_zone.id",field:"name","remote-url":"/admin/AdszoneZone/index"},placeholder:e(o)("Please select field",{field:e(o)("adszoneZone.zone_id")})},null,8,["label","modelValue","placeholder"])),i(r,{label:e(o)("adszoneZone.title"),type:"string",modelValue:e(l).form.items.title,"onUpdate:modelValue":t[1]||(t[1]=a=>e(l).form.items.title=a),prop:"title",placeholder:e(o)("Please input field",{field:e(o)("adszoneZone.title")})},null,8,["label","modelValue","placeholder"]),i(r,{label:e(o)("adszoneZone.image"),type:"image",modelValue:e(l).form.items.image,"onUpdate:modelValue":t[2]||(t[2]=a=>e(l).form.items.image=a),prop:"image"},null,8,["label","modelValue"]),i(r,{label:e(o)("adszoneZone.linkurl"),type:"string",modelValue:e(l).form.items.linkurl,"onUpdate:modelValue":t[3]||(t[3]=a=>e(l).form.items.linkurl=a),prop:"linkurl",placeholder:e(o)("Please input field",{field:e(o)("adszoneZone.linkurl")})},null,8,["label","modelValue","placeholder"]),i(r,{label:e(o)("adszoneZone.target"),type:"radio",modelValue:e(l).form.items.target,"onUpdate:modelValue":t[4]||(t[4]=a=>e(l).form.items.target=a),prop:"target",data:{content:{_self:e(o)("adszoneZone.target _self"),_blank:e(o)("adszoneZone.target _blank")}},placeholder:e(o)("Please select field",{field:e(o)("adszoneZone.target")})},null,8,["label","modelValue","data","placeholder"]),i(r,{label:e(o)("adszoneZone.ad_code"),type:"textarea",modelValue:e(l).form.items.code,"onUpdate:modelValue":t[5]||(t[5]=a=>e(l).form.items.code=a),prop:"code","input-attr":{rows:3},onKeyup:[t[6]||(t[6]=z(y(()=>{},["stop"]),["enter"])),t[7]||(t[7]=z(y(a=>e(l).onSubmit(p.value),["ctrl"]),["enter"]))],placeholder:e(o)("Please input field",{field:e(o)("adszoneZone.ad_code")})},null,8,["label","modelValue","placeholder"]),i(r,{label:e(o)("adszoneZone.effectime"),type:"datetime",modelValue:e(l).form.items.effectime,"onUpdate:modelValue":t[8]||(t[8]=a=>e(l).form.items.effectime=a),prop:"effectime",placeholder:e(o)("Please select field",{field:e(o)("adszoneZone.effectime")})},null,8,["label","modelValue","placeholder"]),i(r,{label:e(o)("adszoneZone.expiretime"),type:"datetime",modelValue:e(l).form.items.expiretime,"onUpdate:modelValue":t[9]||(t[9]=a=>e(l).form.items.expiretime=a),prop:"expiretime",placeholder:e(o)("Please select field",{field:e(o)("adszoneZone.expiretime")})},null,8,["label","modelValue","placeholder"]),i(r,{label:e(o)("adszoneZone.weigh"),type:"number",prop:"weigh","input-attr":{step:1},modelValue:e(l).form.items.weigh,"onUpdate:modelValue":t[10]||(t[10]=a=>e(l).form.items.weigh=a),modelModifiers:{number:!0},placeholder:e(o)("Please input field",{field:e(o)("adszoneZone.weigh")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[P,e(l).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{A as _};
