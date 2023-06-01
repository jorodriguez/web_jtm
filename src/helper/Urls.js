import configEnv from '../../config/configEnv';


const BASE = configEnv.BASE || "http://localhost:5000";
//const BASE = process.env.URL_API || 'https://jtm-api.herokuapp.com'; //tesitng env
//const BASE = process.env.URL_API || 'https://api-prod.herokuapp.com';

export const BRANCH = "2301-init";

const URL = {
    LOGIN: BASE + '/auth/login',
    CURSO: BASE + '/curso',
    ALUMNOS_BASE: BASE + '/alumnos',
}

export default URL;