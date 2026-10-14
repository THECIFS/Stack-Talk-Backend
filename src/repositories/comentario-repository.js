const prisma = require('../config/prisma')

const create = async (comentario, usuario_id, publicacion_id) => {
    const newComentario = await prisma.comentario.create({
        data : {
            ...comentario,
            usuario_id: usuario_id,
            publicacion_id: publicacion_id
        }
    })
    return newComentario
}

const deleteById = async (id) => {
    const comentario = await prisma.comentario.delete({
        where:{
            id:id
        }
    })
    return comentario
}

const findById = async (id) => {
    const comentario = await prisma.comentario.findFirst({
        where:{
            id:id
        }
    })
    return comentario
}

const countAll = async () => {
    const count = await prisma.comentario.count()
    return count
}

module.exports = {create, deleteById,findById,countAll}