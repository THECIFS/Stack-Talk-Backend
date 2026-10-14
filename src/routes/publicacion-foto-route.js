const express = require('express')
const publicacion_foto_router = express.Router()
const publicacion_foto_controller = require('../controllers/publicacion-foto-controller')
const {
    createPublicacionValidator,
    updatePublicacionValidator,
    publicacionIdValidator
} = require('../validators/publicacion-validator')

publicacion_foto_router.get('/count', publicacion_foto_controller.countAll)


publicacion_foto_router.post('', createPublicacionValidator, publicacion_foto_controller.create)
publicacion_foto_router.get('/:id', publicacionIdValidator, publicacion_foto_controller.findById)
publicacion_foto_router.get('/:limit/:offset', publicacion_foto_controller.findAllToLimitAndOffset)
publicacion_foto_router.put('/:id', updatePublicacionValidator, publicacion_foto_controller.updateById)
publicacion_foto_router.delete('/:id', publicacionIdValidator, publicacion_foto_controller.deleteById)

module.exports = publicacion_foto_router