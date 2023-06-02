<template>
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
          Nuevo
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
                      max-height="200"
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
                  >
                    <template v-slot:selection="{ index, text }">
                      <small v-if="index < 2" style="color: #196464;">
                        {{ text }}
                      </small>
                    </template>
                  </v-file-input>
                </v-card>

                <v-card-title>
                  <v-text-field
                    v-model="nombre"
                    :error="errorNombre"
                    :error-messages="errorMessageNombre"
                    label="Nombre *"
                    required
                  ></v-text-field>
                </v-card-title>

                <v-card-subtitle>
                  <v-text-field
                    v-model="descripcion"
                    label="Descripción"
                  ></v-text-field>
                </v-card-subtitle>
                <!--
                <v-card-text>
                  <v-combobox dense filled outlined></v-combobox>
                </v-card-text>
                -->
                <v-card-text>
                  <v-row align="center" justify="space-around">
                    <v-switch
                      v-model="ex11"
                      label="BASIC"
                      color="red"
                      value="red"
                      hide-details
                    ></v-switch>
                    <v-switch
                      v-model="ex11"
                      label="INTERMEDIO"
                      color="red darken-3"
                      value="red darken-3"
                      hide-details
                    ></v-switch>
                    <v-switch
                      v-model="ex11"
                      label="AVANZADO"
                      color="red"
                      value="red"
                      hide-details
                    ></v-switch>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-container>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn @click="dialog.value = false">Cerrar</v-btn>
            <v-btn color="primary" @click="subir">Guardar</v-btn>
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
    
    <v-row>
      <v-col cols="12" md="6" lg="3" sm="6" v-for="row in lista" :key="row.id">
        <base-card class="overflow-hidden">
          <v-img cover max-height="240" min-height="240" :src="row.url" />
          <v-card-actions class="pa-4 d-flex justify-space-between">
            <v-card-subtitle class="pa-0">{{ row.nombre }}</v-card-subtitle>
            <div class="d-flex align-center" v-if="row.count_like > 0">
              <v-icon class="body-1 mr-1">mdi-cards-heart</v-icon>
              <v-card-subtitle class="pa-0 mr-2">0k</v-card-subtitle>
              <!--<v-icon class="body-1 mr-1">mdi-comment-text</v-icon>
              <v-card-subtitle class="pa-0">900</v-card-subtitle>-->
            </div>
          </v-card-actions>
        </base-card>
      </v-col>
    </v-row>
  </v-row>
</template>
<script>
import lmCard from '@/components/card/LmsCard'
import { welcomeProgressChart, studyChart } from '@/data/learningManagement'
import { getUsuarioSesion } from '../../../helper/Sesion'
import { operacionesApi } from '../../../helper/OperacionesApi'
import URL_API from '../../../helper/Urls'

export default {
  name: 'CatalogoEjercicios',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Ejercicios',
  },
  components: {
    lmCard,
  },
  mixins: [operacionesApi],
  data() {
    return {
      usuarioSesion: {},
      dialog: false,
      currentFile: undefined,

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
      urlPreviewImage: null,
      loading: false,
    }
  },
  mounted() {
    console.log('##### pagina bienvenido ####')
    this.usuarioSesion = getUsuarioSesion()
    this.cargarCatalogo()
  },
  methods: {
    iniciarCarga() {
      this.urlPreviewImage = null
      this.currentFile = undefined
      this.message = ''
      this.errorFileInput = false
      this.errorNombre = false
      this.errorMessageNombre = ''
      this.errorMessageFileInput = ''
      this.nombre = ''
      this.descripcion = ''
    },
    async cargarCatalogo() {
      this.loading = true

      this.lista = await this.getAsync(
        `${URL_API.EJERCICIOS}/${this.usuarioSesion.co_sucursal}`,
      )

      this.loading = true
    },
    selectFile(file) {
      console.log(file)
      this.progress = 0
      this.currentFile = file
      this.urlPreviewImage = URL.createObjectURL(this.currentFile)
    },

    async subir() {
      console.log('@subir')

      if (!this.currentFile) {
        this.errorFileInput = true
        this.errorMessageFileInput = ['Selecciona la imagen']
      }

      if (!this.nombre) {
        console.log('error nomrbe')
        this.errorNombre = true
        this.errorMessajeNombre = ['Escribe el nombre']
      }

      if (this.errorFileInput || this.errorNombre) {
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
        data.append('cat_categoria', 1)
        data.append('nombre', this.nombre)
        data.append('descripcion', this.descripcion)

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
  },
}
</script>
