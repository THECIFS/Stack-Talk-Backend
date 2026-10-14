const CustomError = require('../utils/custom-error')

const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    const response = {
        status : err.status,
        message : err.message,
    }

    res.status(err.statusCode).json(response)
}

module.exports = globalErrorHandler