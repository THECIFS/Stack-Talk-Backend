const { validationResult } = require('express-validator')
const CustomError = require('../utils/custom-error')

const validateRequest = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const message = errors.array().map(error => error.msg).join('. ')
        return next(new CustomError(message, 400))
    }

    next()
}

module.exports = validateRequest
