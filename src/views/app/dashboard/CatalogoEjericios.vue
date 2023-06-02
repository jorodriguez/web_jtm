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
        <v-btn color="primary" v-bind="attrs" v-on="on">
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

                <v-file-input
                  show-size
                  label="Imagen de Ejercicio"
                  accept="image/*"
                  @change="selectFile"
                  v-if="!currentFile"
                ></v-file-input>
<!--https://cdn-icons-png.flaticon.com/512/1206/1206451.png?w=740&t=st=1685665297~exp=1685665897~hmac=896c6e31bc0520ef6ff64fb679d4fb25c4cc12abf386c0bb707dda62a85803b3-->
                <v-img
                  v-else
                  :src="currentFile.file.name"
                  max-height="250"
                  contain
                ></v-img>

                {{currentFile}}

                <v-card-title>
                  <v-text-field label="Nombre *" required></v-text-field>
                </v-card-title>

                <v-card-subtitle>
                  <v-text-field label="Descripción" required></v-text-field>
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
            <v-btn color="primary" @click="dialog.value = false">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>

    <!---<v-row align="center">
      <v-col cols="6">
        <v-file-input
          show-size
          label="Imagen de Ejercicio"
          accept="image/*"
          @change="selectFile"
        ></v-file-input>
      </v-col>

      <v-col cols="4" class="pl-2">
        <v-btn color="success" dark small @click="subir">
          Guardar
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-alert v-if="message" border="left" color="blue-grey" dark>
      {{ message }}
    </v-alert>
    -->

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

      <v-col cols="12" md="6" lg="3" sm="6">
        <base-card class="overflow-hidden">
          <v-img
            cover
            src="https://paper.dropbox.com/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_C2538D8D81318EB60083B45F05FDA7345279615B3E4F3BC2BA6C2C37A66B7E8C_1681270890476_EscaleraDesdeCrawl.gif&hmac=VFGTv0FCrHMcnXcKh09I%2FNzNBrHQKiTFo%2BPPNIQVcmI%3D"
          />
          <v-card-actions class="pa-4 d-flex justify-space-between">
            <div class="d-flex align-center">
              <v-icon class="body-1 mr-1">mdi-cards-heart</v-icon>
              <v-card-subtitle class="pa-0 mr-2">2.3k</v-card-subtitle>
              <!--<v-icon class="body-1 mr-1">mdi-comment-text</v-icon>
              <v-card-subtitle class="pa-0">900</v-card-subtitle>-->
            </div>
            <v-card-subtitle class="pa-0">Escalera desde crawl</v-card-subtitle>
          </v-card-actions>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <base-card class="overflow-hidden">
          <v-img
            cover
            max-height="150"
            max-width="250"
            src="https://paper.dropbox.com/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_C2538D8D81318EB60083B45F05FDA7345279615B3E4F3BC2BA6C2C37A66B7E8C_1681270887998_MountainClimbing.gif&hmac=1Hy1agZWgOzhceY%2FJCHFl%2BfdBUJBC3twDD2Jt7fhEQU%3D&width=484"
          />
          <v-card-actions class="pa-4 d-flex justify-space-between">
            <div class="d-flex align-center">
              <v-icon class="body-1 mr-1">mdi-cards-heart</v-icon>
              <v-card-subtitle class="pa-0 mr-2">0k</v-card-subtitle>
              <!--<v-icon class="body-1 mr-1">mdi-comment-text</v-icon>
              <v-card-subtitle class="pa-0">900</v-card-subtitle>-->
            </div>
            <v-card-subtitle class="pa-0">Mountain Climbing</v-card-subtitle>
          </v-card-actions>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <base-card class="overflow-hidden">
          <v-img
            cover
            max-height="150"
            max-width="250"
            src="https://paper.dropbox.com/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_C2538D8D81318EB60083B45F05FDA7345279615B3E4F3BC2BA6C2C37A66B7E8C_1681270887517_Yogi.jpg&hmac=XuZRH%2F3BZ3NNOZ9Vl9g1xSGpTPEUeWwWe%2FyfA%2Fjj6b8%3D"
          />
          <v-card-actions class="pa-4 d-flex justify-space-between">
            <div class="d-flex align-center">
              <v-icon class="body-1 mr-1">mdi-cards-heart</v-icon>
              <v-card-subtitle class="pa-0 mr-2">0k</v-card-subtitle>
            </div>
            <v-card-subtitle class="pa-0">Yogui</v-card-subtitle>
          </v-card-actions>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <base-card class="overflow-hidden">
        <!-- https://paper.dropbox.com/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_C2538D8D81318EB60083B45F05FDA7345279615B3E4F3BC2BA6C2C37A66B7E8C_1681270887608_MedioBurpee.gif&hmac=Zl8%2FeomzaFG0OdJVRPHphL%2FjtJQVmP8qXMoXgzONtVg%3D&width=484-->
          <v-img
            cover
            max-height="150"
            max-width="250"
            :src="currentFile"
          />
          <v-card-actions class="pa-4 d-flex justify-space-between">
            <div class="d-flex align-center">
              <v-icon class="body-1 mr-1">mdi-cards-heart</v-icon>
              <v-card-subtitle class="pa-0 mr-2">0k</v-card-subtitle>
            </div>
            <v-card-subtitle class="pa-0">Medio Burpee</v-card-subtitle>
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
import URL from '../../../helper/Urls'

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
      progress: 0,
      message: '',
      fileInfos: [],
    }
  },
  mounted() {
    console.log('##### pagina bienvenido ####')
    this.usuarioSesion = getUsuarioSesion()
  },
  methods: {
    selectFile(file) {
        console.log(file)
      this.progress = 0
      this.currentFile = file
    },
    upload() {
      if (!this.currentFile) {
        this.message = 'Please select a file!'
        return
      }
    },
    async subir() {
      if (!this.currentFile) {
        this.message = 'Please select a file!'
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
        data.append('nombre', 'ejerciico 1')
        data.append('descripcion', 'descripcion ejejcjcjcj')

        data.append('genero', this.usuarioSesion.id)

        this.loadingUpload = true

        const result = await this.postFile(URL.EJERCICIOS, data)

        console.log(result)

        this.loadingUpload = false
      } catch (e) {
        console.log('ERROR al subir ' + e)
      }
    },
  },
}
</script>
