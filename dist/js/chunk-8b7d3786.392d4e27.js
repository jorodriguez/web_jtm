(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b7d3786"],{"0842":function(t,e,i){"use strict";i.r(e);var a=i("7496"),s=function(){var t=this,e=t._self._c;return e(a["a"],{style:{background:t.$vuetify.theme.themes[t.theme].background,color:""}},[e("app-bar"),e("side-bar"),e("base-view")],1)},n=[],r=i("2f62"),o={components:{BaseView:()=>Promise.all([i.e("chunk-3d12018a"),i.e("chunk-8a7e47f0")]).then(i.bind(null,"8919")),SideBar:()=>Promise.all([i.e("chunk-4e961f70"),i.e("chunk-7d61f272")]).then(i.bind(null,"9baf")),AppBar:()=>Promise.all([i.e("chunk-3786fa57"),i.e("chunk-4e961f70"),i.e("chunk-08a38a90")]).then(i.bind(null,"0ff1"))},computed:{...Object(r["c"])(["getThemeMode"]),theme(){return this.$vuetify.theme.dark?"dark":"light"}}},u=o,l=i("2877"),d=Object(l["a"])(u,s,n,!1,null,"3ba01893",null);e["default"]=d.exports},7496:function(t,e,i){"use strict";i("d9e2"),i("df86");var a=i("7560"),s=i("58df");e["a"]=Object(s["a"])(a["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},df86:function(t,e,i){}}]);
//# sourceMappingURL=chunk-8b7d3786.392d4e27.js.map