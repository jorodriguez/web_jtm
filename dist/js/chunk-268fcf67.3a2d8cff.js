(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-268fcf67"],{7496:function(e,t,i){"use strict";i("d9e2"),i("df86");var a=i("7560"),s=i("58df");t["a"]=Object(s["a"])(a["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(e){const t=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},7832:function(e,t,i){"use strict";i("923f")},"923f":function(e,t,i){},cfd8:function(e,t,i){"use strict";i.r(t);var a=i("7496"),s=function(){var e=this,t=e._self._c;return t(a["a"],{staticClass:"app-admin-wrap-layout-6",style:{background:e.$vuetify.theme.themes[e.theme].background,color:e.$vuetify.theme.themes[e.theme].color}},[t("Header"),t("side-bar"),t("base-view")],1)},n=[],r=i("2f62"),o={components:{SideBar:()=>Promise.all([i.e("chunk-1cefb5fd"),i.e("chunk-4e961f70"),i.e("chunk-34483733")]).then(i.bind(null,"bf51")),BaseView:()=>Promise.all([i.e("chunk-3d12018a"),i.e("chunk-2d0e9b16")]).then(i.bind(null,"8f2d")),Header:()=>Promise.all([i.e("chunk-4e961f70"),i.e("chunk-5ab86650")]).then(i.bind(null,"7c79"))},computed:{...Object(r["c"])(["getThemeMode"]),theme(){return this.$vuetify.theme.dark?"dark":"light"}}},u=o,l=(i("7832"),i("2877")),c=Object(l["a"])(u,s,n,!1,null,null,null);t["default"]=c.exports},df86:function(e,t,i){}}]);
//# sourceMappingURL=chunk-268fcf67.3a2d8cff.js.map