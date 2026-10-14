const cuenta_usuario_controller = require('../controllers/cuenta-usuario-controller')
const autenticacionJwt = require('../midlewares/autenticacion-jwt')
const {
    createCuentaValidator,
    updateCuentaValidator,
    loginCuentaValidator,
    cuentaIdValidator
} = require('../validators/cuenta-validator')
const {
    createUsuarioValidator,
    updateUsuarioValidator
} = require('../validators/usuario-validator')

const express = require('express')
const cuenta_usuario_router = express.Router()

cuenta_usuario_router.get('/count', cuenta_usuario_controller.countAll)
cuenta_usuario_router.get('/verify',autenticacionJwt,cuenta_usuario_controller.verify_sesion)

cuenta_usuario_router.post(
    '',
    createCuentaValidator,
    createUsuarioValidator,
    cuenta_usuario_controller.createCuentaUsuario
)
cuenta_usuario_router.post('/login', loginCuentaValidator, cuenta_usuario_controller.login)
cuenta_usuario_router.get('/:id', cuentaIdValidator, cuenta_usuario_controller.findById)
cuenta_usuario_router.put(
    '/:id',
    cuentaIdValidator,
    updateCuentaValidator,
    updateUsuarioValidator,
    cuenta_usuario_controller.updateById
)
cuenta_usuario_router.delete('/:id', cuentaIdValidator, cuenta_usuario_controller.deleteById)

module.exports = cuenta_usuario_router