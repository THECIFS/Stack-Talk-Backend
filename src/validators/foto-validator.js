const { body } = require('express-validator')
const validateRequest = require('./validate-request')

const createFotoValidator = [
    body('publicacion_id').isUUID().withMessage('El id de la publicación debe ser un UUID'),
    body('url_imagen')
        .isString().withMessage('La URL de la imagen debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('La URL de la imagen es requerida')
        .bail().isURL({ require_protocol: true }).withMessage('La URL de la imagen no es válida')
        .bail().isLength({ max: 255 }).withMessage('La URL de la imagen no puede exceder 255 caracteres'),
    body('id').optional()
        .isInt({ min: 1 }).withMessage('El id de la foto debe ser un entero positivo'),
    body('fecha').optional()
        .isISO8601().withMessage('La fecha de la foto no es válida'),
    validateRequest
]

module.exports = { createFotoValidator }
