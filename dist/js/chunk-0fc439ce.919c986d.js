(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fc439ce"],{"083a":function(e,t,n){"use strict";var o=n("0d51"),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+o(t)+" of "+o(e))}},1865:function(e,t,n){"use strict";n.r(t);var o=n("8212"),i=n("8336"),s=n("99d9"),r=n("8654"),a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-wrap"},[t("div",{staticClass:"session-form-hold"},[t("base-card",[t(s["c"],{staticClass:"text-center"},[t(o["a"],{staticClass:"mb-4",attrs:{size:"150"}},[t("img",{attrs:{src:n("520c"),alt:""}})]),t(r["a"],{attrs:{label:"Email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(r["a"],{attrs:{"append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password",name:"input-10-2",label:"Password",value:"Pa",rules:e.nameRules},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.ePassword,callback:function(t){e.ePassword=t},expression:"ePassword"}}),t(i["a"],{staticClass:"mb-4",attrs:{block:"",color:"primary"},on:{click:e.formSubmit}},[e._v("Entrar")]),t("div",{staticClass:"d-flex justify-around flex-wrap"})],1)],1)],1)])},c=[],u=(n("14d9"),n("2f62")),d={name:"SignUp",metaInfo:{title:"SignUp"},data(){return{show:!1,email:"admin@gmail.com",password:"Password",ePassword:"123456",checkbox1:!0,checkbox2:!1,emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"],nameRules:[e=>!!e||"Password is required"]}},computed:{...Object(u["c"])(["loggedInUser","error"])},methods:{...Object(u["b"])(["login"]),formSubmit(){this.login({email:this.email,password:this.ePassword})}},watch:{loggedInUser(e){e&&e.uid&&e.uid.length>0&&(console.log("logged in successfully "),this.loading=!0,setTimeout(()=>{this.$router.push("/")},500))},error(e){}}},l=d,f=(n("4339"),n("2877")),m=Object(f["a"])(l,a,c,!1,null,"2affa323",null);t["default"]=m.exports},"2e0b":function(e,t,n){},"3c65":function(e,t,n){"use strict";var o=n("23e7"),i=n("7b0b"),s=n("07fa"),r=n("3a34"),a=n("083a"),c=n("3511"),u=1!==[].unshift(0),d=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},l=u||!d();o({target:"Array",proto:!0,arity:1,forced:l},{unshift:function(e){var t=i(this),n=s(t),o=arguments.length;if(o){c(n+o);var u=n;while(u--){var d=u+o;u in t?t[d]=t[u]:a(t,d)}for(var l=0;l<o;l++)t[l]=arguments[l]}return r(t,n+o)}})},4339:function(e,t,n){"use strict";n("2e0b")},"520c":function(e,t,n){e.exports=n.p+"img/logojtm.f36009b7.png"},"99d9":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c}));var o=n("b0af"),i=n("80d2");const s=Object(i["k"])("v-card__actions"),r=Object(i["k"])("v-card__subtitle"),a=Object(i["k"])("v-card__text"),c=Object(i["k"])("v-card__title");o["a"]},dc22:function(e,t,n){"use strict";function o(e,t,n){const o=t.value,i=t.options||{passive:!0};window.addEventListener("resize",o,i),e._onResize=Object(e._onResize),e._onResize[n.context._uid]={callback:o,options:i},t.modifiers&&t.modifiers.quiet||o()}function i(e,t,n){var o;if(!(null===(o=e._onResize)||void 0===o?void 0:o[n.context._uid]))return;const{callback:i,options:s}=e._onResize[n.context._uid];window.removeEventListener("resize",i,s),delete e._onResize[n.context._uid]}const s={inserted:o,unbind:i};t["a"]=s},dd89:function(e,t,n){"use strict";function o(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}n.d(t,"a",(function(){return o}))}}]);
//# sourceMappingURL=chunk-0fc439ce.919c986d.js.map