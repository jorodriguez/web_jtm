<template>
  <v-navigation-drawer
    v-model="getThemeMode.verticalSidebarDrawer"
    class="sidebar-six"
    dark
    height="100%"
    width="280px"
    :mobile-breakpoint="960"
    :floating="true"
    app
  >
    <vue-perfect-scrollbar
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      class="ps"
      style="height: 100%"
    >
      <div class="mb-4 pa-4 top-toolbar">
        <v-avatar size="36">
          <v-img src="@/assets/images/arctic-circle-logo.svg"></v-img>
        </v-avatar>
      </div>
      <v-menu v-model="showMenu" absolute offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div
            v-bind="attrs"
            v-on="on"
            class="
              pa-3
              rounded-lg
              mx-4
              white--text
              bg-sidebar-six
              d-flex
              space-between
            "
          >
            <div class="flex-1">
              <p class="subtitle-1 mb-0 text-capitalize">JTM</p>
              <p class="text-subtitle-2 mb-0 grey--text text--lighten-1">
                Your tier: Premium
              </p>
            </div>
            <v-icon right>mdi-chevron-down</v-icon>
          </div>
        </template>

        <v-list color="dark text--white">
          <v-list-item dark v-for="(item, index) in dropdownItem" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-divider class="my-5"></v-divider>

      <v-list class="py-0 mx-4" dense>
        <template v-for="(item, i) in computedItems">
          <div :key="item.subheader" v-if="item.subheader">
            <v-subheader>
              {{ item.subheader }}
            </v-subheader>

            <v-divider></v-divider>
          </div>

          <base-item-group-two
            v-if="item.children"
            :key="`group-${i}`"
            :item="item"
          >
            <!--  -->
          </base-item-group-two>

          <base-item-two
            v-else-if="!item.subheader"
            :key="`item-${i}`"
            :item="item"
          />
        </template>
      </v-list>
      <v-divider></v-divider>
      <div class="mx-6 my-4 white--text">
        <p class="subtitle-1 mb-0 text-capitalize">JTM</p>
        <p class="text-subtitle-2 mb-0 grey--text">Your tier: Premium</p>
      </div>
      <div class="px-6 mb-6">
        <v-btn block class="text-capitalize" color="primary">
          Documentation
        </v-btn>
      </div>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { items } from "../../data/navigationThree";
export default {
  data() {
    return {
      selectedItem: 0,
      group: null,
      items: items,
      dropdownItem: [{ title: "JTM" }, { title: "Egret Inc" }],
      showMenu: false,
    };
  },
  computed: {
    ...mapGetters(["getThemeMode"]),
    bg() {
      return this.background
        ? "https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        : undefined;
    },
    getMiniVariant() {
      return this.miniVariant;
    },
    computedItems() {
      // return this.items.map(this.mapItem);
      return this.items;
      // console.log(this.items);
      // return this.items;
    },
  },
  methods: {
    ...mapActions(["changeVerticalSidebarDrawer"]),
    toggleSidebar() {
      this.changeVerticalSidebarMini();
      this.expandOnHover = !this.expandOnHover;
      // this.$emit("update:mini-variant");
      // console.log("check");
    },
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: item.title,
        // to: !item.to ? undefined : `/app/${this.item.group}/${item.to}`,
      };
    },
  },
};
</script>
<style lang="scss">
.bg-sidebar-six {
  background-color: #292f3d;
}
.theme--dark .v-navigation-drawer {
  .bg-sidebar-six {
    background-color: #3a3939;
  }
}
.sidebar-six {
  .v-list-item__icon {
    margin-right: 8px !important;
    // margin-bottom: 0;
    // margin-top: 0;
  }

  .v-list-item--link:before {
    border-radius: 8px;
  }
}
</style>
