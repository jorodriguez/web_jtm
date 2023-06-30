<template>
  <div class="pt-4">
    <div class="d-flex align-center">
      <p class="font-weight-medium mr-3 mb-3">
        E N T R E N A M I E N T O S
      </p>
      <v-divider />
    </div>

    <v-row>informacion del usuario</v-row>
    <!--<v-row>
      <v-col cols="12" sm="12" md="12" lg="12">
        <base-card class="h-full">

        </base-card>
      </v-col>
      
    </v-row>-->

    <v-row>
      <v-col cols="12" md="6" lg="4" sm="6">
        <base-card class="h-full">
          <v-card-text>
            <v-toolbar color="blue" dark dense>
              <v-toolbar-title></v-toolbar-title>

              <v-spacer />

              <!--<v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>-->

              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>

            <v-row>
              <v-col md="12">
                <transition-group appear name="fade-up" tag="div">
                  <v-data-iterator
                    key
                    :items="listaEjercicios"                    
                    hide-default-footer                    
                  >
                    <template v-slot:default="props">                      
                        <div
                          v-for="(item, index) in props.items"
                          :key="index"
                          :draggable="true"
                          @dragstart="onDragStart(item, $event)"                                                     
                          class="overflow-y-auto"
                          max-height="400"
                        >
                        
                          <v-row>
                            <v-col cols="12" sm="12" md="12" lg="12">
                              <base-card class="h-full hover">
                                <v-card-text
                                  class="d-flex justify-space-between pa-1"
                                >
                                  <div class="d-flex align-center">
                                    <img
                                      class="mr-md mr-1"
                                      width="60"
                                      :src="item.url"
                                    />
                                    <div>
                                      <p class="ma-0">
                                        <a
                                          href="#"
                                          class="text--primary font-weight-medium mb-1"
                                        >
                                          {{ item.nombre }}
                                          {{ item.seleccionado }}
                                        </a>
                                      </p>
                                      <p class="text--disabled caption ma-0">
                                        {{ item.descripcion }}
                                      </p>
                                    </div>
                                  </div>
                                </v-card-text>
                              </base-card>
                            </v-col>
                          </v-row>
                          
                        </div>
                      
                    </template>
                  </v-data-iterator>
                </transition-group>
              </v-col>
            </v-row>
          </v-card-text>
        </base-card>
      </v-col>

      <v-col cols="12" md="6" lg="4" sm="6">
        <base-card class="h-full">
          <v-card-text>
            <v-toolbar color="" dark dense>
              <v-toolbar-title>Circuitos</v-toolbar-title>

              <v-spacer />

              <v-btn icon>
                <!--<v-icon>mdi-dots-vertical</v-icon>-->
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-toolbar>

            <v-row>
              <v-col md="12">
                <div class="drop-area" @dragover.prevent @drop="onDrop($event)">
                  <transition-group appear name="fade-up" tag="div">
                    <!-- :items-per-page.sync="itemsPerPageSelecion"
                   :page="pageSeleccion"-->
                    <v-data-iterator
                      key
                      :items="listaSeleccion"
                      hide-default-footer
                    >
                      <template v-slot:default="props">
                        <v-row>
                          <v-col
                            v-for="(item, index) in props.items"
                            :key="index"
                            cols="12"
                            sm="12"
                            md="12"
                            lg="12"
                          >
                            <base-card class="h-full hover">
                              <v-card-text
                                class="d-flex justify-space-between pa-1"
                              >
                                <div class="d-flex align-center">
                                  <img
                                    class="mr-md mr-1"
                                    width="50"
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
                                  <v-btn
                                    icon
                                    dark
                                    color="red"
                                    @click="() => quitarEjercicio(item)"
                                  >
                                    <v-icon dark>
                                      mdi-plus
                                    </v-icon>
                                  </v-btn>
                                </div>
                              </v-card-text>
                            </base-card>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-btn icon dark color="grey">
                            <v-icon>mdi-plus</v-icon>
                          </v-btn>
                        </v-row>
                      </template>
                      <!--
                    <template v-slot:footer>
                      <v-row class="mt-2" align="center" justify="center" v-if="listaSeleccion.length > itemsPerPageSelecion" >
                        <v-spacer />

                        <span class="mr-4 grey--text">
                          Page {{ pageSeleccion }} of {{ numberOfPagesSeleccion }}
                        </span>
                        <v-btn
                          small
                          fab
                          dark
                          outlined
                          color="blue darken-3"
                          class="mr-1"
                          @click="formerPageSeleccion"
                        >
                          <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn
                          small
                          fab
                          outlined
                          dark
                          color="blue darken-3"
                          class="ml-1"
                          @click="nextPageSeleccion"
                        >
                          <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                      </v-row>
                    </template>
                    --></v-data-iterator>
                  </transition-group>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </base-card>
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
      itemsPerPage: 50,
      itemsPerPageSelecion: 50,
      page: 1,
      pageSeleccion: 1,
      listaSeleccion: [],
      search: '',
      filter: {},
      sortBy: 'nombre',
      ejercicioSeleccionado: null,
    }
  },
  mounted() {
    this.usuarioSesion = getUsuarioSesion()
    console.log('##### ENTENAMIENTOS ####')
    this.usuarioSesion = getUsuarioSesion()
    this.cargarCatalogo()
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.listaEjercicios.length / this.itemsPerPage)
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== 'nombre')
    },
    numberOfPagesSeleccion() {
      return Math.ceil(this.listaSeleccion.length / this.itemsPerPageSelecion)
    },
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
    agregarEjercicio(row) {
      console.log('Agregar ejercicio ' + row.nombre)

      if (this.validarAgregarEjercicio(row)) {
        console.log('ya existe')
        return
      }

      row.seleccionado = true

      this.listaSeleccion.push(row)

      this.marcarSeleccionEjercicio(row, true)
    },
    quitarEjercicio(row) {
      //this.listaEjercicios.remo

      const index = this.listaSeleccion.indexOf(row)

      const x = this.listaSeleccion.splice(index, 1)

      this.marcarSeleccionEjercicio(row, false)
    },
    validarAgregarEjercicio(row) {
      const index = this.listaSeleccion.indexOf(row)

      return index != -1
    },
    marcarSeleccionEjercicio(row, seleccion) {
      const index = this.listaEjercicios.indexOf(row)

      console.log(this.listaEjercicios[index])

      this.listaEjercicios[index].seleccionado = seleccion
    },
    verDetalleEjercicio(row) {
      this.ejercicioSeleccionado = row
    },
    /***************************/

    /*  metodos de paginacion */
    /***************************/

    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number
    },

    nextPageSeleccion() {
      if (this.pageSeleccion + 1 <= this.numberOfPagesSeleccion)
        this.pageSeleccion += 1
    },
    formerPageSeleccion() {
      if (this.pageSeleccion - 1 >= 1) this.pageSeleccion -= 1
    },
    updateItemsPerPageSeleccion(number) {
      this.itemsPerPageSelecion = number
    },
    onDragStart(item, event) {
      console.log('onDrag')
      console.log(item)
      event.dataTransfer.setData('text/plain', JSON.stringify(item))
    },
    onDrop(event) {
      console.log('onDrop')
      const data = event.dataTransfer.getData('text/plain')
      const item = JSON.parse(data)
      this.listaSeleccion.push({ ...item })
    },
  },
}
</script>

<style>
/*.container {
  display: flex;
}

.item {
  padding: 10px;
  margin: 5px;
  background-color: #f2f2f2;
  cursor: move;
}

.drop-area {
  padding: 20px;
  margin-top: 20px;
  background-color: #e0e0e0;
  text-align: center;
}*/

.drop-area {
  background-color: red !important;
  min-height: 300px;
}
</style>
