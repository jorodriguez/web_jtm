(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b393c3b"],{"1f4f":function(e,t,s){"use strict";s("8b37");var a=s("80d2"),i=s("7560"),o=s("58df");t["a"]=Object(o["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["i"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"20f6":function(e,t,s){},"2fa4":function(e,t,s){"use strict";s("20f6");var a=s("80d2");t["a"]=Object(a["k"])("spacer","div","v-spacer")},5311:function(e,t,s){"use strict";s("14d9");var a=s("5607"),i=s("2b0e");t["a"]=i["a"].extend({name:"rippleable",directives:{ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}})},"8b37":function(e,t,s){},"8fea":function(e,t,s){"use strict";s("3c65"),s("13d5"),s("14d9"),s("91f4");var a=s("4a1a"),i=s("c377"),o=s("f41f"),r=s("afdd"),n=(s("f823"),s("58df")),l=s("b974"),c=s("34ef"),h=s("9d26"),d=s("9e88"),u=s("5607"),p=Object(n["a"])().extend({directives:{ripple:u["a"]},props:{headers:{type:Array,default:()=>[]},options:{type:Object,default:()=>({page:1,itemsPerPage:10,sortBy:[],sortDesc:[],groupBy:[],groupDesc:[],multiSort:!1,mustSort:!1})},checkboxColor:String,sortIcon:{type:String,default:"$sort"},everyItem:Boolean,someItems:Boolean,showGroupBy:Boolean,singleSelect:Boolean,disableSort:Boolean},methods:{genSelectAll(){var e;const t={props:{value:this.everyItem,indeterminate:!this.everyItem&&this.someItems,color:null!==(e=this.checkboxColor)&&void 0!==e?e:""},on:{input:e=>this.$emit("toggle-select-all",e)}};return this.$scopedSlots["data-table-select"]?this.$scopedSlots["data-table-select"](t):this.$createElement(d["a"],{staticClass:"v-data-table__checkbox",...t})},genSortIcon(){return this.$createElement(h["a"],{staticClass:"v-data-table-header__icon",props:{size:18}},[this.sortIcon])}}}),m=s("80d2"),b=Object(n["a"])(p).extend({name:"v-data-table-header-mobile",props:{sortByText:{type:String,default:"$vuetify.dataTable.sortBy"}},methods:{genSortChip(e){const t=[e.item.text],s=this.options.sortBy.findIndex(t=>t===e.item.value),a=s>=0,i=this.options.sortDesc[s];return t.push(this.$createElement("div",{staticClass:"v-chip__close",class:{sortable:!0,active:a,asc:a&&!i,desc:a&&i}},[this.genSortIcon()])),this.$createElement(c["a"],{staticClass:"sortable",on:{click:t=>{t.stopPropagation(),this.$emit("sort",e.item.value)}}},t)},genSortSelect(e){return this.$createElement(l["a"],{props:{label:this.$vuetify.lang.t(this.sortByText),items:e,hideDetails:!0,multiple:this.options.multiSort,value:this.options.multiSort?this.options.sortBy:this.options.sortBy[0],menuProps:{closeOnContentClick:!0}},on:{change:e=>this.$emit("sort",e)},scopedSlots:{selection:e=>this.genSortChip(e)}})}},render(e){const t=[],s=this.headers.find(e=>"data-table-select"===e.value);s&&!this.singleSelect&&t.push(this.$createElement("div",{class:["v-data-table-header-mobile__select",...Object(m["J"])(s.class)],attrs:{width:s.width}},[this.genSelectAll()]));const a=this.headers.filter(e=>!1!==e.sortable&&"data-table-select"!==e.value).map(e=>({text:e.text,value:e.value}));!this.disableSort&&a.length&&t.push(this.genSortSelect(a));const i=t.length?e("th",[e("div",{staticClass:"v-data-table-header-mobile__wrapper"},t)]):void 0,o=e("tr",[i]);return e("thead",{staticClass:"v-data-table-header v-data-table-header-mobile"},[o])}}),g=Object(n["a"])(p).extend({name:"v-data-table-header-desktop",methods:{genGroupByToggle(e){return this.$createElement("span",{on:{click:t=>{t.stopPropagation(),this.$emit("group",e.value)}}},["group"])},getAria(e,t){const s=e=>this.$vuetify.lang.t("$vuetify.dataTable.ariaLabel."+e);let a="none",i=[s("sortNone"),s("activateAscending")];return e?(t?(a="descending",i=[s("sortDescending"),s(this.options.mustSort?"activateAscending":"activateNone")]):(a="ascending",i=[s("sortAscending"),s("activateDescending")]),{ariaSort:a,ariaLabel:i.join(" ")}):{ariaSort:a,ariaLabel:i.join(" ")}},genHeader(e){const t={attrs:{role:"columnheader",scope:"col","aria-label":e.text||""},style:{width:Object(m["i"])(e.width),minWidth:Object(m["i"])(e.width)},class:["text-"+(e.align||"start"),...Object(m["J"])(e.class),e.divider&&"v-data-table__divider"],on:{}},s=[];if("data-table-select"===e.value&&!this.singleSelect)return this.$createElement("th",t,[this.genSelectAll()]);if(s.push(this.$scopedSlots.hasOwnProperty(e.value)?this.$scopedSlots[e.value]({header:e}):this.$createElement("span",[e.text])),!this.disableSort&&(e.sortable||!e.hasOwnProperty("sortable"))){t.on.click=()=>this.$emit("sort",e.value);const a=this.options.sortBy.findIndex(t=>t===e.value),i=a>=0,o=this.options.sortDesc[a];t.class.push("sortable");const{ariaLabel:r,ariaSort:n}=this.getAria(i,o);t.attrs["aria-label"]+=`${e.text?": ":""}${r}`,t.attrs["aria-sort"]=n,i&&(t.class.push("active"),t.class.push(o?"desc":"asc")),"end"===e.align?s.unshift(this.genSortIcon()):s.push(this.genSortIcon()),this.options.multiSort&&i&&s.push(this.$createElement("span",{class:"v-data-table-header__sort-badge"},[String(a+1)]))}return this.showGroupBy&&!1!==e.groupable&&s.push(this.genGroupByToggle(e)),this.$createElement("th",t,s)}},render(){return this.$createElement("thead",{staticClass:"v-data-table-header"},[this.$createElement("tr",this.headers.map(e=>this.genHeader(e)))])}});function f(e){if(e.model&&e.on&&e.on.input)if(Array.isArray(e.on.input)){const t=e.on.input.indexOf(e.model.callback);t>-1&&e.on.input.splice(t,1)}else delete e.on.input}var v=s("d9f7");function y(e,t){const s=[];for(const a in e)e.hasOwnProperty(a)&&s.push(t("template",{slot:a},e[a]));return s}var S=s("2b0e"),w=S["a"].extend({name:"v-data-table-header",functional:!0,props:{...p.options.props,mobile:Boolean},render(e,{props:t,data:s,slots:a}){f(s);const i=y(a(),e);return s=Object(v["a"])(s,{props:t}),t.mobile?e(b,s,i):e(g,s,i)}});function $(e){var t;return 1!==e.length||!["td","th"].includes(null===(t=e[0])||void 0===t?void 0:t.tag)}var x=S["a"].extend({name:"row",functional:!0,props:{headers:Array,index:Number,item:Object,rtl:Boolean},render(e,{props:t,slots:s,data:a}){const i=s(),o=t.headers.map(s=>{const o=[],r=Object(m["q"])(t.item,s.value),n=s.value,l=a.scopedSlots&&a.scopedSlots.hasOwnProperty(n)&&a.scopedSlots[n],c=i.hasOwnProperty(n)&&i[n];l?o.push(...Object(m["J"])(l({item:t.item,isMobile:!1,header:s,index:t.index,value:r}))):c?o.push(...Object(m["J"])(c)):o.push(null==r?r:String(r));const h="text-"+(s.align||"start");return $(o)?e("td",{class:[h,s.cellClass,{"v-data-table__divider":s.divider}]},o):o});return e("tr",a,o)}}),C=S["a"].extend({name:"row-group",functional:!0,props:{value:{type:Boolean,default:!0},headerClass:{type:String,default:"v-row-group__header"},contentClass:String,summaryClass:{type:String,default:"v-row-group__summary"}},render(e,{slots:t,props:s}){const a=t(),i=[];return a["column.header"]?i.push(e("tr",{staticClass:s.headerClass},a["column.header"])):a["row.header"]&&i.push(...a["row.header"]),a["row.content"]&&s.value&&i.push(...a["row.content"]),a["column.summary"]?i.push(e("tr",{staticClass:s.summaryClass},a["column.summary"])):a["row.summary"]&&i.push(...a["row.summary"]),i}}),_=s("1f4f"),E=S["a"].extend({name:"row",functional:!0,props:{headers:Array,hideDefaultHeader:Boolean,index:Number,item:Object,rtl:Boolean},render(e,{props:t,slots:s,data:a}){const i=s(),o=t.headers.map(s=>{const o={"v-data-table__mobile-row":!0},r=[],n=Object(m["q"])(t.item,s.value),l=s.value,c=a.scopedSlots&&a.scopedSlots.hasOwnProperty(l)&&a.scopedSlots[l],h=i.hasOwnProperty(l)&&i[l];c?r.push(c({item:t.item,isMobile:!0,header:s,index:t.index,value:n})):h?r.push(h):r.push(null==n?n:String(n));const d=[e("div",{staticClass:"v-data-table__mobile-row__cell"},r)];return"dataTableSelect"===s.value||t.hideDefaultHeader||d.unshift(e("div",{staticClass:"v-data-table__mobile-row__header"},[s.text])),e("td",{class:o},d)});return e("tr",{...a,staticClass:"v-data-table__mobile-table-row"},o)}}),O=s("297c"),I=s("d9bd");function B(e,t,s){return a=>{const i=Object(m["q"])(e,a.value);return a.filter?a.filter(i,t,e):s(i,t,e)}}function j(e,t,s,a,i){return t="string"===typeof t?t.trim():null,e.filter(e=>{const o=s.every(B(e,t,m["m"])),r=!t||a.some(B(e,t,i));return o&&r})}t["a"]=Object(n["a"])(i["a"],O["a"]).extend({name:"v-data-table",directives:{ripple:u["a"]},props:{headers:{type:Array,default:()=>[]},showSelect:Boolean,checkboxColor:String,showExpand:Boolean,showGroupBy:Boolean,height:[Number,String],hideDefaultHeader:Boolean,caption:String,dense:Boolean,headerProps:Object,calculateWidths:Boolean,fixedHeader:Boolean,headersLength:Number,expandIcon:{type:String,default:"$expand"},customFilter:{type:Function,default:m["m"]},itemClass:{type:[String,Function],default:()=>""},loaderHeight:{type:[Number,String],default:4}},data(){return{internalGroupBy:[],openCache:{},widths:[]}},computed:{computedHeaders(){if(!this.headers)return[];const e=this.headers.filter(e=>void 0===e.value||!this.internalGroupBy.find(t=>t===e.value)),t={text:"",sortable:!1,width:"1px"};if(this.showSelect){const s=e.findIndex(e=>"data-table-select"===e.value);s<0?e.unshift({...t,value:"data-table-select"}):e.splice(s,1,{...t,...e[s]})}if(this.showExpand){const s=e.findIndex(e=>"data-table-expand"===e.value);s<0?e.unshift({...t,value:"data-table-expand"}):e.splice(s,1,{...t,...e[s]})}return e},colspanAttrs(){return this.isMobile?void 0:{colspan:this.headersLength||this.computedHeaders.length}},columnSorters(){return this.computedHeaders.reduce((e,t)=>(t.sort&&(e[t.value]=t.sort),e),{})},headersWithCustomFilters(){return this.headers.filter(e=>e.filter&&(!e.hasOwnProperty("filterable")||!0===e.filterable))},headersWithoutCustomFilters(){return this.headers.filter(e=>!e.filter&&(!e.hasOwnProperty("filterable")||!0===e.filterable))},sanitizedHeaderProps(){return Object(m["e"])(this.headerProps)},computedItemsPerPage(){const e=this.options&&this.options.itemsPerPage?this.options.itemsPerPage:this.itemsPerPage,t=this.sanitizedFooterProps.itemsPerPageOptions;if(t&&!t.find(t=>"number"===typeof t?t===e:t.value===e)){const e=t[0];return"object"===typeof e?e.value:e}return e},groupByText(){var e,t,s;return null!==(s=null===(t=null===(e=this.headers)||void 0===e?void 0:e.find(e=>{var t;return e.value===(null===(t=this.internalGroupBy)||void 0===t?void 0:t[0])}))||void 0===t?void 0:t.text)&&void 0!==s?s:""}},created(){const e=[["sort-icon","header-props.sort-icon"],["hide-headers","hide-default-header"],["select-all","show-select"]];e.forEach(([e,t])=>{this.$attrs.hasOwnProperty(e)&&Object(I["a"])(e,t,this)})},mounted(){this.calculateWidths&&(window.addEventListener("resize",this.calcWidths),this.calcWidths())},beforeDestroy(){this.calculateWidths&&window.removeEventListener("resize",this.calcWidths)},methods:{calcWidths(){this.widths=Array.from(this.$el.querySelectorAll("th")).map(e=>e.clientWidth)},customFilterWithColumns(e,t){return j(e,t,this.headersWithCustomFilters,this.headersWithoutCustomFilters,this.customFilter)},customSortWithHeaders(e,t,s,a){return this.customSort(e,t,s,a,this.columnSorters)},createItemProps(e,t){const s=i["a"].options.methods.createItemProps.call(this,e,t);return Object.assign(s,{headers:this.computedHeaders})},genCaption(e){return this.caption?[this.$createElement("caption",[this.caption])]:Object(m["t"])(this,"caption",e,!0)},genColgroup(e){return this.$createElement("colgroup",this.computedHeaders.map(e=>this.$createElement("col",{class:{divider:e.divider}})))},genLoading(){const e=this.$createElement("th",{staticClass:"column",attrs:this.colspanAttrs},[this.genProgress()]),t=this.$createElement("tr",{staticClass:"v-data-table__progress"},[e]);return this.$createElement("thead",[t])},genHeaders(e){const t={props:{...this.sanitizedHeaderProps,headers:this.computedHeaders,options:e.options,mobile:this.isMobile,showGroupBy:this.showGroupBy,checkboxColor:this.checkboxColor,someItems:this.someItems,everyItem:this.everyItem,singleSelect:this.singleSelect,disableSort:this.disableSort},on:{sort:e.sort,group:e.group,"toggle-select-all":this.toggleSelectAll}},s=[Object(m["t"])(this,"header",{...t,isMobile:this.isMobile})];if(!this.hideDefaultHeader){const e=Object(m["r"])("header.",this.$scopedSlots);s.push(this.$createElement(w,{...t,scopedSlots:e}))}return this.loading&&s.push(this.genLoading()),s},genEmptyWrapper(e){return this.$createElement("tr",{staticClass:"v-data-table__empty-wrapper"},[this.$createElement("td",{attrs:this.colspanAttrs},e)])},genItems(e,t){const s=this.genEmpty(t.originalItemsLength,t.pagination.itemsLength);return s?[s]:t.groupedItems?this.genGroupedRows(t.groupedItems,t):this.genRows(e,t)},genGroupedRows(e,t){return e.map(e=>(this.openCache.hasOwnProperty(e.name)||this.$set(this.openCache,e.name,!0),this.$scopedSlots.group?this.$scopedSlots.group({group:e.name,options:t.options,isMobile:this.isMobile,items:e.items,headers:this.computedHeaders}):this.genDefaultGroupedRow(e.name,e.items,t)))},genDefaultGroupedRow(e,t,s){const a=!!this.openCache[e],i=[this.$createElement("template",{slot:"row.content"},this.genRows(t,s))],o=()=>this.$set(this.openCache,e,!this.openCache[e]),n=()=>s.updateOptions({groupBy:[],groupDesc:[]});if(this.$scopedSlots["group.header"])i.unshift(this.$createElement("template",{slot:"column.header"},[this.$scopedSlots["group.header"]({group:e,groupBy:s.options.groupBy,isMobile:this.isMobile,items:t,headers:this.computedHeaders,isOpen:a,toggle:o,remove:n})]));else{const t=this.$createElement(r["a"],{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:o}},[this.$createElement(h["a"],[a?"$minus":"$plus"])]),s=this.$createElement(r["a"],{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:n}},[this.$createElement(h["a"],["$close"])]),l=this.$createElement("td",{staticClass:"text-start",attrs:this.colspanAttrs},[t,`${this.groupByText}: ${e}`,s]);i.unshift(this.$createElement("template",{slot:"column.header"},[l]))}return this.$scopedSlots["group.summary"]&&i.push(this.$createElement("template",{slot:"column.summary"},[this.$scopedSlots["group.summary"]({group:e,groupBy:s.options.groupBy,isMobile:this.isMobile,items:t,headers:this.computedHeaders,isOpen:a,toggle:o})])),this.$createElement(C,{key:e,props:{value:a}},i)},genRows(e,t){return this.$scopedSlots.item?this.genScopedRows(e,t):this.genDefaultRows(e,t)},genScopedRows(e,t){const s=[];for(let a=0;a<e.length;a++){const t=e[a];s.push(this.$scopedSlots.item({...this.createItemProps(t,a),isMobile:this.isMobile})),this.isExpanded(t)&&s.push(this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,index:a,item:t}))}return s},genDefaultRows(e,t){return this.$scopedSlots["expanded-item"]?e.map((e,t)=>this.genDefaultExpandedRow(e,t)):e.map((e,t)=>this.genDefaultSimpleRow(e,t))},genDefaultExpandedRow(e,t){const s=this.isExpanded(e),a={"v-data-table__expanded v-data-table__expanded__row":s},i=this.genDefaultSimpleRow(e,t,a),o=this.$createElement("tr",{staticClass:"v-data-table__expanded v-data-table__expanded__content"},[this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,item:e})]);return this.$createElement(C,{props:{value:s}},[this.$createElement("template",{slot:"row.header"},[i]),this.$createElement("template",{slot:"row.content"},[o])])},genDefaultSimpleRow(e,t,s={}){const a=Object(m["r"])("item.",this.$scopedSlots),i=this.createItemProps(e,t);if(this.showSelect){const t=a["data-table-select"];a["data-table-select"]=t?()=>t({...i,isMobile:this.isMobile}):()=>{var t;return this.$createElement(d["a"],{staticClass:"v-data-table__checkbox",props:{value:i.isSelected,disabled:!this.isSelectable(e),color:null!==(t=this.checkboxColor)&&void 0!==t?t:""},on:{input:e=>i.select(e)}})}}if(this.showExpand){const e=a["data-table-expand"];a["data-table-expand"]=e?()=>e(i):()=>this.$createElement(h["a"],{staticClass:"v-data-table__expand-icon",class:{"v-data-table__expand-icon--active":i.isExpanded},on:{click:e=>{e.stopPropagation(),i.expand(!i.isExpanded)}}},[this.expandIcon])}return this.$createElement(this.isMobile?E:x,{key:Object(m["q"])(e,this.itemKey),class:Object(v["b"])({...s,"v-data-table__selected":i.isSelected},Object(m["s"])(e,this.itemClass)),props:{headers:this.computedHeaders,hideDefaultHeader:this.hideDefaultHeader,index:t,item:e,rtl:this.$vuetify.rtl},scopedSlots:a,on:{click:t=>this.$emit("click:row",e,i,t),contextmenu:e=>this.$emit("contextmenu:row",e,i),dblclick:e=>this.$emit("dblclick:row",e,i)}})},genBody(e){const t={...e,expand:this.expand,headers:this.computedHeaders,isExpanded:this.isExpanded,isMobile:this.isMobile,isSelected:this.isSelected,select:this.select};return this.$scopedSlots.body?this.$scopedSlots.body(t):this.$createElement("tbody",[Object(m["t"])(this,"body.prepend",t,!0),this.genItems(e.items,e),Object(m["t"])(this,"body.append",t,!0)])},genFoot(e){var t,s;return null===(s=(t=this.$scopedSlots).foot)||void 0===s?void 0:s.call(t,e)},genFooters(e){const t={props:{options:e.options,pagination:e.pagination,itemsPerPageText:"$vuetify.dataTable.itemsPerPageText",...this.sanitizedFooterProps},on:{"update:options":t=>e.updateOptions(t)},widths:this.widths,headers:this.computedHeaders},s=[Object(m["t"])(this,"footer",t,!0)];return this.hideDefaultFooter||s.push(this.$createElement(o["a"],{...t,scopedSlots:Object(m["r"])("footer.",this.$scopedSlots)})),s},genDefaultScopedSlot(e){const t={height:this.height,fixedHeader:this.fixedHeader,dense:this.dense};return this.$createElement(_["a"],{props:t,class:{"v-data-table--mobile":this.isMobile}},[this.proxySlot("top",Object(m["t"])(this,"top",{...e,isMobile:this.isMobile},!0)),this.genCaption(e),this.genColgroup(e),this.genHeaders(e),this.genBody(e),this.genFoot(e),this.proxySlot("bottom",this.genFooters(e))])},proxySlot(e,t){return this.$createElement("template",{slot:e},t)}},render(){return this.$createElement(a["a"],{props:{...this.$props,customFilter:this.customFilterWithColumns,customSort:this.customSortWithHeaders,itemsPerPage:this.computedItemsPerPage},on:{"update:options":(e,t)=>{this.internalGroupBy=e.groupBy||[],!Object(m["l"])(e,t)&&this.$emit("update:options",e)},"update:page":e=>this.$emit("update:page",e),"update:items-per-page":e=>this.$emit("update:items-per-page",e),"update:sort-by":e=>this.$emit("update:sort-by",e),"update:sort-desc":e=>this.$emit("update:sort-desc",e),"update:group-by":e=>this.$emit("update:group-by",e),"update:group-desc":e=>this.$emit("update:group-desc",e),pagination:(e,t)=>!Object(m["l"])(e,t)&&this.$emit("pagination",e),"current-items":e=>{this.internalCurrentItems=e,this.$emit("current-items",e)},"page-count":e=>this.$emit("page-count",e)},scopedSlots:{default:this.genDefaultScopedSlot}})}})},"91f4":function(e,t,s){},"9d01":function(e,t,s){},b73d:function(e,t,s){"use strict";s("ec29"),s("9d01");var a=s("fe09"),i=s("c37a"),o=s("c3f0"),r=s("0789"),n=s("490a"),l=s("80d2");t["a"]=a["a"].extend({name:"v-switch",directives:{Touch:o["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...t}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(r["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(n["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(e){(e.keyCode===l["z"].left&&this.isActive||e.keyCode===l["z"].right&&!this.isActive)&&this.onChange()}}})},c3f0:function(e,t,s){"use strict";var a=s("80d2");const i=e=>{const{touchstartX:t,touchendX:s,touchstartY:a,touchendY:i}=e,o=.5,r=16;e.offsetX=s-t,e.offsetY=i-a,Math.abs(e.offsetY)<o*Math.abs(e.offsetX)&&(e.left&&s<t-r&&e.left(e),e.right&&s>t+r&&e.right(e)),Math.abs(e.offsetX)<o*Math.abs(e.offsetY)&&(e.up&&i<a-r&&e.up(e),e.down&&i>a+r&&e.down(e))};function o(e,t){const s=e.changedTouches[0];t.touchstartX=s.clientX,t.touchstartY=s.clientY,t.start&&t.start(Object.assign(e,t))}function r(e,t){const s=e.changedTouches[0];t.touchendX=s.clientX,t.touchendY=s.clientY,t.end&&t.end(Object.assign(e,t)),i(t)}function n(e,t){const s=e.changedTouches[0];t.touchmoveX=s.clientX,t.touchmoveY=s.clientY,t.move&&t.move(Object.assign(e,t))}function l(e){const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:e=>o(e,t),touchend:e=>r(e,t),touchmove:e=>n(e,t)}}function c(e,t,s){const i=t.value,o=i.parent?e.parentElement:e,r=i.options||{passive:!0};if(!o)return;const n=l(t.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[s.context._uid]=n,Object(a["A"])(n).forEach(e=>{o.addEventListener(e,n[e],r)})}function h(e,t,s){const i=t.value.parent?e.parentElement:e;if(!i||!i._touchHandlers)return;const o=i._touchHandlers[s.context._uid];Object(a["A"])(o).forEach(e=>{i.removeEventListener(e,o[e])}),delete i._touchHandlers[s.context._uid]}const d={inserted:c,unbind:h};t["a"]=d},ca75:function(e,t,s){"use strict";s.r(t);var a=s("b0af"),i=s("99d9"),o=s("cc20"),r=s("62ad"),n=s("8fea"),l=s("0fd9"),c=s("2fa4"),h=s("b73d"),d=s("8654"),u=function(){var e=this,t=e._self._c;return t(l["a"],[t(r["a"],{attrs:{cols:"12"}},[t("base-card",[t(i["d"],[e._v("Usage")]),t(i["c"],[t(n["a"],{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"items-per-page":5}})],1)],1)],1),t(r["a"],{attrs:{cols:"12"}},[t("base-card",[t(i["d"],[e._v("Selectable rows")]),t(i["c"],[t(n["a"],{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"single-select":e.singleSelect,"item-key":"name","show-select":""},scopedSlots:e._u([{key:"top",fn:function(){return[t(h["a"],{staticClass:"pa-3",attrs:{label:"Single select"},model:{value:e.singleSelect,callback:function(t){e.singleSelect=t},expression:"singleSelect"}})]},proxy:!0}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)],1),t(r["a"],{attrs:{cols:"12"}},[t("base-card",[t(i["d"],[e._v("Search")]),t(i["c"],[t(a["a"],[t(i["d"],[e._v(" Nutrition "),t(c["a"]),t(d["a"],{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(n["a"],{attrs:{headers:e.headers,items:e.desserts,search:e.search}})],1)],1)],1)],1),t(r["a"],{attrs:{cols:"12"}},[t("base-card",[t(i["d"],[e._v("Customizing default rows")]),t(i["c"],[t(n["a"],{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts},scopedSlots:e._u([{key:"item.calories",fn:function({item:s}){return[t(o["a"],{attrs:{color:e.getColor(s.calories),dark:""}},[e._v(" "+e._s(s.calories)+" ")])]}}])})],1)],1)],1)],1)},p=[],m=(s("14d9"),{metaInfo:{title:"Datatables"},data(){return{singleSelect:!1,selected:[],search:"",headers:[{text:"Dessert (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],desserts:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%"}],desertsTwo:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},computed:{formTitle(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog(e){e||this.close()}},created(){this.initialize()},methods:{getColor(e){return e>400?"red":e>200?"orange":"green"},initialize(){this.dessertsTwo=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7}]},editItem(e){this.editedIndex=this.dessertsTwo.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){const t=this.dessertsTwo.indexOf(e);confirm("Are you sure you want to delete this item?")&&this.desserts.splice(t,1)},close(){this.dialog=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},save(){this.editedIndex>-1?Object.assign(this.dessertsTwo[this.editedIndex],this.editedItem):this.dessertsTwo.push(this.editedItem),this.close()}}}),b=m,g=s("2877"),f=Object(g["a"])(b,u,p,!1,null,null,null);t["default"]=f.exports},ec29:function(e,t,s){},f823:function(e,t,s){},fe09:function(e,t,s){"use strict";s.d(t,"b",(function(){return n}));s("14d9");var a=s("c37a"),i=s("5311"),o=s("8547"),r=s("58df");function n(e){e.preventDefault()}t["a"]=Object(r["a"])(a["a"],i["a"],o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some(t=>this.valueComparator(t,e)):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=a["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:n},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:n},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const s=t.length;t=t.filter(t=>!this.valueComparator(t,e)),t.length===s&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}})}}]);
//# sourceMappingURL=chunk-6b393c3b.21a3222a.js.map