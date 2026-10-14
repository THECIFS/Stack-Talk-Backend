const express = require('express')
const publicacion_foto_router = express.Router()
const publicacion_foto_controller = require('../controllers/publicacion-foto-controller')

publicacion_foto_router.post('', publicacion_foto_controller.create)
publicacion_foto_router.get('/:id', publicacion_foto_controller.findById)
publicacion_foto_router.put('/:id', publicacion_foto_controller.updateById)
publicacion_foto_router.delete('/:id', publicacion_foto_controller.deleteById)

module.exports = publicacion_foto_router