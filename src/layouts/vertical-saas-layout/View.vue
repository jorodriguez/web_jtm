<template>
  <div class="d-flex flex-column">
    <v-main class>
      <!-- Provides the application the proper gutter -->

      <!-- fill-height class add for center -->
      <!-- <v-skeleton-loader
        v-if="getThemeMode.isLoading"
        :loading="getThemeMode.isLoading"
        height="100vh"
        width="100%"
        color="primary"
        type="table-heading, list-item-two-line,list-item-two-line, image, table-tfoot,list-item-avatar-three-line, image, article,table-heading, list-item-two-line,list-item-two-line, image, table-tfoot,list-item-avatar-three-line, image, article"
      ></v-skeleton-loader> -->
      <div class="d-flex flex-column flex-grow-1 h-full">
        <v-container class="pt-6">
          <!-- If using vue-router -->

          <!-- <customizer /> -->
          <transition mode="out-in">
            <router-view />
          </transition>
        </v-container>
        <div class="flex-grow-1"></div>
        <app-footer></app-footer>
      </div>
    </v-main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    SideBar: () => import("./Sidebar"),
    AppFooter: () => import("./Footer"),
  },
  computed: {
    ...mapGetters(["getThemeMode"]),
  },
};
</script>

<style lang="scss">
.v-main__wrap {
  display: flex;
  flex-direction: column;
}
</style>
