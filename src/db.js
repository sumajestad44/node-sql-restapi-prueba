import {createPool} from 'mysql2/promise'

import {
    DB_PORT,
    DB_HOST,
    DB_NAME,
    DB_USER,
} from './config.js'

/** LA BASE DE DATOS SE ENCUENTRA EN EL PUERTO 3000 */
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    port: DB_PORT,
    database: DB_NAME,
})
