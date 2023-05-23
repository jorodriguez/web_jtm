import { getUsuarioSesion, clearSesion } from  '../helper/Sesion';

export default (to, from, next) => {

  const usuarioSesion = getUsuarioSesion();

  if (usuarioSesion != null) {
    next()
  } else {
    clearSesion();
    next('/app/sessions/sign-in-two')
  }
}
