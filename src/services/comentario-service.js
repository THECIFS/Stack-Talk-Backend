const comentario_repository = require('../repositories/comentario-repository')
const CustomError = require('../utils/custom-error')

const create = async (comentario) => {
    const newComentario = await comentario_repository.create(comentario)
    return newComentario
}

const deleteById = async (id) => {
    const exist = await comentario_repository.findById(id)
    if(!exist) throw new CustomError('El comentario no existe', 404)
    const comentario = await comentario_repository.deleteById(id)
    return comentario
}

const countAll = async () => {
    const count = await comentario_repository.countAll()
    return count
}

module.exports = {
    create, deleteById, countAll
}