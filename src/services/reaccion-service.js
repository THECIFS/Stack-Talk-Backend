const reaccion_repository = require('../repositories/reaccion-repository')
const CustomError = require('../utils/custom-error')

const create = async (publicacion_id,usuario_id) => {
    const reaccion = await reaccion_repository.create(publicacion_id, usuario_id)
    return reaccion
}

const deleteByIdPublicacionAndIdUsuario = async (publicacion_id, usuario_id) => {
    const exist = await reaccion_repository.findByIdPublicacionAndIdUsuario(publicacion_id, usuario_id)
    if(!exist) throw new CustomError('La reaccion no existe', 404)
    const reaccion = await reaccion_repository.deleteByIdPublicacionAndIdUsuario(publicacion_id, usuario_id)
    return reaccion
}

const countAll = async () => {
    const count = await reaccion_repository.countAll()
    return count
}


module.exports = {
    create,
    deleteByIdPublicacionAndIdUsuario,
    countAll
}