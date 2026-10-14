const { body } = require('express-validator')
const validateRequest = require('./validate-request')

const createUsuarioValidator = [
    body('usuario').isObject({ strict: true }).withMessage('El usuario es requerido'),
    body('usuario.primer_nombre')
        .isString().withMessage('El primer nombre debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El primer nombre es requerido')
        .bail().isLength({ max: 50 }).withMessage('El primer nombre no puede exceder 50 caracteres'),
    body('usuario.segundo_nombre').optional()
        .isString().withMessage('El segundo nombre debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El segundo nombre no puede estar vacío')
        .bail().isLength({ max: 50 }).withMessage('El segundo nombre no puede exceder 50 caracteres'),
    body('usuario.apellido_paterno')
        .isString().withMessage('El apellido paterno debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El apellido paterno es requerido')
        .bail().isLength({ max: 50 }).withMessage('El apellido paterno no puede exceder 50 caracteres'),
    body('usuario.apellido_materno')
        .isString().withMessage('El apellido materno debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El apellido materno es requerido')
        .bail().isLength({ max: 50 }).withMessage('El apellido materno no puede exceder 50 caracteres'),
    body('usuario.puesto').optional()
        .isString().withMessage('El puesto debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El puesto no puede estar vacío')
        .bail().isLength({ max: 100 }).withMessage('El puesto no puede exceder 100 caracteres'),
    body('usuario.foto_perfil')
        .isString().withMessage('La foto de perfil debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('La foto de perfil es requerida'),
    body('usuario.biografia').optional()
        .isString().withMessage('La biografía debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('La biografía no puede estar vacía'),
    body('usuario.id').optional()
        .isUUID().withMessage('El id del usuario debe ser un UUID'),
    body('usuario.cuenta_id').optional()
        .isUUID().withMessage('El id de cuenta del usuario debe ser un UUID'),
    validateRequest
]

const updateUsuarioValidator = [
    body('usuario').isObject({ strict: true }).withMessage('El usuario es requerido'),
    body('usuario.primer_nombre').optional()
        .isString().withMessage('El primer nombre debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El primer nombre no puede estar vacío')
        .bail().isLength({ max: 50 }).withMessage('El primer nombre no puede exceder 50 caracteres'),
    body('usuario.segundo_nombre').optional()
        .isString().withMessage('El segundo nombre debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El segundo nombre no puede estar vacío')
        .bail().isLength({ max: 50 }).withMessage('El segundo nombre no puede exceder 50 caracteres'),
    body('usuario.apellido_paterno').optional()
        .isString().withMessage('El apellido paterno debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El apellido paterno no puede estar vacío')
        .bail().isLength({ max: 50 }).withMessage('El apellido paterno no puede exceder 50 caracteres'),
    body('usuario.apellido_materno').optional()
        .isString().withMessage('El apellido materno debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El apellido materno no puede estar vacío')
        .bail().isLength({ max: 50 }).withMessage('El apellido materno no puede exceder 50 caracteres'),
    body('usuario.puesto').optional()
        .isString().withMessage('El puesto debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El puesto no puede estar vacío')
        .bail().isLength({ max: 100 }).withMessage('El puesto no puede exceder 100 caracteres'),
    body('usuario.foto_perfil').optional()
        .isString().withMessage('La foto de perfil debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('La foto de perfil no puede estar vacía')
        .bail().isLength({ max: 255 }).withMessage('La foto de perfil no puede exceder 255 caracteres'),
    body('usuario.biografia').optional()
        .isString().withMessage('La biografía debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('La biografía no puede estar vacía'),
    body('usuario.cuenta_id').optional()
        .isUUID().withMessage('El id de cuenta del usuario debe ser un UUID'),
    validateRequest
]

module.exports = {
    createUsuarioValidator,
    updateUsuarioValidator
}
