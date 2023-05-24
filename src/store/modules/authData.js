import firebase from "firebase/app";
import "firebase/auth";
import URL from '../../helper/Urls';
import { setSession, setToken, clearSesion } from '../../helper/Sesion';
import axios from "axios";

export default {
    state: {
        loggedInUser: localStorage.getItem("usuario_sesion") != null ?
            JSON.parse(localStorage.getItem("usuario_sesion")) : null,
        loading: false,
        error: null
    },
    getters: {
        loggedInUser: state => state.loggedInUser,
        loading: state => state.loading,
        error: state => state.error
    },
    mutations: {
        setUser(state, data) {
            state.loggedInUser = data;
            state.loading = false;
            state.error = null;
        },
        setLogout(state) {
            state.loggedInUser = null;
            state.loading = false;
            state.error = null;
            // this.$router.go("/");
        },
        setLoading(state, data) {
            state.loading = data;
            state.error = null;
        },
        setError(state, data) {
            state.error = data;
            state.loggedInUser = null;
            state.loading = false;
        },
        clearError(state) {
            state.error = null;
        }
    },
    actions: {
        async login({ commit }, data) {
            console.log("@login");

            try {
                commit("clearError");
                commit("setLoading", true);


                //aqui va el login al api
                //var data = { correocorreo, password: this.input.password };

                console.log(data);

                const response = await axios.post(URL.LOGIN, data, {});

                console.log(response);

                const loginResponse = response.data;

                if (loginResponse && loginResponse.auth) {

                    setSession(loginResponse);
                    setToken(loginResponse.token);
                    commit("setUser", loginResponse);

                } else {
                    //this.$notificacion.error('Login', 'No se encuentra el usuario.');
                    commit("setError", "No se encuentra el usuario");
                }

                commit("setLoading", false);

                return loginResponse;



                /*  firebase
                    .auth()
                    .signInWithEmailAndPassword(data.email, data.password)
                    .then(user => {
                      const newUser = { uid: user.user.uid };
                      localStorage.setItem("userInfo", JSON.stringify(newUser));
                      commit("setUser", { uid: user.user.uid });
                      console.log("user");
                    })
                    .catch(function(error) {
                      // Handle Errors here.
                      // var errorCode = error.code;
                      // var errorMessage = error.message;
                      console.log(error);
                      localStorage.removeItem("userInfo");
                      commit("setError", error);
                      // ...
                    });*/
            } catch (error) {

                console.log(error);
                commit("setError", "Ups hubó un detalle al intentar el acceso.");
                return null;

            }
        },

        signUserUp({ commit }, data) {
            commit("setLoading", true);
            commit("clearError");
            //cuando se crea una cuenta de usuario
            /*firebase
                .auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then(user => {
                    commit("setLoading", false);

                    const newUser = {
                        uid: user.user.uid
                    };
                    console.log(newUser);
                    localStorage.setItem("userInfo", JSON.stringify(newUser));
                    commit("setUser", newUser);
                })
                .catch(error => {
                    commit("setLoading", false);
                    commit("setError", error);
                    localStorage.removeItem("userInfo");
                    console.log(error);
                });*/
        },
        signOut({ commit }) {

            clearSesion();
            commit("setLogout");
            /*          firebase
                .auth()
                .signOut()
                .then(
                    () => {
                        localStorage.removeItem("userInfo");
                        commit("setLogout");
                    },
                    _error => {}
                );
*/

        }
    }
};