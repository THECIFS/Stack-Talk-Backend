const express = require('express')
const app = express()
const cuenta_usuario_router = require('./routes/cuenta-usuario-route')
const opinion_router = require('./routes/opinion-route')
const publicacion_foto_router = require('./routes/publicacion-foto-route')
const reaccion_router = require('./routes/reaccion-route')

const globalErrorHandler = require('./midlewares/global-error-hanlder')

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({limit:'10mb', extended:true}))
app.use('/cuentas', cuenta_usuario_router)
app.use('/opiniones', opinion_router)
app.use('/publicaciones', publicacion_foto_router)
app.use('/reacciones', reaccion_router)


app.use(globalErrorHandler)
module.exports = app