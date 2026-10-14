const reaccion_service = require('../services/reaccion-service')

const create = async (req, res, next) => {
    try {
        const {publicacion_id, usuario_id} = req.body
        const newReaccion = await reaccion_service.create(publicacion_id, usuario_id)
        res.status(201).json(newReaccion) 
    } catch (error) {
        next(error)
    }
}

const deletByIdPublicacionAndIdUsuario = async (req, res, next) => {
    try {
        const {publicacion_id, usuario_id} = req.params
        await reaccion_service.deleteByIdPublicacionAndIdUsuario(publicacion_id, usuario_id)
        res.status(204).json()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create, deletByIdPublicacionAndIdUsuario
}