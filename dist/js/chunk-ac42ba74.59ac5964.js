(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac42ba74"],{7496:function(t,e,a){"use strict";a("d9e2"),a("df86");var i=a("7560"),s=a("58df");e["a"]=Object(s["a"])(i["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},df86:function(t,e,a){},f43b:function(t,e,a){"use strict";a.r(e);var i=a("7496"),s=function(){var t=this,e=t._self._c;return e(i["a"],{class:{"sidebar-close":!t.getThemeMode.verticalSidebarDrawer},style:{background:t.$vuetify.theme.themes[t.theme].background,color:"#304156"}},[e("side-bar",{attrs:{app:""}}),e("app-bar",{attrs:{app:""}}),e("base-view")],1)},r=[],n=a("2f62"),o={components:{BaseView:()=>Promise.all([a.e("chunk-3d12018a"),a.e("chunk-655325b2")]).then(a.bind(null,"0ad6")),SideBar:()=>Promise.all([a.e("chunk-4e961f70"),a.e("chunk-03657b14")]).then(a.bind(null,"e443")),AppBar:()=>a.e("chunk-0ef39225").then(a.bind(null,"756d"))},computed:{...Object(n["c"])(["getThemeMode"]),theme(){return this.$vuetify.theme.dark?"dark":"light"}}},d=o,l=a("2877"),p=Object(l["a"])(d,s,r,!1,null,"44529dd6",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-ac42ba74.59ac5964.js.map