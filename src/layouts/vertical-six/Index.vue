<template>
  <!-- index.vue -->

  <v-app
    :style="{
      background: $vuetify.theme.themes[theme].background,
      color: $vuetify.theme.themes[theme].color,
    }"
    class="app-admin-wrap-layout-6"
  >
    <Header></Header>
    <side-bar>
      <!-- -->
    </side-bar>
    <base-view />
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    SideBar: () => import("./Sidebar"),
    BaseView: () => import("./View"),
    Header: () => import("./Header.vue"),
  },
  computed: {
    ...mapGetters(["getThemeMode"]),

    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>
<style lang="scss">
.app-admin-wrap-layout-6 {
  .sidebar-six {
    &.theme--dark.v-navigation-drawer {
      background-color: #111827;
      // background-color: #111827;
    }

    // .top-toolbar {
    //   background-color: #111827;
    // }
  }
}
div.theme--dark .v-navigation-drawer {
  background-color: #272727 !important;
}
</style>
