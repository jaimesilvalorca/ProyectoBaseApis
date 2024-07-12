import express from 'express'
import dotenv from 'dotenv'
import usuariosRouter from './router/usuarios.router.js'
import sequelize from './config/db.config.js'



dotenv.config()
const app = express()

app.use('/api/usuarios',usuariosRouter)

app.listen(process.env.PUERTO, async()=>{
    console.log("Esta arriba el servidor ")
    try {
        await sequelize.authenticate();


    } catch (error) {
        console.log("error")
    }
})