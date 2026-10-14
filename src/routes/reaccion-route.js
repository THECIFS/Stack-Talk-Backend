const express = require('express')
const reaccion_router = express.Router()
const reaccion_controller = require('../controllers/reaccion-controller')

reaccion_router.post('', reaccion_controller.create)
reaccion_router.delete('/:publicacion_id/:usuario_id', reaccion_controller.deletByIdPublicacionAndIdUsuario)

module.exports = reaccion_router