(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24c4bd4c"],{"1f4f":function(t,e,s){"use strict";s("8b37");var a=s("80d2"),i=s("7560"),r=s("58df");e["a"]=Object(r["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["i"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"20f6":function(t,e,s){},"2fa4":function(t,e,s){"use strict";s("20f6");var a=s("80d2");e["a"]=Object(a["k"])("spacer","div","v-spacer")},"3a2f":function(t,e,s){"use strict";s("9734");var a=s("4ad4"),i=s("a9ad"),r=s("16b7"),o=s("b848"),n=s("f573"),l=s("80d2"),h=s("d9bd"),d=s("58df");e["a"]=Object(d["a"])(i["a"],r["a"],o["a"],n["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,s=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?t.offsetLeft:t.left;let i=0;return this.top||this.bottom||s?i=a+t.width/2-e.width/2:(this.left||this.right)&&(i=a+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(i-=parseInt(this.nudgeLeft)),this.nudgeRight&&(i+=parseInt(this.nudgeRight)),this.calcXOverflow(i,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,s=!1!==this.attach?t.offsetTop:t.top;let a=0;return this.top||this.bottom?a=s+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=s+t.height/2-e.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),!1===this.attach&&(a+=this.pageYOffset),this.calcYOverflow(a)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(l["i"])(this.maxWidth),minWidth:Object(l["i"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(l["u"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=a["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===l["z"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})},"5ccd":function(t,e,s){t.exports=s.p+"img/003-man-1.bb0f93ac.svg"},"6d7e":function(t,e,s){t.exports=s.p+"img/002-woman.229286b1.svg"},"7d6d":function(t,e,s){t.exports=s.p+"img/004-bald.c07027fb.svg"},"7f2e":function(t,e,s){"use strict";s("14d9");var a=s("a9ad"),i=s("58df");function r(t,e){const{minX:s,maxX:a,minY:i,maxY:r}=e,o=t.length,n=Math.max(...t),l=Math.min(...t),h=(a-s)/(o-1),d=(r-i)/(n-l||1);return t.map((t,e)=>({x:s+e*h,y:r-(t-l)*d,value:t}))}function o(t,e){const{minX:s,maxX:a,minY:i,maxY:r}=e,o=t.length;let n=Math.max(...t),l=Math.min(...t);l>0&&(l=0),n<0&&(n=0);const h=a/o,d=(r-i)/(n-l||1),c=r-Math.abs(l*d);return t.map((t,e)=>{const a=Math.abs(d*t);return{x:s+e*h,y:c-a+ +(t<0)*a,height:a,value:t}})}function n(t){return parseInt(t,10)}function l(t,e,s){return n(t.x+s.x)===n(2*e.x)&&n(t.y+s.y)===n(2*e.y)}function h(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function d(t,e,s){const a={x:t.x-e.x,y:t.y-e.y},i=Math.sqrt(a.x*a.x+a.y*a.y),r={x:a.x/i,y:a.y/i};return{x:e.x+r.x*s,y:e.y+r.y*s}}function c(t,e,s=!1,a=75){const i=t.shift(),r=t[t.length-1];return(s?`M${i.x} ${a-i.x+2} L${i.x} ${i.y}`:`M${i.x} ${i.y}`)+t.map((s,a)=>{const r=t[a+1],o=t[a-1]||i,n=r&&l(r,s,o);if(!r||n)return`L${s.x} ${s.y}`;const c=Math.min(h(o,s),h(r,s)),u=c/2<e,p=u?c/2:e,m=d(o,s,p),g=d(r,s,p);return`L${m.x} ${m.y}S${s.x} ${s.y} ${g.x} ${g.y}`}).join("")+(s?`L${r.x} ${a-i.x+2} Z`:"")}e["a"]=Object(i["a"])(a["a"]).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:()=>[]},gradientDirection:{type:String,validator:t=>["top","bottom","left","right"].includes(t),default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:()=>[]},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:t=>["trend","bar"].includes(t)},value:{type:Array,default:()=>[]},width:{type:[Number,String],default:300}},data:()=>({lastLength:0}),computed:{parsedPadding(){return Number(this.padding)},parsedWidth(){return Number(this.width)},parsedHeight(){return parseInt(this.height,10)},parsedLabelSize(){return parseInt(this.labelSize,10)||7},totalHeight(){let t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth(){let t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues(){return this.value.length},_lineWidth(){if(this.autoLineWidth&&"trend"!==this.type){const t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};const t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels(){const t=[],e=this._values,s=e.length;for(let a=0;t.length<s;a++){const s=e[a];let i=this.labels[a];i||(i="object"===typeof s?s.value:s),t.push({x:s.x,value:String(i)})}return t},normalizedValues(){return this.value.map(t=>"number"===typeof t?t:t.value)},_values(){return"trend"===this.type?r(this.normalizedValues,this.boundary):o(this.normalizedValues,this.boundary)},textY(){let t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler(){this.$nextTick(()=>{if(!this.autoDraw||"bar"===this.type||!this.$refs.path)return;const t=this.$refs.path,e=t.getTotalLength();this.fill?(t.style.transformOrigin="bottom center",t.style.transition="none",t.style.transform="scaleY(0)",t.getBoundingClientRect(),t.style.transition=`transform ${this.autoDrawDuration}ms ${this.autoDrawEasing}`,t.style.transform="scaleY(1)"):(t.style.transition="none",t.style.strokeDasharray=e+" "+e,t.style.strokeDashoffset=Math.abs(e-(this.lastLength||0)).toString(),t.getBoundingClientRect(),t.style.transition=`stroke-dashoffset ${this.autoDrawDuration}ms ${this.autoDrawEasing}`,t.style.strokeDashoffset="0"),this.lastLength=e})}}},methods:{genGradient(){const t=this.gradientDirection,e=this.gradient.slice();e.length||e.push("");const s=Math.max(e.length-1,1),a=e.reverse().map((t,e)=>this.$createElement("stop",{attrs:{offset:e/s,"stop-color":t||"currentColor"}}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===t?"100%":"0",y1:"top"===t?"100%":"0",x2:"right"===t?"100%":"0",y2:"bottom"===t?"100%":"0"}},a)])},genG(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath(){const t=r(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:c(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?`url(#${this._uid})`:"none",stroke:this.fill?"none":`url(#${this._uid})`},ref:"path"})},genLabels(t){const e=this.parsedLabels.map((e,s)=>this.$createElement("text",{attrs:{x:e.x+t+this._lineWidth/2,y:this.textY+.75*this.parsedLabelSize,"font-size":Number(this.labelSize)||7}},[this.genLabel(e,s)]));return this.genG(e)},genLabel(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars(){if(!this.value||this.totalValues<2)return;const t=o(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:`0 0 ${this.totalWidth} ${this.totalHeight}`}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":`url(#sparkline-bar-${this._uid}-clip)`,fill:`url(#${this._uid})`}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])},genClipPath(t,e,s,a){const i="number"===typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:a+"-clip"}},t.map(t=>this.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:s,height:t.height,rx:i,ry:i}},[this.autoDraw?this.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:this.autoDrawDuration+"ms",fill:"freeze"}}):void 0])))},genTrend(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:{...this.$attrs,display:"block","stroke-width":this._lineWidth||1,viewBox:`0 0 ${this.width} ${this.totalHeight}`}}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}})},"8b37":function(t,e,s){},"8bb9":function(t,e,s){t.exports=s.p+"img/001-man.934ab19f.svg"},"8f9d":function(t,e,s){t.exports=s.p+"img/007-woman-2.a828024a.svg"},"8fea":function(t,e,s){"use strict";s("3c65"),s("13d5"),s("14d9"),s("91f4");var a=s("4a1a"),i=s("c377"),r=s("f41f"),o=s("afdd"),n=(s("f823"),s("58df")),l=s("b974"),h=s("34ef"),d=s("9d26"),c=s("9e88"),u=s("5607"),p=Object(n["a"])().extend({directives:{ripple:u["a"]},props:{headers:{type:Array,default:()=>[]},options:{type:Object,default:()=>({page:1,itemsPerPage:10,sortBy:[],sortDesc:[],groupBy:[],groupDesc:[],multiSort:!1,mustSort:!1})},checkboxColor:String,sortIcon:{type:String,default:"$sort"},everyItem:Boolean,someItems:Boolean,showGroupBy:Boolean,singleSelect:Boolean,disableSort:Boolean},methods:{genSelectAll(){var t;const e={props:{value:this.everyItem,indeterminate:!this.everyItem&&this.someItems,color:null!==(t=this.checkboxColor)&&void 0!==t?t:""},on:{input:t=>this.$emit("toggle-select-all",t)}};return this.$scopedSlots["data-table-select"]?this.$scopedSlots["data-table-select"](e):this.$createElement(c["a"],{staticClass:"v-data-table__checkbox",...e})},genSortIcon(){return this.$createElement(d["a"],{staticClass:"v-data-table-header__icon",props:{size:18}},[this.sortIcon])}}}),m=s("80d2"),g=Object(n["a"])(p).extend({name:"v-data-table-header-mobile",props:{sortByText:{type:String,default:"$vuetify.dataTable.sortBy"}},methods:{genSortChip(t){const e=[t.item.text],s=this.options.sortBy.findIndex(e=>e===t.item.value),a=s>=0,i=this.options.sortDesc[s];return e.push(this.$createElement("div",{staticClass:"v-chip__close",class:{sortable:!0,active:a,asc:a&&!i,desc:a&&i}},[this.genSortIcon()])),this.$createElement(h["a"],{staticClass:"sortable",on:{click:e=>{e.stopPropagation(),this.$emit("sort",t.item.value)}}},e)},genSortSelect(t){return this.$createElement(l["a"],{props:{label:this.$vuetify.lang.t(this.sortByText),items:t,hideDetails:!0,multiple:this.options.multiSort,value:this.options.multiSort?this.options.sortBy:this.options.sortBy[0],menuProps:{closeOnContentClick:!0}},on:{change:t=>this.$emit("sort",t)},scopedSlots:{selection:t=>this.genSortChip(t)}})}},render(t){const e=[],s=this.headers.find(t=>"data-table-select"===t.value);s&&!this.singleSelect&&e.push(this.$createElement("div",{class:["v-data-table-header-mobile__select",...Object(m["J"])(s.class)],attrs:{width:s.width}},[this.genSelectAll()]));const a=this.headers.filter(t=>!1!==t.sortable&&"data-table-select"!==t.value).map(t=>({text:t.text,value:t.value}));!this.disableSort&&a.length&&e.push(this.genSortSelect(a));const i=e.length?t("th",[t("div",{staticClass:"v-data-table-header-mobile__wrapper"},e)]):void 0,r=t("tr",[i]);return t("thead",{staticClass:"v-data-table-header v-data-table-header-mobile"},[r])}}),b=Object(n["a"])(p).extend({name:"v-data-table-header-desktop",methods:{genGroupByToggle(t){return this.$createElement("span",{on:{click:e=>{e.stopPropagation(),this.$emit("group",t.value)}}},["group"])},getAria(t,e){const s=t=>this.$vuetify.lang.t("$vuetify.dataTable.ariaLabel."+t);let a="none",i=[s("sortNone"),s("activateAscending")];return t?(e?(a="descending",i=[s("sortDescending"),s(this.options.mustSort?"activateAscending":"activateNone")]):(a="ascending",i=[s("sortAscending"),s("activateDescending")]),{ariaSort:a,ariaLabel:i.join(" ")}):{ariaSort:a,ariaLabel:i.join(" ")}},genHeader(t){const e={attrs:{role:"columnheader",scope:"col","aria-label":t.text||""},style:{width:Object(m["i"])(t.width),minWidth:Object(m["i"])(t.width)},class:["text-"+(t.align||"start"),...Object(m["J"])(t.class),t.divider&&"v-data-table__divider"],on:{}},s=[];if("data-table-select"===t.value&&!this.singleSelect)return this.$createElement("th",e,[this.genSelectAll()]);if(s.push(this.$scopedSlots.hasOwnProperty(t.value)?this.$scopedSlots[t.value]({header:t}):this.$createElement("span",[t.text])),!this.disableSort&&(t.sortable||!t.hasOwnProperty("sortable"))){e.on.click=()=>this.$emit("sort",t.value);const a=this.options.sortBy.findIndex(e=>e===t.value),i=a>=0,r=this.options.sortDesc[a];e.class.push("sortable");const{ariaLabel:o,ariaSort:n}=this.getAria(i,r);e.attrs["aria-label"]+=`${t.text?": ":""}${o}`,e.attrs["aria-sort"]=n,i&&(e.class.push("active"),e.class.push(r?"desc":"asc")),"end"===t.align?s.unshift(this.genSortIcon()):s.push(this.genSortIcon()),this.options.multiSort&&i&&s.push(this.$createElement("span",{class:"v-data-table-header__sort-badge"},[String(a+1)]))}return this.showGroupBy&&!1!==t.groupable&&s.push(this.genGroupByToggle(t)),this.$createElement("th",e,s)}},render(){return this.$createElement("thead",{staticClass:"v-data-table-header"},[this.$createElement("tr",this.headers.map(t=>this.genHeader(t)))])}});function f(t){if(t.model&&t.on&&t.on.input)if(Array.isArray(t.on.input)){const e=t.on.input.indexOf(t.model.callback);e>-1&&t.on.input.splice(e,1)}else delete t.on.input}var v=s("d9f7");function y(t,e){const s=[];for(const a in t)t.hasOwnProperty(a)&&s.push(e("template",{slot:a},t[a]));return s}var x=s("2b0e"),$=x["a"].extend({name:"v-data-table-header",functional:!0,props:{...p.options.props,mobile:Boolean},render(t,{props:e,data:s,slots:a}){f(s);const i=y(a(),t);return s=Object(v["a"])(s,{props:e}),e.mobile?t(g,s,i):t(b,s,i)}});function S(t){var e;return 1!==t.length||!["td","th"].includes(null===(e=t[0])||void 0===e?void 0:e.tag)}var w=x["a"].extend({name:"row",functional:!0,props:{headers:Array,index:Number,item:Object,rtl:Boolean},render(t,{props:e,slots:s,data:a}){const i=s(),r=e.headers.map(s=>{const r=[],o=Object(m["q"])(e.item,s.value),n=s.value,l=a.scopedSlots&&a.scopedSlots.hasOwnProperty(n)&&a.scopedSlots[n],h=i.hasOwnProperty(n)&&i[n];l?r.push(...Object(m["J"])(l({item:e.item,isMobile:!1,header:s,index:e.index,value:o}))):h?r.push(...Object(m["J"])(h)):r.push(null==o?o:String(o));const d="text-"+(s.align||"start");return S(r)?t("td",{class:[d,s.cellClass,{"v-data-table__divider":s.divider}]},r):r});return t("tr",a,r)}}),_=x["a"].extend({name:"row-group",functional:!0,props:{value:{type:Boolean,default:!0},headerClass:{type:String,default:"v-row-group__header"},contentClass:String,summaryClass:{type:String,default:"v-row-group__summary"}},render(t,{slots:e,props:s}){const a=e(),i=[];return a["column.header"]?i.push(t("tr",{staticClass:s.headerClass},a["column.header"])):a["row.header"]&&i.push(...a["row.header"]),a["row.content"]&&s.value&&i.push(...a["row.content"]),a["column.summary"]?i.push(t("tr",{staticClass:s.summaryClass},a["column.summary"])):a["row.summary"]&&i.push(...a["row.summary"]),i}}),C=s("1f4f"),E=x["a"].extend({name:"row",functional:!0,props:{headers:Array,hideDefaultHeader:Boolean,index:Number,item:Object,rtl:Boolean},render(t,{props:e,slots:s,data:a}){const i=s(),r=e.headers.map(s=>{const r={"v-data-table__mobile-row":!0},o=[],n=Object(m["q"])(e.item,s.value),l=s.value,h=a.scopedSlots&&a.scopedSlots.hasOwnProperty(l)&&a.scopedSlots[l],d=i.hasOwnProperty(l)&&i[l];h?o.push(h({item:e.item,isMobile:!0,header:s,index:e.index,value:n})):d?o.push(d):o.push(null==n?n:String(n));const c=[t("div",{staticClass:"v-data-table__mobile-row__cell"},o)];return"dataTableSelect"===s.value||e.hideDefaultHeader||c.unshift(t("div",{staticClass:"v-data-table__mobile-row__header"},[s.text])),t("td",{class:r},c)});return t("tr",{...a,staticClass:"v-data-table__mobile-table-row"},r)}}),O=s("297c"),B=s("d9bd");function D(t,e,s){return a=>{const i=Object(m["q"])(t,a.value);return a.filter?a.filter(i,e,t):s(i,e,t)}}function k(t,e,s,a,i){return e="string"===typeof e?e.trim():null,t.filter(t=>{const r=s.every(D(t,e,m["m"])),o=!e||a.some(D(t,e,i));return r&&o})}e["a"]=Object(n["a"])(i["a"],O["a"]).extend({name:"v-data-table",directives:{ripple:u["a"]},props:{headers:{type:Array,default:()=>[]},showSelect:Boolean,checkboxColor:String,showExpand:Boolean,showGroupBy:Boolean,height:[Number,String],hideDefaultHeader:Boolean,caption:String,dense:Boolean,headerProps:Object,calculateWidths:Boolean,fixedHeader:Boolean,headersLength:Number,expandIcon:{type:String,default:"$expand"},customFilter:{type:Function,default:m["m"]},itemClass:{type:[String,Function],default:()=>""},loaderHeight:{type:[Number,String],default:4}},data(){return{internalGroupBy:[],openCache:{},widths:[]}},computed:{computedHeaders(){if(!this.headers)return[];const t=this.headers.filter(t=>void 0===t.value||!this.internalGroupBy.find(e=>e===t.value)),e={text:"",sortable:!1,width:"1px"};if(this.showSelect){const s=t.findIndex(t=>"data-table-select"===t.value);s<0?t.unshift({...e,value:"data-table-select"}):t.splice(s,1,{...e,...t[s]})}if(this.showExpand){const s=t.findIndex(t=>"data-table-expand"===t.value);s<0?t.unshift({...e,value:"data-table-expand"}):t.splice(s,1,{...e,...t[s]})}return t},colspanAttrs(){return this.isMobile?void 0:{colspan:this.headersLength||this.computedHeaders.length}},columnSorters(){return this.computedHeaders.reduce((t,e)=>(e.sort&&(t[e.value]=e.sort),t),{})},headersWithCustomFilters(){return this.headers.filter(t=>t.filter&&(!t.hasOwnProperty("filterable")||!0===t.filterable))},headersWithoutCustomFilters(){return this.headers.filter(t=>!t.filter&&(!t.hasOwnProperty("filterable")||!0===t.filterable))},sanitizedHeaderProps(){return Object(m["e"])(this.headerProps)},computedItemsPerPage(){const t=this.options&&this.options.itemsPerPage?this.options.itemsPerPage:this.itemsPerPage,e=this.sanitizedFooterProps.itemsPerPageOptions;if(e&&!e.find(e=>"number"===typeof e?e===t:e.value===t)){const t=e[0];return"object"===typeof t?t.value:t}return t},groupByText(){var t,e,s;return null!==(s=null===(e=null===(t=this.headers)||void 0===t?void 0:t.find(t=>{var e;return t.value===(null===(e=this.internalGroupBy)||void 0===e?void 0:e[0])}))||void 0===e?void 0:e.text)&&void 0!==s?s:""}},created(){const t=[["sort-icon","header-props.sort-icon"],["hide-headers","hide-default-header"],["select-all","show-select"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(B["a"])(t,e,this)})},mounted(){this.calculateWidths&&(window.addEventListener("resize",this.calcWidths),this.calcWidths())},beforeDestroy(){this.calculateWidths&&window.removeEventListener("resize",this.calcWidths)},methods:{calcWidths(){this.widths=Array.from(this.$el.querySelectorAll("th")).map(t=>t.clientWidth)},customFilterWithColumns(t,e){return k(t,e,this.headersWithCustomFilters,this.headersWithoutCustomFilters,this.customFilter)},customSortWithHeaders(t,e,s,a){return this.customSort(t,e,s,a,this.columnSorters)},createItemProps(t,e){const s=i["a"].options.methods.createItemProps.call(this,t,e);return Object.assign(s,{headers:this.computedHeaders})},genCaption(t){return this.caption?[this.$createElement("caption",[this.caption])]:Object(m["t"])(this,"caption",t,!0)},genColgroup(t){return this.$createElement("colgroup",this.computedHeaders.map(t=>this.$createElement("col",{class:{divider:t.divider}})))},genLoading(){const t=this.$createElement("th",{staticClass:"column",attrs:this.colspanAttrs},[this.genProgress()]),e=this.$createElement("tr",{staticClass:"v-data-table__progress"},[t]);return this.$createElement("thead",[e])},genHeaders(t){const e={props:{...this.sanitizedHeaderProps,headers:this.computedHeaders,options:t.options,mobile:this.isMobile,showGroupBy:this.showGroupBy,checkboxColor:this.checkboxColor,someItems:this.someItems,everyItem:this.everyItem,singleSelect:this.singleSelect,disableSort:this.disableSort},on:{sort:t.sort,group:t.group,"toggle-select-all":this.toggleSelectAll}},s=[Object(m["t"])(this,"header",{...e,isMobile:this.isMobile})];if(!this.hideDefaultHeader){const t=Object(m["r"])("header.",this.$scopedSlots);s.push(this.$createElement($,{...e,scopedSlots:t}))}return this.loading&&s.push(this.genLoading()),s},genEmptyWrapper(t){return this.$createElement("tr",{staticClass:"v-data-table__empty-wrapper"},[this.$createElement("td",{attrs:this.colspanAttrs},t)])},genItems(t,e){const s=this.genEmpty(e.originalItemsLength,e.pagination.itemsLength);return s?[s]:e.groupedItems?this.genGroupedRows(e.groupedItems,e):this.genRows(t,e)},genGroupedRows(t,e){return t.map(t=>(this.openCache.hasOwnProperty(t.name)||this.$set(this.openCache,t.name,!0),this.$scopedSlots.group?this.$scopedSlots.group({group:t.name,options:e.options,isMobile:this.isMobile,items:t.items,headers:this.computedHeaders}):this.genDefaultGroupedRow(t.name,t.items,e)))},genDefaultGroupedRow(t,e,s){const a=!!this.openCache[t],i=[this.$createElement("template",{slot:"row.content"},this.genRows(e,s))],r=()=>this.$set(this.openCache,t,!this.openCache[t]),n=()=>s.updateOptions({groupBy:[],groupDesc:[]});if(this.$scopedSlots["group.header"])i.unshift(this.$createElement("template",{slot:"column.header"},[this.$scopedSlots["group.header"]({group:t,groupBy:s.options.groupBy,isMobile:this.isMobile,items:e,headers:this.computedHeaders,isOpen:a,toggle:r,remove:n})]));else{const e=this.$createElement(o["a"],{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:r}},[this.$createElement(d["a"],[a?"$minus":"$plus"])]),s=this.$createElement(o["a"],{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:n}},[this.$createElement(d["a"],["$close"])]),l=this.$createElement("td",{staticClass:"text-start",attrs:this.colspanAttrs},[e,`${this.groupByText}: ${t}`,s]);i.unshift(this.$createElement("template",{slot:"column.header"},[l]))}return this.$scopedSlots["group.summary"]&&i.push(this.$createElement("template",{slot:"column.summary"},[this.$scopedSlots["group.summary"]({group:t,groupBy:s.options.groupBy,isMobile:this.isMobile,items:e,headers:this.computedHeaders,isOpen:a,toggle:r})])),this.$createElement(_,{key:t,props:{value:a}},i)},genRows(t,e){return this.$scopedSlots.item?this.genScopedRows(t,e):this.genDefaultRows(t,e)},genScopedRows(t,e){const s=[];for(let a=0;a<t.length;a++){const e=t[a];s.push(this.$scopedSlots.item({...this.createItemProps(e,a),isMobile:this.isMobile})),this.isExpanded(e)&&s.push(this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,index:a,item:e}))}return s},genDefaultRows(t,e){return this.$scopedSlots["expanded-item"]?t.map((t,e)=>this.genDefaultExpandedRow(t,e)):t.map((t,e)=>this.genDefaultSimpleRow(t,e))},genDefaultExpandedRow(t,e){const s=this.isExpanded(t),a={"v-data-table__expanded v-data-table__expanded__row":s},i=this.genDefaultSimpleRow(t,e,a),r=this.$createElement("tr",{staticClass:"v-data-table__expanded v-data-table__expanded__content"},[this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,item:t})]);return this.$createElement(_,{props:{value:s}},[this.$createElement("template",{slot:"row.header"},[i]),this.$createElement("template",{slot:"row.content"},[r])])},genDefaultSimpleRow(t,e,s={}){const a=Object(m["r"])("item.",this.$scopedSlots),i=this.createItemProps(t,e);if(this.showSelect){const e=a["data-table-select"];a["data-table-select"]=e?()=>e({...i,isMobile:this.isMobile}):()=>{var e;return this.$createElement(c["a"],{staticClass:"v-data-table__checkbox",props:{value:i.isSelected,disabled:!this.isSelectable(t),color:null!==(e=this.checkboxColor)&&void 0!==e?e:""},on:{input:t=>i.select(t)}})}}if(this.showExpand){const t=a["data-table-expand"];a["data-table-expand"]=t?()=>t(i):()=>this.$createElement(d["a"],{staticClass:"v-data-table__expand-icon",class:{"v-data-table__expand-icon--active":i.isExpanded},on:{click:t=>{t.stopPropagation(),i.expand(!i.isExpanded)}}},[this.expandIcon])}return this.$createElement(this.isMobile?E:w,{key:Object(m["q"])(t,this.itemKey),class:Object(v["b"])({...s,"v-data-table__selected":i.isSelected},Object(m["s"])(t,this.itemClass)),props:{headers:this.computedHeaders,hideDefaultHeader:this.hideDefaultHeader,index:e,item:t,rtl:this.$vuetify.rtl},scopedSlots:a,on:{click:e=>this.$emit("click:row",t,i,e),contextmenu:t=>this.$emit("contextmenu:row",t,i),dblclick:t=>this.$emit("dblclick:row",t,i)}})},genBody(t){const e={...t,expand:this.expand,headers:this.computedHeaders,isExpanded:this.isExpanded,isMobile:this.isMobile,isSelected:this.isSelected,select:this.select};return this.$scopedSlots.body?this.$scopedSlots.body(e):this.$createElement("tbody",[Object(m["t"])(this,"body.prepend",e,!0),this.genItems(t.items,t),Object(m["t"])(this,"body.append",e,!0)])},genFoot(t){var e,s;return null===(s=(e=this.$scopedSlots).foot)||void 0===s?void 0:s.call(e,t)},genFooters(t){const e={props:{options:t.options,pagination:t.pagination,itemsPerPageText:"$vuetify.dataTable.itemsPerPageText",...this.sanitizedFooterProps},on:{"update:options":e=>t.updateOptions(e)},widths:this.widths,headers:this.computedHeaders},s=[Object(m["t"])(this,"footer",e,!0)];return this.hideDefaultFooter||s.push(this.$createElement(r["a"],{...e,scopedSlots:Object(m["r"])("footer.",this.$scopedSlots)})),s},genDefaultScopedSlot(t){const e={height:this.height,fixedHeader:this.fixedHeader,dense:this.dense};return this.$createElement(C["a"],{props:e,class:{"v-data-table--mobile":this.isMobile}},[this.proxySlot("top",Object(m["t"])(this,"top",{...t,isMobile:this.isMobile},!0)),this.genCaption(t),this.genColgroup(t),this.genHeaders(t),this.genBody(t),this.genFoot(t),this.proxySlot("bottom",this.genFooters(t))])},proxySlot(t,e){return this.$createElement("template",{slot:t},e)}},render(){return this.$createElement(a["a"],{props:{...this.$props,customFilter:this.customFilterWithColumns,customSort:this.customSortWithHeaders,itemsPerPage:this.computedItemsPerPage},on:{"update:options":(t,e)=>{this.internalGroupBy=t.groupBy||[],!Object(m["l"])(t,e)&&this.$emit("update:options",t)},"update:page":t=>this.$emit("update:page",t),"update:items-per-page":t=>this.$emit("update:items-per-page",t),"update:sort-by":t=>this.$emit("update:sort-by",t),"update:sort-desc":t=>this.$emit("update:sort-desc",t),"update:group-by":t=>this.$emit("update:group-by",t),"update:group-desc":t=>this.$emit("update:group-desc",t),pagination:(t,e)=>!Object(m["l"])(t,e)&&this.$emit("pagination",t),"current-items":t=>{this.internalCurrentItems=t,this.$emit("current-items",t)},"page-count":t=>this.$emit("page-count",t)},scopedSlots:{default:this.genDefaultScopedSlot}})}})},"91f4":function(t,e,s){},9734:function(t,e,s){},ab46:function(t,e,s){"use strict";s.r(e);var a=s("8212"),i=s("8336"),r=s("99d9"),o=s("62ad"),n=s("8fea"),l=s("132d"),h=s("0fd9"),d=s("2fa4"),c=s("7f2e"),u=s("8654"),p=s("3a2f"),m=function(){var t=this,e=t._self._c;return e(h["a"],[e(o["a"],{attrs:{cols:"12"}},[e("base-card",[e(r["d"],[e("div",{staticClass:"d-flex justify-space-between flex-wrap"},[e(i["a"],{staticClass:"ma-2",attrs:{dark:"",color:"danger"}},[e(l["a"],[t._v("mdi-plus")]),t._v(" Add Customer ")],1),e("div",[e(i["a"],{staticClass:"ma-2",attrs:{color:"primary"}},[e(l["a"],[t._v("mdi-cog")])],1),e(i["a"],{staticClass:"ma-2",attrs:{outlined:""}},[t._v("Import")]),e(i["a"],{staticClass:"ma-2",attrs:{outlined:""}},[t._v("Export")])],1)],1)]),e(r["d"],[t._v(" Customers "),e(d["a"]),e(d["a"]),e(d["a"]),e(d["a"]),e(u["a"],{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(n["a"],{staticClass:"elevation-1 table-one",attrs:{search:t.search,headers:t.headers,items:t.desserts,"item-key":"name","show-select":"","multi-sort":""},scopedSlots:t._u([{key:"item.name",fn:function({item:s}){return[e("div",{staticClass:"d-flex align-center"},[e(a["a"],{staticClass:"mr-2",attrs:{size:"26",dark:""}},[e("img",{attrs:{src:s.img,alt:""}})]),e("p",{staticClass:"ma-0 font-weight-medium"},[t._v(" "+t._s(s.name)+" ")])],1)]}},{key:"item.action",fn:function({item:s}){return[e("div",{staticClass:"d-flex"},[e(p["a"],{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(i["a"],t._g(t._b({attrs:{color:"success",dark:"",icon:""}},"v-btn",a,!1),s),[e(l["a"],[t._v("mdi-pencil-box-outline")])],1)]}}],null,!0)},[e("span",[t._v("Edit")])]),e(p["a"],{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e(i["a"],t._g(t._b({attrs:{color:"danger",dark:"",icon:""}},"v-btn",a,!1),s),[e(l["a"],[t._v("mdi-trash-can-outline")])],1)]}}],null,!0)},[e("span",[t._v("Delete")])])],1)]}},{key:"item.iron",fn:function({item:t}){return[e(c["a"],{attrs:{value:t.value,color:"primary",height:"100",padding:"24","stroke-linecap":"round",smooth:""}})]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1)},g=[],b={metaInfo:{title:"Table Three"},data(){return{search:"",selected:[],headers:[{text:"Customer",align:"start",sortable:!1,value:"name"},{text:"Store Name",value:"calories"},{text:"Products",value:"fat"},{text:"Wallet Balance",value:"carbs"},{text:"Create Date",value:"protein"},{text:"Revenue",value:"iron"},{text:"Action",value:"action"}],desserts:[{img:s("8bb9"),name:"Jhon Doe",calories:"Walmart",fat:"95",carbs:"$14,384",protein:"03/24/2020",value:[423,446,675,510,590,610,760]},{img:s("6d7e"),name:"Elizabeth Doe",calories:"KFC",fat:"876",carbs:"$38,384",protein:"03/24/2020",value:[300,100,675,450,590,310,200]},{img:s("5ccd"),name:"Jhon Legend",calories:"Starbucks",fat:"300",carbs:"$78,384",protein:"03/24/2020",value:[100,100,675,450,590,310,200]},{img:s("7d6d"),name:"Juggernaut",calories:"Apple",fat:"700",carbs:"$78,384",protein:"03/24/2020",value:[100,100,-675,-450,590,310,200]},{img:s("8f9d"),name:"Medusa",calories:"Apple",fat:"700",carbs:"$78,384",protein:"03/24/2020",value:[600,100,675,450,290,610,400]},{img:s("8bb9"),name:"Jhon Doe two",calories:"Walmart",fat:"95",carbs:"$14,384",protein:"03/24/2020",value:[423,446,675,510,590,610,760]},{img:s("6d7e"),name:"Elizabeth Doe two",calories:"KFC",fat:"876",carbs:"$38,384",protein:"03/24/2020",value:[300,100,675,450,590,310,200]},{img:s("5ccd"),name:"Jhon Legend two",calories:"Starbucks",fat:"300",carbs:"$78,384",protein:"03/24/2020",value:[100,100,675,450,590,310,200]},{img:s("7d6d"),name:"Juggernaut two",calories:"Apple",fat:"700",carbs:"$78,384",protein:"03/24/2020",value:[100,100,-675,-450,590,310,200]},{img:s("8f9d"),name:"Medusa two",calories:"Apple",fat:"700",carbs:"$78,384",protein:"03/24/2020",value:[600,100,675,450,290,610,400]},{img:s("6d7e"),name:"Elizabeth Doe three",calories:"KFC",fat:"876",carbs:"$38,384",protein:"03/24/2020",value:[300,100,675,450,590,310,200]},{img:s("5ccd"),name:"Jhon Legend three",calories:"Starbucks",fat:"300",carbs:"$78,384",protein:"03/24/2020",value:[100,100,675,450,590,310,200]},{img:s("7d6d"),name:"Juggernaut three",calories:"Apple",fat:"700",carbs:"$78,384",protein:"03/24/2020",value:[100,100,-675,-450,590,310,200]},{img:s("8f9d"),name:"Medusa three",calories:"Apple",fat:"700",carbs:"$78,384",protein:"03/24/2020",value:[600,100,675,450,290,610,400]},{img:s("8bb9"),name:"Jhon Doe four",calories:"Walmart",fat:"95",carbs:"$14,384",protein:"03/24/2020",value:[423,446,675,510,590,610,760]},{img:s("6d7e"),name:"Elizabeth Doe four",calories:"KFC",fat:"876",carbs:"$38,384",protein:"03/24/2020",value:[300,100,675,450,590,310,200]},{img:s("5ccd"),name:"Jhon Legend four",calories:"Starbucks",fat:"300",carbs:"$78,384",protein:"03/24/2020",value:[100,100,675,450,590,310,200]},{img:s("7d6d"),name:"Juggernaut four",calories:"Apple",fat:"700",carbs:"$78,384",protein:"03/24/2020",value:[100,100,-675,-450,590,310,200]}]}}},f=b,v=(s("ee97"),s("2877")),y=Object(v["a"])(f,m,g,!1,null,"e2606e9a",null);e["default"]=y.exports},c953:function(t,e,s){},ee97:function(t,e,s){"use strict";s("c953")},f823:function(t,e,s){}}]);
//# sourceMappingURL=chunk-24c4bd4c.8dcac48a.js.map