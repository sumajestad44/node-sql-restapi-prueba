import {pool} from '../db.js'

export const ping = async (req, res) => { 
    const [resultado] = await pool.query('SELECT "pong" AS resultado')
     res.json(resultado)
    }