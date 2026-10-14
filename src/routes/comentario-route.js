const express = require('express')
const comentario_route = express.Router()
const comentario_controller = require('../controllers/comentario-controller')
const {
    createComentarioValidator,
    comentarioIdValidator
} = require('../validators/comentario-validator')

comentario_route.get('/count', comentario_controller.countAll)

comentario_route.post('', createComentarioValidator, comentario_controller.create)
comentario_route.delete('/:id', comentarioIdValidator, comentario_controller.deleteById)

module.exports = comentario_route