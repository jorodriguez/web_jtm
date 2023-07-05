<template>
  <div class="pt-4">
    <v-row>
      <v-col cols="4" md="4" lg="3" sm="12"></v-col>
      <v-col>
        <v-combobox
          :items="listaUnidadRepeticion"
          hide-selected
          label="Atleta *"
          small-chips
          item-value="id"
          item-text="nombre"
          required
        >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  No hay resultados
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-combobox>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" md="4" lg="3" sm="12">
        <base-card
          class="h-full"
          color="grey"
          style="position: fixed; top: 1; z-index: 999; width: 280px;"
        >
          <v-card-text>
            <v-toolbar color="#0493a3" dark dense>
              <v-toolbar-title></v-toolbar-title>

              <v-spacer />

              <v-text-field>              
                <v-icon slot="prepend" dark >
                  mdi-find
                </v-icon>
              </v-text-field>

              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>

            <v-row>
              <v-col md="12">
                <v-virtual-scroll
                  :items="listaEjercicios"
                  :item-height="200"
                  max-height="800"
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
                              max-height="100"
                              min-height="100"
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

      <v-col cols="9" md="8" lg="9" sm="12">
        <base-card class="h-full" :key="compnentRenderKey">
          <v-card-text>
            Circuitos {{ circuitos ? circuitos.length : '' }}
          </v-card-text>
          <v-card-text>
            <!--<v-toolbar
              color="#0493a3"
              src="@/assets/images/barra.png"
              dark
              dense
            >
              <v-toolbar-title>
                Circuitos {{ circuitos ? circuitos.length : '' }}
              </v-toolbar-title>

              <v-spacer />

              <v-btn icon>                
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-toolbar>-->

            <template v-for="(itemCircuito, cindex) in circuitos">
              <v-row
                :key="cindex"
                class="drop-area rounded-lg mb-2 mt-1"
                @dragover.prevent
                @drop="onDrop($event, cindex)"
              >
                <v-col cols="12">
                  <v-toolbar
                    color="#0493a3"
                    src="@/assets/images/barra.png"
                    dark
                    dense
                  >
                    <v-toolbar-title>Circuito {{ cindex + 1 }}</v-toolbar-title>
                  </v-toolbar>

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
                          <base-card>
                            <v-row>
                              <v-col cols="2">
                                <v-avatar class="ml-3 pb-0" size="130" tile>
                                  <v-img :src="row.url"></v-img>
                                </v-avatar>
                              </v-col>
                              <v-col cols="10" class="ml-0 mb-0 pb-0 pt-0">
                                <v-card-title
                                  class="text-h6 mb-0 pb-0 pt-1 d-flex justify-space-between"
                                >
                                  <span>{{ row.nombre }}</span>
                                  <span>
                                    <v-chip
                                      x-small
                                      color="white"
                                      text-color="grey"
                                    >
                                      <v-icon left>
                                        mdi-weight-lifter
                                      </v-icon>
                                      {{ row.categoria }}-
                                      <span class="gray--text">
                                        Circuito {{ cindex + 1 }}
                                      </span>
                                    </v-chip>
                                  </span>
                                </v-card-title>

                                <!--<v-card-subtitle>
                                  <small class="text--grey">
                                    {{ row.descripcion }}
                                  </small>
                                </v-card-subtitle>-->

                                <v-card-actions>
                                  <v-form>
                                    <v-container
                                      class="m-0 pb-0 pt-0"
                                      style="margin-bottom: 0px !important;"
                                    >
                                      <v-row>
                                        <v-col cols="4">
                                          <v-text-field
                                            v-model="row.repeticiones"
                                            label="Repeticiones"
                                            type="number"
                                            width="20"
                                            append-outer-icon="mdi-plus"
                                            @click:append-outer="
                                              increment(cindex, i)
                                            "
                                            prepend-icon="mdi-minus"
                                            dense
                                            size="3"
                                            @click:prepend="
                                              decrement(cindex, i)
                                            "
                                          ></v-text-field>
                                        </v-col>
                                        <v-col>
                                          <v-chip-group
                                            v-model="row.cat_unidad_repeticion"
                                            active-class="teal darken-3 white--text"
                                            column
                                          >
                                            <template
                                              v-for="(i,
                                              index) in listaUnidadRepeticion"
                                            >
                                              <v-chip
                                                :value="i.id"
                                                :key="index"
                                              >
                                                {{ i.nombre }}
                                              </v-chip>
                                            </template>
                                          </v-chip-group>
                                        </v-col>
                                      </v-row>
                                      <v-row class="d-flex justify-end">
                                        <v-btn
                                          icon
                                          small
                                          @click="row.show = !row.show"
                                        >
                                          <v-icon>
                                            mdi-note-plus
                                          </v-icon>
                                        </v-btn>
                                      </v-row>
                                      <v-row v-show="row.show">
                                        <v-expand-transition>
                                          <v-textarea
                                            filled
                                            dense
                                            focus
                                            height="8"
                                            label="Instrucciones extras"
                                            class=""
                                            v-model="row.nota"
                                          ></v-textarea>
                                        </v-expand-transition>
                                      </v-row>
                                    </v-container>
                                  </v-form>
                                </v-card-actions>
                              </v-col>
                            </v-row>
                          </base-card>
                        </v-col>
                      </v-hover>
                    </template>
                  </draggable>
                </v-col>
              </v-row>
            </template>
          </v-card-text>
        </base-card>
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
      listaUnidadRepeticion: [],
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

      this.listaUnidadRepeticion = await this.getAsync(
        `${URL_API.CATALOGOS}/unidad_repeticion`,
      )

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
    increment(x, y) {
      //this.foo = parseInt() + 1
      this.circuitos[(x, y)] = this.circuitos[(x, y)] + 1
    },
    decrement(x, y) {
      this.circuitos[(x, y)] = this.circuitos[(x, y)] - 1
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
  background-color: #f4f4f4 !important;
  min-height: 200px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='1' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  /*background-image: linear-gradient(to right, #333 10%, rgba(255, 255, 255, 0) 0%);
  background-position: top;
  background-size: 10px 1px;
  background-repeat: repeat-x;*/
}
</style>
