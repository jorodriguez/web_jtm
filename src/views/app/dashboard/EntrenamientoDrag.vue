<template>
  <v-row>
    <v-col cols="12" lg="3">
      <base-card>
        <v-card-text>
          <v-autocomplete
            auto-select-first
            filled
            rounded
            solo
            solo-inverted
          ></v-autocomplete>
        </v-card-text>
        <v-card-text>
          <div class="d-flex align-center justify-center mb-6">
            <div class="text-center">
              <v-img
                height="128"
                width="128"
                src="@/assets/images/faces/1.jpg"
                class="rounded-circle"
                alt=""
              ></v-img>
              <h5 class="font-weight-bold my-3">
                atleta
              </h5>
              <div class="d-flex align-center flex-wrap justify-center mb-3">
                <v-rating v-model="rating" small></v-rating>
                <span class="text--disabled">(cal)</span>
              </div>
            </div>
          </div>
          <v-divider class="my-4" />
          <div class="d-flex align-end justify-space-between mb-4">
            <p class="mt-2 mb-0 flex-1">
              Dedicación
            </p>
            <div class="flex-1">
              <p class="text-right caption ma-0">
                80%
              </p>
              <v-progress-linear value="80" />
            </div>
          </div>
          <!--<div class="d-flex align-end justify-space-between mb-4">
            <p class="mt-2 mb-0 flex-1">
              Delivered On Time
            </p>
            <div class="flex-1">
              <p class="text-right caption ma-0">
                90%
              </p>
              <v-progress-linear value="80" />
            </div>
          </div>
          <div class="d-flex align-end justify-space-between mb-4">
            <p class="mt-2 mb-0 flex-1">
              Order Completion
            </p>
            <div class="flex-1">
              <p class="text-right caption ma-0">
                100%
              </p>
              <v-progress-linear value="100%" />
            </div>
          </div>-->
          <v-divider class="my-4" />
          <div class="d-flex align-center justify-space-between mb-2">
            <p class="mt-2 mb-0 flex-1">
              Cuota
            </p>
            <div class="flex-1 text-right">
              <v-chip small class="ma-2">
                $ 400
              </v-chip>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between mb-2">
            <p class="mt-2 mb-0 flex-1">
              Adeuda
            </p>
            <div class="flex-1 text-right">
              <v-chip small class="ma-2" color="orange" dark>
                $ 100
              </v-chip>
            </div>
          </div>
        </v-card-text>
      </base-card>
      <base-card>
        <v-card-text>
          <div class="d-flex justify-space-between itesm-center">
            <p class="mt-2 mb-0 flex-1">
              Entrenamientos
            </p>
            <div class="flex-1 text-right">
              20
              <v-icon>
                mdi-weight-lifter
              </v-icon>
            </div>
          </div>
        </v-card-text>
      </base-card>
    </v-col>
    <v-col cols="12" lg="9">
      <div class="d-flex align-center">
        <p class="font-weight-medium mr-3 mb-3">
          E N T R E N A M I E N T O S
        </p>
        <v-divider />
      </div>

      <base-card class="mb-4">
        <v-card-text>
          <div class="container">
            <div
              class="item"
              v-for="row in listaEjercicios"
              :key="row.id"
              :draggable="true"
              @dragstart="onDragStart(row, $event)"
            >
              <template>
                <v-hover v-slot="{ hover }" open-delay="200" class="item">
                  <v-col cols="12" md="6" lg="3" sm="6" :key="i">
                    <base-card class="overflow-hidden" color="white">
                      <v-card-text class="pt-0 pl-2 pb-0 d-flex justify-center">
                        <small class="grey--text">{{ row.categoria }}</small>
                      </v-card-text>
                      <v-img
                        cover
                        max-height="50"
                        min-height="50"
                        :src="row.url"
                      />
                      <v-divider class="mx-4" color="#91D8DF"></v-divider>

                      <v-card-actions class="pa-3 d-flex justify-space-between">
                        <v-card-subtitle class="pa-0">
                          {{ row.nombre }}
                        </v-card-subtitle>
                      </v-card-actions>
                    </base-card>
                  </v-col>
                </v-hover>
              </template>
            </div>
          </div>

          <div class="drop-area" @dragover.prevent @drop="onDrop($event)">
            <draggable v-model="circuito1" draggable=".item">
              <template v-for="(row, i) in circuito1">
                <v-hover v-slot="{ hover }" open-delay="200" class="item">
                  <v-col cols="12" md="6" lg="3" sm="6" :key="i">
                    <base-card class="overflow-hidden" color="white">
                      <v-card-text class="pt-0 pl-2 pb-0 d-flex justify-center">
                        <small class="grey--text">{{ row.categoria }}</small>
                      </v-card-text>
                      <v-img
                        cover
                        max-height="50"
                        min-height="50"
                        :src="row.url"
                      />
                      <v-divider class="mx-4" color="#91D8DF"></v-divider>

                      <v-card-actions class="pa-3 d-flex justify-space-between">
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
        </v-card-text>
      </base-card>
    </v-col>
  </v-row>
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
      rating: 4,
      circuito1: [],
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
      event.dataTransfer.setData('text/plain', JSON.stringify(item))
    },
    onDrop(event) {
      const data = event.dataTransfer.getData('text/plain')
      const item = JSON.parse(data)
      this.circuito1.push({ ...item })
    },
  },
}
</script>

<style>
.container {
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
}
</style>
