import Vue from 'vue'

export const setSession = (session) => {
    console.log("@setSession " + session);
    localStorage.setItem("usuario_sesion", JSON.stringify(session));
}

export const setToken = (token) => {
    console.log("@token " + token);
    localStorage.setItem("token", token);
}

export const getToken = () => {
    let token = localStorage.getItem("token");
    return token || null;
}

export const getUsuarioSesion = () => {

    let sesion = JSON.parse(localStorage.getItem("usuario_sesion"));
    console.log('usuario en sesion ' + ((sesion && sesion.usuario) || ' XX SIN SESION XX'));
    return (sesion && sesion.usuario) || null;
};

export const getSesion = () => {
    let sesion = JSON.parse(localStorage.getItem("usuario_sesion"));
    return sesion || null;
};

export const clearSesion = () => {
    console.log("======== SESION OUT ============");
    localStorage.removeItem("usuario_sesion");
    localStorage.removeItem("token");

}