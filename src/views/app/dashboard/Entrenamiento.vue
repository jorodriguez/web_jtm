<template>
  <div class="app-content-wrapper apps-wrapper --filemanager shadow-lg">
    <div :class="{ open: isBlock }" class="app-overlay" @click="overlayApp" />
    <div :class="{ open: isOpen }" class="app-sidebar">
      <div class="app-sidebar-header white py-1">
        <!--<v-btn class="rounded-lg py-5" tile block color="primary">
          <v-icon left>mdi-plus</v-icon>
          Agregar
        </v-btn>-->
        <v-row >
          <v-col cols="12">
            <v-text-field              
              filled
              dense
              clearable
              placeholder="Buscar"
              type="text"              
              v-model="criterioBuscar"  
              v-on:keyup.enter="buscarPorNombre()" 
              @click:clear="limpiarFiltro()"
              hide-details
              >
              <template v-slot:append>
                <v-fade-transition leave-absolute>
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="ma-0" color="blue-grey" icon dark  small v-bind="attrs" v-on="on">
                        <v-icon left >
                          mdi-dots-vertical
                        </v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-text class="pa-6">
                       Categorías
                        <v-list>
                          <template v-for="(item, i) in categorias">
                            <v-list-item
                              :key="i"
                              @click="() => filtrarCategoria(item.nombre)"
                            >
                              <v-list-item-avatar >
                                <v-avatar  :color="`${item.contador == 0 ? 'blue-grey lighten-4':'teal lighten-2'}`" size="36">
                                  <!--<v-img :src="item.icon" />-->
                                  {{item.contador}}
                                </v-avatar>
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title>
                                  {{ item.nombre }}
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </template>
                        </v-list>
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </v-fade-transition>
              </template>
            </v-text-field>
          </v-col>
        </v-row>      
      </div>

      <vue-perfect-scrollbar
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        class="h-100 rtl-ps-none ps scroll"
        style="height: 100%;"
      >
        <!-- style="position: sticky; top: 1; z-index: 999; width: 280px;"-->
        <div class="app-sidebar-body mt-6">
          <base-card class="h-full" color="blue-grey lighten-5">
            <v-card-text>
              <v-row>
                <v-col md="12">
                  <v-progress-circular
                    indeterminate
                    :value="40"
                    color="lime"
                    v-if="loadingEjercicio"
                  ></v-progress-circular>

                  <template v-for="(item, i) in listaEjercicios">
                    <div
                      :draggable="true"
                      @dragstart="onDragStart(item, $event)"
                      :key="i"
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
                </v-col>
              </v-row>
            </v-card-text>
          </base-card>
        </div>
      </vue-perfect-scrollbar>
    </div>
    <div class="app-content relative">
      <div class="app-header white">
        <div class="d-flex justify-space-between flex-wrap align-baseline">
          <div class="">
            <!-- app-icon class -->
            <div
              class="nested-sidebar-toggle d-md-none d-sm-block"
              @click="appToggle"
            >
              <v-icon color="dark">mdi-menu-open</v-icon>
            </div>
             <v-autocomplete
              v-model="atleta_seleccionado"              
              :items="atletas"
              filled
              chips
              color="blue-grey lighten-2"
              label="Atleta"
              item-text="nombre"
              item-value="id"              
              dense
              solo

            >
            <!-- @click:close="remove(data.item)"-->
              <template v-slot:selection="data">              
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"                  
                  
                >
                  <v-avatar left>
                    <v-img :src="data.item.foto == null ? '@/assets/images/jtm/logojtm.png':data.item.foto "></v-img>
                  </v-avatar>
                  {{ data.item.nombre }}
                </v-chip>
              </template>
              <template v-slot:item="data">                
                <template >
                  <v-list-item-avatar>
                    <img :src="data.item.avatar">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.nombre"></v-list-item-title>                    
                  </v-list-item-content>
                </template>
              </template>s
            </v-autocomplete>

          </div>
          <div>
            <v-btn icon color="primary">
              <v-icon>mdi-account-check</v-icon>
            </v-btn>
            <v-btn icon color="primary">
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>
            <v-btn icon color="primary">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <vue-perfect-scrollbar
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        class="h-100 rtl-ps-none ps scroll"
        style="height: 100%;"
      >
        <div class="app-body mt-10 px-8">
        <base-card class="h-full" :key="compnentRenderKey">          
          <v-card-text>        
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


                                <v-card-actions>
                                  <v-form>
                                    <v-container
                                      class="m-0 pb-0 pt-0"
                                      style="margin-bottom: 0px !important;"
                                    >
                                      <v-row>
                                        <v-col cols="4">
                                          <v-text-field
                                            :ref="`ref-repeticiones_${row.id}`"
                                            v-model="row.repeticiones"
                                            label="Repeticiones"
                                            type="number"
                                            min="1"
                                            width="20"
                                            class="counter"                                            
                                            append-outer-icon="mdi-plus"
                                            @click:append-outer="increment(`ref-repeticiones_${row.id}`,cindex)"
                                            prepend-icon="mdi-minus"
                                            dense
                                            size="3"
                                            @click:prepend="decrement(`ref-repeticiones_${row.id}`)"
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
        </div>
      </vue-perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import analyticOneCard from '@/components/card/AnalyticCardVersionOne'
import analyticTwoCard from '@/components/card/AnalyticCardVersionTwo'
import ListcardTwo from '@/components/card/listCard/ListCardTwo'
import draggable from 'vuedraggable'

import { getUsuarioSesion } from '../../../helper/Sesion'
import { operacionesApi } from '../../../helper/OperacionesApi'
import URL_API from '../../../helper/Urls'

export default {
  name: 'Circuitos',
  metaInfo: {    
    title: 'Circuitos',
  },
  mixins: [operacionesApi],
  components: {
    draggable,
    VuePerfectScrollbar,
  },

  data: () => ({
    isOpen: false,
    isBlock: false,
    usuarioSesion: {},
    tabs: null,
    listaUnidadRepeticion: [],
    categorias: [],    
    listaEjercicios: [],
    listaEjerciciosRespaldo: [],
    atletas: [],
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
    criterioBuscar: '',
    atleta_id:null,
    atleta_seleccionado:null
  }),
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
  methods: {

    appToggle: function () {
      this.isOpen = !this.isOpen
      this.isBlock = !this.isBlock
    },
    overlayApp: function () {
      this.isOpen = !this.isOpen
      this.isBlock = !this.isBlock
    },
    increment(ref,index){        
      
        console.log("INCREMENT "+ref);  
        ths       

    },
    decrement(ref){        
        console.log("DECREMENT "+ref);
        this.$refs[ref].stepDown();        
    },
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
      this.listaEjerciciosRespaldo = this.listaEjercicios

      this.loadingEjercicio = false


      this.listaUnidadRepeticion = await this.getAsync(
        `${URL_API.CATALOGOS}/unidad_repeticion`,
      )

      await this.cargarCategorias();

      //cargar la lista de atletas

    this.atletas = await this.getAsync(`${URL_API.USUARIOS}/${this.usuarioSesion.co_sucursal}/${this.usuarioSesion.id_empresa}`);


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
    filtrarCategoria(categoria) {
      this.listaEjercicios = this.listaEjerciciosRespaldo.filter(
        (e) => e.categoria.toUpperCase() == categoria.toUpperCase(),
      )
    },
    limpiarFiltro(){
            this.criterioBuscar = '';
            this.buscarPorNombre();
    },
    buscarPorNombre() {
      
      console.log('buscar ' + this.criterioBuscar)

      if (this.criterioBuscar == '') {
        this.listaEjercicios = this.listaEjerciciosRespaldo
      } else {
        this.listaEjercicios = this.listaEjerciciosRespaldo.filter(
          (e) =>
            e.nombre
              .toUpperCase()
              .includes(this.criterioBuscar.toUpperCase()) ||
            e.categoria
              .toUpperCase()
              .includes(this.criterioBuscar.toUpperCase()),
        )
      }
    },
  },
}
</script>
<style lang="scss">
.app-content-wrapper {
  position: relative;
  display: flex;
  overflow: hidden;
  height: calc(100vh - 200px);

  .app-overlay {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    display: none;
    z-index: 2;
    transition: all 0.3s ease-in;
    @media only screen and (max-width: 959px) {
      &.open {
        display: block;
        transition: all 0.3s ease-in;
      }
    }
  }
  .app-sidebar {
    width: 280px;
    position: relative;
    transition: all 0.3s ease-in;
    @media only screen and (max-width: 959px) {
      position: absolute;
      left: -340px;
      z-index: 5;
      height: calc(100vh - 120px);
      transition: all 0.3s ease-in;
      &.open {
        left: 0;
      }
    }
    .app-sidebar-header {
      padding: 0.75rem 1.25rem;
      margin-bottom: 0;
      // border-bottom: 1px solid rgba(0, 0, 0, 0.125);
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }
    .app-sidebar-body {
      // overflow-y: scroll;
      // height: 100%;
      padding-top: 3.375rem;
      width: 280px;
    }
  }

  .app-content {
    width: calc(100% - 280px);
    @media only screen and (max-width: 959px) {
      width: 100%;
    }
    // margin-left: 30px;
    .app-header {
      padding: 0.75rem 1.25rem;
      margin-bottom: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }
    .app-body {
      flex: 1 1 auto;
      padding-top: 3.375rem;
      // overflow-y: scroll;
      height: calc(100% - 130px);
    }
    .app-footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 130px;
    }
  }
}
.app-icon {
  display: none;
  @media only screen and (max-width: 959px) {
    display: block;
  }
}
.eg-filemanager {
  background-color: #fff;
}
.filemanager-content {
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
}

.apps-wrapper {
  &.--filemanager {
    .nested-sidebar-toggle {
      @media (min-width: 959px) {
        display: none;
      }
    }
  }
}

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
