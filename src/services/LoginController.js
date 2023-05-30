import { URL } from '../helper/Urls'; 
import { cargarSesion, } from '../helper/Sesion';

export async function login (data){    

    try{
        const response = await axios.post(url, params, {});

        const usuario =  response.data;

        cargarSesion(this.response)

    } catch (error) {

    }

    this.$http.post(URL.LOGIN, data).then(
      result => {
        console.log("En el login");
        const response = result.data;        
        if (this.response.auth) {
          cargarSesion(this.response)
          .then(path=>{
            console.log("PATH "+path);
            this.$router.push({ path: path });
          });         
        } else {
          this.$notificacion.error('Login', 'No se encuentra el usuario.');
        }
      },
      error => { //FIXME: modificar la contestacion del API
        console.log(error)
        this.loading = false;
        //console.log(JSON.stringify(error));
        if (!error.auth) {
          this.$notificacion.error('Login', 'El usuario o la clave son incorrectas.');
        }
        //this.response = error;
      }
    );
  },
}