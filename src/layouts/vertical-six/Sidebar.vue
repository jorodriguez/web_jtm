<template>
  <v-navigation-drawer
    v-model="getThemeMode.verticalSidebarDrawer"
    class="sidebar-six"
    dark
    color="#464646"
    height="100%"
    width="280px"
    :mobile-breakpoint="960"
    :floating="true"
    app
  >
    <vue-perfect-scrollbar
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      class="ps"
      style="height: 100%;"
    >
      <div class="mb-4 pa-4 top-toolbar">
        <v-avatar size="36">
          <!--<v-img src="@/assets/images/jtm/logo_fondo_azul.png"></v-img>-->
          <v-img :src="usuarioSesion.logotipo_sucursal"></v-img>
        </v-avatar>
        <span class="pl-2 h6 grey--text">
          {{ usuarioSesion.nombre_empresa }}
        </span>
      </div>
      
      <v-menu v-model="showMenu" absolute offset-y >
        <!--  <template v-slot:activator="{ on, attrs }">
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
                Hazte premium
              </p>
            </div>
            <v-icon right>mdi-chevron-down</v-icon>
          </div>
        </template>-->

        

        <v-list color="dark text--white">
          <v-list-item dark v-for="(item, index) in dropdownItem" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      
      <v-divider class="my-5"></v-divider>

      <!--Es el apartado de paginas se ve como menu simple con submenus -->
      <v-list class="py-0 mx-4" dense  >
        <template v-for="(item, i) in computedItems">
       
          <!--<div :key="item.subheader" v-if="item.subheader">
            <v-subheader>
              {{ item.subheader }} 
            </v-subheader>

            <v-divider></v-divider>
          </div>

          <base-item-group-two            
            v-if="item.children"
            :key="`group-${i}`"
            :item="item"
          ></base-item-group-two>

          <base-item-two
            v-else-if="!item.subheader"
            :key="`item-${i}`"
            :item="item"
          />          -->
          <base-item-two            
            :key="`item-${i}`"
            :item="item"            
          />          
        </template>
        
      </v-list>

        <v-skeleton-loader v-if="loadingMenu"  style="padding-bottom:5px"  dark  type="button"/>      
      <v-skeleton-loader v-if="loadingMenu" style="padding-bottom:5px" dark type="button"/>      
      <v-skeleton-loader v-if="loadingMenu" style="padding-bottom:5px" dark type="button"/>
      
      <!--<div class="d-flex justify-center">
          <v-progress-circular  color="primary" indeterminate></v-progress-circular>
          
      </div>-->
      <!--<v-divider></v-divider>
      <div class="mx-6 my-4 white--text">
        <p class="subtitle-1 mb-0 text-capitalize">JTM</p>
        <p class="text-subtitle-2 mb-0 grey--text"></p>
      </div>
      <div class="px-6 mb-6">
        <v-btn block class="text-capitalize" color="primary">
          Documentation
        </v-btn>
      </div>-->
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { items } from '../../data/navigationThree'
import { getUsuarioSesion } from '../../helper/Sesion'

export default {
  data() {
    return {
      usuarioSesion: {},
      selectedItem: 0,
      group: null,
      //items: items,
      items: [],
      dropdownItem: [{ title: 'JTM' }, { title: 'Egret Inc' }],
      showMenu: false,
      loadingMenu: false,
    }
  },
  computed: {
    ...mapGetters(['getThemeMode']),
    bg() {
      return this.background
        ? 'https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        : undefined
    },
    getMiniVariant() {
      return this.miniVariant
    },
    computedItems() {
      // return this.items.map(this.mapItem);
      console.log(this.items);
      return  this.items
      // console.log(this.items);
      // return this.items;
    },
  },
  mounted() {
    console.log('##### SIDEBAR - MENU ####')
    this.usuarioSesion = getUsuarioSesion()
    this.init()
  },
  methods: {
    ...mapActions(['changeVerticalSidebarDrawer']),
    toggleSidebar() {
      this.changeVerticalSidebarMini()
      this.expandOnHover = !this.expandOnHover
      // this.$emit("update:mini-variant");
      // console.log("check");
    },
    init() {
      this.loadingMenu = true

      setTimeout(() => {
        const opciones = getUsuarioSesion().menu || []

        this.items = opciones.map((e, index) => {
          return index == 0
            ? {
                divider: 'PONTE EN MARCHA',
                title:  e.nombre.toUpperCase(),
                icon: e.icono_menu,
                to: e.ruta,
               
              }
            : { title: e.nombre.toUpperCase(), icon: e.icono_menu, to: e.ruta}
        })

        
        /* objeto de menu lateral
        {divider: 'Ponte en marcha',
        title: 'TU ENTRENAMIENTO',
        icon: 'mdi-google-analytics',
        to: 'entrenamiento',
        }*/

        this.loadingMenu = false
      },1000)
      return this.items;
    },
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: item.title,
        // to: !item.to ? undefined : `/app/${this.item.group}/${item.to}`,
      }
    },
  },
}
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
