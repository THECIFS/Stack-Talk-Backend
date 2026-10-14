const express = require('express')
const reaccion_router = express.Router()
const reaccion_controller = require('../controllers/reaccion-controller')
const {
    createReaccionValidator,
    deleteReaccionValidator
} = require('../validators/reaccion-validator')

reaccion_router.get('/count', reaccion_controller.countAll)

reaccion_router.post('', createReaccionValidator, reaccion_controller.create)
reaccion_router.delete(
    '/:publicacion_id/:usuario_id',
    deleteReaccionValidator,
    reaccion_controller.deletByIdPublicacionAndIdUsuario
)

module.exports = reaccion_router