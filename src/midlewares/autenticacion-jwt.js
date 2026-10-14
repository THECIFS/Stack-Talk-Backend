const jwt = require('jsonwebtoken')
const CustomError = require('../utils/custom-error')
const { verifyToken } = require('../utils/jwt')

const autenticacionJwt = (req, res, next) => {
    const authorization = req.get('authorization')

    if (!authorization) {
        return next(new CustomError('Se requiere un token de autenticación', 401))
    }

    const [scheme, token, ...extraParts] = authorization.trim().split(/\s+/)
    if (scheme?.toLowerCase() !== 'bearer' || !token || extraParts.length > 0) {
        return next(new CustomError('El formato del token debe ser Bearer <token>', 401))
    }

    if (!process.env.JWT_SECRET_KEY) {
        return next(new CustomError('La clave secreta JWT no está configurada', 500))
    }

    try {
        req.user = verifyToken(token)
        req.token = token
        return next()
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return next(new CustomError('El token es inválido o ha expirado', 401))
        }

        return next(error)
    }
}

module.exports = autenticacionJwt
