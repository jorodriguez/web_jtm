<template>
  <div>
    <v-subheader v-if="item.divider" class="main-menu-title">{{
      item.divider
    }}</v-subheader>
    <v-list-group
      :sub-group="subGroup"
      no-action
      v-model="listModel"
      flat
      :active-class="` ${
        isDark && getThemeMode.verticalSidebarDrawerColor != 'white'
          ? getThemeMode.verticalSidebarDrawerColor + ' darken-1 white--text'
          : 'grey lighten-4'
      }`"
      class="pl-0 base-item-group"
    >
      <v-icon v-if="item.icon" slot="prependIcon" small>{{ item.icon }}</v-icon>

      <!-- :group="group" -->
      <!-- text-gray-900 bg-gray-200 -->
      <template v-slot:activator>
        <v-list-item-icon
          v-if="text"
          class="v-list-item__icon--text"
          v-text="computedText"
        />

        <v-list-item-content>
          <v-list-item-title
            class="text-13 vertical-sidebar-text"
            v-text="item.title"
          />
        </v-list-item-content>
      </template>

      <template v-for="(child, i) in children">
        <base-item-sub-group
          v-if="child.children"
          :key="`sub-group-${i}`"
          :item="child"
          class="pl-0"
        />

        <base-item
          class=""
          v-else
          :key="`item-${i}`"
          :item="child"
          :text="false"
        />
      </template>
    </v-list-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// Utilities
import kebabCase from "lodash/kebabCase";
import Themeable from "vuetify/lib/mixins/themeable";
export default {
  name: "ItemGroup",
  mixins: [Themeable],

  inheritAttrs: false,
  data() {
    return {
      listModel: 0,
      miniVariant: false,
    };
  },
  props: {
    item: {
      type: Object,
      default: () => ({
        avatar: undefined,
        group: undefined,
        title: undefined,
        subHeader: undefined,
        children: [],
      }),
    },
    subGroup: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapGetters(["getThemeMode"]),
    getMiniVariant() {
      return this.miniVariant;
    },
    children() {
      // return this.item.children.map((item) => ({
      //   ...item,
      //   to: !item.to ? undefined : `/app/${this.item.group}/${item.to}`,
      // }));
      return this.item.children;
    },
    computedText() {
      if (!this.item || !this.item.title) return "";

      let text = "";

      this.item.title.split(" ").forEach((val) => {
        text += val.substring(0, 1);
      });

      return text;
    },
    group() {
      return this.genGroup(this.item.children);
    },
  },

  methods: {
    genGroup(children) {
      return children
        .filter((item) => item.to)
        .map((item) => {
          const parent = item.group || this.item.group;
          let group = `${parent}/${kebabCase(item.to)}`;

          if (item.children) {
            group = `${group}|${this.genGroup(item.children)}`;
            console.log("child");
          }

          return group;
          console.log(group);
        })
        .join("|");
    },
  },
};
</script>

<style lang="scss">
// scoped is not working
.base-item-group {
  .v-list-item__icon {
    margin-right: 0.9375rem !important;
    min-width: 0;
  }
}
.main-menu-title {
  text-transform: uppercase;
  font-size: 12px;
  padding: 16px 0 16px 16px;
  display: block;
  font-weight: 500;
  letter-spacing: 0.5px;
}
// .vertical-sidebar-text {
//   color: #989eb3;
// }
</style>
