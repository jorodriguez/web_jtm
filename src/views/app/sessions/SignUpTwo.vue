<template>
    <div class="page-wrap">
        <div class="session-form-hold">
            <base-card>
                <v-card-text class="text-center">
                    <div class="py-3">
                        <h5 class="font-weight-bold">¡PONTE EN MARCHA!</h5>
                        <p class="text--disabled font-weight-medium">
                            Solicita una cuenta de acceso 
                        </p>
                    </div>
                    <v-avatar tile size="200" class="mb-4">
                      <img src="@/assets/images/jtm/logojtm.png" alt="" />
                    </v-avatar>

                    <h6 class="text--disabled font-weight-medium mb-10">
                        Llena los siguientes datos
                    </h6>

                    <v-text-field
                        label="Nombre"
                        v-model="nombre"                        
                        required
                    />

                    <v-text-field
                        label="Teléfono"
                        v-model="telefono"                        
                        required
                    />

                    <v-text-field
                        label="Email"
                        v-model="email"
                        :rules="emailRules"
                        required
                    />

                    <v-text-field
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        name="input-10-2"
                        label="Password"
                        :counter="10"
                        :rules="nameRules"
                        v-model="ePassword"
                        @click:append="show = !show"
                    ></v-text-field>
                    <!-- <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'Confirm Password'"
            name="input-10-2"
            label="Password"
            value="Pa"
            
            @click:append="show = !show"
          ></v-text-field> -->
                  <br/>
                    <v-btn
                        class="mb-4"
                        @click="submit"
                        block
                        color="success"
                        dark
                        >Crear cuenta</v-btn
                    >
                    <div class="">
                        ¿ya tienes cuenta?
                        <v-btn
                            text
                            small
                            color="primary"
                            to="/app/sessions/sign-in-two"
                            >Ir a Login</v-btn
                        >
                    </div>
                </v-card-text>

                <!-- error password snackbar  -->
                <v-snackbar v-model="snackbar" top color="danger">                    
                    Todos los campos son requeridos
                    <template v-slot:action="{attrs}">
                        <v-btn
                            color=""
                            text
                            v-bind="attrs"
                            @click="snackbar = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </template>
                </v-snackbar>
            </base-card>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import firebase from 'firebase/app'
// firebase sdk
// var firebaseConfig = {
//   apiKey: "AIzaSyCzb5-JZHbTZA8AOvUgscCTZbPN8gdRFvw",
//   authDomain: "fir-auth-f6c58.firebaseapp.com",
//   databaseURL: "https://fir-auth-f6c58.firebaseio.com",
//   projectId: "fir-auth-f6c58",
//   storageBucket: "fir-auth-f6c58.appspot.com",
//   messagingSenderId: "541805155537",
//   appId: "1:541805155537:web:21eb9b0c161ca1f8a161f0"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export default {
    name: 'signup',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'SignUp 2'
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
            snackbar: false,
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            nameRules: [
                (v) => !!v || 'Password is required',
                (v) =>
                    (v && v.length >= 6) ||
                    'Name must be greater than 6 characters'
            ]
        }
    },

    methods: {
        ...mapActions(['signUserUp']),
        submit() {
            if (this.email && this.ePassword) {
                this.signUserUp({email: this.email, password: this.ePassword})

                setTimeout(() => {
                    console.log('done')
                }, 1000)
            } else {
                this.snackbar = true
            }
        }
        // signUp: function() {
        //   // console.log(this.email, this.ePassword);
        //   firebase.auth().createUserWithEmailAndPassword(this.email, this.ePassword)
        //     .then(
        //       user => {
        //         console.log(user.data);

        //       },
        //       err => {
        //         console.log(err);

        //       }
        //     )
        // }
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
