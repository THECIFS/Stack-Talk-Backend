const prisma = require('../config/prisma')

const create = async (publicacion_id, usuario_id) => {
    const newReaccion = await prisma.reaccion.create({
        data:{
            publicacion_id:publicacion_id,
            usuario_id:usuario_id
        }
    })
    return newReaccion
}

const findByIdPublicacionAndIdUsuario = async (publicacion_id, usuario_id) => {
    const reaccion = await prisma.reaccion.findFirst({
        where: {
            AND: {
                publicacion_id:publicacion_id,
                usuario_id:usuario_id
            }
        }
    })
    return reaccion
}

const deleteByIdPublicacionAndIdUsuario = async (publicacion_id, usuario_id) => {
    const reaccion = await prisma.reaccion.delete({
        where:{
            usuario_id_publicacion_id:{
                publicacion_id:publicacion_id,
                usuario_id:usuario_id
            }
        }
    })
    return reaccion
}

module.exports = {
    create, deleteByIdPublicacionAndIdUsuario,findByIdPublicacionAndIdUsuario
}