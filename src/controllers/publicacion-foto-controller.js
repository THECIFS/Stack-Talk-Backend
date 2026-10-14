const publicacion_foto_service = require('../services/publicacion-foto-service')

const create = async (req, res, next) => {
    try {
        const {publicacion, fotos} = req.body
        console.log(publicacion)
        const newPublicacion = await publicacion_foto_service.create(publicacion, fotos)
        res.status(201).json(newPublicacion)
    } catch (error) {
        next(error)
    }
}

const findById = async (req, res, next) => {
    try {
        const id = req.params.id
        const publicacion = await publicacion_foto_service.findById(id)
        res.status(200).json(publicacion)
    } catch (error) {
        next(error)
    }
}

const findAllToLimitAndOffset = async (req, res, next) => {
    try {
        const limit = req.params.limit
        const offset = req.params.offset
        const publicaciones = await publicacion_foto_service.findAllToLimitAndOffset(limit, offset)
        res.status(200).json(publicaciones)
    } catch (error) {
        next(error)
    }
}

const updateById = async (req, res, next) => {
    try {
        const id = req.params.id
        const publicacion = req.body
        const publicacionUpdate = await publicacion_foto_service.updateById(id, publicacion)
        res.status(200).json(publicacionUpdate)
    } catch (error) {
        next(error)
    }
}

const deleteById = async (req, res, next) => {
    try {
        const id = req.params.id
        await publicacion_foto_service.deleteById(id)
        res.status(204).json()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create, findById, findAllToLimitAndOffset, updateById, deleteById
}