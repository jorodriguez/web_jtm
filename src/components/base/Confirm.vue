<template>
  <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          {{ title }}
        </v-card-title>

        <v-card-text>
          {{text}}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="onClickClose">
            {{ labelButtonClose }}
          </v-btn>

          <v-btn color="green darken-1" text @click="onClickOk">
            {{ labelButtonOk }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Confirm",
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    labelButton: {
      type: String,
      default: "",
    },
    labelButtonOk: {
      type: String,
      default: "Confirmar",
    },
    labelButtonClose: {
      type: String,
      default: "Cerrar",
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "white",
    },    
    onClickOk: {
      type: Function,
      default: ()=> this.dialog = false,
    },
    onClickClose: {
      type: Function,
      default: ()=> this.dialog = false,
    },
  },
  computed: {
    ...mapGetters(["getThemeMode"]),
  },
};
</script>
