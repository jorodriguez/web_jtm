(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01a2b568"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var s=i("fe6c"),a=i("58df");function o(t,e=[]){return Object(a["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"553a":function(t,e,i){"use strict";i("b5b6");var s=i("8dd9"),a=i("3a66"),o=i("d10f"),r=i("58df"),l=i("80d2");e["a"]=Object(r["a"])(s["a"],Object(a["a"])("footer",["height","inset"]),o["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...s["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...s["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(l["i"])(t),left:Object(l["i"])(this.computedLeft),right:Object(l["i"])(this.computedRight),bottom:Object(l["i"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},"62ad":function(t,e,i){"use strict";i("13d5"),i("14d9"),i("4b85");var s=i("2b0e"),a=i("d9f7"),o=i("80d2");const r=["sm","md","lg","xl"],l=(()=>r.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),n=(()=>r.reduce((t,e)=>(t["offset"+Object(o["I"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>r.reduce((t,e)=>(t["order"+Object(o["I"])(e)]={type:[String,Number],default:null},t),{}))(),p={col:Object.keys(l),offset:Object.keys(n),order:Object.keys(c)};function d(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+="-"+i}return"col"!==t||""!==i&&!0!==i?(s+="-"+i,s.toLowerCase()):s.toLowerCase()}}const u=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...n,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:o}){let r="";for(const a in e)r+=String(e[a]);let l=u.get(r);if(!l){let t;for(t in l=[],p)p[t].forEach(i=>{const s=e[i],a=d(t,i,s);a&&l.push(a)});const i=l.some(t=>t.startsWith("col-"));l.push({col:!i||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),u.set(r,l)}return t(e.tag,Object(a["a"])(i,{class:l}),s)}})},"69b6":function(t,e,i){"use strict";i.r(e);var s=i("8336"),a=i("62ad"),o=i("553a"),r=function(){var t=this,e=t._self._c;return e(o["a"],{staticClass:"font-weight-medium shadow-md",attrs:{tile:"",flat:"",height:"80",color:t.$vuetify.theme.dark?"dark":"white",dark:t.$vuetify.theme.dark,inset:!0}},[e(a["a"],{staticClass:"text-left",attrs:{cols:"12"}},[e("div",{staticClass:"d-flex flex-row justify-space-between align-center"},[e("div",[e(s["a"],{attrs:{target:"_blank",depressed:"",color:"warning"}},[t._v("JTM")])],1),e("div",[e("strong",{staticClass:"text--disabled"},[t._v(" © Softlineas "+t._s((new Date).getFullYear())+"-"+t._s((new Date).getFullYear()+1)+" ")])])])])],1)},l=[],n=i("2f62"),c={computed:{...Object(n["c"])(["getThemeMode"])}},p=c,d=i("2877"),u=Object(d["a"])(p,r,l,!1,null,null,null);e["default"]=u.exports},b5b6:function(t,e,i){}}]);
//# sourceMappingURL=chunk-01a2b568.8ba62c98.js.map