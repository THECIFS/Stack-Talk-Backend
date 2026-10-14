const express = require('express')
const comentario_route = express.Router()
const comentario_controller = require('../controllers/comentario-controller')

comentario_route.post('',comentario_controller.create)
comentario_route.delete('/:id', comentario_controller.deleteById)

module.exports = comentario_route