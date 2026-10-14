const cuenta_usuario_controller = require('../controllers/cuenta-usuario-controller')

const express = require('express')
const cuenta_usuario_router = express.Router()

cuenta_usuario_router.post('', cuenta_usuario_controller.createCuentaUsuario)
cuenta_usuario_router.get('/:id', cuenta_usuario_controller.findById)
cuenta_usuario_router.put('/:id', cuenta_usuario_controller.updateById)
cuenta_usuario_router.delete('/:id', cuenta_usuario_controller.deleteById)
cuenta_usuario_router.post('/login', cuenta_usuario_controller.login)

module.exports = cuenta_usuario_router