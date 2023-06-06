<template>
  <v-container>
    <v-row>
      <!-- Alta de ejercicio -->
      <v-dialog
        persistent
        v-model="dialog"
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="iniciarCarga" color="primary" v-bind="attrs" v-on="on">
            <v-icon class="caption">mdi-plus</v-icon>
            Agregar
          </v-btn>
        </template>

        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="primary" dark>Agregar nuevo ejercicio</v-toolbar>
            <v-card-text>
              <v-container>
                <v-card class="mx-auto" elevation="0">
                  <v-card class="mx-auto pt-2" elevation="0" color="#D6E5E5">
                    <label for="fileUpload">
                      <v-img
                        :src="
                          urlPreviewImage
                            ? urlPreviewImage
                            : 'https://res.cloudinary.com/dyw8zqyyt/image/upload/v1685734502/jtm-static/photo_1_ildswz.png'
                        "
                        max-height="150"
                        :style="`${operacion == 'EDIT' ? 'opacity:0.4' : ''}`"
                        contain
                      ></v-img>
                    </label>

                    <v-file-input
                      id="fileUpload"
                      show-size
                      accept="image/*"
                      @change="selectFile"
                      truncate-length="50"
                      prepend-icon="mdi-image-area"
                      hide-details=""
                      required
                      :error="errorFileInput"
                      :error-messages="errorMessageFileInput"
                      :disabled="operacion == 'EDIT'"
                    >
                      <template v-slot:selection="{ index, text }">
                        <small v-if="index < 2" style="color: #196464;">
                          {{ text }}
                        </small>
                      </template>
                    </v-file-input>
                  </v-card>

                  <v-card-text>
                    <v-row>
                      <v-combobox
                        v-model="cat_categoria"
                        :items="categorias"
                        :search-input.sync="search"
                        hide-selected
                        label="Categoria *"
                        small-chips
                        item-value="id"
                        item-text="nombre"
                        :error="errorCategoria"
                        :error-messages="errorMessageCategoria"
                        required
                      >
                        <template v-slot:no-data>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>
                                No hay resultados "
                                <strong>{{ search }}</strong>
                                "
                              </v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                      </v-combobox>
                    </v-row>
                    <v-row>
                      <v-text-field
                        v-model="nombre"
                        :error="errorNombre"
                        :error-messages="errorMessageNombre"
                        label="Nombre *"
                        required
                      ></v-text-field>
                    </v-row>
                    <v-row>
                      <v-text-field
                        v-model="descripcion"
                        label="Descripción"
                      ></v-text-field>
                    </v-row>
                    <v-row align="center" justify="space-around">
                      <v-switch
                        v-model="basico"
                        label="BASIC"
                        color="red"
                        hide-details
                      ></v-switch>
                      <v-switch
                        v-model="intermedio"
                        label="INTERMEDIO"
                        color="red darken-3"
                        hide-details
                      ></v-switch>
                      <v-switch
                        v-model="avanzado"
                        label="AVANZADO"
                        color="red"
                        hide-details
                      ></v-switch>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-container>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn @click="dialog.value = false">Cerrar</v-btn>

              <v-btn
                v-if="operacion == 'INSERT'"
                color="primary"
                @click="subir"
                :loading="loadingUpload"
              >
                Guardar
              </v-btn>

              <v-btn
                v-if="operacion == 'EDIT'"
                color="info"
                @click="modificar"
                :loading="loadingUpload"
              >
                Modificar
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

      <!-- catalogo -->
      <v-row>
        <v-col cols="12">
          <div class="d-flex pr-1 justify-space-between">
            <div class="d-flex align-center"></div>
            <div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-row>
    <v-text-field v-model="criterioBuscar"  v-on:keyup.enter="buscarPorNombre()" placeholder="Buscar">
      <v-icon slot="append" color="grey">
        mdi-magnify
      </v-icon>
    </v-text-field>
    <v-row></v-row>

    <v-container v-if="loading">
      <v-row>
        <v-col cols="12" md="6" lg="3" sm="6">
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="12" md="6" lg="3" sm="6">
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="12" md="6" lg="3" sm="6">
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="12" md="6" lg="3" sm="6">
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>

    <v-row v-else>
      <template v-for="(row, i) in lista">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-col cols="12" md="6" lg="3" sm="6" :key="i">
            <base-card class="overflow-hidden" color="white">
              <v-card-text class="pt-0 pl-2 pb-0 d-flex justify-center">
                <small class="grey--text">{{ row.categoria }}</small>
              </v-card-text>
              <v-img cover max-height="240" min-height="240" :src="row.url" />
              <v-divider class="mx-4" color="#91D8DF"></v-divider>

              <v-card-actions class="pa-3 d-flex justify-space-between">
                <v-card-subtitle
                  class="pa-0"
                  @click="() => iniciarModificar(row)"
                >
                  {{ row.nombre }}
                </v-card-subtitle>
                <div class="d-flex align-center">
                  <v-icon
                    @click="() => iniciarEliminar(row)"
                    :class="`body-1 mr-1`"
                    :color="hover ? 'red' : ''"
                  >
                    mdi-delete
                  </v-icon>
                  <!--<v-card-subtitle class="pa-0 mr-2" >0k</v-card-subtitle>-->
                </div>
              </v-card-actions>
            </base-card>
          </v-col>
        </v-hover>
      </template>
    </v-row>

    <Confirm
      :dialog="dialogEliminar"
      :maxWidth="350"
      :title="`Eliminar ${seleccion ? seleccion.nombre : ''}`"
      text="`¿Esta seguro de elimnar el ejercicio?`"
      :onClickOk="confirmarEliminar"
      :onClickClose="() => (dialogEliminar = false)"
      color="red"
    />
  </v-container>
</template>
<script>
import lmCard from '@/components/card/LmsCard'
import Confirm from '@/components/base/Confirm'
import { welcomeProgressChart, studyChart } from '@/data/learningManagement'
import { getUsuarioSesion } from '../../../helper/Sesion'
import { operacionesApi } from '../../../helper/OperacionesApi'
import URL_API from '../../../helper/Urls'

export default {
  name: 'CatalogoEjercicios',
  metaInfo: {
    title: 'Ejercicios',
  },
  components: {
    lmCard,
    Confirm,
  },
  mixins: [operacionesApi],
  data() {
    return {
      usuarioSesion: {},
      dialog: false,
      dialogEliminar: false,
      currentFile: undefined,
      icons: ['mdi-rewind', 'mdi-pencil'],
      seleccion: undefined,
      cat_categoria: null,
      nombre: '',
      descripcion: '',
      errorNombre: false,
      errorMessageNombre: [],
      errorFileInput: false,
      errorMessageFileInput: [],
      progress: 0,
      message: '',
      fileInfos: [],
      lista: [],
      listaRespaldo:[],
      categorias: [],
      urlPreviewImage: null,
      loading: false,
      loadingUpload: false,
      search: null,
      operacion: 'INSERT',
      criterioBuscar: '',
    }
  },
  mounted() {
    console.log('##### pagina bienvenido ####')
    this.usuarioSesion = getUsuarioSesion()
    this.cargarCatalogo()
  },
  methods: {
    async iniciarCarga() {
      this.urlPreviewImage = null
      this.currentFile = undefined
      this.message = ''
      this.errorFileInput = false
      this.errorCategoria = false
      this.errorMessageCategoria = ''
      this.errorNombre = false
      this.errorMessageNombre = ''
      this.errorMessageFileInput = ''
      this.nombre = ''
      this.cat_categoria = null
      this.descripcion = ''
      this.basico = false
      this.intermedio = false
      this.avanzado = false
      this.operacion = 'INSERT'

      await this.cargarCategorias()
    },
    async cargarCategorias() {
      this.categorias = await this.getAsync(`${URL_API.CATEGORIAS}`)
    },
    async cargarCatalogo() {
      this.loading = true

      setTimeout(async () => {
        this.lista = await this.getAsync(
          `${URL_API.EJERCICIOS}/${this.usuarioSesion.co_sucursal}`,
        )
        this.listaRespaldo = this.lista;
        this.loading = false
      }, 700)
    },

    selectFile(file) {
      console.log(file)
      this.progress = 0
      this.currentFile = file
      this.urlPreviewImage = URL.createObjectURL(this.currentFile)
    },
    validar() {
      if (!this.cat_categoria) {
        this.errorCategoria = true
        this.errorMessajeCategoria = ['Selecciona una categoria']
      }

      if (!this.nombre) {
        this.errorNombre = true
        this.errorMessajeNombre = ['Escribe el nombre']
      }

      return this.errorFileInput || this.errorNombre || this.errorCategoria
    },
    async subir() {
      console.log('@subir')

      if (!this.currentFile) {
        this.errorFileInput = true
        this.errorMessageFileInput = ['Selecciona la imagen']
      }

      if (this.validar()) {
        return
      }

      try {
        console.log(`nombre ${this.currentFile.name}`)
        console.log(`size ${this.currentFile.size}`)
        console.log(`type ${this.currentFile.type}`)
        console.log(`type ${this.currentFile.buffer}`)

        let data = new FormData()

        data.append('image', this.currentFile)
        data.append('co_sucursal', this.usuarioSesion.co_sucursal)
        data.append('co_empresa', this.usuarioSesion.id_empresa)
        data.append('cat_categoria', this.cat_categoria.id)
        data.append('nombre', this.nombre)
        data.append('descripcion', this.descripcion)
        data.append('basico', this.basico)
        data.append('intermedio', this.intermedio)
        data.append('avanzado', this.avanzado)

        data.append('genero', this.usuarioSesion.id)

        this.loadingUpload = true

        const result = await this.postFile(URL_API.EJERCICIOS, data)

        console.log(result)

        this.loadingUpload = false

        this.dialog = false

        await this.cargarCatalogo()
      } catch (e) {
        console.log('ERROR al subir ' + e)
      }
    },
    async iniciarModificar(item) {
      this.seleccion = item

      await this.cargarCategorias()

      this.urlPreviewImage = this.seleccion.url

      this.cat_categoria = {
        id: this.seleccion.cat_categoria,
        nombre: this.seleccion.categoria,
      }

      this.nombre = this.seleccion.nombre

      this.descripcion = this.seleccion.descripcion

      this.basico = this.seleccion.basico

      this.intermedio = this.seleccion.intermedio

      this.avanzado = this.seleccion.avanzado

      this.operacion = 'EDIT'

      this.dialog = true
    },
    async modificar() {
      if (this.validar()) {
        return
      }

      this.loadingUpload = true

      const result = await this.putAsync(
        `${URL_API.EJERCICIOS}/${this.seleccion.uuid}`,
        {
          cat_categoria: this.cat_categoria.id,
          nombre: this.nombre,
          descripcion: this.descripcion,
          basico: this.basico,
          intermedio: this.intermedio,
          avanzado: this.avanzado,
          genero: this.usuarioSesion.id,
        },
      )

      this.loadingUpload = false

      this.dialog = false

      await this.cargarCatalogo()
    },
    iniciarEliminar(item) {
      this.seleccion = item

      this.dialogEliminar = true
    },
    async confirmarEliminar() {
      console.log('@confirmarEliminar ')

      console.log(`${URL_API.EJERCICIOS}/${this.seleccion.uuid}`)

      const result = await this.removeAsync(
        `${URL_API.EJERCICIOS}/${this.seleccion.uuid}`,
        { genero: this.usuarioSesion.id },
      )

      this.dialogEliminar = false

      await this.cargarCatalogo()
    },
    buscarPorNombre() {     
      console.log("buscar "+this.criterioBuscar); 
      if (this.criterioBuscar == '') {
        this.lista = this.listaRespaldo;
      } else {

        this.lista = this.listaRespaldo
          .filter(
            e =>
              e.nombre.toUpperCase().includes(this.criterioBuscar.toUpperCase())
              || e.categoria.toUpperCase().includes(this.criterioBuscar.toUpperCase())
          );

      }
    },
  },
}
</script>
<style scoped>
/*.v-card {
  transition: opacity 0.1s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}
*/
.show-btns {
  color: '#296678' !important;
}
</style>
