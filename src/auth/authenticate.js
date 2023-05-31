import { getUsuarioSesion, clearSesion } from '../helper/Sesion';

export default async(to, from, next) => {

    const usuarioSesion = await getUsuarioSesion();

    console.log(`para  ${to.name}  url ${to.path}`);
    console.log(`desde ${to.name}  url ${from.path}`);

    if (usuarioSesion != null) {

        const tieneAcceso = true;

        //aqui revisar si el nombre to.name esta en el array de menu
        console.log("#### VALIDAR PERMISO-ROL### " + JSON.stringify(to.name));

        let roles = usuarioSesion.opciones_acceso || [];

        let pasaValidacion = false;

        for (let i = 0; i < roles.length; i++) {
            console.log(`comparando ${roles[i].ruta} = ${to.name}`);
            if (roles[i].ruta == to.name) {
                pasaValidacion = true;
                break;
            }
        }

        //Revisar si es entrenador o cliente para realizar la redireccion de la primer opcion a mostrar

        if (pasaValidacion) {
            console.log("PASA LA VALIDACION >>>>> ");
            next()
        } else {
            console.log("XXXXXX NO PASA LA VALIDACION SSS");
            next('/app/sessions/RecursoNoDisponible')
        }
    } else {
        clearSesion();
        next('/app/sessions/sign-in-two')
    }
}