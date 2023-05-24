import { getUsuarioSesion, clearSesion } from '../helper/Sesion';

export default async(to, from, next) => {

    const usuarioSesion = await getUsuarioSesion();

    console.log("reconociendo usuario en sesion " + usuarioSesion);

    if (usuarioSesion != null) {
        next()
    } else {
        clearSesion();
        next('/app/sessions/sign-in-two')
    }
}