(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d7e2536"],{"0393":function(t,e,n){"use strict";n("210b");var i=n("604c"),s=n("d9bd");e["a"]=i["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(s["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(s["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(t,e){const n=this.getValue(t,e),i=this.getValue(t,e+1);t.isActive=this.toggleMethod(n),t.nextIsActive=this.toggleMethod(i)}}})},"083a":function(t,e,n){"use strict";var i=n("0d51"),s=TypeError;t.exports=function(t,e){if(!delete t[e])throw s("Cannot delete property "+i(e)+" of "+i(t))}},"0fd9":function(t,e,n){"use strict";n("13d5"),n("14d9"),n("4b85");var i=n("2b0e"),s=n("d9f7"),a=n("80d2");const o=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return o.reduce((n,i)=>(n[t+Object(a["I"])(i)]=e(),n),{})}const d=t=>[...r,"baseline","stretch"].includes(t),c=l("align",()=>({type:String,default:null,validator:d})),u=t=>[...r,"space-between","space-around"].includes(t),h=l("justify",()=>({type:String,default:null,validator:u})),p=t=>[...r,"space-between","space-around","stretch"].includes(t),f=l("alignContent",()=>({type:String,default:null,validator:p})),v={align:Object.keys(c),justify:Object.keys(h),alignContent:Object.keys(f)},m={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,n){let i=m[t];if(null!=n){if(e){const n=e.replace(t,"");i+="-"+n}return i+="-"+n,i.toLowerCase()}}const g=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...c,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:n,children:i}){let a="";for(const s in e)a+=String(e[s]);let o=g.get(a);if(!o){let t;for(t in o=[],v)v[t].forEach(n=>{const i=e[n],s=b(t,n,i);s&&o.push(s)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),g.set(a,o)}return t(e.tag,Object(s["a"])(n,{staticClass:"row",class:o}),i)}})},"1e6c":function(t,e,n){"use strict";var i=n("9d65"),s=n("4e82"),a=n("c3f0"),o=n("80d2"),r=n("58df");const l=Object(r["a"])(i["a"],Object(s["a"])("windowGroup","v-window-item","v-window"));e["a"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:a["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(o["i"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(o["i"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}})},"20f6":function(t,e,n){},"210b":function(t,e,n){},"3ab0":function(t,e,n){"use strict";n("f2b4")},"3c65":function(t,e,n){"use strict";var i=n("23e7"),s=n("7b0b"),a=n("07fa"),o=n("3a34"),r=n("083a"),l=n("3511"),d=1!==[].unshift(0),c=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},u=d||!c();i({target:"Array",proto:!0,arity:1,forced:u},{unshift:function(t){var e=s(this),n=a(e),i=arguments.length;if(i){l(n+i);var d=n;while(d--){var c=d+i;d in e?e[c]=e[d]:r(e,c)}for(var u=0;u<i;u++)e[u]=arguments[u]}return o(e,n+i)}})},"49e2":function(t,e,n){"use strict";var i=n("0789"),s=n("9d65"),a=n("a9ad"),o=n("3206"),r=n("80d2"),l=n("58df");const d=Object(l["a"])(s["a"],a["a"],Object(o["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));e["a"]=d.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(t,e){t&&(this.isBooted=!0),null==e?this.isActive=t:this.$nextTick(()=>this.isActive=t)}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(t){return t(i["a"],this.showLazyContent(()=>[t("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(r["t"])(this))])]))}})},"4b85":function(t,e,n){},"4bd4":function(t,e,n){"use strict";n("14d9");var i=n("58df"),s=n("7e2b"),a=n("3206");e["a"]=Object(i["a"])(s["a"],Object(a["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),n={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))}):n.valid=e(t),n},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const n=this.watchers.find(t=>t._uid===e._uid);n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"62ad":function(t,e,n){"use strict";n("13d5"),n("14d9"),n("4b85");var i=n("2b0e"),s=n("d9f7"),a=n("80d2");const o=["sm","md","lg","xl"],r=(()=>o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>o.reduce((t,e)=>(t["offset"+Object(a["I"])(e)]={type:[String,Number],default:null},t),{}))(),d=(()=>o.reduce((t,e)=>(t["order"+Object(a["I"])(e)]={type:[String,Number],default:null},t),{}))(),c={col:Object.keys(r),offset:Object.keys(l),order:Object.keys(d)};function u(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");i+="-"+n}return"col"!==t||""!==n&&!0!==n?(i+="-"+n,i.toLowerCase()):i.toLowerCase()}}const h=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:a}){let o="";for(const s in e)o+=String(e[s]);let r=h.get(o);if(!r){let t;for(t in r=[],c)c[t].forEach(n=>{const i=e[n],s=u(t,n,i);s&&r.push(s)});const n=r.some(t=>t.startsWith("col-"));r.push({col:!n||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),h.set(o,r)}return t(e.tag,Object(s["a"])(n,{class:r}),i)}})},"6f17":function(t,e,n){"use strict";n.r(e);var i=n("8336"),s=n("b0af"),a=n("99d9"),o=n("62ad"),r=n("a523"),l=n("cd55"),d=n("49e2"),c=n("c865"),u=n("0393"),h=n("4bd4"),p=n("132d"),f=n("0fd9"),v=n("71a3"),m=n("c671"),b=n("fe57"),g=n("aac8"),w=n("9a96"),x=n("8654"),y=function(){var t=this,e=t._self._c;return e("div",[e(f["a"],{},[e(o["a"],{staticClass:"text-center",attrs:{cols:"12"}},[e("h2",[t._v("Hi, How can we help you ?")]),e(h["a"],[e(r["a"],[e(f["a"],[e(o["a"],{attrs:{cols:"6",offset:"3"}},[e(x["a"],{attrs:{"prepend-inner-icon":"mdi-magnify",label:"Search",solo:"",rounded:""},scopedSlots:t._u([{key:"append",fn:function(){return[e("div",{staticClass:"my-2"},[e(i["a"],{attrs:{rounded:"",color:"primary"}},[t._v("Primary")])],1)]},proxy:!0}])})],1)],1)],1)],1),e("p",{staticClass:"text--disabled"},[t._v("Or Browse by category")])],1),e(o["a"],{attrs:{cols:"12"}},[e(b["a"],{staticClass:"tabs-faq",attrs:{height:"120","icons-and-text":"",centered:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(w["a"],{staticClass:"test"}),e(v["a"],{staticClass:"eg-white-tab white px-10 shadow-lg mr-4 rounded-sm body-2 font-weight-bold",attrs:{href:"#tab-1"}},[t._v(" Getting Started "),e(p["a"],[t._v("mdi-home")])],1),e(v["a"],{staticClass:"eg-white-tab white px-10 shadow-lg mr-4 rounded-sm body-2 font-weight-bold",attrs:{href:"#tab-2"}},[t._v(" Plans & Pricing "),e(p["a"],[t._v("mdi-layers")])],1),e(v["a"],{staticClass:"eg-white-tab white px-10 shadow-lg mr-4 rounded-sm body-2 font-weight-bold",attrs:{href:"#tab-3"}},[t._v(" Sales Questions "),e(p["a"],[t._v("mdi-contacts")])],1),e(v["a"],{staticClass:"eg-white-tab white px-10 shadow-lg rounded-sm body-2 font-weight-bold",attrs:{href:"#tab-4"}},[t._v(" Usage Guide "),e(p["a"],[t._v("mdi-reload")])],1)],1),e(g["a"],{staticClass:"mt-5 transparent",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(4,(function(n){return e(m["a"],{key:n,attrs:{value:"tab-"+n}},[e(s["a"],{attrs:{flat:"",color:"transparent"}},[e(a["c"],[e(u["a"],{staticClass:"border-0",attrs:{flat:""}},t._l(3,(function(n,i){return e(l["a"],{key:i,staticClass:"mb-4 py-3 border-0",attrs:{flat:""}},[e(c["a"],{staticClass:"font-weight-bold"},[t._v("Collapsible Group Item #"+t._s(n))]),e(d["a"],[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])],1)})),1)],1)],1)],1)})),1)],1)],1)],1)},C=[],_={metaInfo:{title:"Faq One"},data(){return{tab:null,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}},j=_,B=(n("3ab0"),n("2877")),O=Object(B["a"])(j,y,C,!1,null,"64c887ca",null);e["default"]=O.exports},a523:function(t,e,n){"use strict";n("20f6"),n("4b85");var i=n("2b0e");function s(t){return i["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:i,children:s}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:a}=i;if(a){i.attrs={};const t=Object.keys(a).filter(t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=" "+t.join(" "))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,s)}})}var a=n("d9f7");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let s;const{attrs:o}=n;return o&&(n.attrs={},s=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,Object(a["a"])(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),i)}})},c671:function(t,e,n){"use strict";var i=n("1e6c");e["a"]=i["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=i["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},c865:function(t,e,n){"use strict";var i=n("0789"),s=n("9d26"),a=n("a9ad"),o=n("3206"),r=n("5607"),l=n("80d2"),d=n("58df");const c=Object(d["a"])(a["a"],Object(o["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));e["a"]=c.extend().extend({name:"v-expansion-panel-header",directives:{ripple:r["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(t){this.$emit("click",t)},genIcon(){const t=Object(l["t"])(this,"actions")||[this.$createElement(s["a"],this.expandIcon)];return this.$createElement(i["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render(t){return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(l["t"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(t,e,n){"use strict";var i=n("4e82"),s=n("3206"),a=n("80d2"),o=n("58df");e["a"]=Object(o["a"])(Object(i["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(s["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(t){this.content=t},unregisterContent(){this.content=null},registerHeader(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick(()=>this.$emit("change"))}},render(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(a["t"])(this))}})},dc22:function(t,e,n){"use strict";function i(t,e,n){const i=e.value,s=e.options||{passive:!0};window.addEventListener("resize",i,s),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:i,options:s},e.modifiers&&e.modifiers.quiet||i()}function s(t,e,n){var i;if(!(null===(i=t._onResize)||void 0===i?void 0:i[n.context._uid]))return;const{callback:s,options:a}=t._onResize[n.context._uid];window.removeEventListener("resize",s,a),delete t._onResize[n.context._uid]}const a={inserted:i,unbind:s};e["a"]=a},dd89:function(t,e,n){"use strict";function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,"a",(function(){return i}))},f2b4:function(t,e,n){}}]);
//# sourceMappingURL=chunk-7d7e2536.65211840.js.map