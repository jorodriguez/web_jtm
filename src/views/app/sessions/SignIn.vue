<template>
    <div class="page-wrap">
        <div class="session-form-hold">
            <base-card>
                <v-card-text class="text-center">
                    <v-avatar size="150" class="mb-4">                        
                        <img src="@/assets/images/jtm/logojtm.png" alt="" />
                    </v-avatar>                    
                    <v-text-field   
                        label="Email"                     
                        v-model="email"
                        :rules="emailRules"
                        required/>

                    <v-text-field
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        name="input-10-2"
                        label="Password"
                        value="Pa"
                        :rules="nameRules"
                        v-model="ePassword"
                        @click:append="show = !show"
                    ></v-text-field>
                
                   <!-- <v-checkbox
                        v-model="checkbox1"
                        label="I have read and agree to the terms of service."
                    ></v-checkbox>
                -->
                    <v-btn class="mb-4" block color="primary" 
                    @click="formSubmit"
                        >Entrar</v-btn
                    >
                    <div class="d-flex justify-around flex-wrap">
                        <!--<v-btn text small color="primary"
                            >Crea tu cuenta</v-btn
                        >-->
                    </div>
                </v-card-text>
            </base-card>
        </div>
    </div>
</template>
<script>

import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'SignUp',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'SignUp'
    },
    data() {
        return {
            show: false,
            email: 'admin@gmail.com',
            password: 'Password',
            ePassword: '123456',
            checkbox1: true,
            checkbox2: false,
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            nameRules: [
                (v) => !!v || 'Password is required',
               
            ]
        }
    },
    computed: {
        ...mapGetters(['loggedInUser', 'error'])
    },
    methods: {
        ...mapActions(['login']),
        formSubmit() {
            this.login({email: this.email, password: this.ePassword})
        },

    },
    watch: {        
        loggedInUser(val) {
            if (val && val.uid && val.uid.length > 0) {
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
    
    background: linear-gradient(90deg, rgba(11,11,11,1) 0%, rgba(12,24,52,1) 96%);
    display: flex;
    align-items: center;
    padding: 40px 1rem;
    height: 100%;
    min-height: 100vh;
}
.session-form-hold {
    background-color: #242939 !important;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}
</style>
