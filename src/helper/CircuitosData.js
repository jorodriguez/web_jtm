import Vue from 'vue'


export const guardarCircuito = (id, circuitoArray) => {
    localStorage.setItem(id, JSON.stringify(circuitoArray));
}

export const getCircuito = (id) => {
    let circuito = localStorage.getItem(id);
    return circuito || [];
}

export const getListaCircuitos = () => {
    let sesion = JSON.parse(localStorage.getItem());
    return (sesion && sesion.usuario) || null;
};

export const limpiarCircuito = () => {
    console.log("======== SESION OUT ============");
    localStorage.removeItem("usuario_sesion");
    localStorage.removeItem("token");

}