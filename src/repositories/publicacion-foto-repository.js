const prisma = require('../config/prisma')

const create = async (publicacion, fotos) => {
    const newPublicacion = await prisma.publicacion.create(
        {
            data: {
                ...publicacion,
                fotos: {
                    create: fotos.map(f=>({
                        url_imagen : f
                    }))
                }
            },
            include:{
                fotos: true
            }
        }
    )
    return newPublicacion
}

const findById = async (id) => {
    const publicacion = await prisma.publicacion.findFirst({
        where:{
            id : id
        }
    })

    return publicacion
}

const findAllToLimitAndOffset = async (limit, offset) => {
    const publicaciones = await prisma.publicacion.findMany({
        take:Number(limit),
        skip: Number(offset),
        include:{
            fotos: true
        },
        orderBy: {
            fecha_creacion: 'desc'
        }
    })
    return publicaciones
}

const updateById = async (id, publicacion) => {
    const publicacionUpdate = await prisma.publicacion.update({
        where:{
            id : id
        },
        data : publicacion
    })
    return publicacionUpdate
}

const deleteById = async (id) => {
    const publicacion = await prisma.publicacion.delete({
        where:{
            id:id
        }
    })
    return publicacion
}

const countAll = async()=>{
    const count = await prisma.publicacion.count()
    return count
}

module.exports = {
    create, findById, findAllToLimitAndOffset, updateById, deleteById, countAll
}