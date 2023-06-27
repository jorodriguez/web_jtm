<template>
  <div class="pt-4">
    <h4>
      Entrenamiento
    </h4>

    <v-row></v-row>

    <v-row>
      <v-col cols="12" md="6" lg="4" sm="6">
        <base-card class="h-full">
          <v-card-text>
            <v-toolbar color="indigo" dark>
              <v-toolbar-title>Inbox</v-toolbar-title>

              <v-spacer />

              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>

            <v-row>
              <v-col md="12">
             
                <transition-group appear name="fade-up" tag="div">
                  <v-data-iterator
                    key
                    :item="listaEjercicios"
                    :items-per-page.sync="itemsPerPage"
                    :page="page"
                    hide-default-footer
                  >
                    <template v-slot:default="props">
                      <v-row>                      
                        <v-col
                          v-for="(item, index) in props.items"
                          :key="index"
                          cols="12"
                          sm="6"
                          md="6"
                          lg="4"
                        >
                          <base-card class="h-full">
                            <v-card-text class="d-flex justify-space-between">
                              <div class="d-flex align-center">
                                <img
                                  class="mr-md rounded-circle mr-2"
                                  height="44"
                                  width="44"
                                  :src="item.url"
                                />
                                <div>
                                  <p class="ma-0">
                                    <a
                                      href="#"
                                      class="text--primary font-weight-medium mb-1"
                                    >
                                      {{ item.nombre }}
                                    </a>
                                  </p>
                                  <p class="text--disabled caption ma-0">
                                      {{ item.descripcion }}
                                  </p>
                                </div>
                              </div>
                              <div>
                                <v-btn class="ma-2" fab dark color="indigo">
                                  <v-icon dark>
                                    mdi-plus
                                  </v-icon>
                                </v-btn>
                              </div>
                            </v-card-text>
                          </base-card>
                        </v-col>
                      </v-row>
                    </template>
                  </v-data-iterator>
                </transition-group>
              </v-col>
            </v-row>

            <!--<list-card-two
                  :avatar="item.url"
                  :title="item.nombre"
                  :sub-title="item.descripcion"
                  primary-btn="+"
                  secondary-btn="+"
                />
                -->
            <!--<v-list-item-avatar tile>
                  <v-img :src="item.url" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="item.nombre" />
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon v-if="item.icon" color="danger">
                    mdi-star
                  </v-icon>
                </v-list-item-icon>-->
          </v-card-text>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="6">
        <base-card class="h-full"></base-card>
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="6">
        <base-card class="h-full"></base-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import analyticOneCard from '@/components/card/AnalyticCardVersionOne'
import analyticTwoCard from '@/components/card/AnalyticCardVersionTwo'
import ListcardTwo from '@/components/card/listCard/ListCardTwo'

import { getUsuarioSesion } from '../../../helper/Sesion'
import { operacionesApi } from '../../../helper/OperacionesApi'
import URL_API from '../../../helper/Urls'

export default {
  name: 'Analytic',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Analytic',
  },
  mixins: [operacionesApi],
  components: {
    'analytic-one-card': analyticOneCard,
    'analytic-two-card': analyticTwoCard,
    'list-card-two': ListcardTwo,
  },
  data() {
    return {
      usuarioSesion: {},
      tabs: null,
      categorias: [],
      listaEjercicios: [],
      listaEjerciciosRespaldo: [],
      loadingEjercicio: false,
      itemsTwo: [
        {
          icon: true,
          title: 'Jason Oner',
          avatar: require('@/assets/images/faces/1.jpg'),
        },
        {
          title: 'Travis Howard',
          avatar: require('@/assets/images/faces/2.jpg'),
        },
        {
          title: 'Ali Connors',
          avatar: require('@/assets/images/faces/3.jpg'),
        },
        {
          title: 'Cindy Baker',
          avatar: require('@/assets/images/faces/4.jpg'),
        },
      ],
    }
  },
  mounted() {
    this.usuarioSesion = getUsuarioSesion()
    console.log('##### ENTENAMIENTOS ####')
    this.usuarioSesion = getUsuarioSesion()
    this.cargarCatalogo()
  },
  methods: {
    async iniciarCarga() {
      await this.cargarCategorias()
    },
    async cargarCategorias() {
      this.categorias = await this.getAsync(`${URL_API.CATEGORIAS}`)
    },
    async cargarCatalogo() {
      this.loadingEjercicio = true

      //setTimeout(async () => {
      this.listaEjercicios = await this.getAsync(
        `${URL_API.EJERCICIOS}/${this.usuarioSesion.co_sucursal}`,
      )
      this.listaEjerciciosRespaldo = this.lista
      this.loadingEjercicio = false
      //}, 700)
    },
  },
}
</script>
