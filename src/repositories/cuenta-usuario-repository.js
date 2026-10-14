const prisma = require('../config/prisma')

const create = async (cuenta, usuario) => {
    const newCuenta = await prisma.cuenta.create(
        {
            data: {
                ...cuenta,
                usuario: {
                    create: {
                        ...usuario
                    }
                }
            },
            include: {
                usuario: true
            }
        }
    )
    return newCuenta
}

const findByCorreo = async (correo) => {
    const cuenta = await prisma.cuenta.findFirst({
        where: {
            correo: correo
        },
        include:{
            usuario:true
        }
    })
    return cuenta
}

const deleteById = async(id) =>{
    const cuenta = await prisma.cuenta.delete(
        {
            where: {
                id: id
            }
        }
    )
    return cuenta
}

const updateById = async(id, cuenta, usuario)=>{
    const updateCuenta = await prisma.cuenta.update({
        where: {
            id: id
        },
        data: {
            ...cuenta,
            usuario: {
                update: {
                    ...usuario
                }
            }
        },
        include: {
            usuario: true
        }
    })
    return updateCuenta
}

const findById = async (id) => {
    const cuenta = await prisma.cuenta.findFirst({
        where: {
            id: id
        },
        include: {
            usuario: true
        }
    })
    return cuenta
}

const countAll = async () => {
    const count = await prisma.usuario.count()
    return count
}

module.exports = {
    create, findByCorreo, deleteById, updateById, findById, countAll
}