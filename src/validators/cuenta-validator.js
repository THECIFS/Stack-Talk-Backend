const { body, param } = require('express-validator')
const validateRequest = require('./validate-request')

const createCuentaValidator = [
    body('cuenta').isObject({ strict: true }).withMessage('La cuenta es requerida'),
    body('cuenta.correo')
        .isString().withMessage('El correo debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El correo es requerido')
        .bail().isEmail().withMessage('El correo no tiene un formato válido')
        .bail().isLength({ max: 150 }).withMessage('El correo no puede exceder 150 caracteres'),
    body('cuenta.contrasenia')
        .isString().withMessage('La contraseña debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('La contraseña es requerida')
        .bail().isLength({ max: 255 }).withMessage('La contraseña no puede exceder 255 caracteres'),
    body('cuenta.rol')
        .isString().withMessage('El rol debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El rol es requerido')
        .bail().isLength({ max: 50 }).withMessage('El rol no puede exceder 50 caracteres'),
    body('cuenta.estado')
        .isString().withMessage('El estado debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El estado es requerido')
        .bail().isLength({ max: 50 }).withMessage('El estado no puede exceder 50 caracteres'),
    body('cuenta.id').optional()
        .isUUID().withMessage('El id de la cuenta debe ser un UUID'),
    body('cuenta.fecha_creacion').optional()
        .isISO8601().withMessage('La fecha de creación de la cuenta no es válida'),
    validateRequest
]

const updateCuentaValidator = [
    body('cuenta').isObject({ strict: true }).withMessage('La cuenta es requerida'),
    body('cuenta.id').isUUID().withMessage('El id de la cuenta debe ser un UUID'),
    body('cuenta.correo').optional()
        .isString().withMessage('El correo debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El correo no puede estar vacío')
        .bail().isEmail().withMessage('El correo no tiene un formato válido')
        .bail().isLength({ max: 150 }).withMessage('El correo no puede exceder 150 caracteres'),
    body('cuenta.contrasenia').optional()
        .isString().withMessage('La contraseña debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('La contraseña no puede estar vacía')
        .bail().isLength({ max: 255 }).withMessage('La contraseña no puede exceder 255 caracteres'),
    body('cuenta.rol').optional()
        .isString().withMessage('El rol debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El rol no puede estar vacío')
        .bail().isLength({ max: 50 }).withMessage('El rol no puede exceder 50 caracteres'),
    body('cuenta.estado').optional()
        .isString().withMessage('El estado debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El estado no puede estar vacío')
        .bail().isLength({ max: 50 }).withMessage('El estado no puede exceder 50 caracteres'),
    body('cuenta.fecha_creacion').optional()
        .isISO8601().withMessage('La fecha de creación de la cuenta no es válida'),
    validateRequest
]

const loginCuentaValidator = [
    body('correo')
        .isString().withMessage('El correo debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('El correo es requerido')
        .bail().isEmail().withMessage('El correo no tiene un formato válido')
        .bail().isLength({ max: 150 }).withMessage('El correo no puede exceder 150 caracteres'),
    body('contrasenia')
        .isString().withMessage('La contraseña debe ser texto')
        .bail().notEmpty({ ignore_whitespace: true }).withMessage('La contraseña es requerida')
        .bail().isLength({ max: 255 }).withMessage('La contraseña no puede exceder 255 caracteres'),
    validateRequest
]

const cuentaIdValidator = [
    param('id').isUUID().withMessage('El id de la cuenta debe ser un UUID'),
    validateRequest
]

module.exports = {
    createCuentaValidator,
    updateCuentaValidator,
    loginCuentaValidator,
    cuentaIdValidator
}
