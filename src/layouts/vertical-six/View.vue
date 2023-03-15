<template>
  <v-main app class="">
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
</template>
<script>
export default {
  components: {
    AppFooter: () => import("./Footer.vue"),
  },
};
</script>