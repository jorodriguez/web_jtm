(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a8ec260"],{"0393":function(e,t,s){"use strict";s("210b");var a=s("604c"),i=s("d9bd");t["a"]=a["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(i["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(i["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const s=this.getValue(e,t),a=this.getValue(e,t+1);e.isActive=this.toggleMethod(s),e.nextIsActive=this.toggleMethod(a)}}})},"0fd9":function(e,t,s){"use strict";s("13d5"),s("14d9"),s("4b85");var a=s("2b0e"),i=s("d9f7"),n=s("80d2");const o=["sm","md","lg","xl"],l=["start","end","center"];function r(e,t){return o.reduce((s,a)=>(s[e+Object(n["I"])(a)]=t(),s),{})}const c=e=>[...l,"baseline","stretch"].includes(e),d=r("align",()=>({type:String,default:null,validator:c})),u=e=>[...l,"space-between","space-around"].includes(e),p=r("justify",()=>({type:String,default:null,validator:u})),h=e=>[...l,"space-between","space-around","stretch"].includes(e),f=r("alignContent",()=>({type:String,default:null,validator:h})),v={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(f)},b={align:"align",justify:"justify",alignContent:"align-content"};function m(e,t,s){let a=b[e];if(null!=s){if(t){const s=t.replace(e,"");a+="-"+s}return a+="-"+s,a.toLowerCase()}}const g=new Map;t["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...p,alignContent:{type:String,default:null,validator:h},...f},render(e,{props:t,data:s,children:a}){let n="";for(const i in t)n+=String(t[i]);let o=g.get(n);if(!o){let e;for(e in o=[],v)v[e].forEach(s=>{const a=t[s],i=m(e,s,a);i&&o.push(i)});o.push({"no-gutters":t.noGutters,"row--dense":t.dense,["align-"+t.align]:t.align,["justify-"+t.justify]:t.justify,["align-content-"+t.alignContent]:t.alignContent}),g.set(n,o)}return e(t.tag,Object(i["a"])(s,{staticClass:"row",class:o}),a)}})},"210b":function(e,t,s){},2845:function(e,t,s){e.exports=s.p+"img/search.d770daf9.svg"},"49e2":function(e,t,s){"use strict";var a=s("0789"),i=s("9d65"),n=s("a9ad"),o=s("3206"),l=s("80d2"),r=s("58df");const c=Object(r["a"])(i["a"],n["a"],Object(o["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["a"]=c.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick(()=>this.isActive=e)}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(a["a"],this.showLazyContent(()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(l["t"])(this))])]))}})},"4b85":function(e,t,s){},"62ad":function(e,t,s){"use strict";s("13d5"),s("14d9"),s("4b85");var a=s("2b0e"),i=s("d9f7"),n=s("80d2");const o=["sm","md","lg","xl"],l=(()=>o.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),r=(()=>o.reduce((e,t)=>(e["offset"+Object(n["I"])(t)]={type:[String,Number],default:null},e),{}))(),c=(()=>o.reduce((e,t)=>(e["order"+Object(n["I"])(t)]={type:[String,Number],default:null},e),{}))(),d={col:Object.keys(l),offset:Object.keys(r),order:Object.keys(c)};function u(e,t,s){let a=e;if(null!=s&&!1!==s){if(t){const s=t.replace(e,"");a+="-"+s}return"col"!==e||""!==s&&!0!==s?(a+="-"+s,a.toLowerCase()):a.toLowerCase()}}const p=new Map;t["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...r,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:s,children:a,parent:n}){let o="";for(const i in t)o+=String(t[i]);let l=p.get(o);if(!l){let e;for(e in l=[],d)d[e].forEach(s=>{const a=t[s],i=u(e,s,a);i&&l.push(i)});const s=l.some(e=>e.startsWith("col-"));l.push({col:!s||!t.cols,["col-"+t.cols]:t.cols,["offset-"+t.offset]:t.offset,["order-"+t.order]:t.order,["align-self-"+t.alignSelf]:t.alignSelf}),p.set(o,l)}return e(t.tag,Object(i["a"])(s,{class:l}),a)}})},"8ce9":function(e,t,s){},"99d9":function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return o})),s.d(t,"c",(function(){return l})),s.d(t,"d",(function(){return r}));var a=s("b0af"),i=s("80d2");const n=Object(i["k"])("v-card__actions"),o=Object(i["k"])("v-card__subtitle"),l=Object(i["k"])("v-card__text"),r=Object(i["k"])("v-card__title");a["a"]},b555:function(e,t,s){"use strict";var a=s("99d9"),i=s("ce7e"),n=function(){var e=this,t=e._self._c;return t("base-card",{},[t(a["c"],{staticClass:"pa-4"},[t("div",{staticClass:"d-flex justify-space-between"},[t("div",{staticClass:"pr-4"},[t("h5",{staticClass:"text-18"},[e._v(e._s(e.title))]),t("p",{},[e._v(e._s(e.subTitle))])]),e.image?t("img",{staticStyle:{height:"96px",width:"96px"},attrs:{src:e.image}}):e._e()]),e._t("basic-info-slot")],2),t(i["a"]),e.link?t(a["a"],{staticClass:"primary--text grey lighten-5 py-4",staticStyle:{cursor:"pointer"}},[e._v(" "+e._s(e.link)+" ")]):e._e()],1)},o=[],l={props:{title:{type:String,default:""},subTitle:{type:String,default:""},image:{type:String,default:""},link:{type:String,default:""}}},r=l,c=s("2877"),d=Object(c["a"])(r,n,o,!1,null,null,null);t["a"]=d.exports},b6a3:function(e,t,s){"use strict";s.r(t);var a=s("62ad"),i=s("cd55"),n=s("49e2"),o=s("c865"),l=s("0393"),r=s("0fd9"),c=function(){var e=this,t=e._self._c;return t(r["a"],{attrs:{justify:"center"}},[t(a["a"],{staticClass:"text-center",attrs:{cols:"10",md:"10"}},[t("h3",{staticClass:"mb-4"},[e._v("Personal info")]),t("p",[e._v(" Basic info, like your name and photo, that you use on UI Lib services ")])]),t(a["a"],{attrs:{cols:"10",md:"10"}},[t("e-info-card",{attrs:{title:"Profile","sub-title":"Some info may be visible to other people using UI Lib services"}},[t("template",{slot:"basic-info-slot"},[t(l["a"],{staticClass:"my-4"},e._l(e.accordion,(function(s,a){return t(i["a"],{key:a,attrs:{elevation:"1"}},[t(o["a"],{staticClass:"border-b-2 border-gray-600"},[t("div",{staticClass:"d-flex justify-space-between sm:align-center align-start"},[t("div",{staticClass:"md:flex block justify-space-between sm:align-center align-start flex-1"},[t("div",{staticClass:"flex-grow-1",staticStyle:{"flex-basis":"136px"}},[t("p",{staticClass:"text-uppercase caption ma-0 mb-3 mr-4"},[e._v(" "+e._s(s.title)+" ")])]),t("div",{staticClass:"flex-grow-1 text-left mr-2",staticStyle:{"flex-basis":"136px"}},[t("p",{staticClass:"ma-0"},[e._v(" "+e._s(s.subtitle)+" ")])])])])]),t(n["a"],{staticClass:"font-weight-medium"},[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],1)})),1)],1)],2)],1),t(a["a"],{attrs:{cols:"10",md:"10"}},[t("e-info-card",{attrs:{title:"Contact info"}},[t("template",{slot:"basic-info-slot"},[t(l["a"],{staticClass:"my-4"},e._l(e.accordion2,(function(s,a){return t(i["a"],{key:a,attrs:{elevation:"1"}},[t(o["a"],{staticClass:"border-b-2 border-gray-600"},[t("div",{staticClass:"d-flex justify-space-between sm:align-center align-start"},[t("div",{staticClass:"md:flex block justify-space-between sm:align-center align-start flex-1"},[t("div",{staticClass:"flex-grow-1",staticStyle:{"flex-basis":"136px"}},[t("p",{staticClass:"text-uppercase caption ma-0 mb-3 mr-4"},[e._v(" "+e._s(s.title)+" ")])]),t("div",{staticClass:"flex-grow-1 text-left mr-2",staticStyle:{"flex-basis":"136px"}},[t("p",{staticClass:"ma-0"},[e._v(" "+e._s(s.subtitle)+" ")])])])])]),t(n["a"],{staticClass:"font-weight-medium"},[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],1)})),1)],1)],2)],1),t(a["a"],{attrs:{cols:"10",md:"10"}},[t("e-info-card",{attrs:{title:"Choose what other see","sub-title":"You decide what personal info you make visible to others across Google services",link:"Go to About me",image:e.imgOne}})],1)],1)},d=[],u=s("b555"),p={metaInfo:{title:"Account Personal Info"},components:{EInfoCard:u["a"]},data(){return{imgOne:s("2845"),accordion:[{title:"photo",subtitle:"A photo helps personalize your account"},{title:"name",subtitle:"UI Lib"},{title:"birthday",subtitle:"March 18, 1990"},{title:"Gender",subtitle:"Male"},{title:"password",subtitle:"Last changed Sep 4, 2018"}],accordion2:[{title:"email",subtitle:"ui-lib23@gmail.com"},{title:"phone",subtitle:"+1-202-555-0108"}]}}},h=p,f=s("2877"),v=Object(f["a"])(h,c,d,!1,null,null,null);t["default"]=v.exports},c865:function(e,t,s){"use strict";var a=s("0789"),i=s("9d26"),n=s("a9ad"),o=s("3206"),l=s("5607"),r=s("80d2"),c=s("58df");const d=Object(c["a"])(n["a"],Object(o["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["a"]=d.extend().extend({name:"v-expansion-panel-header",directives:{ripple:l["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=Object(r["t"])(this,"actions")||[this.$createElement(i["a"],this.expandIcon)];return this.$createElement(a["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(r["t"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,t,s){"use strict";var a=s("4e82"),i=s("3206"),n=s("80d2"),o=s("58df");t["a"]=Object(o["a"])(Object(a["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(i["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick(()=>this.$emit("change"))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(n["t"])(this))}})},ce7e:function(e,t,s){"use strict";s("8ce9");var a=s("7560");t["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(e){let t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":t,...this.$attrs},on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-8a8ec260.2d682a4e.js.map