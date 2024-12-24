import{e as I,p as N,aj as j,a as B,m as p,W as u,o as r,N as n,O as d,Z as c,h as D,U as y,T as g,s as e,k as z,j as v,l as f,_ as T,a6 as h,V as b,a5 as V}from"./vue-CwFJaX1P.js";import{y as W}from"./index-PFvgZIwd.js";import{F as m}from"./index-CkJ5YQgv.js";import{b as i}from"./validate-BsCjhJOi.js";const $={class:"title"},O=I({__name:"popupForm",setup(K){const s=N(),o=j("baTable"),{t,te:Z}=W.useI18n(),k=B({name:[i({name:"required",title:t("adszoneZone.name")})],mark:[i({name:"required",title:t("adszoneZone.mark")})],width:[i({name:"number",title:t("adszoneZone.width")})],height:[i({name:"number",title:t("adszoneZone.height")})],create_time:[i({name:"date",title:t("adszoneZone.create_time")})],update_time:[i({name:"date",title:t("adszoneZone.update_time")})]});return(M,l)=>{const w=p("el-form"),x=p("el-scrollbar"),_=p("el-button"),C=p("el-dialog"),S=u("drag"),U=u("zoom"),P=u("loading"),F=u("blur");return r(),n(C,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":!!(e(o).form.operate&&e(o).form.operate!="list"),onClose:e(o).toggleForm,width:"50%"},{header:d(()=>[c((r(),D("div",$,[y(g(e(o).form.operate&&e(Z)(e(o).form.operate)?e(t)(e(o).form.operate):""),1)])),[[S,[".ba-operate-dialog",".el-dialog__header"]],[U,".ba-operate-dialog"]])]),footer:d(()=>[z("div",{style:v("width: calc(100% - "+e(o).form.labelWidth/1.8+"px)")},[f(_,{onClick:l[9]||(l[9]=a=>e(o).toggleForm(""))},{default:d(()=>[y(g(e(t)("Cancel")),1)]),_:1}),c((r(),n(_,{loading:e(o).form.submitLoading,onClick:l[10]||(l[10]=a=>e(o).onSubmit(s.value)),type:"primary"},{default:d(()=>[y(g(e(o).form.operateIds&&e(o).form.operateIds.length>1?e(t)("Save and edit next item"):e(t)("Save")),1)]),_:1},8,["loading"])),[[F]])],4)]),default:d(()=>[c((r(),n(x,{class:"ba-table-form-scrollbar"},{default:d(()=>[z("div",{class:T(["ba-operate-form","ba-"+e(o).form.operate+"-form"]),style:v("width: calc(100% - "+e(o).form.labelWidth/2+"px)")},[e(o).form.loading?b("",!0):(r(),n(w,{key:0,ref_key:"formRef",ref:s,onKeyup:l[8]||(l[8]=h(a=>e(o).onSubmit(s.value),["enter"])),model:e(o).form.items,"label-position":"right","label-width":e(o).form.labelWidth+"px",rules:k},{default:d(()=>[f(m,{label:e(t)("adszoneZone.name"),type:"string",modelValue:e(o).form.items.name,"onUpdate:modelValue":l[0]||(l[0]=a=>e(o).form.items.name=a),prop:"name",placeholder:e(t)("Please input field",{field:e(t)("adszoneZone.name")})},null,8,["label","modelValue","placeholder"]),f(m,{label:e(t)("adszoneZone.mark"),type:"string",modelValue:e(o).form.items.mark,"onUpdate:modelValue":l[1]||(l[1]=a=>e(o).form.items.mark=a),prop:"mark",placeholder:e(t)("Please input field",{field:e(t)("adszoneZone.mark")})},null,8,["label","modelValue","placeholder"]),f(m,{label:e(t)("adszoneZone.type"),type:"radio",modelValue:e(o).form.items.type,"onUpdate:modelValue":l[2]||(l[2]=a=>e(o).form.items.type=a),prop:"type",data:{content:{1:e(t)("adszoneZone.type 1"),2:e(t)("adszoneZone.type 2"),3:e(t)("adszoneZone.type 3")}},placeholder:e(t)("Please select field",{field:e(t)("adszoneZone.type")})},null,8,["label","modelValue","data","placeholder"]),e(o).form.items.type!=3?(r(),n(m,{key:0,label:e(t)("adszoneZone.width"),type:"number",prop:"width","input-attr":{step:1},modelValue:e(o).form.items.width,"onUpdate:modelValue":l[3]||(l[3]=a=>e(o).form.items.width=a),modelModifiers:{number:!0},placeholder:e(t)("Please input field",{field:e(t)("adszoneZone.width")})},null,8,["label","modelValue","placeholder"])):b("",!0),e(o).form.items.type!=3?(r(),n(m,{key:1,label:e(t)("adszoneZone.height"),type:"number",prop:"height","input-attr":{step:1},modelValue:e(o).form.items.height,"onUpdate:modelValue":l[4]||(l[4]=a=>e(o).form.items.height=a),modelModifiers:{number:!0},placeholder:e(t)("Please input field",{field:e(t)("adszoneZone.height")})},null,8,["label","modelValue","placeholder"])):b("",!0),e(o).form.items.type==3?(r(),n(m,{key:2,label:e(t)("adszoneZone.ad_code"),type:"textarea",modelValue:e(o).form.items.code,"onUpdate:modelValue":l[5]||(l[5]=a=>e(o).form.items.code=a),prop:"code","input-attr":{rows:3},onKeyup:[l[6]||(l[6]=h(V(()=>{},["stop"]),["enter"])),l[7]||(l[7]=h(V(a=>e(o).onSubmit(s.value),["ctrl"]),["enter"]))],placeholder:e(t)("Please input field",{field:e(t)("adszoneZone.ad_code")})},null,8,["label","modelValue","placeholder"])):b("",!0)]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[P,e(o).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{O as _};
