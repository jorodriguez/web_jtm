(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de4f2ea4"],{"0fd9":function(t,e,a){"use strict";a("13d5"),a("14d9"),a("4b85");var s=a("2b0e"),i=a("d9f7"),r=a("80d2");const o=["sm","md","lg","xl"],n=["start","end","center"];function l(t,e){return o.reduce((a,s)=>(a[t+Object(r["I"])(s)]=e(),a),{})}const c=t=>[...n,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),h=t=>[...n,"space-between","space-around"].includes(t),p=l("justify",()=>({type:String,default:null,validator:h})),u=t=>[...n,"space-between","space-around","stretch"].includes(t),v=l("alignContent",()=>({type:String,default:null,validator:u})),g={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(v)},f={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,a){let s=f[t];if(null!=a){if(e){const a=e.replace(t,"");s+="-"+a}return s+="-"+a,s.toLowerCase()}}const b=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...p,alignContent:{type:String,default:null,validator:u},...v},render(t,{props:e,data:a,children:s}){let r="";for(const i in e)r+=String(e[i]);let o=b.get(r);if(!o){let t;for(t in o=[],g)g[t].forEach(a=>{const s=e[a],i=m(t,a,s);i&&o.push(i)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),b.set(r,o)}return t(e.tag,Object(i["a"])(a,{staticClass:"row",class:o}),s)}})},"1e6c":function(t,e,a){"use strict";var s=a("9d65"),i=a("4e82"),r=a("c3f0"),o=a("80d2"),n=a("58df");const l=Object(n["a"])(s["a"],Object(i["a"])("windowGroup","v-window-item","v-window"));e["a"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:r["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(o["i"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(o["i"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}})},"221a":function(t,e,a){"use strict";a("9964")},"266f":function(t,e,a){"use strict";a.r(e);var s=a("8336"),i=a("b0af"),r=a("99d9"),o=a("cc20"),n=a("62ad"),l=a("132d"),c=a("8860"),d=a("da13"),h=a("5d23"),p=a("e449"),u=a("8e36"),v=a("0fd9"),g=a("71a3"),f=a("c671"),m=a("fe57"),b=a("aac8"),C=a("9a96"),w=function(){var t=this,e=t._self._c;return e(v["a"],[e(n["a"],{attrs:{cols:"12",md:"12",lg:"4"}},[e("base-card",{staticClass:"h-full"},[e(r["d"],{staticClass:"d-flex justify-space-between"},[e("div",{staticClass:"card-title"},[t._v("Author sales")]),e(p["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a}){return[e(s["a"],t._g({attrs:{icon:""}},a),[e(l["a"],{attrs:{color:"primary"}},[t._v("mdi-dots-horizontal")])],1)]}}])},[e(c["a"],[e(d["a"],[e(h["d"],[t._v("Action")])],1),e(d["a"],[e(h["d"],[t._v("Another Action")])],1),e(d["a"],[e(h["d"],[t._v("Something")])],1)],1)],1)],1),e(r["c"],{staticClass:"pb-0"},[e("div",{staticClass:"d-flex align-center"},[e("div",[e("h4",{staticClass:"mb-0 pr-3 font-weight-bold"},[t._v("$34M")])]),e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"bar",height:"150",options:t.widgetChart.chartOptions,series:t.widgetChart.series}})],1)])])],1)],1),e(n["a"],{attrs:{cols:"12",md:"12",lg:"4"}},[e("base-card",{staticClass:"h-full"},[e(r["d"],{staticClass:"d-flex justify-space-between"},[e("div",{staticClass:"card-title"},[t._v("New Product")]),e(p["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a}){return[e(s["a"],t._g({attrs:{icon:""}},a),[e(l["a"],{attrs:{color:"primary"}},[t._v("mdi-dots-horizontal")])],1)]}}])},[e(c["a"],[e(d["a"],[e(h["d"],[t._v("Action")])],1),e(d["a"],[e(h["d"],[t._v("Another Action")])],1),e(d["a"],[e(h["d"],[t._v("Something")])],1)],1)],1)],1),e(r["c"],{staticClass:"pb-0"},[e("div",{staticClass:"d-flex align-center"},[e("div",[e("h4",{staticClass:"mb-0 pr-3 font-weight-bold"},[t._v("$6M")])]),e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"donut",options:t.widgetChart2.chartOptions,series:t.widgetChart2.series}})],1)])])],1)],1),e(n["a"],{attrs:{cols:"12",md:"12",lg:"4"}},[e("base-card",{staticClass:"h-full"},[e(r["d"],{staticClass:"d-flex justify-space-between"},[e("div",{staticClass:"card-title"},[t._v("New Product")]),e(p["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a}){return[e(s["a"],t._g({attrs:{icon:""}},a),[e(l["a"],{attrs:{color:"primary"}},[t._v("mdi-dots-horizontal")])],1)]}}])},[e(c["a"],[e(d["a"],[e(h["d"],[t._v("Action")])],1),e(d["a"],[e(h["d"],[t._v("Another Action")])],1),e(d["a"],[e(h["d"],[t._v("Something")])],1)],1)],1)],1),e(r["c"],{staticClass:"pb-0"},[e("div",{staticClass:"d-flex align-center"},[e("div",[e("h4",{staticClass:"mb-0 pr-3 font-weight-bold"},[t._v("$17M")])]),e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"area",options:t.widgetChart3.chartOptions,series:t.widgetChart3.series}})],1)])])],1)],1),e(n["a"],{attrs:{cols:"12",md:"4"}},[e("base-card",[e(r["d"],{staticClass:"d-flex justify-space-between"},[e("div",[e("div",{staticClass:"card-title mb-0"},[t._v("New Users")]),e("p",{staticClass:"text--disabled ma-0 body-1"},[t._v("34 Week")])]),e("h5",{staticClass:"font-weight-bold"},[t._v("+789")])]),e(r["c"],{staticClass:"pa-0"},[e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"area",height:"50",options:t.widgetChart4.chartOptions,series:t.widgetChart4.series}})],1)])],1)],1),e(n["a"],{attrs:{cols:"12",md:"4"}},[e("base-card",[e(r["d"],{staticClass:"d-flex justify-space-between"},[e("div",[e("div",{staticClass:"card-title mb-0"},[t._v("Daily Orders")]),e("p",{staticClass:"text--disabled ma-0 body-1"},[t._v("12 Week")])]),e("h5",{staticClass:"font-weight-bold"},[t._v("3,400")])]),e(r["c"],{staticClass:"pa-0"},[e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"area",height:"50",options:t.widgetChart5.chartOptions,series:t.widgetChart5.series}})],1)])],1)],1),e(n["a"],{attrs:{cols:"12",md:"4"}},[e("base-card",[e(r["d"],{staticClass:"d-flex justify-space-between"},[e("div",[e("div",{staticClass:"card-title mb-0"},[t._v("Revenue")]),e("p",{staticClass:"text--disabled ma-0 body-1"},[t._v("One Day")])]),e("h5",{staticClass:"font-weight-bold"},[t._v("95%")])]),e(r["c"],{staticClass:"pa-0"},[e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"area",height:"50",options:t.widgetChart6.chartOptions,series:t.widgetChart6.series}})],1)])],1)],1),e(n["a"],{attrs:{cols:"12",md:"6",lg:"4"}},[e("base-card",[e(r["d"],{staticClass:"d-flex justify-space-between"},[e("div",{staticClass:"card-title"},[t._v("Best Framework")]),e(p["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a}){return[e(s["a"],t._g({attrs:{icon:""}},a),[e(l["a"],{attrs:{color:"primary"}},[t._v("mdi-dots-horizontal")])],1)]}}])},[e(c["a"],[e(d["a"],[e(h["d"],[t._v("Action")])],1),e(d["a"],[e(h["d"],[t._v("Another Action")])],1),e(d["a"],[e(h["d"],[t._v("Something")])],1)],1)],1)],1),e(r["c"],[e(m["a"],{attrs:{"background-color":"primary",centered:"",dark:"","icons-and-text":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(C["a"]),e(g["a"],{attrs:{href:"#tab-1"}},[t._v(" Settings "),e(l["a"],[t._v("mdi-cog")])],1),e(g["a"],{attrs:{href:"#tab-2"}},[t._v(" Code "),e(l["a"],[t._v("mdi-code-tags")])],1),e(g["a"],{attrs:{href:"#tab-3"}},[t._v(" Design "),e(l["a"],[t._v("mdi-format-paint")])],1)],1),e(b["a"],{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(3,(function(a){return e(f["a"],{key:a,attrs:{value:"tab-"+a}},[e(i["a"],{attrs:{flat:""}},[e(r["c"],{staticClass:"mt-4"},t._l(t.tabItems,(function(a,s){return e("div",{key:s,staticClass:"d-flex justify-space-between align-center mb-4"},[e("div",[e("p",{staticClass:"ma-0 font-weight-bold"},[t._v(" "+t._s(a.title)+" ")]),e("p",{staticClass:"text--disabled ma-0"},[t._v(" "+t._s(a.subTitle)+" ")])]),e("div",{staticClass:"flex-basis-125"},[e("span",{staticStyle:{float:"right"}},[t._v(t._s(a.percent)+"%")]),e(u["a"],{attrs:{rounded:"",color:a.progressColor,value:a.percent}})],1)])})),0)],1)],1)})),1)],1)],1)],1),e(n["a"],{attrs:{cols:"12",md:"6",lg:"8"}},[e("base-card",{staticClass:"h-full"},[e(r["d"],{staticClass:"d-flex justify-space-between"},[e("div",{staticClass:"card-title"},[t._v("Statistics")]),e(p["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a}){return[e(s["a"],t._g({attrs:{icon:""}},a),[e(l["a"],{attrs:{color:"primary"}},[t._v("mdi-dots-horizontal")])],1)]}}])},[e(c["a"],[e(d["a"],[e(h["d"],[t._v("Action")])],1),e(d["a"],[e(h["d"],[t._v("Another Action")])],1),e(d["a"],[e(h["d"],[t._v("Something")])],1)],1)],1)],1),e(r["c"],[e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"bar",height:"413",options:t.widgetChart7.chartOptions,series:t.widgetChart7.series}})],1)])],1)],1),e(n["a"],{attrs:{cols:"12",md:"6",lg:"8"}},[e("base-card",[e(r["d"],{staticClass:"d-flex justify-space-between"},[e("div",[e("div",{staticClass:"card-title mb-0"},[t._v("Revenue")])]),e(p["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a}){return[e(s["a"],t._g({attrs:{icon:""}},a),[e(l["a"],{attrs:{color:"primary"}},[t._v("mdi-dots-horizontal")])],1)]}}])},[e(c["a"],[e(d["a"],[e(h["d"],[t._v("Action")])],1),e(d["a"],[e(h["d"],[t._v("Another Action")])],1),e(d["a"],[e(h["d"],[t._v("Something")])],1)],1)],1)],1),e(r["c"],[e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"area",height:"350",options:t.widgetChart8.chartOptions,series:t.widgetChart8.series}})],1)])],1)],1),e(n["a"],{attrs:{cols:"12",md:"6",lg:"4"}},[e("base-card",{staticClass:"h-full"},[e(r["d"],{staticClass:"d-flex justify-space-between"},[e("div",[e("div",{staticClass:"card-title mb-0"},[t._v("Best Framework")])]),e(p["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a}){return[e(s["a"],t._g({attrs:{icon:""}},a),[e(l["a"],{attrs:{color:"primary"}},[t._v("mdi-dots-horizontal")])],1)]}}])},[e(c["a"],[e(d["a"],[e(h["d"],[t._v("Action")])],1),e(d["a"],[e(h["d"],[t._v("Another Action")])],1),e(d["a"],[e(h["d"],[t._v("Something")])],1)],1)],1)],1),e(r["c"],[e("div",{staticClass:"d-flex justify-space-between align-center mb-4"},[e("div",[e("p",{staticClass:"ma-0 font-weight-bold"},[t._v(" Addidas Template ")]),e("p",{staticClass:"text--disabled ma-0"},[t._v("Landing Page")])]),e("div",{staticClass:"flex-basis-125"},[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"mr-2",attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"line",height:"30",options:t.widgetChart9.chartOptions,series:t.widgetChart9.series}})],1),e("div",{staticClass:"text-center"},[e("p",{staticClass:"ma-0"},[t._v("4.3k")]),e(o["a"],{attrs:{"x-small":"",label:"",color:"primary"}},[t._v(" + 240 ")])],1)])])]),e("div",{staticClass:"d-flex justify-space-between align-center mb-4"},[e("div",[e("p",{staticClass:"ma-0 font-weight-bold"},[t._v(" React.js Template ")]),e("p",{staticClass:"text--disabled ma-0"},[t._v("Frontend")])]),e("div",{staticClass:"flex-basis-125"},[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"mr-2",attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"line",height:"30",options:t.widgetChart10.chartOptions,series:t.widgetChart10.series}})],1),e("div",{staticClass:"text-center"},[e("p",{staticClass:"ma-0"},[t._v("4.3k")]),e(o["a"],{attrs:{"x-small":"",label:"",dark:"",color:"danger"}},[t._v(" + 240 ")])],1)])])]),e("div",{staticClass:"d-flex justify-space-between align-center mb-4"},[e("div",[e("p",{staticClass:"ma-0 font-weight-bold"},[t._v("Vue.js Template")]),e("p",{staticClass:"text--disabled ma-0"},[t._v("Admin Dashboard")])]),e("div",{staticClass:"flex-basis-125"},[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"mr-2",attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"line",height:"30",options:t.widgetChart11.chartOptions,series:t.widgetChart11.series}})],1),e("div",{staticClass:"text-center"},[e("p",{staticClass:"ma-0"},[t._v("7.3k")]),e(o["a"],{attrs:{"x-small":"",dark:"",label:"",color:"orange"}},[t._v(" + 240 ")])],1)])])]),e("div",{staticClass:"d-flex justify-space-between align-center mb-4"},[e("div",[e("p",{staticClass:"ma-0 font-weight-bold"},[t._v(" Angular Template ")]),e("p",{staticClass:"text--disabled ma-0"},[t._v("SPA")])]),e("div",{staticClass:"flex-basis-125"},[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"mr-2",attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"line",height:"30",options:t.widgetChart12.chartOptions,series:t.widgetChart12.series}})],1),e("div",{staticClass:"text-center"},[e("p",{staticClass:"ma-0"},[t._v("17.3k")]),e(o["a"],{attrs:{"x-small":"",dark:"",label:"",color:"success"}},[t._v(" + 240 ")])],1)])])]),e("div",{staticClass:"d-flex justify-space-between align-center mb-4"},[e("div",[e("p",{staticClass:"ma-0 font-weight-bold"},[t._v("Ember Template")]),e("p",{staticClass:"text--disabled ma-0"},[t._v("Landing Page")])]),e("div",{staticClass:"flex-basis-125"},[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"mr-2",attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"line",height:"30",options:t.widgetChart13.chartOptions,series:t.widgetChart13.series}})],1),e("div",{staticClass:"text-center"},[e("p",{staticClass:"ma-0"},[t._v("17.3k")]),e(o["a"],{attrs:{"x-small":"",dark:"",label:"",color:"info"}},[t._v(" + 240 ")])],1)])])])])],1)],1),e(n["a"],{attrs:{cols:"12",md:"8"}},[e("base-card",[e(r["d"],{staticClass:"d-flex justify-space-between"}),e("div",{staticClass:"card-title"},[t._v("Statistics")]),e(p["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a}){return[e(s["a"],t._g({attrs:{icon:""}},a),[e(l["a"],{attrs:{color:"primary"}},[t._v("mdi-dots-horizontal")])],1)]}}])},[e(c["a"],[e(d["a"],[e(h["d"],[t._v("Action")])],1),e(d["a"],[e(h["d"],[t._v("Another Action")])],1),e(d["a"],[e(h["d"],[t._v("Something")])],1)],1)],1),e(r["c"],[e(v["a"],{attrs:{align:"center"}},[e(n["a"],{attrs:{cols:"12",md:"3"}},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"mr-2"},[e("p",{staticClass:"caption ma-0"},[t._v("Sales")]),e("p",{staticClass:"body-2 ma-0"},[t._v("+23%")])]),e("div",{staticClass:"flex-basis-50 mt-1"},[e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"line",height:"30",options:t.widgetChart9.chartOptions,series:t.widgetChart9.series}})],1)])])]),e(n["a"],{attrs:{cols:"12",md:"3"}},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"mr-2"},[e("p",{staticClass:"caption ma-0"},[t._v("Sales")]),e("p",{staticClass:"body-2 ma-0"},[t._v("+23%")])]),e("div",{staticClass:"flex-basis-50 mt-1"},[e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"line",height:"30",options:t.widgetChart10.chartOptions,series:t.widgetChart10.series}})],1)])])]),e(n["a"],{attrs:{cols:"12",md:"3"}},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"mr-2"},[e("p",{staticClass:"caption ma-0"},[t._v("Sales")]),e("p",{staticClass:"body-2 ma-0"},[t._v("+23%")])]),e("div",{staticClass:"flex-basis-50 mt-1"},[e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"line",height:"30",options:t.widgetChart11.chartOptions,series:t.widgetChart10.series}})],1)])])]),e(n["a"],{attrs:{cols:"12",md:"3"}},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"mr-2"},[e("p",{staticClass:"caption ma-0"},[t._v("Sales")]),e("p",{staticClass:"body-2 ma-0"},[t._v("+23%")])]),e("div",{staticClass:"flex-basis-50 mt-1"},[e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"line",height:"30",options:t.widgetChart12.chartOptions,series:t.widgetChart10.series}})],1)])])])],1),e("div",{staticClass:"mt-5"},[e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"area",height:"350",options:t.widgetChart14.chartOptions,series:t.widgetChart14.series}})],1)])],1)],1)],1)],1)},y=[],x=(a("13d5"),a("343b"));const _={series:[{name:"Inflation",data:[25,66,41,89,63,25]}],chartOptions:{colors:["#7367F0"],chart:{toolbar:{show:!1},height:150,type:"bar"},plotOptions:{bar:{columnWidth:"20%",endingShape:"rounded"}},dataLabels:{enabled:!1,formatter:function(t){return t+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#304758"]}},grid:{show:!1},xaxis:{labels:{show:!1},position:"top",axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!1}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(t){return t+"%"}}}}},O={series:[44,55,41],chartOptions:{chart:{type:"donut"},dataLabels:{enabled:!1},plotOptions:{pie:{donut:{labels:{show:!0,name:{show:!1},value:{show:!0},total:{show:!0,label:"Total",formatter:function(t){return t.globals.seriesTotals.reduce((t,e)=>t+e,0)}}}}}},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}},S={series:[{name:"series1",data:[31,40,28,51,42,109,100]}],chartOptions:{chart:{height:350,type:"area",toolbar:{show:!1}},stroke:{curve:"smooth",width:2},fill:{colors:"#7367F0",gradient:{shadeIntensity:1,opacityFrom:.1,opacityTo:.6,stops:[0,90,100]}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},grid:{show:!1},yaxis:{labels:{show:!1}},xaxis:{labels:{show:!1},type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}},T={series:[{name:"series1",data:[20,25,20,10,20,10,20,25,10]}],chartOptions:{chart:{type:"area",sparkline:{enabled:!0}},fill:{opacity:.3},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1},grid:{show:!1},xaxis:{crosshairs:{width:1}},yaxis:{min:0},colors:["#7367F0"]}},k={series:[{name:"series1",data:[10,25,20,10,20,10,20,25,20]}],chartOptions:{chart:{type:"area",sparkline:{enabled:!0}},fill:{opacity:.3},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1},grid:{show:!1},xaxis:{crosshairs:{width:1}},yaxis:{min:0},colors:["#CB3066"]}},A={series:[{name:"series1",data:[20,25,20,10,20,10,20,25,10]}],chartOptions:{chart:{type:"area",sparkline:{enabled:!0}},fill:{opacity:.3},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1},grid:{show:!1},xaxis:{crosshairs:{width:1}},yaxis:{min:0},colors:["#28C76E"]}},j={series:[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]},{name:"PRODUCT C",data:[11,17,15,15,21,14]},{name:"PRODUCT D",data:[21,7,25,13,22,8]}],chartOptions:{chart:{type:"bar",height:350,stacked:!0,toolbar:{show:!1},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]},legend:{show:!1},fill:{opacity:1}}},N={series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],chartOptions:{chart:{height:350,type:"area",toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},legend:{show:!1},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}},J={series:[{name:"series1",data:[10,30,20,50,20,30,10]}],chartOptions:{chart:{type:"line",sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1}}},G={series:[{name:"series1",data:[10,20,40,20,20,30,10]}],chartOptions:{chart:{type:"line",sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1},colors:["#CB3066"]}},B={series:[{name:"series1",data:[10,20,40,20,20,30,10]}],chartOptions:{chart:{type:"line",sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1},colors:["#e97d23"]}},D={series:[{name:"series1",data:[10,20,40,20,20,30,10]}],chartOptions:{chart:{type:"line",sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1},colors:["#28C76E"]}},L={series:[{name:"series1",data:[10,20,40,20,20,30,10]}],chartOptions:{chart:{type:"line",sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1},colors:["#5578eb"]}},M={series:[{name:"South",data:Object(x["b"])(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"North",data:Object(x["b"])(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:20})},{name:"Central",data:Object(x["b"])(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:15})},{name:"West",data:Object(x["b"])(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:15})}],chartOptions:{chart:{type:"area",height:350,stacked:!0,toolbar:{show:!1},events:{selection:function(t,e){console.log(new Date(e.xaxis.min))}}},colors:["#9e95f5","#48da88","#fc612c","#a2c6f0"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},fill:{type:"gradient",gradient:{opacityFrom:.6,opacityTo:.8}},legend:{position:"top",horizontalAlign:"left"},xaxis:{type:"datetime"}}};var $={name:"Charts",metaInfo:{title:"Charts"},data(){return{widgetChart:_,widgetChart2:O,widgetChart3:S,widgetChart4:T,widgetChart5:k,widgetChart6:A,widgetChart7:j,widgetChart8:N,widgetChart9:J,widgetChart10:G,widgetChart11:B,widgetChart12:D,widgetChart13:L,widgetChart14:M,tab:null,tabItems:[{title:"Addidas Template",subTitle:"Landing Page",percent:80,progressColor:"primary"},{title:"Agency Template",subTitle:"Single Page",percent:50,progressColor:"danger"},{title:"Vuej.s Template",subTitle:"SPA",percent:20,progressColor:"orange"},{title:"Medical Template",subTitle:"SPA",percent:90,progressColor:"green"},{title:"Reaact.js Template",subTitle:"Admin Dashboard",percent:70,progressColor:"purple"}]}}},E=$,P=(a("221a"),a("2877")),F=Object(P["a"])(E,w,y,!1,null,null,null);e["default"]=F.exports},"343b":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"e",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return o})),a.d(e,"a",(function(){return n}));a("14d9");const s=function(t,e,a){var s=0,i=[];while(s<e){var r=t,o=Math.floor(Math.random()*(a.max-a.min+1))+a.min;i.push([r,o]),t+=864e5,s++}return i},i=[47,45,54,38,56,24,65,31,37,39,62,51,35,41,35,27,93,53,61,27,54,43,19,46],r=function(t){var e,a,s=t.slice(),i=s.length;while(0!==i)a=Math.floor(Math.random()*i),i-=1,e=s[i],s[i]=s[a],s[a]=e;return s},o=function(t,e,a){var s=0,i=[];while(s<e){var r=Math.floor(Math.random()*(a.max-a.min+1))+a.min;i.push([t,r]),t+=864e5,s++}return i},n={monthDataSeries1:{prices:[8107.85,8128,8122.9,8165.5,8340.7,8423.7,8423.5,8514.3,8481.85,8487.7,8506.9,8626.2,8668.95,8602.3,8607.55,8512.9,8496.25,8600.65,8881.1,9340.85],dates:["13 ","14 ","15 ","16 ","17 ","20 ","21 ","22 ","23 ","24 ","27 ","28 ","29 ","30 ","01 ","04 ","05 ","06 ","07 ","08 "]},monthDataSeries2:{prices:[8423.7,8423.5,8514.3,8481.85,8487.7,8506.9,8626.2,8668.95,8602.3,8607.55,8512.9,8496.25,8600.65,8881.1,9040.85,8340.7,8165.5,8122.9,8107.85,8128],dates:["13 Nov 2017","14 Nov 2017","15 Nov 2017","16 Nov 2017","17 Nov 2017","20 Nov 2017","21 Nov 2017","22 Nov 2017","23 Nov 2017","24 Nov 2017","27 Nov 2017","28 Nov 2017","29 Nov 2017","30 Nov 2017","01 Dec 2017","04 Dec 2017","05 Dec 2017","06 Dec 2017","07 Dec 2017","08 Dec 2017"]},monthDataSeries3:{prices:[7114.25,7126.6,7116.95,7203.7,7233.75,7451,7381.15,7348.95,7347.75,7311.25,7266.4,7253.25,7215.45,7266.35,7315.25,7237.2,7191.4,7238.95,7222.6,7217.9,7359.3,7371.55,7371.15,7469.2,7429.25,7434.65,7451.1,7475.25,7566.25,7556.8,7525.55,7555.45,7560.9,7490.7,7527.6,7551.9,7514.85,7577.95,7592.3,7621.95,7707.95,7859.1,7815.7,7739,7778.7,7839.45,7756.45,7669.2,7580.45,7452.85,7617.25,7701.6,7606.8,7620.05,7513.85,7498.45,7575.45,7601.95,7589.1,7525.85,7569.5,7702.5,7812.7,7803.75,7816.3,7851.15,7912.2,7972.8,8145,8161.1,8121.05,8071.25,8088.2,8154.45,8148.3,8122.05,8132.65,8074.55,7952.8,7885.55,7733.9,7897.15,7973.15,7888.5,7842.8,7838.4,7909.85,7892.75,7897.75,7820.05,7904.4,7872.2,7847.5,7849.55,7789.6,7736.35,7819.4,7875.35,7871.8,8076.5,8114.8,8193.55,8217.1,8235.05,8215.3,8216.4,8301.55,8235.25,8229.75,8201.95,8164.95,8107.85,8128,8122.9,8165.5,8340.7,8423.7,8423.5,8514.3,8481.85,8487.7,8506.9,8626.2],dates:["02 Jun 2017","05 Jun 2017","06 Jun 2017","07 Jun 2017","08 Jun 2017","09 Jun 2017","12 Jun 2017","13 Jun 2017","14 Jun 2017","15 Jun 2017","16 Jun 2017","19 Jun 2017","20 Jun 2017","21 Jun 2017","22 Jun 2017","23 Jun 2017","27 Jun 2017","28 Jun 2017","29 Jun 2017","30 Jun 2017","03 Jul 2017","04 Jul 2017","05 Jul 2017","06 Jul 2017","07 Jul 2017","10 Jul 2017","11 Jul 2017","12 Jul 2017","13 Jul 2017","14 Jul 2017","17 Jul 2017","18 Jul 2017","19 Jul 2017","20 Jul 2017","21 Jul 2017","24 Jul 2017","25 Jul 2017","26 Jul 2017","27 Jul 2017","28 Jul 2017","31 Jul 2017","01 Aug 2017","02 Aug 2017","03 Aug 2017","04 Aug 2017","07 Aug 2017","08 Aug 2017","09 Aug 2017","10 Aug 2017","11 Aug 2017","14 Aug 2017","16 Aug 2017","17 Aug 2017","18 Aug 2017","21 Aug 2017","22 Aug 2017","23 Aug 2017","24 Aug 2017","28 Aug 2017","29 Aug 2017","30 Aug 2017","31 Aug 2017","01 Sep 2017","04 Sep 2017","05 Sep 2017","06 Sep 2017","07 Sep 2017","08 Sep 2017","11 Sep 2017","12 Sep 2017","13 Sep 2017","14 Sep 2017","15 Sep 2017","18 Sep 2017","19 Sep 2017","20 Sep 2017","21 Sep 2017","22 Sep 2017","25 Sep 2017","26 Sep 2017","27 Sep 2017","28 Sep 2017","29 Sep 2017","03 Oct 2017","04 Oct 2017","05 Oct 2017","06 Oct 2017","09 Oct 2017","10 Oct 2017","11 Oct 2017","12 Oct 2017","13 Oct 2017","16 Oct 2017","17 Oct 2017","18 Oct 2017","19 Oct 2017","23 Oct 2017","24 Oct 2017","25 Oct 2017","26 Oct 2017","27 Oct 2017","30 Oct 2017","31 Oct 2017","01 Nov 2017","02 Nov 2017","03 Nov 2017","06 Nov 2017","07 Nov 2017","08 Nov 2017","09 Nov 2017","10 Nov 2017","13 Nov 2017","14 Nov 2017","15 Nov 2017","16 Nov 2017","17 Nov 2017","20 Nov 2017","21 Nov 2017","22 Nov 2017","23 Nov 2017","24 Nov 2017","27 Nov 2017","28 Nov 2017"]}}},"4b85":function(t,e,a){},"62ad":function(t,e,a){"use strict";a("13d5"),a("14d9"),a("4b85");var s=a("2b0e"),i=a("d9f7"),r=a("80d2");const o=["sm","md","lg","xl"],n=(()=>o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>o.reduce((t,e)=>(t["offset"+Object(r["I"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>o.reduce((t,e)=>(t["order"+Object(r["I"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(n),offset:Object.keys(l),order:Object.keys(c)};function h(t,e,a){let s=t;if(null!=a&&!1!==a){if(e){const a=e.replace(t,"");s+="-"+a}return"col"!==t||""!==a&&!0!==a?(s+="-"+a,s.toLowerCase()):s.toLowerCase()}}const p=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...n,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:a,children:s,parent:r}){let o="";for(const i in e)o+=String(e[i]);let n=p.get(o);if(!n){let t;for(t in n=[],d)d[t].forEach(a=>{const s=e[a],i=h(t,a,s);i&&n.push(i)});const a=n.some(t=>t.startsWith("col-"));n.push({col:!a||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),p.set(o,n)}return t(e.tag,Object(i["a"])(a,{class:n}),s)}})},"8adc":function(t,e,a){},9964:function(t,e,a){},c671:function(t,e,a){"use strict";var s=a("1e6c");e["a"]=s["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=s["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},cc20:function(t,e,a){"use strict";a("14d9"),a("8adc");var s=a("58df"),i=a("0789"),r=a("9d26"),o=a("a9ad"),n=a("4e82"),l=a("7560"),c=a("f2e7"),d=a("1c87"),h=a("af2b"),p=a("d9bd");e["a"]=Object(s["a"])(o["a"],h["a"],d["a"],l["a"],Object(n["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...d["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(p["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(r["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(i["b"],t)},genClose(){return this.$createElement(r["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:a,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const i=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(i,s),e)}})}}]);
//# sourceMappingURL=chunk-de4f2ea4.995afb31.js.map