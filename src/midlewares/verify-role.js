const CustomError = require("../utils/custom-error")

const verifyRol = (rol) => (req, res, next) => {
    if (!req.user) {
        return next(new CustomError('Se requiere autenticación', 401))
    }
    if (req.user.rol !== rol) {
        return next(new CustomError('Usuario no autorizado', 403))
    }
    return next()
}

module.exports = verifyRol