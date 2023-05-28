<template>
  <v-footer
    height="80"
    class="font-weight-medium shadow-sm"
    :color="$vuetify.theme.dark ? 'dark' : 'white'"
    :dark="$vuetify.theme.dark"
    tile
    flat
  >
    <v-col class="text-left" cols="12">
      <div class="d-flex flex-row justify-space-between align-center">
        <div>
          <v-btn            
            target="_blank"
            depressed
            color="warning"
            >JTM</v-btn
          >
        </div>
        <div>
          <strong class="text--disabled">
            © Jorge Tello Multitrainer - Soflineas {{ new Date().getFullYear() }}-{{
              new Date().getFullYear() + 1
            }}
          </strong>
        </div>
      </div>
    </v-col>
  </v-footer>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getThemeMode"]),
  },
};
</script>