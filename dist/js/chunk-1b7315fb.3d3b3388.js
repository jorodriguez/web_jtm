(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b7315fb"],{"0fd9":function(t,s,e){"use strict";e("13d5"),e("14d9"),e("4b85");var i=e("2b0e"),a=e("d9f7"),r=e("80d2");const n=["sm","md","lg","xl"],o=["start","end","center"];function l(t,s){return n.reduce((e,i)=>(e[t+Object(r["I"])(i)]=s(),e),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),u=t=>[...o,"space-between","space-around"].includes(t),h=l("justify",()=>({type:String,default:null,validator:u})),m=t=>[...o,"space-between","space-around","stretch"].includes(t),g=l("alignContent",()=>({type:String,default:null,validator:m})),p={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(g)},f={align:"align",justify:"justify",alignContent:"align-content"};function b(t,s,e){let i=f[t];if(null!=e){if(s){const e=s.replace(t,"");i+="-"+e}return i+="-"+e,i.toLowerCase()}}const v=new Map;s["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:m},...g},render(t,{props:s,data:e,children:i}){let r="";for(const a in s)r+=String(s[a]);let n=v.get(r);if(!n){let t;for(t in n=[],p)p[t].forEach(e=>{const i=s[e],a=b(t,e,i);a&&n.push(a)});n.push({"no-gutters":s.noGutters,"row--dense":s.dense,["align-"+s.align]:s.align,["justify-"+s.justify]:s.justify,["align-content-"+s.alignContent]:s.alignContent}),v.set(r,n)}return t(s.tag,Object(a["a"])(e,{staticClass:"row",class:n}),i)}})},"13aa":function(t,s,e){t.exports=e.p+"img/growth.43e55e10.svg"},1941:function(t,s,e){t.exports=e.p+"img/maps-and-location-2.507cc166.svg"},"36a7":function(t,s,e){},"4b85":function(t,s,e){},"62ad":function(t,s,e){"use strict";e("13d5"),e("14d9"),e("4b85");var i=e("2b0e"),a=e("d9f7"),r=e("80d2");const n=["sm","md","lg","xl"],o=(()=>n.reduce((t,s)=>(t[s]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>n.reduce((t,s)=>(t["offset"+Object(r["I"])(s)]={type:[String,Number],default:null},t),{}))(),c=(()=>n.reduce((t,s)=>(t["order"+Object(r["I"])(s)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function u(t,s,e){let i=t;if(null!=e&&!1!==e){if(s){const e=s.replace(t,"");i+="-"+e}return"col"!==t||""!==e&&!0!==e?(i+="-"+e,i.toLowerCase()):i.toLowerCase()}}const h=new Map;s["a"]=i["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:s,data:e,children:i,parent:r}){let n="";for(const a in s)n+=String(s[a]);let o=h.get(n);if(!o){let t;for(t in o=[],d)d[t].forEach(e=>{const i=s[e],a=u(t,e,i);a&&o.push(a)});const e=o.some(t=>t.startsWith("col-"));o.push({col:!e||!s.cols,["col-"+s.cols]:s.cols,["offset-"+s.offset]:s.offset,["order-"+s.order]:s.order,["align-self-"+s.alignSelf]:s.alignSelf}),h.set(n,o)}return t(s.tag,Object(a["a"])(e,{class:o}),i)}})},"6b53":function(t,s,e){"use strict";e("36a7");var i=e("24b2"),a=e("58df"),r=e("80d2");s["a"]=Object(a["a"])(i["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(r["t"])(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},7179:function(t,s,e){t.exports=e.p+"img/startup.fc7f3cdd.svg"},"78d7":function(t,s,e){"use strict";var i=e("6b53");s["a"]=i["a"]},"8efc":function(t,s,e){},adda:function(t,s,e){"use strict";e("14d9"),e("8efc");var i=e("90a2"),a=e("78d7"),r=e("7560"),n=e("58df"),o=e("d9f7"),l=e("d9bd"),c=e("80d2");const d="undefined"!==typeof window&&"IntersectionObserver"in window;s["a"]=Object(n["a"])(a["a"],r["a"]).extend({name:"v-img",directives:{intersect:i["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],s=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),s&&t.push(`url("${s}")`);const e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,s,e){if(!d||e||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(l["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,s=100){const e=()=>{const{naturalHeight:i,naturalWidth:a}=t;i||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/i):t.complete||!this.isLoading||this.hasError||null==s||setTimeout(e,s)};e()},genContent(){const t=a["a"].options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:this.naturalWidth+"px"}}),t},__genPlaceholder(){const t=Object(c["t"])(this,"placeholder");if(t){const s=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},s):s[0]}}},render(t){const s=a["a"].options.render.call(this,t),e=Object(o["a"])(s.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return s.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(s.tag,e,s.children)}})},b401:function(t,s,e){"use strict";e.r(s);var i=e("8336"),a=e("62ad"),r=e("132d"),n=e("adda"),o=e("0fd9"),l=function(){var t=this,s=t._self._c;return s(o["a"],[s(a["a"],{attrs:{cols:"12"}},[s("base-card",[s(o["a"],[s(a["a"],{staticClass:"pa-4 border-right",attrs:{cols:"12",md:"4"}},[s("div",{staticClass:"my-8 px-8 text-center ul-icon-box-animate-onhover"},[s("div",{staticClass:"ul-icon-box mx-auto mb-8"},[s("div",{staticClass:"bg-group ul-animate fallingClouds"}),s(n["a"],{staticClass:"mx-auto",attrs:{height:"100",width:"100",src:e("7179")}})],1),s("div",{staticClass:"text-center mb-10"},[s("h4",{staticClass:"font-weight-bold"},[t._v("Startup")])]),s("ul",{staticClass:"d-flex justify-center mb-6"},[s("li",{staticClass:"text--disabled mx-3"},[t._v("1 Domain")]),s("li",{staticClass:"text--disabled mx-3"},[t._v("5 Users")]),s("li",{staticClass:"text--disabled mx-3"},[t._v("10 Copies")])]),s("div",{staticClass:"text-center"},[s("p",{staticClass:"text--disabled mb-10"},[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry. ")]),s("div",{staticClass:"d-flex justify-center align-start mb-10"},[s("h1",{staticClass:"font-weight-bold text-h3 mr-1"},[t._v("75")]),s("p",{staticClass:"ma-0 mt-1"},[t._v("$")])]),s(i["a"],{attrs:{large:"",rounded:"",depressed:"",color:"primary",dark:""}},[t._v("Purchases")])],1)])]),s(a["a"],{staticClass:"pa-4 border-right",attrs:{cols:"12",md:"4"}},[s("div",{staticClass:"my-8 px-8 text-center ul-icon-box-animate-onhover"},[s("div",{staticClass:"ul-icon-box mx-auto mb-8"},[s("div",{staticClass:"bg-group ul-animate fallingClouds"}),s(n["a"],{staticClass:"mx-auto",attrs:{height:"100",width:"100",src:e("13aa")}})],1),s("div",{staticClass:"text-center mb-10"},[s("h4",{staticClass:"font-weight-bold"},[t._v("Growth Plan")])]),s("ul",{staticClass:"d-flex justify-center mb-6"},[s("li",{staticClass:"text--disabled mx-3"},[t._v("8 Domain")]),s("li",{staticClass:"text--disabled mx-3"},[t._v("15 Users")]),s("li",{staticClass:"text--disabled mx-3"},[t._v("100 Copies")])]),s("div",{staticClass:"text-center"},[s("p",{staticClass:"text--disabled mb-10"},[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry. ")]),s("div",{staticClass:"d-flex justify-center align-start mb-10"},[s("h1",{staticClass:"font-weight-bold text-h3 mr-1"},[t._v("175")]),s("p",{staticClass:"ma-0 mt-1"},[t._v("$")])]),s(i["a"],{attrs:{large:"",rounded:"",depressed:"",color:"primary",dark:""}},[t._v("Purchases")])],1)])]),s(a["a"],{staticClass:"pa-4 border-right",attrs:{cols:"12",md:"4"}},[s("div",{staticClass:"my-8 px-8 text-center ul-icon-box-animate-onhover"},[s("div",{staticClass:"ul-icon-box mx-auto mb-8"},[s("div",{staticClass:"bg-group ul-animate fallingClouds"}),s(n["a"],{staticClass:"mx-auto",attrs:{height:"100",width:"100",src:e("1941")}})],1),s("div",{staticClass:"text-center mb-10"},[s("h4",{staticClass:"font-weight-bold"},[t._v("Growth Plan")])]),s("ul",{staticClass:"d-flex justify-center mb-6"},[s("li",{staticClass:"text--disabled mx-3"},[t._v("10 Domain")]),s("li",{staticClass:"text--disabled mx-3"},[t._v("25 Users")]),s("li",{staticClass:"text--disabled mx-3"},[t._v("1000 Copies")])]),s("div",{staticClass:"text-center"},[s("p",{staticClass:"text--disabled mb-10"},[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry. ")]),s("div",{staticClass:"d-flex justify-center align-start mb-10"},[s("h1",{staticClass:"font-weight-bold text-h3 mr-1"},[t._v("875")]),s("p",{staticClass:"ma-0 mt-1"},[t._v("$")])]),s(i["a"],{attrs:{large:"",rounded:"",depressed:"",color:"primary",dark:""}},[t._v("Purchases")])],1)])])],1)],1)],1),s(a["a"],{attrs:{cols:"12"}},[s("base-card",[s(o["a"],t._l(t.priceList,(function(e,n){return s(a["a"],{key:n,staticClass:"pa-4 border-right",attrs:{cols:"12",md:"6",lg:"3"}},[s("div",{staticClass:"my-8 px-8 text-center ul-icon-box-animate-onhover"},[s("div",{staticClass:"ul-icon-box mx-auto mb-8"},[s("div",{staticClass:"bg-group ul-animate fallingClouds"}),s(r["a"],{staticClass:"text-64",attrs:{color:e.iconColor}},[t._v(t._s(e.icon))])],1),s("div",{staticClass:"text-center mb-10"},[s("h4",{staticClass:"font-weight-bold"},[t._v(t._s(e.title))])]),s("ul",{staticClass:"d-md-flex d-lg-block ml-0 pa-0 justify-center mb-6 list-none flex-wrap"},[s("li",{staticClass:"text--disabled mx-3"},[t._v(t._s(e.domain)+" Domain")]),s("li",{staticClass:"text--disabled mx-3"},[t._v(t._s(e.users)+" Users")]),s("li",{staticClass:"text--disabled mx-3"},[t._v(t._s(e.copies)+" Copies")])]),s("div",{staticClass:"text-center"},[s("p",{staticClass:"text--disabled mb-10"},[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry. ")]),s("div",{staticClass:"d-flex justify-center align-start mb-10"},[s("h1",{staticClass:"font-weight-bold text-h3 mr-1"},[t._v(t._s(e.price))]),s("p",{staticClass:"ma-0 mt-1 body-1",class:e.supColor},[t._v("$")])]),s(i["a"],{attrs:{large:"",rounded:"",depressed:"",color:e.btnColor,dark:""}},[t._v("Purchases")])],1)])])})),1)],1)],1)],1)},c=[],d={metaInfo:{title:"Pricing Ver 1"},data(){return{priceList:[{icon:"mdi-account",iconColor:"danger",title:"Student",btnColor:"danger",supColor:"text-danger",domain:1,users:5,copies:10,price:20},{icon:"mdi-rocket-launch-outline",iconColor:"success",title:"Basic Plan",btnColor:"success",supColor:"text-success",domain:8,users:15,copies:100,price:75},{icon:"mdi-account-tie",iconColor:"orange",title:"For Business",btnColor:"orange",supColor:"text-orange",domain:8,users:15,copies:100,price:175},{icon:"mdi-office-building",iconColor:"primary",title:"Enterprise",btnColor:"primary",supColor:"text-primary",domain:8,users:15,copies:100,price:475}]}}},u=d,h=(e("b508"),e("2877")),m=Object(h["a"])(u,l,c,!1,null,"0d0d84d5",null);s["default"]=m.exports},b508:function(t,s,e){"use strict";e("f979")},f979:function(t,s,e){}}]);
//# sourceMappingURL=chunk-1b7315fb.3d3b3388.js.map