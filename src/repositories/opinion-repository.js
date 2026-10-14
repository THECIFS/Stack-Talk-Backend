const prisma = require('../config/prisma')

const create = async (opinion) => {
    const newOpinion = await prisma.opinion.create({
        data: opinion
    })
    return newOpinion
}

const findById = async (id) => {
    const opinion = await prisma.opinion.findFirst({
        where: {
            id: id
        },
        include: {
            usuario: true
        }
    })
    return opinion
}

const updateById = async (id, opinion) => {
    const opinionUpdate = await prisma.opinion.update({
        where: {
            id: id
        },
        data: opinion
    })
    return opinionUpdate
}

const deleteById = async (id) => {
    const opinion = await prisma.opinion.delete({
        where: {
            id:id
        }
    })
    return opinion
}

const findToLimitAndOffset = async (limit, offset) => {
    const opiniones = await prisma.opinion.findMany({
        take: Number(limit),
        skip: Number(offset),
        orderBy: {
            fecha: 'desc'
        },
        include:{
            usuario:true
        }
    })
    return opiniones
}

module.exports = {
    create, findById, updateById, deleteById, findToLimitAndOffset
}