const { body, param } = require('express-validator')
const validateRequest = require('./validate-request')

const createReaccionValidator = [
    body('publicacion_id').isUUID().withMessage('El id de la publicación debe ser un UUID'),
    body('usuario_id').isUUID().withMessage('El id del usuario debe ser un UUID'),
    validateRequest
]

const deleteReaccionValidator = [
    param('publicacion_id').isUUID().withMessage('El id de la publicación debe ser un UUID'),
    param('usuario_id').isUUID().withMessage('El id del usuario debe ser un UUID'),
    validateRequest
]

module.exports = {
    createReaccionValidator,
    deleteReaccionValidator
}
