const opinion_repository = require('../repositories/opinion-repository')
const CustomError = require('..//utils/custom-error')

const create = async (opinion) => {
    const newOpinion = await opinion_repository.create(opinion)
    if(!newOpinion) throw new CustomError('La opinion no se pudo crear', 400)
    return newOpinion
}

const findById = async (id) => {
    const opinion = await opinion_repository.findById(id)
    if(!opinion) throw new CustomError('La opinion no existe', 404)
    return opinion
}

const updateById = async (id, opinion) => {
    await findById(id)
    const opinionUpdate = await opinion_repository.updateById(id, opinion)
    if(!opinionUpdate) throw new CustomError('La opinion no se pudo actualizar', 400)
    return opinionUpdate
}

const deleteById = async (id) => {
    await findById(id)
    const opinion = await opinion_repository.deleteById(id)
    if(!opinion) throw new CustomError('La opinion no se pudo eliminar', 400)
    return opinion
}

const findToLimitAndOffset = async (limit, offset) => {
    const opiniones = await opinion_repository.findToLimitAndOffset(limit, offset)
    return opiniones
}

module.exports = {
    create, findById, updateById, deleteById, findToLimitAndOffset
}