<template>
    <div class="page-wrap">
        <div class="session-form-hold">
            <base-card>
                <v-progress-linear
                    :active="loading"
                    :indeterminate="loading"
                    absolute
                    top
                    color="primary"
                ></v-progress-linear>
                <v-card-text class="text-center" >
                    <v-avatar size="150" class="mb-4" color="#373836">
                        <!--<img src="@/assets/images/jtm/logojtm.png" alt="" />-->
                        <img src="@/assets/images/arctic-circle-logo.svg" alt="" />
                    </v-avatar>

                    <h6 class="text--disabled font-weight-medium mb-10">
                        ¡Entra a tu cuenta y ponte en marcha!
                    </h6>
                    <v-form>
                        <v-text-field
                            label="Correo"
                            v-model="email"
                            :rules="emailRules"
                            required
                        />

                        <v-text-field
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            name="input-10-2"
                            label="Contraseña"
                            :counter="10"
                            :rules="nameRules"
                            v-model="ePassword"
                            @click="formSubmit"
                            @click:append="show = !show"
                        ></v-text-field>
                        <br/>
                       <!-- <v-checkbox
                            v-model="checkbox1"
                            label="Remember this computer"
                        ></v-checkbox>
                    -->
                        <v-btn
                            class="mb-4"
                            @click="formSubmit"
                            block
                            color="success"
                            dark
                        >
                            <v-icon left>mdi-login</v-icon>
                            Entrar</v-btn
                        >
                       
                        <div class="d-flex justify-around flex-wrap">
                            <v-btn text small color="primary" class="mb-2"
                                >Olvide la contraseña</v-btn
                            >
                            <v-btn
                                text
                                small
                                color="primary"
                                to="/app/sessions/sign-up-2"
                                >Crear una cuenta</v-btn
                            >
                        </div>
                    </v-form>
                </v-card-text>
            </base-card>
               <v-snackbar v-model="snackbarError"  top color="danger">                    
                    {{mensaje}}
                    <template v-slot:action="{attrs}">
                        <v-btn
                            color=""
                            text
                            v-bind="attrs"
                            @click="snackbarError = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </template>
                </v-snackbar>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase/app'
import {mapGetters, mapActions} from 'vuex';
import { setSession,setToken } from '../../../helper/Sesion';
import { BRANCH}  from "../../../helper/Urls";

export default {
    name: 'login',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'JTM'
    },
    data() {
        return {
            show: false,
            password: 'Password',
            checkbox1: true,
            checkbox2: false,
            email: '',
            ePassword: '',
            loading: false,
            snackbarError:false,
            mensaje:"",
            emailRules: [
                (v) => !!v || 'Correo requerido',
                (v) => /.+@.+\..+/.test(v) || 'La dirección de correo no es válida'
            ],
            nameRules: [
                (v) => !!v || 'Contraseña requerida',
               
            ]
        }
    },
    computed: {
        ...mapGetters(['loggedInUser', 'error'])
    },
    methods: {
        ...mapActions(['login']),
         async formSubmit() {


            if (!this.email || !this.ePassword) {               
                   this.snackbarError = true
                   this.mensaje = 'Escribe el usuario y la contraseña.';
            }

           const loginResponse = await this.login({correo: this.email, password: this.ePassword});

           console.log(loginResponse);
           
           if(loginResponse.auth){
                this.$router.push('/');
           }else{

               this.snackbarError = true;
               this.mensaje = 'El usuario o la contraseña son incorrectos.';
               
           }

        },
        googleSignIn() {
            const provider = new firebase.auth.GoogleAuthProvider()

            firebase
                .auth()
                .signInWithPopup(provider)
                .then((result) => {
                    const newUser = {uid: result.user.uid}
                    localStorage.setItem('userInfo', JSON.stringify(newUser))
                    this.$router.push('/')
                })
                .catch((err) => {
                    alert('Oops' + err.message)
                })
        }
    },
    watch: {
        
        // loading (val) {
        //   if (!val) return
        //   setTimeout(() => (this.loading = false), 2000)
        // },
        loggedInUser(val) {
            console.log('watch ')
            if (val && val.id && val.id.length > 0) {
                // this.makeToast("success", "Successfully Logged In");
                console.log('logged in successfully ')
                this.loading = true
                setTimeout(() => {
                    this.$router.push('/')
                }, 500)
            }
        },
        error(val) {
            if (val != null) {
                // this.makeToast("warning", val.message);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.page-wrap {
    background-color: #242939 !important;
    display: flex;
    align-items: center;
    padding: 40px 1rem;
    height: 100%;
    min-height: 100vh;
}
.session-form-hold {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}
</style>
