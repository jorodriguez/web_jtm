(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56766609"],{"0fd9":function(t,a,e){"use strict";e("13d5"),e("14d9"),e("4b85");var s=e("2b0e"),i=e("d9f7"),o=e("80d2");const n=["sm","md","lg","xl"],r=["start","end","center"];function c(t,a){return n.reduce((e,s)=>(e[t+Object(o["I"])(s)]=a(),e),{})}const l=t=>[...r,"baseline","stretch"].includes(t),d=c("align",()=>({type:String,default:null,validator:l})),m=t=>[...r,"space-between","space-around"].includes(t),u=c("justify",()=>({type:String,default:null,validator:m})),h=t=>[...r,"space-between","space-around","stretch"].includes(t),g=c("alignContent",()=>({type:String,default:null,validator:h})),p={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(g)},f={align:"align",justify:"justify",alignContent:"align-content"};function b(t,a,e){let s=f[t];if(null!=e){if(a){const e=a.replace(t,"");s+="-"+e}return s+="-"+e,s.toLowerCase()}}const v=new Map;a["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...d,justify:{type:String,default:null,validator:m},...u,alignContent:{type:String,default:null,validator:h},...g},render(t,{props:a,data:e,children:s}){let o="";for(const i in a)o+=String(a[i]);let n=v.get(o);if(!n){let t;for(t in n=[],p)p[t].forEach(e=>{const s=a[e],i=b(t,e,s);i&&n.push(i)});n.push({"no-gutters":a.noGutters,"row--dense":a.dense,["align-"+a.align]:a.align,["justify-"+a.justify]:a.justify,["align-content-"+a.alignContent]:a.alignContent}),v.set(o,n)}return t(a.tag,Object(i["a"])(e,{staticClass:"row",class:n}),s)}})},"1f1e":function(t,a,e){t.exports=e.p+"img/sq-15.b5ed2669.jpg"},"36a7":function(t,a,e){},"46f6":function(t,a,e){t.exports=e.p+"img/sq-11.0bad4a95.jpg"},"4b85":function(t,a,e){},"62ad":function(t,a,e){"use strict";e("13d5"),e("14d9"),e("4b85");var s=e("2b0e"),i=e("d9f7"),o=e("80d2");const n=["sm","md","lg","xl"],r=(()=>n.reduce((t,a)=>(t[a]={type:[Boolean,String,Number],default:!1},t),{}))(),c=(()=>n.reduce((t,a)=>(t["offset"+Object(o["I"])(a)]={type:[String,Number],default:null},t),{}))(),l=(()=>n.reduce((t,a)=>(t["order"+Object(o["I"])(a)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(r),offset:Object.keys(c),order:Object.keys(l)};function m(t,a,e){let s=t;if(null!=e&&!1!==e){if(a){const e=a.replace(t,"");s+="-"+e}return"col"!==t||""!==e&&!0!==e?(s+="-"+e,s.toLowerCase()):s.toLowerCase()}}const u=new Map;a["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:a,data:e,children:s,parent:o}){let n="";for(const i in a)n+=String(a[i]);let r=u.get(n);if(!r){let t;for(t in r=[],d)d[t].forEach(e=>{const s=a[e],i=m(t,e,s);i&&r.push(i)});const e=r.some(t=>t.startsWith("col-"));r.push({col:!e||!a.cols,["col-"+a.cols]:a.cols,["offset-"+a.offset]:a.offset,["order-"+a.order]:a.order,["align-self-"+a.alignSelf]:a.alignSelf}),u.set(n,r)}return t(a.tag,Object(i["a"])(e,{class:r}),s)}})},6934:function(t,a,e){t.exports=e.p+"img/sq-16.41a64f6b.jpg"},"6b53":function(t,a,e){"use strict";e("36a7");var s=e("24b2"),i=e("58df"),o=e("80d2");a["a"]=Object(i["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(o["t"])(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},"78d7":function(t,a,e){"use strict";var s=e("6b53");a["a"]=s["a"]},"7b50":function(t,a,e){"use strict";e.r(a);var s=e("8336"),i=e("99d9"),o=e("62ad"),n=e("132d"),r=e("adda"),c=e("8860"),l=e("da13"),d=e("5d23"),m=e("e449"),u=e("0fd9"),h=e("8dd9"),g=function(){var t=this,a=t._self._c;return a("div",{staticClass:"pt-4"},[a(u["a"],[a(o["a"],{attrs:{cols:"12",md:"6",lg:"3",sm:"6"}},[a("analytic-one-card",{attrs:{"main-icon-name":"mdi-hand-pointing-up","main-icon-background-color-class":"primary lighten-5","main-icon-text-color":"primary--text","sub-heading-text":"Impressions","heading-text":"9.2k","bottom-button-text":"10.4%","bottom-button-icon":"mdi-arrow-down-drop-circle-outline","bottom-button-hover-class":"hover:bg-primary"}})],1),a(o["a"],{attrs:{cols:"12",md:"6",lg:"3",sm:"6"}},[a("analytic-one-card",{attrs:{"floating-button-icon-name":"mdi-plus","floating-button-icon-text-color":"white--text","floating-button-background-color":"success ","main-icon-name":"mdi-hand-pointing-up","main-icon-background-color-class":"success lighten-5","main-icon-text-color":"success--text","sub-heading-text":"Impressions","heading-text":"9.2k","bottom-button-text":"10.4%","bottom-button-icon":"mdi-arrow-down-drop-circle-outline","bottom-button-hover-class":"hover:bg-success"}})],1),a(o["a"],{attrs:{cols:"12",md:"6",lg:"3",sm:"6"}},[a("analytic-one-card",{attrs:{"floating-button-icon-name":"mdi-plus","floating-button-icon-text-color":"white--text","floating-button-background-color":"info","main-icon-name":"mdi-hand-pointing-up","main-icon-background-color-class":"info lighten-5","main-icon-text-color":"info--text","sub-heading-text":"Visitors","heading-text":"4.2k","bottom-button-text":"20.4%","bottom-button-icon":"mdi-arrow-down-drop-circle-outline","bottom-button-hover-class":"hover:bg-info"}})],1),a(o["a"],{attrs:{cols:"12",md:"6",lg:"3",sm:"6"}},[a("analytic-one-card",{attrs:{"floating-button-icon-name":"mdi-plus","floating-button-icon-text-color":"white--text","floating-button-background-color":"warning","main-icon-name":"mdi-hand-pointing-up","main-icon-background-color-class":"warning lighten-5","main-icon-text-color":"warning--text","sub-heading-text":"Visitors","heading-text":"4.2k","bottom-button-text":"20.4%","bottom-button-icon":"mdi-arrow-down-drop-circle-outline","bottom-button-hover-class":"hover:bg-warning"}})],1)],1),a(u["a"],[a(o["a"],{attrs:{cols:"12"}},[a("base-card",{},[a("div",{staticClass:"d-flex align-center justify-space-between pr-2"},[a(i["d"],[t._v("Follower Growth")]),a("div",[a(m["a"],{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:e}){return[a(s["a"],t._g({attrs:{icon:""}},e),[a(n["a"],[t._v("mdi-dots-horizontal")])],1)]}}])},[a(c["a"],t._l(4,(function(e){return a(l["a"],{key:e,on:{click:()=>{}}},[a(d["d"],[t._v("Option "+t._s(e))])],1)})),1)],1)],1)],1),a(u["a"],[a(o["a"],{staticClass:"d-flex",attrs:{cols:"12",md:"12",lg:"5"}},[a("div",{staticClass:"d-flex justify-center flex-column w-full"},[a("div",{staticClass:"px-6 d-flex align-center"},[a("div",{staticClass:"flex-grow-1"},[a("h2",{staticClass:"font-weight-bold display-2 ma-0"},[t._v("4,829")]),a("p",{staticClass:"mb-4 body-2"},[t._v("Gained Followers (last 360 days)")])]),a("div",[a("div",{staticClass:"d-flex align-center mb-3"},[a(h["a"],{staticClass:"success lighten-5 px-1 mr-2 rounded"},[a(n["a"],{staticClass:"success--text caption"},[t._v("mdi-call-made")])],1),a("p",{staticClass:"ma-0 heading-muted"},[t._v(" You have a "),a("span",{staticClass:"text-success mr-1"},[t._v("20% Growth")]),t._v("compare to last year ")])],1),a("div",{staticClass:"d-flex align-center"},[a(h["a"],{staticClass:"warning lighten-5 px-1 mr-2 mr-2 rounded"},[a(n["a"],{staticClass:"warning--text caption"},[t._v("mdi-call-received")])],1),a("p",{staticClass:"ma-0 heading-muted"},[t._v(" You have a reached "),a("span",{staticClass:"text-warning mr-1"},[t._v("10%")]),t._v("of your follower goal ")])],1)])])])]),a(o["a"],{attrs:{cols:"12",md:"12",lg:"7"}},[a("apexchart",{attrs:{type:"line",width:"100%",height:"365",options:t.analyticOne.chartOptions,series:t.analyticOne.series}})],1)],1)],1)],1)],1),a(u["a"],[a(o["a"],{attrs:{cols:"12"}},[a("div",{staticClass:"d-flex pr-1 justify-space-between"},[a("div",{staticClass:"d-flex align-center"},[a("h5",{staticClass:"mb-0 mr-2 font-weight-medium"},[t._v("Most")]),a("a",{staticClass:"font-weight-medium",attrs:{href:"#"}},[t._v("Recent Media")])]),a("div",[a(m["a"],{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:e}){return[a(s["a"],t._g({attrs:{icon:""}},e),[a(n["a"],[t._v("mdi-dots-horizontal")])],1)]}}])},[a(c["a"],t._l(4,(function(e){return a(l["a"],{key:e,on:{click:()=>{}}},[a(d["d"],[t._v("Option "+t._s(e))])],1)})),1)],1)],1)])]),a(o["a"],{attrs:{cols:"12",md:"6",lg:"3",sm:"6"}},[a("base-card",{staticClass:"overflow-hidden"},[a(r["a"],{attrs:{cover:"",src:e("1f1e")}}),a(i["a"],{staticClass:"pa-4 d-flex justify-space-between"},[a("div",{staticClass:"d-flex align-center"},[a(n["a"],{staticClass:"body-1 mr-1"},[t._v("mdi-cards-heart")]),a(i["b"],{staticClass:"pa-0 mr-2"},[t._v("2.3k")]),a(n["a"],{staticClass:"body-1 mr-1"},[t._v("mdi-comment-text")]),a(i["b"],{staticClass:"pa-0"},[t._v("900")])],1),a(i["b"],{staticClass:"pa-0"},[t._v("23 days ago")])],1)],1)],1),a(o["a"],{attrs:{cols:"12",md:"6",lg:"3",sm:"6"}},[a("base-card",{staticClass:"overflow-hidden"},[a(r["a"],{attrs:{cover:"",src:e("6934")}}),a(i["a"],{staticClass:"pa-4 d-flex justify-space-between"},[a("div",{staticClass:"d-flex align-center"},[a(n["a"],{staticClass:"body-1 mr-1"},[t._v("mdi-cards-heart")]),a(i["b"],{staticClass:"pa-0 mr-2"},[t._v("2.3k")]),a(n["a"],{staticClass:"body-1 mr-1"},[t._v("mdi-comment-text")]),a(i["b"],{staticClass:"pa-0"},[t._v("900")])],1),a(i["b"],{staticClass:"pa-0"},[t._v("23 days ago")])],1)],1)],1),a(o["a"],{attrs:{cols:"12",md:"6",lg:"3",sm:"6"}},[a("base-card",{staticClass:"overflow-hidden"},[a(r["a"],{attrs:{cover:"",src:e("46f6")}}),a(i["a"],{staticClass:"pa-4 d-flex justify-space-between"},[a("div",{staticClass:"d-flex align-center"},[a(n["a"],{staticClass:"body-1 mr-1"},[t._v("mdi-cards-heart")]),a(i["b"],{staticClass:"pa-0 mr-2"},[t._v("2.3k")]),a(n["a"],{staticClass:"body-1 mr-1"},[t._v("mdi-comment-text")]),a(i["b"],{staticClass:"pa-0"},[t._v("900")])],1),a(i["b"],{staticClass:"pa-0"},[t._v("23 days ago")])],1)],1)],1),a(o["a"],{attrs:{cols:"12",md:"6",lg:"3",sm:"6"}},[a("base-card",{staticClass:"overflow-hidden"},[a(r["a"],{attrs:{cover:"",src:e("f15c")}}),a(i["a"],{staticClass:"pa-4 d-flex justify-space-between"},[a("div",{staticClass:"d-flex align-center"},[a(n["a"],{staticClass:"body-1 mr-1"},[t._v("mdi-cards-heart")]),a(i["b"],{staticClass:"pa-0 mr-2"},[t._v("2.3k")]),a(n["a"],{staticClass:"body-1 mr-1"},[t._v("mdi-comment-text")]),a(i["b"],{staticClass:"pa-0"},[t._v("900")])],1),a(i["b"],{staticClass:"pa-0"},[t._v("23 days ago")])],1)],1)],1)],1),a(u["a"],[a(o["a"],{attrs:{cols:"12",md:"6",lg:"3",sm:"6"}},[a("analytic-two-card",{attrs:{"main-icon-name":"mdi-account-multiple","main-icon-background-color-class":"primary lighten-5","main-icon-text-color":"primary--text","sub-heading-text":"Reach","heading-text":"30.2k","bottom-button-text":"0.4%","bottom-button-icon":"mdi-arrow-down-drop-circle-outline","bottom-button-hover-class":"hover:bg-primary"}})],1),a(o["a"],{attrs:{cols:"12",md:"6",lg:"3",sm:"6"}},[a("analytic-two-card",{attrs:{"main-icon-name":"mdi-hand-pointing-up","main-icon-background-color-class":"success lighten-5","main-icon-text-color":"success--text","sub-heading-text":"Engagement","heading-text":"20.3k","bottom-button-text":"10.4%","bottom-button-icon":"mdi-arrow-down-drop-circle-outline","bottom-button-hover-class":"hover:bg-success"}})],1),a(o["a"],{attrs:{cols:"12",md:"6",lg:"3",sm:"6"}},[a("analytic-two-card",{attrs:{"main-icon-name":"mdi-alert-plus-outline","main-icon-background-color-class":"info lighten-5","main-icon-text-color":"info--text","sub-heading-text":"Rate per Click","heading-text":"1.25K","bottom-button-text":"09.4%","bottom-button-icon":"mdi-arrow-down-drop-circle-outline","bottom-button-hover-class":"hover:bg-info"}})],1),a(o["a"],{attrs:{cols:"12",md:"6",lg:"3",sm:"6"}},[a("analytic-two-card",{attrs:{"main-icon-name":"mdi-alert-plus-outline","main-icon-background-color-class":"warning lighten-5","main-icon-text-color":"warning--text","sub-heading-text":"Average rate per cost","heading-text":"3.25K","bottom-button-text":"19.4%","bottom-button-icon":"mdi-arrow-down-drop-circle-outline","bottom-button-hover-class":"hover:bg-warning"}})],1),a(o["a"],{attrs:{cols:"12"}},[a("base-card",[a("div",{staticClass:"d-flex align-center justify-space-between pr-3"},[a(i["d"],[t._v("Reach Impressions history")]),a("div",[a(m["a"],{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:e}){return[a(s["a"],t._g({attrs:{icon:""}},e),[a(n["a"],[t._v("mdi-dots-horizontal")])],1)]}}])},[a(c["a"],t._l(4,(function(e){return a(l["a"],{key:e,on:{click:()=>{}}},[a(d["d"],[t._v("Option "+t._s(e))])],1)})),1)],1)],1)],1),a(i["c"],[a("apexchart",{attrs:{type:"area",width:"100%",height:"365",options:t.analyticTwo.chartOptions,series:t.analyticTwo.series}})],1)],1)],1),a(o["a"],{attrs:{cols:"12",md:"6"}},[a("base-card",[a("div",{staticClass:"d-flex align-center justify-space-between pr-3"},[a(i["d"],[t._v("Reach Impressions history")]),a("div",[a(m["a"],{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:e}){return[a(s["a"],t._g({attrs:{icon:""}},e),[a(n["a"],[t._v("mdi-dots-horizontal")])],1)]}}])},[a(c["a"],t._l(4,(function(e){return a(l["a"],{key:e,on:{click:()=>{}}},[a(d["d"],[t._v("Option "+t._s(e))])],1)})),1)],1)],1)],1),a(i["c"],[a("apexchart",{attrs:{type:"line",width:"100%",height:"365",options:t.analyticThree.chartOptions,series:t.analyticThree.series}})],1)],1)],1),a(o["a"],{attrs:{cols:"12",md:"6"}},[a("base-card",[a("div",{staticClass:"d-flex align-center justify-space-between pr-3"},[a(i["d"],[t._v("Comment History")]),a("div",[a(m["a"],{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:e}){return[a(s["a"],t._g({attrs:{icon:""}},e),[a(n["a"],[t._v("mdi-dots-horizontal")])],1)]}}])},[a(c["a"],t._l(4,(function(e){return a(l["a"],{key:e,on:{click:()=>{}}},[a(d["d"],[t._v("Option "+t._s(e))])],1)})),1)],1)],1)],1),a(i["c"],[a("apexchart",{attrs:{type:"line",width:"100%",height:"365",options:t.analyticFour.chartOptions,series:t.analyticFour.series}})],1)],1)],1),a(o["a"],{attrs:{cols:"12"}},[a("base-card",[a("div",{staticClass:"d-flex align-center justify-space-between pr-3"},[a(i["d"],[t._v("Posting Habits")]),a("div",[a(m["a"],{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:e}){return[a(s["a"],t._g({attrs:{icon:""}},e),[a(n["a"],[t._v("mdi-dots-horizontal")])],1)]}}])},[a(c["a"],t._l(4,(function(e){return a(l["a"],{key:e,on:{click:()=>{}}},[a(d["d"],[t._v("Option "+t._s(e))])],1)})),1)],1)],1)],1),a(i["c"],[a("apexchart",{attrs:{type:"heatmap",width:"100%",height:"365",options:t.analyticFive.chartOptions,series:t.analyticFive.series}})],1)],1)],1)],1)],1)},p=[],f=function(){var t=this,a=t._self._c;return a("div",[a("base-card",{staticClass:"relative"},[t.floatingButtonBackgroundColor?a(s["a"],{attrs:{absolute:"",fab:"",right:"",top:"","x-small":"",color:t.floatingButtonBackgroundColor}},[a(n["a"],{class:t.floatingButtonIconTextColor},[t._v(" "+t._s(t.floatingButtonIconName)+" ")])],1):t._e(),a(i["c"],[a("div",{staticClass:"d-flex flex-column justify-center align-center"},[a(h["a"],{staticClass:"rounded-circle d-flex align-center justify-center mb-4",class:t.mainIconBackgroundColorClass,attrs:{height:"40",width:"40"}},[a(n["a"],{class:t.mainIconTextColor},[t._v(" "+t._s(t.mainIconName)+" ")])],1),a("h3",{staticClass:"font-weight-bold ma-0"},[t._v(" "+t._s(t.headingText)+" ")]),a("h6",{staticClass:"caption mb-8 font-weight-regular"},[t._v(" "+t._s(t.subHeadingText)+" ")]),a(s["a"],{staticClass:"caption hover:white--text font-weight-bold py-2 px-4 d-inline-flex align-center",class:[t.mainIconTextColor,t.mainIconBackgroundColorClass,t.bottomButtonHoverClass],attrs:{depressed:"",rounded:""}},[a(n["a"],{staticClass:"caption mr-1"},[t._v(" "+t._s(t.bottomButtonIcon)+" ")]),a("span",{},[t._v(t._s(t.bottomButtonText))])],1)],1)])],1)],1)},b=[],v={name:"TestCard",props:{floatingButtonIconTextColor:{type:String,default:"white--text"},floatingButtonBackgroundColor:{type:String,default:""},floatingButtonIconName:{type:String,default:"mdi-plus"},mainIconTextColor:{type:String,default:"primary--text"},mainIconBackgroundColorClass:{type:String,default:"primary"},mainIconName:{type:String,default:"mdi-account-multiple-outline"},headingText:{type:String,default:"30.2k"},subHeadingText:{type:String,default:"Total Followers"},bottomButtonText:{type:String,default:"12.6%"},bottomButtonIcon:{type:String,default:"mdi-arrow-down-drop-circle-outline"},bottomButtonHoverClass:{type:String,default:""}}},y=v,x=e("2877"),w=Object(x["a"])(y,f,b,!1,null,null,null),_=w.exports,C=function(){var t=this,a=t._self._c;return a("div",[a("base-card",{staticClass:"relative"},[a(i["c"],[a("div",{staticClass:"d-flex flex-column justify-center align-center"},[a(h["a"],{staticClass:"rounded d-flex align-center justify-center mb-4",class:t.mainIconBackgroundColorClass,attrs:{height:"40",width:"40"}},[a(n["a"],{class:t.mainIconTextColor},[t._v(" "+t._s(t.mainIconName)+" ")])],1),a("h3",{staticClass:"font-weight-bold ma-0"},[t._v(" "+t._s(t.headingText)+" ")]),a("h6",{staticClass:"caption mb-8 font-weight-regular"},[t._v(" "+t._s(t.subHeadingText)+" ")]),a(s["a"],{staticClass:"caption hover:white--text font-weight-bold py-2 px-4 d-inline-flex align-center",class:[t.mainIconTextColor,t.mainIconBackgroundColorClass,t.bottomButtonHoverClass],attrs:{depressed:""}},[a(n["a"],{staticClass:"caption mr-1"},[t._v(" "+t._s(t.bottomButtonIcon)+" ")]),a("span",{},[t._v(t._s(t.bottomButtonText))])],1)],1)])],1)],1)},S=[],k={name:"AnalyticCardVersionTwo",props:{floatingButtonIconTextColor:{type:String,default:"white--text"},floatingButtonBackgroundColor:{type:String,default:""},floatingButtonIconName:{type:String,default:"mdi-plus"},mainIconTextColor:{type:String,default:"text-primary"},mainIconBackgroundColorClass:{type:String,default:"bg-indigo-200"},mainIconName:{type:String,default:"mdi-account-multiple-outline"},headingText:{type:String,default:"30.2k"},subHeadingText:{type:String,default:"Total Followers"},bottomButtonText:{type:String,default:"12.6%"},bottomButtonIcon:{type:String,default:"mdi-arrow-down-drop-circle-outline"},bottomButtonHoverClass:{type:String,default:"hover:bg-primary"}}},j=k,O=Object(x["a"])(j,C,S,!1,null,null,null),B=O.exports;e("14d9");const T={series:[{name:"Follower Growth",data:[4,3,10,9,29,19,22,9,12]}],chartOptions:{chart:{height:350,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{width:4,curve:"smooth"},grid:{show:!0,strokeDashArray:3},xaxis:{type:"datetime",categories:["1/11/2000","2/11/2000","3/11/2000","4/11/2000","5/11/2000","6/11/2000","7/11/2000","8/11/2000","9/11/2000"],labels:{style:{colors:"#8e8da2",fontSize:"12px",fontFamily:"Roboto"}},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},colors:["#7367F0"],markers:{size:4,colors:["#7367F0"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},yaxis:{min:0,max:30,title:{text:""}}}},I={series:[{name:"Series 1",data:[10,80,15,71,18,80,100]},{name:"Series 2",data:[80,12,75,45,84,15,74]}],chartOptions:{chart:{height:350,type:"area",toolbar:{show:!1}},dataLabels:{enabled:!1},colors:["#4A90E2","#8e8da2"],stroke:{width:0,curve:"smooth"},markers:{size:[4,4]},grid:{show:!0,strokeDashArray:3},fill:{opacity:1},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"],axisBorder:{show:!1},axisTicks:{show:!1}},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}},z={series:[{name:"Like",data:[120,90,130,140,49,62,100,91,148]},{name:"Avg Likes per day",data:[120,120,110,110,35,90,130,80,100]}],chartOptions:{chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},colors:["#F14004","#8e8da2"],stroke:{width:[4,3],curve:"straight"},markers:{size:[6,0]},dataLabels:{enabled:!1},grid:{strokeDashArray:3},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],axisBorder:{show:!1},axisTicks:{show:!1}}}},A={series:[{name:"Comments",data:[120,90,130,140,49,62,100,91,148]},{name:"Avg Comments per day",data:[120,120,110,110,35,90,130,80,100]}],chartOptions:{chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},colors:["#28C76E","#8e8da2"],stroke:{width:[4,3],curve:"straight"},markers:{size:[6,0]},dataLabels:{enabled:!1},grid:{strokeDashArray:3},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],axisBorder:{show:!1},axisTicks:{show:!1}}}};function F(t,a){var e=0,s=[];while(e<t){var i=(e+1).toString(),o=Math.floor(Math.random()*(a.max-a.min+1))+a.min;s.push({x:i,y:o}),e++}return s}const L={series:[{name:"Mon",data:F(18,{min:0,max:90})},{name:"Tue",data:F(18,{min:0,max:90})},{name:"Wed",data:F(18,{min:0,max:90})},{name:"Thu",data:F(18,{min:0,max:90})},{name:"Fri",data:F(18,{min:0,max:90})},{name:"Sat",data:F(18,{min:0,max:90})},{name:"Sun",data:F(18,{min:0,max:90})}],chartOptions:{chart:{height:350,type:"heatmap",toolbar:{show:!1}},grid:{xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},plotOptions:{heatmap:{radius:10}},dataLabels:{enabled:!1},colors:["#008FFB"],xaxis:{categories:["12am","1am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"],axisBorder:{show:!1},axisTicks:{show:!1}}}};var R={name:"Analytic",metaInfo:{title:"Analytic"},components:{"analytic-one-card":_,"analytic-two-card":B},data(){return{analyticOne:T,analyticTwo:I,analyticThree:z,analyticFour:A,analyticFive:L}}},N=R,E=Object(x["a"])(N,g,p,!1,null,null,null);a["default"]=E.exports},"8efc":function(t,a,e){},"99d9":function(t,a,e){"use strict";e.d(a,"a",(function(){return o})),e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"d",(function(){return c}));var s=e("b0af"),i=e("80d2");const o=Object(i["k"])("v-card__actions"),n=Object(i["k"])("v-card__subtitle"),r=Object(i["k"])("v-card__text"),c=Object(i["k"])("v-card__title");s["a"]},adda:function(t,a,e){"use strict";e("14d9"),e("8efc");var s=e("90a2"),i=e("78d7"),o=e("7560"),n=e("58df"),r=e("d9f7"),c=e("d9bd"),l=e("80d2");const d="undefined"!==typeof window&&"IntersectionObserver"in window;a["a"]=Object(n["a"])(i["a"],o["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],a=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),a&&t.push(`url("${a}")`);const e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,a,e){if(!d||e||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(c["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,a=100){const e=()=>{const{naturalHeight:s,naturalWidth:i}=t;s||i?(this.naturalWidth=i,this.calculatedAspectRatio=i/s):t.complete||!this.isLoading||this.hasError||null==a||setTimeout(e,a)};e()},genContent(){const t=i["a"].options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:this.naturalWidth+"px"}}),t},__genPlaceholder(){const t=Object(l["t"])(this,"placeholder");if(t){const a=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},a):a[0]}}},render(t){const a=i["a"].options.render.call(this,t),e=Object(r["a"])(a.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return a.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(a.tag,e,a.children)}})},f15c:function(t,a,e){t.exports=e.p+"img/sq-13.90df6cab.jpg"}}]);
//# sourceMappingURL=chunk-56766609.9ae9dde0.js.map