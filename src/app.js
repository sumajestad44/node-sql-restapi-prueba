import express from 'express'
import morgan from 'morgan'

const app = express()

import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

/** MIDDLEWARES */
app.use(morgan("dev"))
app.use(express.json());

/** ENDPOINTS */

app.use('/', indexRoutes);
app.use('/api', employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint no encontrado'
    })
})

export default app;