import { getUsuarioSesion, clearSesion } from '../helper/Sesion'

export default async(to, from, next) => {

    const usuarioSesion = await getUsuarioSesion()

    console.log(`para  ${JSON.stringify(usuarioSesion)} `);
    console.log(`para  ${to.path}  url ${to.path}`)
    console.log(`desde ${to.name}  url ${from.path}`)

    if (usuarioSesion != null) {

        const requiereAutorizacionAcceso = to.meta.requiresAuth;

        if (requiereAutorizacionAcceso) {

            console.log('#### REQUIERE VALIDAR PERMISO-ROL### ruta' + JSON.stringify(to.name));

            let roles = usuarioSesion.opciones_acceso || [];

            console.log(`roles acceso ${JSON.stringify(roles)}`);

            let pasaValidacion = false;

            for (let i = 0; i < roles.length; i++) {
                console.log(`comparando ${roles[i].ruta} = ${to.name}`)
                if (roles[i].ruta == to.name) {
                    pasaValidacion = true
                    break;
                }
            }

            if (pasaValidacion) {
                console.log('PASA LA VALIDACION MOSTRAR OPCION >>>>> ')
                next()
            } else {
                console.log('XXXXXX NO PASA LA VALIDACION xXXXXXXXX')
                next('/app/sessions/RecursoNoDisponible')
                    //next('/')
            }
        } else {
            next()
        }
    } else {
        clearSesion()
        next('/app/sessions/sign-in-two')
    }
}