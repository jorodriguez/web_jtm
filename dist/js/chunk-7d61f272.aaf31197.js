(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d61f272","chunk-38218872"],{"083a":function(e,i,t){"use strict";var o=t("0d51"),c=TypeError;e.exports=function(e,i){if(!delete e[i])throw c("Cannot delete property "+o(i)+" of "+o(e))}},"3c65":function(e,i,t){"use strict";var o=t("23e7"),c=t("7b0b"),n=t("07fa"),r=t("3a34"),l=t("083a"),d=t("3511"),m=1!==[].unshift(0),a=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},s=m||!a();o({target:"Array",proto:!0,arity:1,forced:s},{unshift:function(e){var i=c(this),t=n(i),o=arguments.length;if(o){d(t+o);var m=t;while(m--){var a=m+o;m in i?i[a]=i[m]:l(i,a)}for(var s=0;s<o;s++)i[s]=arguments[s]}return r(i,t+o)}})},"9baf":function(e,i,t){"use strict";t.r(i);var o=t("8860"),c=t("f774"),n=function(){var e=this,i=e._self._c;return i(c["a"],{staticClass:"vertical-sass-sidebar mt-8",attrs:{"mobile-breakpoint":1e3,height:"100vh",right:e.$vuetify.rtl,color:"transparent",flat:"",floating:"",app:"",clipped:""},model:{value:e.getThemeMode.verticalSaasSidebarDrawer,callback:function(i){e.$set(e.getThemeMode,"verticalSaasSidebarDrawer",i)},expression:"getThemeMode.verticalSaasSidebarDrawer"}},[i("vue-perfect-scrollbar",{staticClass:"h-100 rtl-ps-none ps scroll",staticStyle:{height:"100%"},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[i(o["a"],{attrs:{rounded:"",dense:""}},[e._l(e.computedItems,(function(e,t){return[e.children?i("base-item-group",{key:"group-"+t,attrs:{item:e}}):i("base-item",{key:"item-"+t,attrs:{item:e}})]}))],2)],1)],1)},r=[],l=t("2f62"),d=t("de3b"),m={data(){return{background:!0,items:d["a"],opacity:.4}},computed:{bg(){return this.background?"https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260":void 0},computedItems(){return this.items.map(this.mapItem)},...Object(l["c"])(["getThemeMode"])},methods:{mapItem(e){return{...e,children:e.children?e.children.map(this.mapItem):void 0,title:e.title}}}},a=m,s=(t("fa77"),t("2877")),u=Object(s["a"])(a,n,r,!1,null,null,null);i["default"]=u.exports},a293:function(e,i,t){"use strict";t("14d9");var o=t("dd89");function c(){return!0}function n(e,i,t){if(!e||!1===r(e,t))return!1;const c=Object(o["a"])(i);if("undefined"!==typeof ShadowRoot&&c instanceof ShadowRoot&&c.host===e.target)return!1;const n=("object"===typeof t.value&&t.value.include||(()=>[]))();return n.push(i),!n.some(i=>i.contains(e.target))}function r(e,i){const t="object"===typeof i.value&&i.value.closeConditional||c;return t(e)}function l(e,i,t){const o="function"===typeof t.value?t.value:t.value.handler;i._clickOutside.lastMousedownWasOutside&&n(e,i,t)&&setTimeout(()=>{r(e,t)&&o&&o(e)},0)}function d(e,i){const t=Object(o["a"])(e);i(document),"undefined"!==typeof ShadowRoot&&t instanceof ShadowRoot&&i(t)}const m={inserted(e,i,t){const o=t=>l(t,e,i),c=t=>{e._clickOutside.lastMousedownWasOutside=n(t,e,i)};d(e,e=>{e.addEventListener("click",o,!0),e.addEventListener("mousedown",c,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.context._uid]={onClick:o,onMousedown:c}},unbind(e,i,t){e._clickOutside&&(d(e,i=>{var o;if(!i||!(null===(o=e._clickOutside)||void 0===o?void 0:o[t.context._uid]))return;const{onClick:c,onMousedown:n}=e._clickOutside[t.context._uid];i.removeEventListener("click",c,!0),i.removeEventListener("mousedown",n,!0)}),delete e._clickOutside[t.context._uid])}};i["a"]=m},b848:function(e,i,t){"use strict";t("14d9");var o=t("58df");function c(e){const i=[];for(let t=0;t<e.length;t++){const o=e[t];o.isActive&&o.isDependent?i.push(o):i.push(...c(o.$children))}return i}i["a"]=Object(o["a"])().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(e){if(e)return;const i=this.getOpenDependents();for(let t=0;t<i.length;t++)i[t].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?c(this.$children):[]},getOpenDependentElements(){const e=[],i=this.getOpenDependents();for(let t=0;t<i.length;t++)e.push(...i[t].getClickableDependentElements());return e},getClickableDependentElements(){const e=[this.$el];return this.$refs.content&&e.push(this.$refs.content),this.overlay&&e.push(this.overlay.$el),e.push(...this.getOpenDependentElements()),e}}})},c934:function(e,i,t){},d10f:function(e,i,t){"use strict";var o=t("2b0e");i["a"]=o["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},dc22:function(e,i,t){"use strict";function o(e,i,t){const o=i.value,c=i.options||{passive:!0};window.addEventListener("resize",o,c),e._onResize=Object(e._onResize),e._onResize[t.context._uid]={callback:o,options:c},i.modifiers&&i.modifiers.quiet||o()}function c(e,i,t){var o;if(!(null===(o=e._onResize)||void 0===o?void 0:o[t.context._uid]))return;const{callback:c,options:n}=e._onResize[t.context._uid];window.removeEventListener("resize",c,n),delete e._onResize[t.context._uid]}const n={inserted:o,unbind:c};i["a"]=n},dd89:function(e,i,t){"use strict";function o(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}const i=e.getRootNode();return i!==document&&i.getRootNode({composed:!0})!==document?null:i}t.d(i,"a",(function(){return o}))},de3b:function(e,i,t){"use strict";t.d(i,"a",(function(){return o}));const o=[{title:"Dashboards",icon:"mdi-desktop-mac-dashboard",group:"dashboards",children:[{title:"Job Management",icon:"mdi-account-network",to:"job-management"},{title:"Sales",icon:"mdi-sale",to:"sales"},{title:"Analytic",icon:"mdi-google-analytics",to:"analytic"},{title:"Crypto Currency",icon:"mdi-bitcoin",to:"crypto-currency"},{title:"Donation",icon:"mdi-gift-open",to:"donation"}]},{title:"Apps",icon:"mdi-apps-box",group:"apps",children:[{title:"Chat",to:"chat",icon:"mdi-circle-medium"},{title:"File Manager",to:"file-manager",icon:"mdi-circle-medium"},{title:"Note",to:"note",icon:"mdi-circle-medium"},{title:"Scrumboard",to:"scrumboard",icon:"mdi-circle-medium"},{title:"Todo",to:"todo",icon:"mdi-circle-medium"}]},{title:"Charts",icon:"mdi-chart-bar-stacked",group:"charts",children:[{title:"Area",to:"ApexAreaChart",icon:"mdi-circle-medium"},{title:"Bar",to:"ApexBarChart",icon:"mdi-circle-medium"},{title:"Mix",to:"ApexMixChart",icon:"mdi-circle-medium"},{title:"Column",to:"ApexColumnChart",icon:"mdi-circle-medium"},{title:"Pie",to:"ApexPieChart",icon:"mdi-circle-medium"},{title:"Radar",to:"ApexRadarChart",icon:"mdi-circle-medium"},{title:"Scatter",to:"ApexScatterChart",icon:"mdi-circle-medium"},{title:"Sparkline",to:"ApexSparklineChart",icon:"mdi-circle-medium"},{title:"Custom",to:"CustomApexChart",icon:"mdi-circle-medium"}]},{title:"Account ",icon:"mdi-account",group:"account",children:[{title:" Data",to:"AccountData",icon:"mdi-circle-medium"},{title:"Home",to:"AccountHome",icon:"mdi-circle-medium"},{title:" Payment",to:"AccountPayment",icon:"mdi-circle-medium"},{title:" People",to:"AccountPeople",icon:"mdi-circle-medium"},{title:" Personal Info",to:"AccountPersonalInfo",icon:"mdi-circle-medium"},{title:" Security",to:"AccountSecurity",icon:"mdi-circle-medium"}]},{title:"Faq ",icon:"mdi-chat-question",group:"faq",children:[{title:"Faq One",to:"FaqOne",icon:"mdi-circle-medium"},{title:"Faq Two",to:"FaqTwo",icon:"mdi-circle-medium"},{title:"Faq Three",to:"FaqThree",icon:"mdi-circle-medium"}]},{title:"Widgets",icon:"mdi-chart-bar-stacked",group:"widgets",children:[{title:"General",to:"general",icon:"mdi-circle-medium"},{title:"widgets Charts",to:"widgetsCharts",icon:"mdi-circle-medium"},{title:"widgets Table",to:"widgetsTable",icon:"mdi-circle-medium"}]},{title:"List",icon:"mdi-format-list-checkbox",group:"list",children:[{title:"List Column",to:"list-column",icon:"mdi-circle-medium"},{title:"List Column Two",to:"list-column-two",icon:"mdi-circle-medium"},{title:"List Column Three",to:"list-column-three",icon:"mdi-circle-medium"},{title:"List Column Row",to:"list-column-row",icon:"mdi-circle-medium"}]},{title:"Profile",icon:"mdi-face-man",group:"profile",children:[{title:"Profile Ver 1",to:"profile-one",icon:"mdi-circle-medium"},{title:"Profile Ver 2",to:"profile-two",icon:"mdi-circle-medium"}]},{title:"Pricing",icon:"mdi-file-table-box",group:"pricing",children:[{title:"Pricing Ver 1",to:"pricing-ver-one",icon:"mdi-circle-medium"},{title:"Pricing Ver 2",to:"pricing-ver-two",icon:"mdi-circle-medium"},{title:"Pricing Ver 3",to:"pricing-ver-three",icon:"mdi-circle-medium"}]},{title:"Invoice",icon:"mdi-book-open-page-variant",group:"Invoice",children:[{title:"Invoice ver 1",to:"invoice-ver-one",icon:"mdi-circle-medium"},{title:"Invoice ver 2",to:"invoice-ver-two",icon:"mdi-circle-medium"},{title:"Edit Invoice",to:"edit-invoice",icon:"mdi-circle-medium"}]},{title:"Ecommerce",icon:"mdi-cart",group:"ecommerce",children:[{title:"Product List",to:"ecommerce-product-list",icon:"mdi-circle-medium"},{title:"Product Details",to:"ecommerce-product-details",icon:"mdi-circle-medium"},{title:"Product Checkout",to:"ecommerce-product-checkout",icon:"mdi-circle-medium"}]},{title:"Basic Kits",icon:"mdi-diamond-stone",group:"uiKits",children:[{title:"Button",to:"button",icon:"mdi-circle-medium"},{title:"Avatar",to:"avatar",icon:"mdi-circle-medium"},{title:"Alerts",to:"alerts",icon:"mdi-circle-medium"},{title:"Accordion",to:"accordion",icon:"mdi-circle-medium"},{title:"Badge",to:"badge",icon:"mdi-circle-medium"},{title:"Chips",to:"chips",icon:"mdi-circle-medium"},{title:"Snackbar",to:"snackbar",icon:"mdi-circle-medium"},{title:"Stepper",to:"stepper",icon:"mdi-circle-medium"}]},{title:"Advance Kits",icon:"mdi-dice-5",group:"extraUiKits",children:[{title:"Cards",to:"cards",icon:"mdi-circle-medium"},{title:"Calendars",to:"calendars",icon:"mdi-circle-medium"},{title:"Circular",to:"circular",icon:"mdi-circle-medium"},{title:"Linear",to:"linear",icon:"mdi-circle-medium"},{title:"Pagination",to:"paginations",icon:"mdi-circle-medium"},{title:"List",to:"list",icon:"mdi-circle-medium"},{title:"Bottom Navigation",to:"bottom-navigation",icon:"mdi-circle-medium"},{title:"Bottom Sheets",to:"bottom-sheets",icon:"mdi-circle-medium"},{title:"Ratings",to:"ratings",icon:"mdi-circle-medium"},{title:"Tabs",to:"tabs",icon:"mdi-circle-medium"}]},{title:"Forms",icon:"mdi-help-box",group:"forms",children:[{title:"Combobox",to:"combobox",icon:"mdi-circle-medium"},{title:"validation",to:"validation",icon:"mdi-circle-medium"},{title:"Overflow Buttons",to:"overflow-buttons",icon:"mdi-circle-medium"},{title:"Selects",to:"selects",icon:"mdi-circle-medium"},{title:"Selection Controls",to:"selection-controls",icon:"mdi-circle-medium"},{title:"Sliders",to:"sliders",icon:"mdi-circle-medium"},{title:"Textarea",to:"textarea",icon:"mdi-circle-medium"},{title:"Textfields",to:"textfields",icon:"mdi-circle-medium"},{title:"DatePicker",to:"datepicker",icon:"mdi-circle-medium"},{title:"TimePicker",to:"timepicker",icon:"mdi-circle-medium"}]},{title:"Datatables",icon:"mdi-table",group:"tables",children:[{title:"Data Iterators",to:"dataIterators",icon:"mdi-circle-medium"},{title:"Simple Tables",to:"simpleTables",icon:"mdi-circle-medium"},{title:"Data Tables",to:"dataTables",icon:"mdi-circle-medium"}]},{title:"Custom Datatable",icon:"mdi-table-large",group:"customTable",children:[{title:"Table Ver One",to:"tableOne",icon:"mdi-circle-medium"},{title:"Table Ver Two",to:"tableTwo",icon:"mdi-circle-medium"},{title:"Table Ver Three",to:"tableThree",icon:"mdi-circle-medium"}]},{title:"Sessions",icon:"mdi-logout-variant",group:"sessions",children:[{title:"Sign In",to:"sign-in",icon:"mdi-circle-medium"},{title:"Error",to:"error",icon:"mdi-circle-medium"},{title:"Forgot",to:"forgot",icon:"mdi-circle-medium"},{title:"Lockscreen",to:"lockscreen",icon:"mdi-circle-medium"},{title:"SignIn ver 2",to:"sign-in-two",icon:"mdi-circle-medium"},{title:"SignIn ver 3",to:"sign-in-three",icon:"mdi-circle-medium"},{title:"SignIn ver 4",to:"sign-in-four",icon:"mdi-circle-medium"},{title:"SignIn ver 5",to:"sign-in-five",icon:"mdi-circle-medium"},{title:"SignUp",to:"sign-up",icon:"mdi-circle-medium"},{title:"SignUp Ver 2",to:"sign-up-2",icon:"mdi-circle-medium"},{title:"SignUp Ver 5",to:"sign-up-5",icon:"mdi-circle-medium"}]}]},fa77:function(e,i,t){"use strict";t("c934")}}]);
//# sourceMappingURL=chunk-7d61f272.aaf31197.js.map