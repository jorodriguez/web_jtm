<template>
  <div class="app-content-wrapper apps-wrapper --filemanager shadow-lg">
    <div :class="{ open: isBlock }" class="app-overlay" @click="overlayApp" />
    <div :class="{ open: isOpen }" class="app-sidebar">
      <div class="app-sidebar-header white py-1">
        <v-row>
          <v-col cols="12">
            <v-text-field
              filled
              dense
              clearable
              placeholder="Buscar"
              type="text"
              v-model="criterioBuscar"
              hide-details
              @click:clear="criterioBuscar = ''"
            >
              <template v-slot:append>
                <v-fade-transition leave-absolute>
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="ma-0"
                        color="blue-grey"
                        icon
                        dark
                        small
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon left> mdi-dots-vertical </v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-text class="pa-6">
                        Categorías
                        <v-list>
                          <template v-for="(item, i) in categorias">
                            <v-list-item
                              v-if="item.contador > 0"
                              @click="() => filtrarCategoria(item.nombre)"
                            >
                              <v-list-item-avatar>
                                <v-avatar
                                  :color="`${
                                    item.contador == 0
                                      ? 'blue-grey lighten-4'
                                      : 'teal lighten-2'
                                  }`"
                                  size="36"
                                >
                                  {{ item.contador }}
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
        style="height: 100%"
      >
        <div class="app-sidebar-body mt-6">
          <base-card class="h-full" color="blue-grey lighten-5">
            <list-items
              :lista-ejercicios="listExercises"
              :list-exist="listClone"
              :select-atleta="atleta_seleccionado"
              @dragItem="addNewItem"
              @move="moveItem"
            ></list-items>
          </base-card>
        </div>
      </vue-perfect-scrollbar>
    </div>
    <div class="app-content relative">
      <div class="app-header white mt-2 app-header-size">
        <div class="children-header-app">
          <div class="nested-sidebar-toggle d-md-none d-sm-block mb-4">
            <v-icon color="dark" @click="appToggle">mdi-menu-open</v-icon>
          </div>
          <div class="d-flex flex-row">
            <!-- app-icon class -->
            <v-autocomplete
              v-model="idAtleta"
              :items="atletas"
              filled
              chips
              color="blue-grey lighten-2"
              label="Atleta"
              item-text="nombre"
              item-value="id"
              dense
              solo
              @change="selectAtleta"
            >
              <!-- @click:close="remove(data.item)"-->
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  @click="data.select"
                >
                  <v-avatar left>
                    <v-img
                      :src="
                        data.item.foto == null
                          ? '@/assets/images/jtm/logojtm.png'
                          : data.item.foto
                      "
                    ></v-img>
                  </v-avatar>
                  {{ data.item.nombre }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template>
                  <v-list-item-avatar>
                    <img :src="data.item.avatar" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <!-- <v-list-item-title v-html="data.item.nombre"></v-list-item-title>                     -->
                    <v-list-item-title
                      v-html="data.item.nombre"
                    ></v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
            <!-- <div class="d-flex flex-row justify-center ml-5">
              <v-text-field
                  hint="This field uses counter prop"
                  label="Regular"
                  outlined
                ></v-text-field>
            </div> -->
          </div>
          <!-- <div>
            <v-btn icon color="primary">
              <v-icon>mdi-account-check</v-icon>
            </v-btn>
            <v-btn icon color="primary">
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>
            <v-btn icon color="primary">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </div> -->
        </div>
      </div>
      <vue-perfect-scrollbar
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
        class="h-100 rtl-ps-none custom-scroll ps scroll"
        style="height: 90%"
      >
        <div class="app-body body-app">
          <div class="listCircuitos">
            <h6>Circuitos</h6>
            <div class="circuito">
              <!-- <v-icon :class="selectedCircuito.position == 1 ? '' : 'btnCursor'" @click.prevent="beforeCircuito">  </v-icon> -->
              <v-btn class="mx-2" fab small>
                <v-icon class="btnCursor" @click.prevent="beforeCircuito">
                  mdi-arrow-left
                </v-icon>
              </v-btn>

              <div class="container-btn">
                <v-btn
                  v-for="(item, index) in circuitos"
                  :key="index"
                  class="mx-2"
                  fab
                  dark
                  small
                  :style="
                    item.active
                      ? 'background-color:#0093a2'
                      : 'background-color:gray'
                  "
                  @click="currentCircuito(item)"
                >
                  <!-- {{ index + 1 > 5 && index + 1 < 12 ? "..." : index + 1 }} -->
                  {{ index + 1 }}
                </v-btn>
              </div>

              <v-btn class="mx-2" fab small>
                <v-icon class="btnCursor" @click.prevent="addNewCircuito">
                  mdi-plus
                </v-icon>
              </v-btn>
              <v-btn class="mx-2" fab small>
                <v-icon class="btnCursor" @click.prevent="afterCircuito">
                  mdi-arrow-right
                </v-icon>
              </v-btn>
              <!-- <v-icon class="btnCursor" @click.prevent="afterCircuito">  </v-icon> -->
            </div>
          </div>
          <v-toolbar color="#0493a3" src="@/assets/images/barra.png" dark dense>
            <v-toolbar-title
              >Circuito {{ selectedCircuito.position ?? 1 }}</v-toolbar-title
            >
          </v-toolbar>

          <draggable
            not="itemUnidad"
            :list="listClone"
            group="exercises"
            @change="changeCircuito"
            :key="compnentRenderKey"
            :style="listEmpty ? 'height: 600px' : ''"
          >
            <template v-for="(row, i) in listClone">
              <v-hover v-slot="{ hover }" open-delay="500" class="item">
                <v-col cols="12" :key="i">
                  <base-card>
                    <v-row>
                      <v-col
                        cols="12"
                        xl="2"
                        lg="2"
                        class="d-flex flex-row justy-center align-center"
                      >
                        <img class="ml-3 p-0" :src="row.url" />
                      </v-col>
                      <v-col
                        cols="12"
                        xl="10"
                        lg="10"
                        class="ml-0 mb-0 pb-0 pt-0"
                      >
                        <v-card-title
                          class="text-h6 mb-0 pb-0 pt-1 d-flex justify-space-between"
                        >
                          <span>{{ row.nombre }}</span>
                          <span>
                            <v-chip x-small color="white" text-color="grey">
                              <v-icon left> mdi-weight-lifter </v-icon>
                              {{ row.categoria }}-
                              <span class="gray--text">
                                Circuito {{ selectedCircuito.position }}
                              </span>
                            </v-chip>
                          </span>
                        </v-card-title>

                        <v-card-actions>
                          <v-form>
                            <v-container
                              class="m-0 pb-0 pt-0"
                              style="margin-bottom: 0px !important"
                            >
                              <v-row>
                                <v-col
                                  cols="6"
                                  xl="4"
                                  lg="4"
                                  class="btnsDecreIncre"
                                >
                                  <v-icon
                                    id="btnMinus"
                                    @click="decrement(row)"
                                    class="btnMinus"
                                  >
                                    mdi-minus
                                  </v-icon>
                                  <div class="numRepeticiones">
                                    <p>{{ row.repeticiones }}</p>
                                  </div>
                                  <v-icon id="btnPlus" @click="increment(row)">
                                    mdi-plus
                                  </v-icon>
                                </v-col>
                                <v-col class="listUnidad">
                                  <v-chip-group
                                    v-model="row.cat_unidad_repeticion"
                                    active-class="teal darken-3 white--text"
                                    column
                                    @change="selectUnidadRepeticion(row)"
                                  >
                                    <template
                                      v-for="(
                                        i, index
                                      ) in listaUnidadRepeticion"
                                    >
                                      <v-chip
                                        :value="i.id"
                                        :key="index"
                                        :disabled="
                                          i.id === row.cat_unidad_repeticion
                                        "
                                        class="itemUnidad"
                                      >
                                        {{ i.nombre }}
                                      </v-chip>
                                    </template>
                                  </v-chip-group>
                                </v-col>
                              </v-row>
                              <v-row class="d-flex justify-end">
                                <v-btn icon small @click="row.show = !row.show">
                                  <v-icon v-if="!row.show">
                                    mdi-note-plus
                                  </v-icon>
                                  <v-icon v-else> mdi-note-minus </v-icon>
                                </v-btn>
                              </v-row>
                              <v-row v-show="row.show">
                                <v-expand-transition>
                                  <v-textarea
                                    filled
                                    dense
                                    focus
                                    height="auto"
                                    label="Instrucciones extras"
                                    class=""
                                    no-resize
                                    v-model="row.nota"
                                    @blur="addInstructions"
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
        </div>
      </vue-perfect-scrollbar>
      <div style="border-radius: 0.2rem; padding: 0.2rem; width: 100%">
        <div class="d-flex flex-row justify-end mt-2">
          <div
            style="
              position: absolute;
              z-index: 1;
              width: 100%;
              border-radius: 10rem;
            "
          >
            <v-alert v-if="notify.show" :type="notify.type" dense prominent>
              <p
                class="d-flex flex-row justify-start align-center"
                style="margin: 0px !important"
              >
                {{ notify.message }}
              </p>
            </v-alert>
          </div>
          <v-btn
            v-if="existRutina || isUpdateRutina"
            class="ml-2"
            depressed
            :disabled="loading"
            :loading="loadingRutina"
            color="#0093a2"
            style="color: white"
            @click.prevent="dialogDisablerutina = true"
          >
            Nueva Rutina
          </v-btn>
          <v-btn
            v-if="!existRutina && !isUpdateRutina"
            class="ml-2"
            depressed
            :loading="loading"
            color="#0093a2"
            style="color: white"
            @click.prevent="saveCircuitos"
          >
            Guardar
          </v-btn>
          <v-btn
            v-else
            class="ml-2"
            depressed
            :disabled="loadingRutina"
            :loading="loading"
            color="#0093a2"
            style="color: white"
            @click.prevent="actualizarCircuitos"
          >
            Actualizar Rutina
          </v-btn>
          <!-- <v-btn depressed> Normal </v-btn> -->
        </div>
      </div>
      <v-dialog v-model="dialogDisablerutina" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h6">
            Estas Seguro que quieres crear una nueva rutina?
          </v-card-title>
          <!-- <v-card-text
            >Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are
            running.</v-card-text
          > -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              No
            </v-btn>
            <v-btn color="green darken-1" text @click="addRutina">
              Si
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import analyticOneCard from "@/components/card/AnalyticCardVersionOne";
import analyticTwoCard from "@/components/card/AnalyticCardVersionTwo";
import ListcardTwo from "@/components/card/listCard/ListCardTwo";
import draggable from "vuedraggable";
import listItems from "../../../components/entrenamientos/listItems.vue";
import { getWeek } from "../../../helper";

import { getUsuarioSesion } from "../../../helper/Sesion";
import { operacionesApi } from "../../../helper/OperacionesApi";
import URL_API from "../../../helper/Urls";
import {
  getCircuitosUser,
  saveCircuitos as circuitosSave,
  updateRutina,
  disableRutina,
} from "../../../helper/composables/circuitos";
export default {
  name: "Circuitos",
  metaInfo: {
    title: "Circuitos",
  },
  mixins: [operacionesApi],
  components: {
    draggable,
    VuePerfectScrollbar,
    listItems,
  },

  data: () => ({
    numbers: [1, 2, 3, /* ...otros números... */ 15, 16],
    maxNumber: 15, // Número máximo para comprimir los números
    selectedCircuito: {
      exercises: [],
      position: 1,
    },
    newItem: null,
    listClone: [],
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
    loading: false,
    itemsPerPage: 50,
    itemsPerPageSelecion: 50,
    page: 1,
    pageSeleccion: 1,
    listaSeleccion: [],
    search: "",
    filter: {},
    sortBy: "nombre",
    ejercicioSeleccionado: null,
    circuitos: [
      {
        position: 1,
        active: true,
        exercises: [],
      },
      {
        position: 2,
        active: false,
        exercises: [],
      },
      {
        position: 3,
        active: false,
        exercises: [],
      },
      {
        position: 4,
        active: false,
        exercises: [],
      },
    ],
    compnentRenderKey: 1,
    criterioBuscar: "",
    atleta_id: null,
    atleta_seleccionado: null,
    idAtleta: null,
    fetchData: null,
    notify: {
      message: "",
      type: "",
      show: false,
    },
    isUpdateRutina: false,
    dialogDisablerutina: false,
    loadingRutina: false,
  }),
  mounted() {
    this.usuarioSesion = getUsuarioSesion();
    console.log("##### ENTENAMIENTOS ####");
    this.usuarioSesion = getUsuarioSesion();
    this.cargarCatalogo();

    // this.circuitos[0] = [];
    // this.circuitos[1] = [];
    // this.circuitos[2] = [];
    // this.circuitos[3] = [];

    this.selectedCircuito = this.circuitos[0];
  },
  methods: {
    moveItem() {
      if (screen.width < 400) {
        this.isOpen = !this.isOpen;
        this.isBlock = !this.isBlock;
      }
    },
    async selectAtleta() {
      this.atleta_seleccionado = this.atletas.find(
        (item) => item.id == this.idAtleta
      );

      const { data } = await getCircuitosUser(this.idAtleta);

      this.selectedCircuito = {
        exercises: [],
        position: 1,
      };

      this.fetchData = data[0];

      console.log(this.fetchData, "probando fetch");

      if (this.fetchData && this.fetchData.circuitos) {
        if (this.fetchData.circuitos.length > 0) {
          this.circuitos = this.fetchData.circuitos.map((item, index) => {
            return {
              ...item,

              position: index + 1,
              active: index == 0 ? true : false,
              exercises: !item.detalle_circuito
                ? []
                : item.detalle_circuito.map((e) => {
                    const { repeticion: repeticiones, cat_unidad_repeticion, nota } =
                      e;
                    return {
                      ...e,
                      ...this.listExercises.find(
                        (i) => i.id == e.cat_ejercicios
                      ),
                      id_detalle_circuito: e.id,
                      repeticiones,
                      cat_unidad_repeticion,
                      nota
                    };
                  }),
            };
          });

          this.listClone = this.circuitos[0].exercises;

          console.log(this.circuitos, "probando los circuitos");
        }
      } else {
        this.listClone = [];
        this.circuitos = [
          {
            position: 1,
            active: true,
            exercises: [],
          },
          {
            position: 2,
            active: false,
            exercises: [],
          },
          {
            position: 3,
            active: false,
            exercises: [],
          },
          {
            position: 4,
            active: false,
            exercises: [],
          },
        ];
      }
    },
    async saveCircuitos() {
      //console.log(this.circuitos, "probando los circuitos a guardar");

      this.loading = true;
      const circuitos = [];
      this.circuitos.filter((item) => {
        if (item.exercises.length > 0) {
          circuitos.push(item.exercises);
        }
      });
      const { co_sucursal, co_empresa } = this.atleta_seleccionado;
      const today = new Date();
      const numero_semana = getWeek(today);
      const rutina = {
        rutina: {
          numero_semana,
          nombre: `Rutina del ${today.getDate()}-${
            today.getMonth() + 1
          }-${today.getFullYear()}`,
          atleta: this.idAtleta,
          circuitos,
          co_empresa,
          co_sucursal,
        },
      };

      try {
        const res = await circuitosSave(JSON.stringify(rutina));
        if (res.success) {
          const { data } = res;
          this.notify.message = "Los circuitos se han guardado correctamente";
          this.notify.type = "success";
          this.notify.show = true;

          this.isUpdateRutina = true;

          this.circuitos = data.circuitos.map((item, index) => {
            return {
              ...item,

              position: index + 1,
              active: index == 0 ? true : false,
              exercises: item.detalle_circuito.map((e) => {
                const { repeticion: repeticiones, cat_unidad_repeticion, nota } = e;
                return {
                  ...e,
                  ...this.listExercises.find((i) => i.id == e.cat_ejercicios),
                  id_detalle_circuito: e.id,
                  repeticiones,
                  cat_unidad_repeticion,
                  nota,
                  show:false
                };
              }),
            };
          });

          this.listClone = this.circuitos[0].exercises;

          setTimeout(() => {
            this.notify.show = false;
          }, 2000);
        }
      } catch (error) {
        console.log(error);
      }

      this.loading = false;
    },
    async actualizarCircuitos() {
      this.loading = true;
      let circuitos = [];
      const [circuito] = this.circuitos;
      const { op_rutina = 56 } = circuito;
      const { co_sucursal, co_empresa } = this.atleta_seleccionado;
      circuitos = this.circuitos.map((item) => {
        return {
          id: item.id,
          genero: this.idAtleta,
          detalle_circuito: item.exercises,
          op_rutina,
          co_empresa,
          co_sucursal,
        };
      });
      // const [circuito] = circuitos;
      // const {op_rutina} = circuito;
      const senData = {
        circuitos,
      };

      try {
        const res = await updateRutina(op_rutina, JSON.stringify(senData));
        console.log(res, "probando respuesta update");
        if (res.success) {
          const { data } = res;
          this.notify.message =
            "Los circuitos se han actualizado correctamente";
          this.notify.type = "success";
          this.notify.show = true;

          this.circuitos = data.circuitos.map((item, index) => {
            return {
              ...item,

              position: index + 1,
              active: index == 0 ? true : false,
              exercises: item.detalle_circuito.map((e) => {
                const { repeticion: repeticiones, cat_unidad_repeticion, nota } = e;
                return {
                  ...e,
                  ...this.listExercises.find((i) => i.id == e.cat_ejercicios),
                  id_detalle_circuito: e.id,
                  repeticiones,
                  cat_unidad_repeticion,
                  nota,
                  show:false

                };
              }),
            };
          });
          this.selectedCircuito = this.circuitos[0];
          this.listClone = this.selectedCircuito.exercises;

          setTimeout(() => {
            this.notify.show = false;
          }, 2000);
        }
      } catch (error) {
        console.log(error);
      }

      this.loading = false;
    },
    async addRutina() {
      this.loadingRutina = true;
      this.dialogDisablerutina = false;
      const [circuito] = this.circuitos;
      const { op_rutina } = circuito;
      try {
        const res = await disableRutina(op_rutina ?? 0);
        if (res.success) {
          this.fetchData = null;
          this.isUpdateRutina = false;
          this.notify.message = "Nueva Rutina Agregada";
          this.notify.type = "success";
          this.notify.show = true;
          this.circuitos = [
            {
              position: 1,
              active: true,
              exercises: [],
            },
            {
              position: 2,
              active: false,
              exercises: [],
            },
            {
              position: 3,
              active: false,
              exercises: [],
            },
            {
              position: 4,
              active: false,
              exercises: [],
            },
          ];

          this.selectedCircuito = this.circuitos[0];
          this.listClone = [];

          setTimeout(() => {
            this.notify.show = false;
            this.notify.message =''
            this.notify.type =''
          }, 2000);
        }
      } catch (error) {}

      this.loadingRutina = false;
    },
    addInstructions() {
      this.circuitos[this.selectedCircuito.position - 1].exercises = [
        ...this.listClone,
      ];
    },
    selectUnidadRepeticion(row) {
      //Asignar el elemento a la lista
      console.log(row, "probando row");
      this.circuitos[this.selectedCircuito.position - 1].exercises.map(
        (item) => {
          if (item.id === row.id) {
            return {
              ...row,
            };
          } else {
            return {
              ...item,
            };
          }
        }
      );

      console.log(this.circuitos[0], "probando");
    },
    currentCircuito(item) {
      this.listClone = [];
      this.selectedCircuito = item;

      console.log(this.selectedCircuito, "select circuito");

      this.listClone = [...this.selectedCircuito.exercises];

      this.listaEjercicios = this.listaEjercicios.map((element) => {
        return {
          ...element,
          repeticiones: 0,
        };
      });

      //Cambiar valor a elemento activo
      this.circuitos = this.circuitos.map((elemnt) => {
        if (elemnt.position == item.position) {
          return {
            ...elemnt,
            active: true,
          };
        } else {
          return {
            ...elemnt,
            active: false,
          };
        }
      });
    },
    addNewCircuito() {
      const newCircuito = {
        position: this.circuitos.length + 1,
        exercises: [],
      };

      this.circuitos.push(newCircuito);
    },
    changeCircuito() {
      this.circuitos[this.selectedCircuito.position - 1].exercises = [
        ...this.listClone,
      ];
    },
    addNewItem(item) {
      console.log(this.listClone, "probando el list");
      if (this.listClone.length > 0) {
        const index = this.listClone.findIndex(
          (element) => element.id === item.id
        );

        if (index !== -1) {
          const item = this.listClone[index];
          item.repeticiones++;
        }
      }
    },
    beforeCircuito() {
      if (this.selectedCircuito.position == 1) {
        return;
      }

      this.listaEjercicios = this.listaEjercicios.map((element) => {
        return {
          ...element,
          repeticiones: 0,
        };
      });

      let current = this.selectedCircuito.position;
      current--;
      this.selectedCircuito = this.circuitos[current - 1];

      this.circuitos = this.circuitos.map((item, index) => {
        if (index + 1 === this.selectedCircuito.position) {
          return {
            ...item,
            active: true,
          };
        } else {
          return {
            ...item,
            active: false,
          };
        }
      });
      this.listClone = [...this.selectedCircuito.exercises];
      this.compnentRenderKey++;
    },
    afterCircuito() {
      if (
        this.selectedCircuito.position ==
        this.circuitos[this.circuitos.length - 1].position
      ) {
        return;
      }

      this.listaEjercicios = this.listaEjercicios.map((element) => {
        return {
          ...element,
          repeticiones: 0,
        };
      });

      let current = this.selectedCircuito.position;
      current++;
      this.selectedCircuito = this.circuitos[current - 1];

      this.circuitos = this.circuitos.map((item, index) => {
        if (index + 1 === this.selectedCircuito.position) {
          return {
            ...item,
            active: true,
          };
        } else {
          return {
            ...item,
            active: false,
          };
        }
      });

      this.selectedCircuito.active = true;
      this.listClone = [...this.selectedCircuito.exercises];

      this.compnentRenderKey++;
    },
    appToggle: function () {
      this.isOpen = !this.isOpen;
      this.isBlock = !this.isBlock;
    },
    overlayApp: function () {
      this.isOpen = !this.isOpen;
      this.isBlock = !this.isBlock;
    },
    forceForRerender() {
      this.compnentRenderKey += 1;
    },
    async iniciarCarga() {
      await this.cargarCategorias();
    },
    async cargarCategorias() {
      this.categorias = await this.getAsync(`${URL_API.CATEGORIAS}`);
    },
    async cargarCatalogo() {
      this.loadingEjercicio = true;
      //setTimeout(async () => {
      this.listaEjercicios = await this.getAsync(
        `${URL_API.EJERCICIOS}/${this.usuarioSesion.co_sucursal}`
      );
      this.listaEjerciciosRespaldo = this.listaEjercicios;

      this.loadingEjercicio = false;

      this.listaUnidadRepeticion = await this.getAsync(
        `${URL_API.CATALOGOS}/unidad_repeticion`
      );

      await this.cargarCategorias();

      //cargar la lista de atletas

      this.atletas = await this.getAsync(
        `${URL_API.USUARIOS}/${this.usuarioSesion.co_sucursal}/${this.usuarioSesion.id_empresa}`
      );

      //}, 700)
    },
    verDetalleEjercicio(row) {
      this.ejercicioSeleccionado = row;

      console.log(row, "probando row selected");
    },
    increment(row) {
      let numRepeticiones = row.repeticiones;
      numRepeticiones++;

      this.listClone = this.listClone.map((item) => {
        if (item.id === row.id) {
          return {
            ...row,
            repeticiones: numRepeticiones,
          };
        } else {
          return {
            ...item,
          };
        }
      });

      this.circuitos[this.selectedCircuito.position - 1].exercises = [
        ...this.listClone,
      ];
    },
    decrement(row) {
      if (row.repeticiones <= 1) {
        return;
      }
      //row.repeticiones--;
      let numRepeticiones = row.repeticiones;
      numRepeticiones--;

      this.listClone = this.listClone.map((item) => {
        if (item.id === row.id) {
          return {
            ...row,
            repeticiones: numRepeticiones,
          };
        } else {
          return {
            ...item,
          };
        }
      });

      this.circuitos[this.selectedCircuito.position - 1].exercises = [
        ...this.listClone,
      ];
    },
    filtrarCategoria(categoria) {
      this.listaEjercicios = this.listaEjerciciosRespaldo.filter(
        (e) => e.categoria.toUpperCase() == categoria.toUpperCase()
      );
    },
  },
  computed: {
    listEmpty() {
      return this.listClone.length === 0;
    },
    listExercises() {
      let exercises = [];

      if (this.criterioBuscar !== "") {
        exercises = this.listaEjercicios.filter((item) => {
          return item.nombre
            .toLowerCase()
            .includes(this.criterioBuscar.toLowerCase());
        });
      } else {
        exercises = this.listaEjercicios;
      }

      return exercises.map((item) => {
        return {
          ...item,
          repeticiones: 0,
        };
      });
    },
    existRutina() {
      return this.fetchData;
    },
  },
};
</script>
<style lang="scss">
.app-content-wrapper {
  position: relative;
  display: flex;
  overflow: hidden;
  height: calc(100vh - 200px);

  .app-overlay {
    position: absolute;
    content: "";
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

.btnCursor {
  cursor: pointer;
}

.custom-scroll.ps {
  border: 1px dashed gray; /* Estilo del borde */
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  text-align: center;
}

.v-alert {
  display: block;
  font-size: 16px;
  padding: 0px;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
</style>
