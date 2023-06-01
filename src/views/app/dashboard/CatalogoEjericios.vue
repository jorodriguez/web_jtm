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
          <v-img cover src="https://paper.dropbox.com/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_C2538D8D81318EB60083B45F05FDA7345279615B3E4F3BC2BA6C2C37A66B7E8C_1681270890476_EscaleraDesdeCrawl.gif&hmac=VFGTv0FCrHMcnXcKh09I%2FNzNBrHQKiTFo%2BPPNIQVcmI%3D" />
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
          <v-img cover 
                  max-height="150"
                  max-width="250" 
                  src="https://paper.dropbox.com/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_C2538D8D81318EB60083B45F05FDA7345279615B3E4F3BC2BA6C2C37A66B7E8C_1681270887998_MountainClimbing.gif&hmac=1Hy1agZWgOzhceY%2FJCHFl%2BfdBUJBC3twDD2Jt7fhEQU%3D&width=484" />
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
          <v-img cover max-height="150"
                  max-width="250"  src="https://paper.dropbox.com/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_C2538D8D81318EB60083B45F05FDA7345279615B3E4F3BC2BA6C2C37A66B7E8C_1681270887517_Yogi.jpg&hmac=XuZRH%2F3BZ3NNOZ9Vl9g1xSGpTPEUeWwWe%2FyfA%2Fjj6b8%3D" />
          <v-card-actions class="pa-4 d-flex justify-space-between">
            <div class="d-flex align-center">
              <v-icon class="body-1 mr-1">mdi-cards-heart</v-icon>
              <v-card-subtitle class="pa-0 mr-2">0k</v-card-subtitle>
              
            </div>
            <v-card-subtitle class="pa-0 ">Yogui</v-card-subtitle>
          </v-card-actions>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <base-card class="overflow-hidden">
          <v-img cover max-height="150"
                  max-width="250"  src="https://paper.dropbox.com/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_C2538D8D81318EB60083B45F05FDA7345279615B3E4F3BC2BA6C2C37A66B7E8C_1681270887608_MedioBurpee.gif&hmac=Zl8%2FeomzaFG0OdJVRPHphL%2FjtJQVmP8qXMoXgzONtVg%3D&width=484" />
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
import lmCard from "@/components/card/LmsCard";
import { welcomeProgressChart, studyChart } from "@/data/learningManagement";
import { getUsuarioSesion } from '../../../helper/Sesion';

export default {
  name: "LearningManagement",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Learning Management",
  },
  components: {
    lmCard,
  },
  data() {
    return {
      usuarioSesion:{},
      welcomeProgressChart,
      studyChart,
      valueDeterminate: 50,
      valueDeterminate2: 80,
      desserts: [
        {
          logo: require("@/assets/images/Angular_Icon.png"),
          started: "20 May, 2020",
          course: "Angular Beyond The Basics",
          progress: 50,
        },
        {
          logo: require("@/assets/images/react.png"),
          started: "20 May, 2020",
          course: "React Development Course",
          progress: 30,
        },
        {
          logo: require("@/assets/images/webpack.png"),
          started: "20 May, 2020",
          course: "Webpack For Busy Developer",
          progress: 50,
        },
        {
          logo: require("@/assets/images/Sass_icon.png"),
          started: "20 May, 2020",
          course: "Bootstrap For Everyone",
          progress: 70,
        },
        {
          logo: require("@/assets/images/bootstrap-logo.png"),
          started: "20 May, 2020",
          course: "React Development Course",
          progress: 20,
        },
      ],
      items: [
        {
          icon: "mdi-view-column",
          iconClass: "dark--text text--lighten-4 grey lighten-5",
          title: "Data structure test",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-book-open-variant",
          iconClass: "dark--text text--lighten-4 grey lighten-5",
          title: "Design Pattern Test",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-gamepad",
          iconClass: "dark--text text--lighten-4 grey lighten-5",
          title: "Algorithm Test",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-calendar-text",
          iconClass: "dark--text text--lighten-4 grey lighten-5",
          title: "Spanish 201",
          subtitle: "23 Dec 2020",
        },
      ],
      itemsTwo: [
        {
          icon: "mdi-web",
          iconClass: "dark--text text--lighten-4 grey lighten-5",
          title: "Create Simple Wrbsite",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-view-list-outline",
          iconClass: "dark--text text--lighten-4 grey lighten-5",
          title: "Simple Todo App",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-apps-box",
          iconClass: "dark--text text--lighten-4 grey lighten-5",
          title: "Invoice App",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-order-bool-ascending-variant",
          iconClass: "dark--text text--lighten-4 grey lighten-5",
          title: "Order management app",
          subtitle: "23 Dec 2020",
        },
      ],
    };
  },
  mounted() {
        console.log("##### pagina bienvenido ####");
            this.usuarioSesion = getUsuarioSesion();    
  },
};
</script>
