const { body, param } = require('express-validator')
const validateRequest = require('./validate-request')

const createOpinionValidator = [
    body('mensaje')
        .isString().withMessage('El mensaje debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El mensaje es requerido'),
    body('estado_aprobacion')
        .isString().withMessage('El estado de aprobación debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El estado de aprobación es requerido')
        .bail().isLength({ max: 50 }).withMessage('El estado de aprobación no puede exceder 50 caracteres'),
    body('usuario_id').optional({ values: 'null' })
        .isUUID().withMessage('El id del usuario debe ser un UUID'),
    body('id').optional()
        .isUUID().withMessage('El id de la opinión debe ser un UUID'),
    body('fecha').optional()
        .isISO8601().withMessage('La fecha de la opinión no es válida'),
    validateRequest
]

const updateOpinionValidator = [
    body('mensaje').optional()
        .isString().withMessage('El mensaje debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El mensaje no puede estar vacío'),
    body('estado_aprobacion').optional()
        .isString().withMessage('El estado de aprobación debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El estado de aprobación no puede estar vacío')
        .bail().isLength({ max: 50 }).withMessage('El estado de aprobación no puede exceder 50 caracteres'),
    body('usuario_id').optional({ values: 'null' })
        .isUUID().withMessage('El id del usuario debe ser un UUID'),
    body('fecha').optional()
        .isISO8601().withMessage('La fecha de la opinión no es válida'),
    param('id').isUUID().withMessage('El id de la opinión debe ser un UUID'),
    validateRequest
]

const opinionIdValidator = [
    param('id').isUUID().withMessage('El id de la opinión debe ser un UUID'),
    validateRequest
]

module.exports = {
    createOpinionValidator,
    updateOpinionValidator,
    opinionIdValidator
}
