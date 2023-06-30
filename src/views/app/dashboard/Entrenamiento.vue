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
                <v-virtual-scroll
                  :items="listaEjercicios"
                  :item-height="70"
                  height="600"
                >
                  <template v-slot:default="{ item }">
                    <div
                      :draggable="true"
                      @dragstart="onDragStart(item, $event)"
                    >
                      <v-list-item>
                        <img class="mr-md mr-1" width="60" :src="item.url" />
                        <v-list-item-content>
                          <v-list-item-title>
                            {{ item.nombre }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>
                    </div>
                  </template>
                </v-virtual-scroll>
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
                  <draggable v-model="listaSeleccion" draggable=".item">
                    <template v-for="(row, i) in listaSeleccion">
                      <v-hover v-slot="{ hover }" open-delay="200" class="item" :key="i">
                        <v-col cols="12" md="6" lg="3" sm="6" :key="i">
                          <base-card class="overflow-hidden" color="white">
                            <v-card-text
                              class="pt-0 pl-2 pb-0 d-flex justify-center"
                            >
                              <small class="grey--text">
                                {{ row.categoria }}
                              </small>
                            </v-card-text>
                            <v-img
                              cover
                              max-height="50"
                              min-height="50"
                              :src="row.url"
                            />
                            <v-divider class="mx-4" color="#91D8DF"></v-divider>

                            <v-card-actions
                              class="pa-3 d-flex justify-space-between"
                            >
                              <v-card-subtitle class="pa-0">
                                {{ row.nombre }}
                              </v-card-subtitle>
                            </v-card-actions>
                          </base-card>
                        </v-col>
                      </v-hover>
                    </template>
                  </draggable>
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
import draggable from 'vuedraggable'

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
    draggable,
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
      console.log(item)
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
  background-color: #e0e0e0 !important;
  min-height: 300px;
}
</style>
