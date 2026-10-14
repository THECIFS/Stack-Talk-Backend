const opinion_service = require('../services/opinion-service')

const create = async (req, res, next) => {
    try {
        const opinion = req.body
        const newOpinion = await opinion_service.create(opinion)
        res.status(201).json(newOpinion)
    } catch (error) {
        next(error)
    }
}

const findById = async (req, res, next) => {
    try {
        const id = req.params.id
        const opinion = await opinion_service.findById(id)
        res.status(200).json(opinion)
    } catch (error) {
        next(error)
    }
}

const updateById = async (req, res, next) => {
    try {
        const id = req.params.id
        const opinion = req.body
        const opinionUpdate = await opinion_service.updateById(id, opinion)
        res.status(200).json(opinionUpdate)
    } catch (error) {
        next(error)
    }
}

const deleteById = async (req, res, next) => {
    try {
        const id = req.params.id
        await opinion_service.deleteById(id)
        res.status(204).json()
    } catch (error) {
        next(error)
    }
}

const findToLimitAndOffset = async (req, res, next) => {
    try {
        const {limit, offset} = req.params
        const comentarios = await opinion_service.findToLimitAndOffset(limit, offset)
        res.status(200).json(comentarios)
    } catch (error) {
        next(error)
    }
}

module.exports= {
    create, findById, updateById, deleteById, findToLimitAndOffset
}