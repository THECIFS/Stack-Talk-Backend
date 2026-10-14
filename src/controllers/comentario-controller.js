const comentario_service = require('../services/comentario-service')

const create = async (req, res, next) => {
    try {
        const comentario = req.body
        const newComentario = await comentario_service.create(comentario)
        res.status(201).json(newComentario)
    } catch (error) {
        next(error)
    }
}

const deleteById = async (req, res, next) => {
    try {
        const id =  req.params.id
        await comentario_service.deleteById(id)
        res.status(204).json()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create, deleteById
}