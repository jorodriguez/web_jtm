<template>
  <v-row>
    <!--<v-col cols="12" md="12" lg="8">
      <v-row>
        <v-col cols="12">
          <base-card class="px-4 pt-4">
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-card-title class="pb-0 mb-2"
                  >Hola {{usuarioSesion.nombre}} ¡</v-card-title
                >
                <v-card-text class="pb-0">
                  <p class="body-2">
                    Tu progreso semanal
                    <span class="font-weight-bold">76%</span>
                    
                  </p>
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-card-text class="pa-0">
                  <apexchart
                    type="radialBar"
                    :options="welcomeProgressChart.chartOptions"
                    :series="welcomeProgressChart.series"
                    height="250"
                  />
                </v-card-text>
              </v-col>
            </v-row>
          </base-card>
        </v-col>             
      </v-row>
    </v-col>-->

    <!--<v-col cols="12" md="12" lg="12" class="mt-1">
      <base-card>
        <v-card-text class>    
         <div class="mb-1">
            <h6 class="caption text--disabled tracking-widest">INSIGNIAS JTM</h6>
            <div class="d-flex align-center">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-avatar width="30" min-width="30" height="30">
                    <img
                      v-bind="attrs"
                      width="30"
                      height="30"
                      src="@/assets/images/illustrations/badge-1.svg"
                      v-on="on"
                    />
                  </v-avatar>
                </template>
                <span>Completed First Course</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-avatar width="30" min-width="30" height="30">
                    <v-img
                      v-bind="attrs"
                      width="30"
                      height="30"
                      src="@/assets/images/illustrations/badge-2.svg"
                      v-on="on"
                    />
                  </v-avatar>
                </template>
                <span>Won a challenge</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-avatar width="30" min-width="30" height="30">
                    <img
                      v-bind="attrs"
                      width="30"
                      height="30"
                      src="@/assets/images/illustrations/badge-3.svg"
                      v-on="on"
                    />
                  </v-avatar>
                </template>
                <span>Won a competition</span>
              </v-tooltip>
            </div>
          </div>         
        </v-card-text>
      </base-card>
    </v-col>
-->

     <v-row   align="center">
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



    <!-- catalogo -->
    <v-row>

  

      <v-col cols="12">
        <div class="d-flex pr-1 justify-space-between">
          <div class="d-flex align-center">
            <!--<h5 class="mb-0 mr-2 font-weight-medium">Ejercicios</h5>            -->
            <v-btn color="info">
              <v-icon class="caption">mdi-plus</v-icon>
              Agregar
            </v-btn>
          </div>
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
          <v-img
            cover
            max-height="150"
            max-width="250"
            src="https://paper.dropbox.com/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_C2538D8D81318EB60083B45F05FDA7345279615B3E4F3BC2BA6C2C37A66B7E8C_1681270887608_MedioBurpee.gif&hmac=Zl8%2FeomzaFG0OdJVRPHphL%2FjtJQVmP8qXMoXgzONtVg%3D&width=484"
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

      console.log(`nombre ${this.currentFile.name}`);
      console.log(`size ${this.currentFile.size}`);
      console.log(`type ${this.currentFile.type}`);
      console.log(`type ${this.currentFile.buffer}`);

        let data = new FormData()

        data.append('name', 'image')
        data.append('image', this.currentFile)
        data.append('co_sucursal', this.usuarioSesion.co_sucursal);
        data.append('co_empresa', this.usuarioSesion.id_empresa);
        data.append('cat_categoria', 1);
        data.append('genero', this.usuarioSesion.id)

        this.loadingUpload = true

        const result = await  this.postFile(URL.EJERCICIOS, data)

        console.log(result);

        this.loadingUpload = false
      } catch (e) {
        console.log('ERROR al subir ' + e)
      }
    },
  },
}
</script>
