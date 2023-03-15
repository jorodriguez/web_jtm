<template>
  <v-main app>
    <div class="d-flex flex-column flex-grow-1 h-full">
      <v-container class="pt-6">
        <transition mode="out-in">
          <router-view />
        </transition>
      </v-container>
      <div class="flex-grow-1"></div>
      <app-footer></app-footer>
    </div>
  </v-main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AppFooter: () => import("./Footer"),
    // Customizer: () => import("@/layouts/common-drawer/Customizer"),
  },
  computed: {
    ...mapGetters(["getThemeMode"]),
  },
};
</script>

<style lang="scss">
.v-main__wrap {
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
