<template>
    <v-row>
        <v-col cols="12" lg="9">
            <v-row>             
          
                
                
                <v-col cols="12">
                    <base-card>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left"></th>
                                        <th class="text-left">Posted at</th>
                                        <th class="text-left">Applicants</th>
                                        <th class="text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(item, index) in desserts"
                                        :key="index"
                                    >
                                        <td
                                            class="font-weight-medium border-transparent text-no-wrap"
                                        >
                                            {{ item.job }}
                                        </td>
                                        <td
                                            class="border-transparent text-no-wrap"
                                        >
                                            {{ item.posted }}
                                        </td>
                                        <td class="border-transparent">
                                            <avatar-group-card></avatar-group-card>
                                        </td>
                                        <td class="border-transparent">
                                            <v-menu left bottom>
                                                <template
                                                    v-slot:activator="{on}"
                                                >
                                                    <v-btn icon color v-on="on">
                                                        <v-icon class
                                                            >mdi-dots-horizontal</v-icon
                                                        >
                                                    </v-btn>
                                                </template>

                                                <v-list>
                                                    <v-list-item>
                                                        <v-icon
                                                            class="body-1 mr-2"
                                                            >mdi-briefcase-account</v-icon
                                                        >
                                                        <v-list-item-title
                                                            >Month</v-list-item-title
                                                        >
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-icon
                                                            class="body-1 mr-2"
                                                            >mdi-account-multiple</v-icon
                                                        >
                                                        <v-list-item-title
                                                            >Week</v-list-item-title
                                                        >
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-icon
                                                            class="body-1 mr-2"
                                                            >mdi-account-plus</v-icon
                                                        >
                                                        <v-list-item-title
                                                            >Invite
                                                            Applicant</v-list-item-title
                                                        >
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </base-card>
                </v-col>
            
            </v-row>
        </v-col>
        <v-col cols="12" lg="3" class="mt-3">
            <base-card>
                <v-row>
                  
                    <v-col cols="12" class="mb-0">
                        <v-card-subtitle class="pt-0">
                            <h6 class="caption tracking-widest">
                                Esta semana
                            </h6>
                        </v-card-subtitle>
                        <v-card-text class="pb-0">
                            <v-sheet
                                color="info"
                                class="pr-2 d-flex justify-space-between bg-info rounded pa-4"
                            >
                                <div class="flex-1">
                                    <div
                                        class="card-title white--text mb-xs text-15 mb-1"
                                    >
                                        Visoria Sabado
                                    </div>
                                    <p class="ma-0 caption d-flex white--text">
                                        <span
                                            style="max-width: 1.25rem"
                                            class="rounded-circle bg-blue-400 h-5 w-5 white--text d-flex align-center justify-center mr-1"
                                            >15</span
                                        >
                                        Participantes
                                    </p>
                                </div>
                                <v-menu left bottom>
                                    <template v-slot:activator="{on}">
                                        <v-btn icon color v-on="on">
                                            <v-icon class="white--text"
                                                >mdi-dots-horizontal</v-icon
                                            >
                                        </v-btn>
                                    </template>

                                    <v-list>
                                        <v-list-item>
                                            <v-icon class="body-1 mr-2"
                                                >mdi-eye-off</v-icon
                                            >
                                            <v-list-item-title
                                                >No publicar</v-list-item-title
                                            >
                                        </v-list-item>
                                        <v-list-item>
                                            <v-icon class="body-1 mr-2"
                                                >mdi-lead-pencil</v-icon
                                            >
                                            <v-list-item-title
                                                >Editar
                                                </v-list-item-title
                                            >
                                        </v-list-item>
                                        <v-list-item>
                                            <v-icon class="body-1 mr-2"
                                                >mdi-trash-can</v-icon
                                            >
                                            <v-list-item-title
                                                >Eliminar</v-list-item-title
                                            >
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-sheet>
                        </v-card-text>
                    </v-col>
                    
                </v-row>
            </base-card>
          
        </v-col>
    </v-row>
</template>
<script>
import avatarGroupCard from '@/components/card/AvatarGroupCard'
import { getUsuarioSesion } from '../../../helper/Sesion';
import {
    jmPieChartOne,
    jmPieChartTwo,
    jmBarChart,
    jmLineChart,
    jmDonutChart
} from '@/data/jobManagement'

export default {
    name: 'job-management',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Job Management'
    },
    components: {
        avatarGroupCard
    },
    data() {
        return {
            usuarioSesion:{},
            jmPieChartOne,
            jmPieChartTwo,
            jmBarChart,
            jmLineChart,
            jmDonutChart,
            valueDeterminate: 50,
            valueDeterminate2: 20,
            valueDeterminate3: 60,
            valueDeterminate4: 34,
            valueDeterminate5: 35,
            valueDeterminate6: 15,
            desserts: [
                {
                    job: 'Senior Fullstack Engineer',
                    posted: '01/10/2020',
                    applicants: require('@/assets/images/avatars/001-man.svg')
                },
                {
                    job: 'Freelance Java Developer',
                    posted: '01/10/2020',
                    applicants: require('@/assets/images/avatars/001-man.svg')
                },
                {
                    job: 'Python Developer',
                    posted: '01/10/2020',
                    applicants: require('@/assets/images/avatars/001-man.svg')
                },
                {
                    job: 'Product Designer',
                    posted: '01/10/2020',
                    applicants: require('@/assets/images/avatars/001-man.svg')
                }
            ],
            items: [
                {
                    icon: 'mdi-view-column',
                    iconClass: 'dark--text text--lighten-4 grey lighten-4',
                    title: 'Subscription expires today',
                    subtitle: '23 Dec 2020'
                },
                {
                    icon: 'mdi-close-circle',
                    iconClass: 'dark--text text--lighten-4 grey lighten-4',
                    title: 'You unpublished a Job',
                    subtitle: '23 Dec 2020'
                },
                {
                    icon: 'mdi-account-group',
                    iconClass: 'dark--text text--lighten-4 grey lighten-4',
                    title: '5 New applicants',
                    subtitle: '23 Dec 2020'
                },
                {
                    icon: 'mdi-comment-account-outline',
                    iconClass: 'dark--text text--lighten-4 grey lighten-4',
                    title: 'New Commnet on job post',
                    subtitle: '23 Dec 2020'
                }
            ]
        }
    },
    mounted() {
        console.log("##### pagina bienvenido ####");
            this.usuarioSesion = getUsuarioSesion();    
  },
}
</script>
