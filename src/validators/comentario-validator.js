const { body, param } = require('express-validator')
const validateRequest = require('./validate-request')

const createComentarioValidator = [
    body('contenido')
        .isString().withMessage('El contenido debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El contenido es requerido'),
    body('usuario_id').isUUID().withMessage('El id del usuario debe ser un UUID'),
    body('publicacion_id').isUUID().withMessage('El id de la publicación debe ser un UUID'),
    body('id').optional()
        .isUUID().withMessage('El id del comentario debe ser un UUID'),
    body('fecha').optional()
        .isISO8601().withMessage('La fecha del comentario no es válida'),
    validateRequest
]

const comentarioIdValidator = [
    param('id').isUUID().withMessage('El id del comentario debe ser un UUID'),
    validateRequest
]

module.exports = {
    createComentarioValidator,
    comentarioIdValidator
}
