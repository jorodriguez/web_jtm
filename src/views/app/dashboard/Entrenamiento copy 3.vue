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

    <v-row >
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
                  :item-height="100"
                  height="600"
                >
                  <template v-slot:default="{ item }">
                    <div
                      :draggable="true"
                      @dragstart="onDragStart(item, $event)"
                    >
                      <v-hover v-slot="{ hover }" open-delay="200" class="item">
                        <v-col cols="12">
                          <base-card class="overflow-hidden" color="white">
                            <v-card-text
                              class="pt-0 pl-2 pb-0 d-flex justify-center"
                            >
                              <small class="grey--text">
                                {{ item.categoria }}
                              </small>
                            </v-card-text>
                            <v-img
                              cover
                              max-height="150"
                              min-height="150"
                              :src="item.url"
                            />
                            <v-divider class="mx-4" color="#91D8DF"></v-divider>

                            <v-card-actions
                              class="pa-3 d-flex justify-space-between"
                            >
                              <v-card-subtitle class="pa-0">
                                {{ item.nombre }}
                              </v-card-subtitle>
                            </v-card-actions>
                          </base-card>
                        </v-col>
                      </v-hover>
                    </div>
                  </template>
                </v-virtual-scroll>
              </v-col>
            </v-row>
          </v-card-text>
        </base-card>
      </v-col>

      <v-col cols="12" md="6" lg="4" sm="6">
        <base-card class="h-full" :key="compnentRenderKey">
          <v-card-text>
            <v-toolbar color="" dark dense>
              <v-toolbar-title>
                Circuitos {{ compnentRenderKey }}
              </v-toolbar-title>

              <v-spacer />

              <v-btn icon>
                <!--<v-icon>mdi-dots-vertical</v-icon>-->
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-toolbar>

            <template v-for="(itemCircuito, cindex) in circuitos">
              <v-row :key="cindex">
                <v-col md="12">
                  <div
                    class="drop-area"
                    @dragover.prevent
                    @drop="onDrop($event, cindex)"
                  >
                    <h5>Circuito {{ cindex + 1 }}</h5>
                    <draggable v-model="circuitos[cindex]" draggable=".item">
                      <template v-for="(row, i) in circuitos[cindex]">
                        <v-hover
                          v-slot="{ hover }"
                          open-delay="200"
                          class="item"
                          :key="i"
                        >
                          <v-col
                            cols="12"
                            :key="i"
                            @click="() => verDetalleEjercicio(row)"
                          >
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
                                max-height="150"
                                min-height="150"
                                :src="row.url"
                              />
                              <v-divider
                                class="mx-4"
                                color="#91D8DF"
                              ></v-divider>

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
            </template>
          </v-card-text>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="6">
        <v-card class="mx-auto" v-if="!ejercicioSeleccionado"></v-card>

        <v-card class="mx-auto" v-else>
          <v-img :src="ejercicioSeleccionado.url" max-height="400px"></v-img>

          <v-card-title>
            {{ ejercicioSeleccionado.nombre }}
          </v-card-title>

          <v-card-subtitle>
            {{ ejercicioSeleccionado.descripcion }}
          </v-card-subtitle>

          <v-card-actions>
            <v-textarea
              filled
              name="input-7-4"
              label="Instrucciones"
              v-model="ejercicioSeleccionado.nota"
            ></v-textarea>
          </v-card-actions>

          <!--<v-card-actions>
            <v-btn color="orange lighten-2" text>
              Agregar nota
            </v-btn>

            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>
                {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
              </v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
          -->
        </v-card>
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
      circuitos: [],
      compnentRenderKey: 1,
    }
  },
  mounted() {
    this.usuarioSesion = getUsuarioSesion()
    console.log('##### ENTENAMIENTOS ####')
    this.usuarioSesion = getUsuarioSesion()
    this.cargarCatalogo()

    this.circuitos[0] = []
    this.circuitos[1] = []
    this.circuitos[2] = []
    this.circuitos[3] = []
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
    forceForRerender() {
      this.compnentRenderKey += 1
    },
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

      this.forceForRerender()
    },
    quitarEjercicio(row) {
      //this.listaEjercicios.remo

      const index = this.listaSeleccion.indexOf(row)

      const x = this.listaSeleccion.splice(index, 1)

      this.marcarSeleccionEjercicio(row, false)

      this.forceForRerender()
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
    onDrop(event, indexCircuito) {
      console.log('onDrop INDEX ' + indexCircuito)
      const data = event.dataTransfer.getData('text/plain')
      const item = JSON.parse(data)
      console.log(item)

      //let circuito  = this.circuitos[indexCircuito];

      if (!this.circuitos[indexCircuito]) {
        console.log('Se crea el array')
        this.circuitos[indexCircuito] = new Array()
      }

      this.circuitos[indexCircuito].push({ ...item })

      console.log(JSON.stringify(this.circuitos[indexCircuito]))

      this.forceForRerender()

      //circuito.push({ ...item });

      //this.circuitos[indexCircuito] = circuito;

      //this.circuitos[indexCircuito].push({ ...item })

      //this.listaSeleccion.push({ ...item })
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
