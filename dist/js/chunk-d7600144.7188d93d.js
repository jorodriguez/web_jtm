(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7600144"],{"083a":function(e,t,i){"use strict";var s=i("0d51"),n=TypeError;e.exports=function(e,t){if(!delete e[t])throw n("Cannot delete property "+s(t)+" of "+s(e))}},"0fd9":function(e,t,i){"use strict";i("13d5"),i("14d9"),i("4b85");var s=i("2b0e"),n=i("d9f7"),a=i("80d2");const d=["sm","md","lg","xl"],r=["start","end","center"];function l(e,t){return d.reduce((i,s)=>(i[e+Object(a["I"])(s)]=t(),i),{})}const o=e=>[...r,"baseline","stretch"].includes(e),c=l("align",()=>({type:String,default:null,validator:o})),h=e=>[...r,"space-between","space-around"].includes(e),p=l("justify",()=>({type:String,default:null,validator:h})),u=e=>[...r,"space-between","space-around","stretch"].includes(e),m=l("alignContent",()=>({type:String,default:null,validator:u})),v={align:Object.keys(c),justify:Object.keys(p),alignContent:Object.keys(m)},f={align:"align",justify:"justify",alignContent:"align-content"};function b(e,t,i){let s=f[e];if(null!=i){if(t){const i=t.replace(e,"");s+="-"+i}return s+="-"+i,s.toLowerCase()}}const g=new Map;t["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:o},...c,justify:{type:String,default:null,validator:h},...p,alignContent:{type:String,default:null,validator:u},...m},render(e,{props:t,data:i,children:s}){let a="";for(const n in t)a+=String(t[n]);let d=g.get(a);if(!d){let e;for(e in d=[],v)v[e].forEach(i=>{const s=t[i],n=b(e,i,s);n&&d.push(n)});d.push({"no-gutters":t.noGutters,"row--dense":t.dense,["align-"+t.align]:t.align,["justify-"+t.justify]:t.justify,["align-content-"+t.alignContent]:t.alignContent}),g.set(a,d)}return e(t.tag,Object(n["a"])(i,{staticClass:"row",class:d}),s)}})},"1dd2":function(e,t,i){"use strict";i.r(t);var s=i("99d9"),n=i("62ad"),a=i("0fd9"),d=(i("14d9"),i("13d5"),i("fa9e"),i("3c65"),i("0789")),r=i("132d"),l=i("3206"),o=i("a9ad"),c=i("58df"),h=i("80d2");const p=Object(c["a"])(o["a"],Object(l["a"])("treeview")),u={activatable:Boolean,activeClass:{type:String,default:"v-treeview-node--active"},color:{type:String,default:"primary"},disablePerNode:Boolean,expandIcon:{type:String,default:"$subgroup"},indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},itemChildren:{type:String,default:"children"},itemDisabled:{type:String,default:"disabled"},itemKey:{type:String,default:"id"},itemText:{type:String,default:"name"},loadChildren:Function,loadingIcon:{type:String,default:"$loading"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"},openOnClick:Boolean,rounded:Boolean,selectable:Boolean,selectedColor:{type:String,default:"accent"},shaped:Boolean,transition:Boolean,selectionType:{type:String,default:"leaf",validator:e=>["leaf","independent"].includes(e)}},m=p.extend().extend({name:"v-treeview-node",inject:{treeview:{default:null}},props:{level:Number,item:{type:Object,default:()=>null},parentIsDisabled:Boolean,...u},data:()=>({hasLoaded:!1,isActive:!1,isIndeterminate:!1,isLoading:!1,isOpen:!1,isSelected:!1}),computed:{disabled(){return Object(h["q"])(this.item,this.itemDisabled)||!this.disablePerNode&&this.parentIsDisabled&&"leaf"===this.selectionType},key(){return Object(h["q"])(this.item,this.itemKey)},children(){const e=Object(h["q"])(this.item,this.itemChildren);return e&&e.filter(e=>!this.treeview.isExcluded(Object(h["q"])(e,this.itemKey)))},text(){return Object(h["q"])(this.item,this.itemText)},scopedProps(){return{item:this.item,leaf:!this.children,selected:this.isSelected,indeterminate:this.isIndeterminate,active:this.isActive,open:this.isOpen}},computedIcon(){return this.isIndeterminate?this.indeterminateIcon:this.isSelected?this.onIcon:this.offIcon},hasChildren(){return!!this.children&&(!!this.children.length||!!this.loadChildren)}},created(){this.treeview.register(this)},beforeDestroy(){this.treeview.unregister(this)},methods:{checkChildren(){return new Promise(e=>{if(!this.children||this.children.length||!this.loadChildren||this.hasLoaded)return e();this.isLoading=!0,e(this.loadChildren(this.item))}).then(()=>{this.isLoading=!1,this.hasLoaded=!0})},open(){this.isOpen=!this.isOpen,this.treeview.updateOpen(this.key,this.isOpen),this.treeview.emitOpen()},genLabel(){const e=[];return this.$scopedSlots.label?e.push(this.$scopedSlots.label(this.scopedProps)):e.push(this.text),this.$createElement("div",{slot:"label",staticClass:"v-treeview-node__label"},e)},genPrependSlot(){return this.$scopedSlots.prepend?this.$createElement("div",{staticClass:"v-treeview-node__prepend"},this.$scopedSlots.prepend(this.scopedProps)):null},genAppendSlot(){return this.$scopedSlots.append?this.$createElement("div",{staticClass:"v-treeview-node__append"},this.$scopedSlots.append(this.scopedProps)):null},genContent(){const e=[this.genPrependSlot(),this.genLabel(),this.genAppendSlot()];return this.$createElement("div",{staticClass:"v-treeview-node__content"},e)},genToggle(){return this.$createElement(r["a"],{staticClass:"v-treeview-node__toggle",class:{"v-treeview-node__toggle--open":this.isOpen,"v-treeview-node__toggle--loading":this.isLoading},slot:"prepend",on:{click:e=>{e.stopPropagation(),this.isLoading||this.checkChildren().then(()=>this.open())}}},[this.isLoading?this.loadingIcon:this.expandIcon])},genCheckbox(){return this.$createElement(r["a"],{staticClass:"v-treeview-node__checkbox",props:{color:this.isSelected||this.isIndeterminate?this.selectedColor:void 0,disabled:this.disabled},on:{click:e=>{e.stopPropagation(),this.isLoading||this.checkChildren().then(()=>{this.$nextTick(()=>{this.isSelected=!this.isSelected,this.isIndeterminate=!1,this.treeview.updateSelected(this.key,this.isSelected),this.treeview.emitSelected()})})}}},[this.computedIcon])},genLevel(e){return Object(h["j"])(e).map(()=>this.$createElement("div",{staticClass:"v-treeview-node__level"}))},genNode(){const e=[this.genContent()];return this.selectable&&e.unshift(this.genCheckbox()),this.hasChildren?e.unshift(this.genToggle()):e.unshift(...this.genLevel(1)),e.unshift(...this.genLevel(this.level)),this.$createElement("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-treeview-node__root",class:{[this.activeClass]:this.isActive},on:{click:()=>{this.openOnClick&&this.hasChildren?this.checkChildren().then(this.open):this.activatable&&!this.disabled&&(this.isActive=!this.isActive,this.treeview.updateActive(this.key,this.isActive),this.treeview.emitActive())}}}),e)},genChild(e,t){return this.$createElement(m,{key:Object(h["q"])(e,this.itemKey),props:{activatable:this.activatable,activeClass:this.activeClass,item:e,selectable:this.selectable,selectedColor:this.selectedColor,color:this.color,disablePerNode:this.disablePerNode,expandIcon:this.expandIcon,indeterminateIcon:this.indeterminateIcon,offIcon:this.offIcon,onIcon:this.onIcon,loadingIcon:this.loadingIcon,itemKey:this.itemKey,itemText:this.itemText,itemDisabled:this.itemDisabled,itemChildren:this.itemChildren,loadChildren:this.loadChildren,transition:this.transition,openOnClick:this.openOnClick,rounded:this.rounded,shaped:this.shaped,level:this.level+1,selectionType:this.selectionType,parentIsDisabled:t},scopedSlots:this.$scopedSlots})},genChildrenWrapper(){if(!this.isOpen||!this.children)return null;const e=[this.children.map(e=>this.genChild(e,this.disabled))];return this.$createElement("div",{staticClass:"v-treeview-node__children"},e)},genTransition(){return this.$createElement(d["a"],[this.genChildrenWrapper()])}},render(e){const t=[this.genNode()];return this.transition?t.push(this.genTransition()):t.push(this.genChildrenWrapper()),e("div",{staticClass:"v-treeview-node",class:{"v-treeview-node--leaf":!this.hasChildren,"v-treeview-node--click":this.openOnClick,"v-treeview-node--disabled":this.disabled,"v-treeview-node--rounded":this.rounded,"v-treeview-node--shaped":this.shaped,"v-treeview-node--selected":this.isSelected},attrs:{"aria-expanded":String(this.isOpen)}},t)}});var v=m,f=i("7560"),b=i("d9bd");function g(e,t,i){const s=Object(h["q"])(e,i);return s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}function C(e,t,i,s,n,a,d){if(e(t,i,n))return!0;const r=Object(h["q"])(t,a);if(r){let t=!1;for(let l=0;l<r.length;l++)C(e,r[l],i,s,n,a,d)&&(t=!0);if(t)return!0}return d.add(Object(h["q"])(t,s)),!1}var y=Object(c["a"])(Object(l["b"])("treeview"),f["a"]).extend({name:"v-treeview",provide(){return{treeview:this}},props:{active:{type:Array,default:()=>[]},dense:Boolean,disabled:Boolean,filter:Function,hoverable:Boolean,items:{type:Array,default:()=>[]},multipleActive:Boolean,open:{type:Array,default:()=>[]},openAll:Boolean,returnObject:{type:Boolean,default:!1},search:String,value:{type:Array,default:()=>[]},...u},data:()=>({level:-1,activeCache:new Set,nodes:{},openCache:new Set,selectedCache:new Set}),computed:{excludedItems(){const e=new Set;if(!this.search)return e;for(let t=0;t<this.items.length;t++)C(this.filter||g,this.items[t],this.search,this.itemKey,this.itemText,this.itemChildren,e);return e}},watch:{items:{handler(){const e=Object.keys(this.nodes).map(e=>Object(h["q"])(this.nodes[e].item,this.itemKey)),t=this.getKeys(this.items),i=Object(h["c"])(t,e);if(!i.length&&t.length<e.length)return;i.forEach(e=>delete this.nodes[e]);const s=[...this.selectedCache];this.selectedCache=new Set,this.activeCache=new Set,this.openCache=new Set,this.buildTree(this.items),Object(h["l"])(s,[...this.selectedCache])||this.emitSelected()},deep:!0},active(e){this.handleNodeCacheWatcher(e,this.activeCache,this.updateActive,this.emitActive)},value(e){this.handleNodeCacheWatcher(e,this.selectedCache,this.updateSelected,this.emitSelected)},open(e){this.handleNodeCacheWatcher(e,this.openCache,this.updateOpen,this.emitOpen)}},created(){const e=e=>this.returnObject?Object(h["q"])(e,this.itemKey):e;this.buildTree(this.items);for(const t of this.value.map(e))this.updateSelected(t,!0,!0);for(const t of this.active.map(e))this.updateActive(t,!0)},mounted(){(this.$slots.prepend||this.$slots.append)&&Object(b["c"])("The prepend and append slots require a slot-scope attribute",this),this.openAll?this.updateAll(!0):(this.open.forEach(e=>this.updateOpen(this.returnObject?Object(h["q"])(e,this.itemKey):e,!0)),this.emitOpen())},methods:{updateAll(e){Object.keys(this.nodes).forEach(t=>this.updateOpen(Object(h["q"])(this.nodes[t].item,this.itemKey),e)),this.emitOpen()},getKeys(e,t=[]){for(let i=0;i<e.length;i++){const s=Object(h["q"])(e[i],this.itemKey);t.push(s);const n=Object(h["q"])(e[i],this.itemChildren);n&&t.push(...this.getKeys(n))}return t},buildTree(e,t=null){var i;for(let s=0;s<e.length;s++){const n=e[s],a=Object(h["q"])(n,this.itemKey),d=null!==(i=Object(h["q"])(n,this.itemChildren))&&void 0!==i?i:[],r=this.nodes.hasOwnProperty(a)?this.nodes[a]:{isSelected:!1,isIndeterminate:!1,isActive:!1,isOpen:!1,vnode:null},l={vnode:r.vnode,parent:t,children:d.map(e=>Object(h["q"])(e,this.itemKey)),item:n};if(this.buildTree(d,a),"independent"!==this.selectionType&&null!==t&&!this.nodes.hasOwnProperty(a)&&this.nodes.hasOwnProperty(t)?l.isSelected=this.nodes[t].isSelected:(l.isSelected=r.isSelected,l.isIndeterminate=r.isIndeterminate),l.isActive=r.isActive,l.isOpen=r.isOpen,this.nodes[a]=l,d.length&&"independent"!==this.selectionType){const{isSelected:e,isIndeterminate:t}=this.calculateState(a,this.nodes);l.isSelected=e,l.isIndeterminate=t}!this.nodes[a].isSelected||"independent"!==this.selectionType&&0!==l.children.length||this.selectedCache.add(a),this.nodes[a].isActive&&this.activeCache.add(a),this.nodes[a].isOpen&&this.openCache.add(a),this.updateVnodeState(a)}},calculateState(e,t){const i=t[e].children,s=i.reduce((e,i)=>(e[0]+=+Boolean(t[i].isSelected),e[1]+=+Boolean(t[i].isIndeterminate),e),[0,0]),n=!!i.length&&s[0]===i.length,a=!n&&(s[0]>0||s[1]>0);return{isSelected:n,isIndeterminate:a}},emitOpen(){this.emitNodeCache("update:open",this.openCache)},emitSelected(){this.emitNodeCache("input",this.selectedCache)},emitActive(){this.emitNodeCache("update:active",this.activeCache)},emitNodeCache(e,t){this.$emit(e,this.returnObject?[...t].map(e=>this.nodes[e].item):[...t])},handleNodeCacheWatcher(e,t,i,s){e=this.returnObject?e.map(e=>Object(h["q"])(e,this.itemKey)):e;const n=[...t];Object(h["l"])(n,e)||(n.forEach(e=>i(e,!1)),e.forEach(e=>i(e,!0)),s())},getDescendants(e,t=[]){const i=this.nodes[e].children;t.push(...i);for(let s=0;s<i.length;s++)t=this.getDescendants(i[s],t);return t},getParents(e){let t=this.nodes[e].parent;const i=[];while(null!==t)i.push(t),t=this.nodes[t].parent;return i},register(e){const t=Object(h["q"])(e.item,this.itemKey);this.nodes[t].vnode=e,this.updateVnodeState(t)},unregister(e){const t=Object(h["q"])(e.item,this.itemKey);this.nodes[t]&&(this.nodes[t].vnode=null)},isParent(e){return this.nodes[e].children&&this.nodes[e].children.length},updateActive(e,t){if(!this.nodes.hasOwnProperty(e))return;this.multipleActive||this.activeCache.forEach(e=>{this.nodes[e].isActive=!1,this.updateVnodeState(e),this.activeCache.delete(e)});const i=this.nodes[e];i&&(t?this.activeCache.add(e):this.activeCache.delete(e),i.isActive=t,this.updateVnodeState(e))},updateSelected(e,t,i=!1){if(!this.nodes.hasOwnProperty(e))return;const s=new Map;if("independent"!==this.selectionType){for(const a of this.getDescendants(e))Object(h["q"])(this.nodes[a].item,this.itemDisabled)&&!i||(this.nodes[a].isSelected=t,this.nodes[a].isIndeterminate=!1,s.set(a,t));const n=this.calculateState(e,this.nodes);this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=n.isIndeterminate,s.set(e,t);for(const t of this.getParents(e)){const e=this.calculateState(t,this.nodes);this.nodes[t].isSelected=e.isSelected,this.nodes[t].isIndeterminate=e.isIndeterminate,s.set(t,e.isSelected)}}else this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=!1,s.set(e,t);for(const[n,a]of s.entries())this.updateVnodeState(n),"leaf"===this.selectionType&&this.isParent(n)||(!0===a?this.selectedCache.add(n):this.selectedCache.delete(n))},updateOpen(e,t){if(!this.nodes.hasOwnProperty(e))return;const i=this.nodes[e],s=Object(h["q"])(i.item,this.itemChildren);s&&!s.length&&i.vnode&&!i.vnode.hasLoaded?i.vnode.checkChildren().then(()=>this.updateOpen(e,t)):s&&s.length&&(i.isOpen=t,i.isOpen?this.openCache.add(e):this.openCache.delete(e),this.updateVnodeState(e))},updateVnodeState(e){const t=this.nodes[e];t&&t.vnode&&(t.vnode.isSelected=t.isSelected,t.vnode.isIndeterminate=t.isIndeterminate,t.vnode.isActive=t.isActive,t.vnode.isOpen=t.isOpen)},isExcluded(e){return!!this.search&&this.excludedItems.has(e)}},render(e){const t=this.items.length?this.items.filter(e=>!this.isExcluded(Object(h["q"])(e,this.itemKey))).map(e=>{const t=v.options.methods.genChild.bind(this);return t(e,this.disabled||Object(h["q"])(e,this.itemDisabled))}):this.$slots.default;return e("div",{staticClass:"v-treeview",class:{"v-treeview--hoverable":this.hoverable,"v-treeview--dense":this.dense,...this.themeClasses}},t)}}),O=function(){var e=this,t=e._self._c;return t(a["a"],[t(n["a"],{attrs:{cols:"12",md:"6"}},[t("base-card",[t(s["d"],[e._v("Usage")]),t(s["c"],[t(y,{attrs:{items:e.items}})],1)],1)],1),t(n["a"],{attrs:{cols:"12",md:"6"}},[t("base-card",{staticClass:"h-full"},[t(s["d"],[e._v("Dense")]),t(s["c"],[t(y,{attrs:{dense:"",items:e.items}})],1)],1)],1),t(n["a"],{attrs:{cols:"12",md:"6"}},[t("base-card",{staticClass:"h-full"},[t(s["d"],[e._v("Checkbox Color")]),t(s["c"],[t(y,{attrs:{selectable:"","selected-color":"red",items:e.items}})],1)],1)],1),t(n["a"],{attrs:{cols:"12",md:"6"}},[t("base-card",{staticClass:"h-full"},[t(s["d"],[e._v("Color")]),t(s["c"],[t(y,{attrs:{activatable:"",color:"warning",items:e.items}})],1)],1)],1),t(n["a"],{attrs:{cols:"12",md:"6"}},[t("base-card",{staticClass:"h-full"},[t(s["d"],[e._v("Rounded")]),t(s["c"],[t(y,{attrs:{rounded:"",hoverable:"",activatable:"",items:e.items}})],1)],1)],1)],1)},S=[],w={metaInfo:{title:"Treeview"},data:()=>({items:[{id:1,name:"Applications :",children:[{id:2,name:"Calendar : app"},{id:3,name:"Chrome : app"},{id:4,name:"Webstorm : app"}]},{id:5,name:"Documents :",children:[{id:6,name:"vuetify :",children:[{id:7,name:"src :",children:[{id:8,name:"index : ts"},{id:9,name:"bootstrap : ts"}]}]},{id:10,name:"material2 :",children:[{id:11,name:"src :",children:[{id:12,name:"v-btn : ts"},{id:13,name:"v-card : ts"},{id:14,name:"v-window : ts"}]}]}]},{id:15,name:"Downloads :",children:[{id:16,name:"October : pdf"},{id:17,name:"November : pdf"},{id:18,name:"Tutorial : html"}]},{id:19,name:"Videos :",children:[{id:20,name:"Tutorials :",children:[{id:21,name:"Basic layouts : mp4"},{id:22,name:"Advanced techniques : mp4"},{id:23,name:"All about app : dir"}]},{id:24,name:"Intro : mov"},{id:25,name:"Conference introduction : avi"}]}]})},j=w,I=i("2877"),k=Object(I["a"])(j,O,S,!1,null,null,null);t["default"]=k.exports},"3c65":function(e,t,i){"use strict";var s=i("23e7"),n=i("7b0b"),a=i("07fa"),d=i("3a34"),r=i("083a"),l=i("3511"),o=1!==[].unshift(0),c=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},h=o||!c();s({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(e){var t=n(this),i=a(t),s=arguments.length;if(s){l(i+s);var o=i;while(o--){var c=o+s;o in t?t[c]=t[o]:r(t,c)}for(var h=0;h<s;h++)t[h]=arguments[h]}return d(t,i+s)}})},"4b85":function(e,t,i){},"62ad":function(e,t,i){"use strict";i("13d5"),i("14d9"),i("4b85");var s=i("2b0e"),n=i("d9f7"),a=i("80d2");const d=["sm","md","lg","xl"],r=(()=>d.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),l=(()=>d.reduce((e,t)=>(e["offset"+Object(a["I"])(t)]={type:[String,Number],default:null},e),{}))(),o=(()=>d.reduce((e,t)=>(e["order"+Object(a["I"])(t)]={type:[String,Number],default:null},e),{}))(),c={col:Object.keys(r),offset:Object.keys(l),order:Object.keys(o)};function h(e,t,i){let s=e;if(null!=i&&!1!==i){if(t){const i=t.replace(e,"");s+="-"+i}return"col"!==e||""!==i&&!0!==i?(s+="-"+i,s.toLowerCase()):s.toLowerCase()}}const p=new Map;t["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...o,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:i,children:s,parent:a}){let d="";for(const n in t)d+=String(t[n]);let r=p.get(d);if(!r){let e;for(e in r=[],c)c[e].forEach(i=>{const s=t[i],n=h(e,i,s);n&&r.push(n)});const i=r.some(e=>e.startsWith("col-"));r.push({col:!i||!t.cols,["col-"+t.cols]:t.cols,["offset-"+t.offset]:t.offset,["order-"+t.order]:t.order,["align-self-"+t.alignSelf]:t.alignSelf}),p.set(d,r)}return e(t.tag,Object(n["a"])(i,{class:r}),s)}})},"99d9":function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return r})),i.d(t,"d",(function(){return l}));var s=i("b0af"),n=i("80d2");const a=Object(n["k"])("v-card__actions"),d=Object(n["k"])("v-card__subtitle"),r=Object(n["k"])("v-card__text"),l=Object(n["k"])("v-card__title");s["a"]},fa9e:function(e,t,i){}}]);
//# sourceMappingURL=chunk-d7600144.7188d93d.js.map