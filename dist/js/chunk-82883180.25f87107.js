(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-82883180"],{"083a":function(t,e,i){"use strict";var s=i("0d51"),a=TypeError;t.exports=function(t,e){if(!delete t[e])throw a("Cannot delete property "+s(e)+" of "+s(t))}},"0fd9":function(t,e,i){"use strict";i("13d5"),i("14d9"),i("4b85");var s=i("2b0e"),a=i("d9f7"),l=i("80d2");const n=["sm","md","lg","xl"],r=["start","end","center"];function o(t,e){return n.reduce((i,s)=>(i[t+Object(l["I"])(s)]=e(),i),{})}const u=t=>[...r,"baseline","stretch"].includes(t),c=o("align",()=>({type:String,default:null,validator:u})),h=t=>[...r,"space-between","space-around"].includes(t),d=o("justify",()=>({type:String,default:null,validator:h})),m=t=>[...r,"space-between","space-around","stretch"].includes(t),v=o("alignContent",()=>({type:String,default:null,validator:m})),p={align:Object.keys(c),justify:Object.keys(d),alignContent:Object.keys(v)},b={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,i){let s=b[t];if(null!=i){if(e){const i=e.replace(t,"");s+="-"+i}return s+="-"+i,s.toLowerCase()}}const g=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...c,justify:{type:String,default:null,validator:h},...d,alignContent:{type:String,default:null,validator:m},...v},render(t,{props:e,data:i,children:s}){let l="";for(const a in e)l+=String(e[a]);let n=g.get(l);if(!n){let t;for(t in n=[],p)p[t].forEach(i=>{const s=e[i],a=f(t,i,s);a&&n.push(a)});n.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),g.set(l,n)}return t(e.tag,Object(a["a"])(i,{staticClass:"row",class:n}),s)}})},"33e9":function(t,e,i){},"3c65":function(t,e,i){"use strict";var s=i("23e7"),a=i("7b0b"),l=i("07fa"),n=i("3a34"),r=i("083a"),o=i("3511"),u=1!==[].unshift(0),c=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},h=u||!c();s({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(t){var e=a(this),i=l(e),s=arguments.length;if(s){o(i+s);var u=i;while(u--){var c=u+s;u in e?e[c]=e[u]:r(e,c)}for(var h=0;h<s;h++)e[h]=arguments[h]}return n(e,i+s)}})},"4b85":function(t,e,i){},"62ad":function(t,e,i){"use strict";i("13d5"),i("14d9"),i("4b85");var s=i("2b0e"),a=i("d9f7"),l=i("80d2");const n=["sm","md","lg","xl"],r=(()=>n.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),o=(()=>n.reduce((t,e)=>(t["offset"+Object(l["I"])(e)]={type:[String,Number],default:null},t),{}))(),u=(()=>n.reduce((t,e)=>(t["order"+Object(l["I"])(e)]={type:[String,Number],default:null},t),{}))(),c={col:Object.keys(r),offset:Object.keys(o),order:Object.keys(u)};function h(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+="-"+i}return"col"!==t||""!==i&&!0!==i?(s+="-"+i,s.toLowerCase()):s.toLowerCase()}}const d=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:l}){let n="";for(const a in e)n+=String(e[a]);let r=d.get(n);if(!r){let t;for(t in r=[],c)c[t].forEach(i=>{const s=e[i],a=h(t,i,s);a&&r.push(a)});const i=r.some(t=>t.startsWith("col-"));r.push({col:!i||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),d.set(n,r)}return t(e.tag,Object(a["a"])(i,{class:r}),s)}})},"897a":function(t,e,i){"use strict";i.r(e);var s=i("b0af"),a=i("99d9"),l=i("62ad"),n=(i("14d9"),i("33e9"),i("9a18")),r=i("80d2"),o=n["a"].extend({name:"v-range-slider",props:{value:{type:Array,default:()=>[0,0]}},data(){return{activeThumb:null,lazyValue:this.value}},computed:{classes(){return{...n["a"].options.computed.classes.call(this),"v-input--range-slider":!0}},internalValue:{get(){return this.lazyValue},set(t){let e=t.map((t=0)=>this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue)));if(e[0]>e[1]||e[1]<e[0]){if(null!==this.activeThumb){const t=1===this.activeThumb?0:1,e=this.$refs["thumb_"+t];e.focus()}e=[e[1],e[0]]}this.lazyValue=e,Object(r["l"])(e,this.value)||this.$emit("input",e),this.validate()}},inputWidth(){return this.internalValue.map(t=>(this.roundValue(t)-this.minValue)/(this.maxValue-this.minValue)*100)}},methods:{getTrackStyle(t,e,i=0,s=0){const a=this.vertical?this.$vuetify.rtl?"top":"bottom":this.$vuetify.rtl?"right":"left",l=this.vertical?"height":"width",n=`calc(${t}% + ${i}px)`,r=`calc(${e}% + ${s}px)`;return{transition:this.trackTransition,[a]:n,[l]:r}},getIndexOfClosestValue(t,e){return Math.abs(t[0]-e)<Math.abs(t[1]-e)?0:1},genInput(){return Object(r["j"])(2).map(t=>{const e=n["a"].options.methods.genInput.call(this);return e.data=e.data||{},e.data.attrs=e.data.attrs||{},e.data.attrs.value=this.internalValue[t],e.data.attrs.id=`input-${t?"max":"min"}-${this._uid}`,e})},genTrackContainer(){const t=[],e=this.isDisabled?10:0,i=[{class:"v-slider__track-background",color:this.computedTrackColor,styles:[0,this.inputWidth[0],0,-e]},{class:this.isDisabled?"v-slider__track-background":"v-slider__track-fill",color:this.isDisabled?this.computedTrackColor:this.computedTrackFillColor,styles:[this.inputWidth[0],Math.abs(this.inputWidth[1]-this.inputWidth[0]),e,-2*e]},{class:"v-slider__track-background",color:this.computedTrackColor,styles:[this.inputWidth[1],Math.abs(100-this.inputWidth[1]),e,-e]}];return this.$vuetify.rtl&&i.reverse(),t.push(...i.map(t=>this.$createElement("div",this.setBackgroundColor(t.color,{staticClass:t.class,style:this.getTrackStyle(...t.styles)})))),this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genChildren(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),Object(r["j"])(2).map(t=>{const e=this.internalValue[t],i=e=>{this.isFocused=!0,this.activeThumb=t,this.$emit("focus",e)},s=t=>{this.isFocused=!1,this.activeThumb=null,this.$emit("blur",t)},a=this.inputWidth[t],l=this.isActive&&this.activeThumb===t,n=this.isFocused&&this.activeThumb===t;return this.genThumbContainer(e,a,l,n,i,s,"thumb_"+t)})]},reevaluateSelected(t){this.activeThumb=this.getIndexOfClosestValue(this.internalValue,t);const e="thumb_"+this.activeThumb,i=this.$refs[e];i.focus()},onSliderMouseDown(t){var e;const i=this.parseMouseMove(t);if(this.reevaluateSelected(i),this.oldValue=this.internalValue,this.isActive=!0,null===(e=t.target)||void 0===e?void 0:e.matches(".v-slider__thumb-container, .v-slider__thumb-container *")){this.thumbPressed=!0;const e=t.target.getBoundingClientRect(),i="touches"in t?t.touches[0]:t;this.startOffset=this.vertical?i.clientY-(e.top+e.height/2):i.clientX-(e.left+e.width/2)}else this.startOffset=0,window.clearTimeout(this.mouseTimeout),this.mouseTimeout=window.setTimeout(()=>{this.thumbPressed=!0},300);const s=!r["D"]||{passive:!0,capture:!0},a=!!r["D"]&&{passive:!0},l="touches"in t;this.onMouseMove(t),this.app.addEventListener(l?"touchmove":"mousemove",this.onMouseMove,a),Object(r["a"])(this.app,l?"touchend":"mouseup",this.onSliderMouseUp,s),this.$emit("start",this.internalValue)},onSliderClick(t){if(!this.isActive){if(this.noClick)return void(this.noClick=!1);const e=this.parseMouseMove(t);this.reevaluateSelected(e),this.setInternalValue(e),this.$emit("change",this.internalValue)}},onMouseMove(t){const e=this.parseMouseMove(t);"mousemove"===t.type&&(this.thumbPressed=!0),null===this.activeThumb&&(this.activeThumb=this.getIndexOfClosestValue(this.internalValue,e)),this.setInternalValue(e)},onKeyDown(t){if(null===this.activeThumb)return;const e=this.parseKeyDown(t,this.internalValue[this.activeThumb]);null!=e&&(this.setInternalValue(e),this.$emit("change",this.internalValue))},setInternalValue(t){this.internalValue=this.internalValue.map((e,i)=>i===this.activeThumb?t:Number(e))}}}),u=i("0fd9"),c=i("ba0d"),h=i("e0c7"),d=i("8654"),m=function(){var t=this,e=t._self._c;return e(u["a"],[e(l["a"],{attrs:{cols:"12"}},[e("base-card",[e(a["d"],[t._v("Min & Max Values")]),e(a["c"],[e(u["a"],[e(l["a"],{},[e(c["a"],{staticClass:"align-center",attrs:{max:t.max,min:t.min,"hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[e(d["a"],{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})]},proxy:!0}]),model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1)],1)],1),e(h["a"],[t._v("Min and max range slider")]),e(a["c"],[e(u["a"],[e(l["a"],{},[e(o,{staticClass:"align-center",attrs:{max:t.max,min:t.min,"hide-details":""},scopedSlots:t._u([{key:"prepend",fn:function(){return[e(d["a"],{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{value:t.range[0],"hide-details":"","single-line":"",type:"number"},on:{change:function(e){return t.$set(t.range,0,e)}}})]},proxy:!0},{key:"append",fn:function(){return[e(d["a"],{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{value:t.range[1],"hide-details":"","single-line":"",type:"number"},on:{change:function(e){return t.$set(t.range,1,e)}}})]},proxy:!0}]),model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1)],1)],1)],1)],1),e(l["a"],{attrs:{cols:"12"}},[e("base-card",[e(a["d"],[t._v("Icons")]),e(a["c"],[e(s["a"],{attrs:{flat:"",color:"transparent"}},[e(h["a"],[t._v("Media volume")]),e(a["c"],[e(c["a"],{attrs:{"prepend-icon":"mdi-volume-medium"},model:{value:t.media,callback:function(e){t.media=e},expression:"media"}})],1),e(h["a"],[t._v("Alarm volume")]),e(a["c"],[e(c["a"],{attrs:{"append-icon":"mdi-alarm"},model:{value:t.alarm,callback:function(e){t.alarm=e},expression:"alarm"}})],1),e(h["a"],[t._v("Icon click callback")]),e(a["c"],[e(c["a"],{attrs:{"append-icon":"mdi-magnify-plus-outline","prepend-icon":"mdi-magnify-minus-outline"},on:{"click:append":t.zoomIn,"click:prepend":t.zoomOut},model:{value:t.zoom,callback:function(e){t.zoom=e},expression:"zoom"}})],1)],1)],1)],1)],1),e(l["a"],{attrs:{cols:"12"}},[e("base-card",[e(a["d"],[t._v("Vertical sliders")]),e(a["c"],[e(u["a"],[e(l["a"],[e(c["a"],{attrs:{vertical:"",label:"Regular"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),e(l["a"],[e(o,{attrs:{vertical:"",label:"Range"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)],1)],1)],1)],1),e(l["a"],{attrs:{cols:"12",md:"6"}},[e("base-card",[e(a["d"],[t._v("Thumb")]),e(a["c"],[e(u["a"],[e(l["a"],{attrs:{cols:"12"}},[e(h["a"],{staticClass:"pl-0"},[t._v(" Show thumb when using slider ")]),e(c["a"],{attrs:{"thumb-label":""},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1),e(l["a"],{attrs:{cols:"12"}},[e(h["a"],{staticClass:"pl-0"},[t._v(" Always show thumb label ")]),e(c["a"],{attrs:{"thumb-label":"always"},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1),e(l["a"],{attrs:{cols:"12"}},[e(h["a"],{staticClass:"pl-0"},[t._v(" Custom thumb size ")]),e(c["a"],{attrs:{"thumb-size":24,"thumb-label":"always"},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1),e(l["a"],{attrs:{cols:"12"}},[e(h["a"],{staticClass:"pl-0"},[t._v(" Custom thumb label ")]),e(c["a"],{attrs:{"thumb-size":24,"thumb-label":"always"},scopedSlots:t._u([{key:"thumb-label",fn:function({value:e}){return[t._v(" "+t._s(t.satisfactionEmojis[Math.min(Math.floor(e/10),9)])+" ")]}}]),model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1)],1)],1)],1)],1),e(l["a"],{attrs:{cols:"6"}},[e("base-card",[e(a["d"],[t._v("Ticks")]),e(a["c"],[e(s["a"],{attrs:{flat:"",color:"transparent"}},[e(h["a"],[t._v("Show ticks when using slider")]),e(a["c"],[e(c["a"],{attrs:{step:"10",ticks:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),e(h["a"],[t._v("Always show ticks")]),e(a["c"],[e(c["a"],{attrs:{step:"10",ticks:"always"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),e(h["a"],[t._v("Tick size")]),e(a["c"],[e(c["a"],{attrs:{step:"10",ticks:"always","tick-size":"4"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),e(h["a"],[t._v("Tick labels")]),e(a["c"],[e(c["a"],{attrs:{"tick-labels":t.ticksLabels,max:3,step:"1",ticks:"always","tick-size":"4"},model:{value:t.fruits,callback:function(e){t.fruits=e},expression:"fruits"}})],1)],1)],1)],1)],1),e(l["a"],{attrs:{cols:"12"}},[e("base-card",[e(a["d"],[t._v("Custom Colors")]),e(a["c"],[e(c["a"],{attrs:{color:t.ex1.color,label:t.ex1.label},model:{value:t.ex1.val,callback:function(e){t.$set(t.ex1,"val",e)},expression:"ex1.val"}}),e(c["a"],{attrs:{label:t.ex2.label,"track-color":t.ex2.color},model:{value:t.ex2.val,callback:function(e){t.$set(t.ex2,"val",e)},expression:"ex2.val"}}),e(c["a"],{attrs:{label:t.ex3.label,"thumb-color":t.ex3.color,"thumb-label":"always"},model:{value:t.ex3.val,callback:function(e){t.$set(t.ex3,"val",e)},expression:"ex3.val"}})],1)],1)],1),e(l["a"],[e("base-card",[e(a["d"],[t._v("Validation")]),e(a["c"],[e(s["a"],{attrs:{flat:"",color:"transparent"}},[e(h["a"],[t._v("Rules")]),e(a["c"],{staticClass:"pt-0"},[e(c["a"],{attrs:{rules:t.rules,label:"How many?",step:"10","thumb-label":"always",ticks:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),e(h["a"],[t._v("Persistent hint")]),e(a["c"],{staticClass:"pt-0"},[e(c["a"],{attrs:{rules:t.rules,hint:"40 in stock",label:"How many?","persistent-hint":"",step:"10","thumb-label":"always",ticks:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)],1)],1)],1)],1)},v=[],p={metaInfo:{title:"Sliders"},data(){return{min:-50,max:90,slider:40,range:[-20,70],media:0,alarm:0,zoom:0,value:10,value2:[20,40],satisfactionEmojis:["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"],fruits:0,ticksLabels:["Figs","Lemon","Pear","Apple"],ex1:{label:"color",val:25,color:"orange darken-3"},ex2:{label:"track-color",val:75,color:"green lighten-1"},ex3:{label:"thumb-color",val:50,color:"red"},rules:[t=>t<=40||"Only 40 in stock"],bpm:40,interval:null,isPlaying:!1}},methods:{zoomOut(){this.zoom=this.zoom-10||0},zoomIn(){this.zoom=this.zoom+10||100}}},b=p,f=i("2877"),g=Object(f["a"])(b,m,v,!1,null,null,null);e["default"]=g.exports},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return o}));var s=i("b0af"),a=i("80d2");const l=Object(a["k"])("v-card__actions"),n=Object(a["k"])("v-card__subtitle"),r=Object(a["k"])("v-card__text"),o=Object(a["k"])("v-card__title");s["a"]},"9a18":function(t,e,i){"use strict";var s=i("ba0d");e["a"]=s["a"]},"9e29":function(t,e,i){},a293:function(t,e,i){"use strict";i("14d9");var s=i("dd89");function a(){return!0}function l(t,e,i){if(!t||!1===n(t,i))return!1;const a=Object(s["a"])(e);if("undefined"!==typeof ShadowRoot&&a instanceof ShadowRoot&&a.host===t.target)return!1;const l=("object"===typeof i.value&&i.value.include||(()=>[]))();return l.push(e),!l.some(e=>e.contains(t.target))}function n(t,e){const i="object"===typeof e.value&&e.value.closeConditional||a;return i(t)}function r(t,e,i){const s="function"===typeof i.value?i.value:i.value.handler;e._clickOutside.lastMousedownWasOutside&&l(t,e,i)&&setTimeout(()=>{n(t,i)&&s&&s(t)},0)}function o(t,e){const i=Object(s["a"])(t);e(document),"undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&e(i)}const u={inserted(t,e,i){const s=i=>r(i,t,e),a=i=>{t._clickOutside.lastMousedownWasOutside=l(i,t,e)};o(t,t=>{t.addEventListener("click",s,!0),t.addEventListener("mousedown",a,!0)}),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[i.context._uid]={onClick:s,onMousedown:a}},unbind(t,e,i){t._clickOutside&&(o(t,e=>{var s;if(!e||!(null===(s=t._clickOutside)||void 0===s?void 0:s[i.context._uid]))return;const{onClick:a,onMousedown:l}=t._clickOutside[i.context._uid];e.removeEventListener("click",a,!0),e.removeEventListener("mousedown",l,!0)}),delete t._clickOutside[i.context._uid])}};e["a"]=u},ba0d:function(t,e,i){"use strict";i("3c65"),i("14d9"),i("9e29");var s=i("c37a"),a=i("0789"),l=i("58df"),n=i("297c"),r=i("a293"),o=i("80d2"),u=i("d9bd");e["a"]=Object(l["a"])(s["a"],n["a"]).extend({name:"v-slider",directives:{ClickOutside:r["a"]},mixins:[n["a"]],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:t=>"boolean"===typeof t||"always"===t},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:()=>[]},ticks:{type:[Boolean,String],default:!1,validator:t=>"boolean"===typeof t||"always"===t},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:()=>({app:null,oldValue:null,thumbPressed:!1,mouseTimeout:-1,isFocused:!1,isActive:!1,noClick:!1,startOffset:0}),computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel}},internalValue:{get(){return this.lazyValue},set(t){t=isNaN(t)?this.minValue:t;const e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition(){return this.thumbPressed?this.showTicks||this.stepNumeric?"0.1s cubic-bezier(0.25, 0.8, 0.5, 1)":"none":""},minValue(){return parseFloat(this.min)},maxValue(){return parseFloat(this.max)},stepNumeric(){return this.step>0?parseFloat(this.step):0},inputWidth(){const t=(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100;return isNaN(t)?0:t},trackFillStyles(){const t=this.vertical?"bottom":"left",e=this.vertical?"top":"right",i=this.vertical?"height":"width",s=this.$vuetify.rtl?"auto":"0",a=this.$vuetify.rtl?"0":"auto",l=this.isDisabled?`calc(${this.inputWidth}% - 10px)`:this.inputWidth+"%";return{transition:this.trackTransition,[t]:s,[e]:a,[i]:l}},trackStyles(){const t=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",e=this.vertical?"height":"width",i="0px",s=this.isDisabled?`calc(${100-this.inputWidth}% - 10px)`:`calc(${100-this.inputWidth}%)`;return{transition:this.trackTransition,[t]:i,[e]:s}},showTicks(){return this.tickLabels.length>0||!(this.isDisabled||!this.stepNumeric||!this.ticks)},numTicks(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel(){return!this.isDisabled&&!(!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor(){if(!this.isDisabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor(){if(!this.isDisabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min(t){const e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max(t){const e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler(t){this.internalValue=t},immediate:!0}},mounted(){this.app=document.querySelector("[data-app]")||Object(u["c"])("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot(){const t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider(){return this.$createElement("div",{class:{"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.isDisabled,"v-slider--readonly":this.isReadonly,...this.themeClasses},directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick,mousedown:this.onSliderMouseDown,touchstart:this.onSliderMouseDown}},this.genChildren())},genChildren(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onFocus,this.onBlur)]},genInput(){return this.$createElement("input",{attrs:{value:this.internalValue,id:this.computedId,disabled:!0,readonly:!0,tabindex:-1,...this.$attrs}})},genTrackContainer(){const t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps(){if(!this.step||!this.showTicks)return null;const t=parseFloat(this.tickSize),e=Object(o["j"])(this.numTicks+1),i=this.vertical?"bottom":this.$vuetify.rtl?"right":"left",s=this.vertical?this.$vuetify.rtl?"left":"right":"top";this.vertical&&e.reverse();const a=e.map(e=>{const a=[];this.tickLabels[e]&&a.push(this.$createElement("div",{staticClass:"v-slider__tick-label"},this.tickLabels[e]));const l=e*(100/this.numTicks),n=this.$vuetify.rtl?100-this.inputWidth<l:l<this.inputWidth;return this.$createElement("span",{key:e,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":n},style:{width:t+"px",height:t+"px",[i]:`calc(${l}% - ${t/2}px)`,[s]:`calc(50% - ${t/2}px)`}},a)});return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},a)},genThumbContainer(t,e,i,s,a,l,n="thumb"){const r=[this.genThumb()],o=this.genThumbLabelContent(t);return this.showThumbLabel&&r.push(this.genThumbLabel(o)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:n,key:n,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":i,"v-slider__thumb-container--focused":s,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:{role:"slider",tabindex:this.isDisabled?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.$attrs["aria-label"]||this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.isReadonly),"aria-orientation":this.vertical?"vertical":"horizontal"},on:{focus:a,blur:l,keydown:this.onKeyDown}}),r)},genThumbLabelContent(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel(t){const e=Object(o["i"])(this.thumbSize),i=this.vertical?`translateY(20%) translateY(${Number(this.thumbSize)/3-1}px) translateX(55%) rotate(135deg)`:"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(a["e"],{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e,transform:i}}),[this.$createElement("div",t)])])])},genThumb(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles(t){const e=this.vertical?"top":"left";let i=this.$vuetify.rtl?100-t:t;return i=this.vertical?100-i:i,{transition:this.trackTransition,[e]:i+"%"}},onSliderMouseDown(t){var e;if(t.preventDefault(),this.oldValue=this.internalValue,this.isActive=!0,null===(e=t.target)||void 0===e?void 0:e.matches(".v-slider__thumb-container, .v-slider__thumb-container *")){this.thumbPressed=!0;const e=t.target.getBoundingClientRect(),i="touches"in t?t.touches[0]:t;this.startOffset=this.vertical?i.clientY-(e.top+e.height/2):i.clientX-(e.left+e.width/2)}else this.startOffset=0,window.clearTimeout(this.mouseTimeout),this.mouseTimeout=window.setTimeout(()=>{this.thumbPressed=!0},300);const i=!o["D"]||{passive:!0,capture:!0},s=!!o["D"]&&{passive:!0},a="touches"in t;this.onMouseMove(t),this.app.addEventListener(a?"touchmove":"mousemove",this.onMouseMove,s),Object(o["a"])(this.app,a?"touchend":"mouseup",this.onSliderMouseUp,i),this.$emit("start",this.internalValue)},onSliderMouseUp(t){t.stopPropagation(),window.clearTimeout(this.mouseTimeout),this.thumbPressed=!1;const e=!!o["D"]&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("mouseup",t),this.$emit("end",this.internalValue),Object(o["l"])(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove(t){"mousemove"===t.type&&(this.thumbPressed=!0),this.internalValue=this.parseMouseMove(t)},onKeyDown(t){if(!this.isInteractive)return;const e=this.parseKeyDown(t,this.internalValue);null==e||e<this.minValue||e>this.maxValue||(this.internalValue=e,this.$emit("change",e))},onSliderClick(t){if(this.noClick)return void(this.noClick=!1);const e=this.$refs.thumb;e.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove(t){const e=this.vertical?"top":"left",i=this.vertical?"height":"width",s=this.vertical?"clientY":"clientX",{[e]:a,[i]:l}=this.$refs.track.getBoundingClientRect(),n="touches"in t?t.touches[0][s]:t[s];let r=Math.min(Math.max((n-a-this.startOffset)/l,0),1)||0;return this.vertical&&(r=1-r),this.$vuetify.rtl&&(r=1-r),parseFloat(this.min)+r*(this.maxValue-this.minValue)},parseKeyDown(t,e){if(!this.isInteractive)return;const{pageup:i,pagedown:s,end:a,home:l,left:n,right:r,down:u,up:c}=o["z"];if(![i,s,a,l,n,r,u,c].includes(t.keyCode))return;t.preventDefault();const h=this.stepNumeric||1,d=(this.maxValue-this.minValue)/h;if([n,r,u,c].includes(t.keyCode)){const i=this.$vuetify.rtl?[n,c]:[r,c],s=i.includes(t.keyCode)?1:-1,a=t.shiftKey?3:t.ctrlKey?2:1;e+=s*h*a}else if(t.keyCode===l)e=this.minValue;else if(t.keyCode===a)e=this.maxValue;else{const i=t.keyCode===s?1:-1;e-=i*h*(d>100?d/10:10)}return e},roundValue(t){if(!this.stepNumeric)return t;const e=this.step.toString().trim(),i=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,s=this.minValue%this.stepNumeric,a=Math.round((t-s)/this.stepNumeric)*this.stepNumeric+s;return parseFloat(Math.min(a,this.maxValue).toFixed(i))}}})},dc22:function(t,e,i){"use strict";function s(t,e,i){const s=e.value,a=e.options||{passive:!0};window.addEventListener("resize",s,a),t._onResize=Object(t._onResize),t._onResize[i.context._uid]={callback:s,options:a},e.modifiers&&e.modifiers.quiet||s()}function a(t,e,i){var s;if(!(null===(s=t._onResize)||void 0===s?void 0:s[i.context._uid]))return;const{callback:a,options:l}=t._onResize[i.context._uid];window.removeEventListener("resize",a,l),delete t._onResize[i.context._uid]}const l={inserted:s,unbind:a};e["a"]=l},dd89:function(t,e,i){"use strict";function s(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}i.d(e,"a",(function(){return s}))}}]);
//# sourceMappingURL=chunk-82883180.25f87107.js.map