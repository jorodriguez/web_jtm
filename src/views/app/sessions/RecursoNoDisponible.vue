<template>
<div class="page-wrap">
    <div class="ma-auto">
        <div class="d-flex align-center justify-center mb-4">
            <v-avatar tile size="120" class="mr-4">
                <img src="@/assets/images/svg/warning.svg" alt="" />
            </v-avatar>
            <div class="error-title">
                <h1 class="font-weight-bold mb-0">ACCESO</h1>
                <div class="text-18 grey--text font-weight-bold ">¡Solicita los permisos!</div>
            </div>
        </div>
        <div class="d-flex justify-center flex-wrap">
            <v-btn small class="ma-2" rounded  @click="goBack()"   outlined color="primary"
                >
                <v-icon class="caption">mdi-arrow-left</v-icon>
                Volver</v-btn
            >            
            <v-btn small  class="ma-2" rounded @click="goToLogin()"   outlined color="grey"
                >Login</v-btn>            
            
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'NoDisponible',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'NoDisponible'
    },
    methods:{
           goToLogin() {
                
                this.$router.push('/app/sessions/sign-in-two');  

            },

            goToPrincipal() {
                this.$router.push('/app/dashboard/entrenamiento');
            },
            goBack() {
                this.$router.back();
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
.error-title {
    h1 {
        font-size: 5rem;
    }
}
</style>
