const { body, param } = require('express-validator')
const validateRequest = require('./validate-request')

const createPublicacionValidator = [
    body('publicacion').isObject({ strict: true }).withMessage('La publicación es requerida'),
    body('publicacion.titulo')
        .isString().withMessage('El título debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El título es requerido')
        .bail().isLength({ max: 150 }).withMessage('El título no puede exceder 150 caracteres'),
    body('publicacion.contenido')
        .isString().withMessage('El contenido debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El contenido es requerido'),
    body('publicacion.usuario_id')
        .isUUID().withMessage('El id del usuario debe ser un UUID'),
    body('publicacion.id').optional()
        .isUUID().withMessage('El id de la publicación debe ser un UUID'),
    body('publicacion.fecha_creacion').optional()
        .isISO8601().withMessage('La fecha de creación no es válida'),
    body('fotos')
        .isArray({ min: 1 }).withMessage('Se requiere al menos una foto'),
    body('fotos.*')
        .isString().withMessage('Cada foto debe ser una cadena de texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('Las fotos no pueden estar vacías'),
    validateRequest
]

const updatePublicacionValidator = [
    body('titulo').optional()
        .isString().withMessage('El título debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El título no puede estar vacío')
        .bail().isLength({ max: 150 }).withMessage('El título no puede exceder 150 caracteres'),
    body('contenido').optional()
        .isString().withMessage('El contenido debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El contenido no puede estar vacío'),
    body('usuario_id').optional()
        .isUUID().withMessage('El id del usuario debe ser un UUID'),
    body('fecha_creacion').optional()
        .isISO8601().withMessage('La fecha de creación no es válida'),
    param('id').isUUID().withMessage('El id de la publicación debe ser un UUID'),
    validateRequest
]

const publicacionIdValidator = [
    param('id').isUUID().withMessage('El id de la publicación debe ser un UUID'),
    validateRequest
]

module.exports = {
    createPublicacionValidator,
    updatePublicacionValidator,
    publicacionIdValidator
}
