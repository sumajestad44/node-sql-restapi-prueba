import app from './app.js';
import {PORT} from './config.js';



/** EL SERVIDOR ESTA CORRIENDO EN EL PUERTO 3306, MIENTRAS QUE LA BASE DE DATOS ESTA EN EL PUERTO 3000 */
app.listen(PORT)
console.log(`Server corriendo en http://localhost:${PORT}`);