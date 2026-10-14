const publicacion_foto_repository = require('../repositories/publicacion-foto-repository')
const CustomError = require('../utils/custom-error')
const cloudinary = require('../config/cloudinary')

const create = async (publicacion, fotos) => {
    const fotosSubidas = fotos.map(
        async(base64Url)=>{
            const uploadStream = await cloudinary.uploader.upload(
                base64Url, {
                    folder: 'stacktalk'
                }
            )
            return  uploadStream.secure_url
        }
    )

    const urlsCloudinary = await Promise.all(fotosSubidas)
    if(!urlsCloudinary || urlsCloudinary.length === 0) throw new CustomError('Fotos no subidas con exito', 400)

    const newPublicacion = await publicacion_foto_repository.create(publicacion, urlsCloudinary)
    if(!newPublicacion) throw new CustomError('La publicacion no creo', 400)
    return newPublicacion
}

const findById = async (id) => {
    const publicacion = await publicacion_foto_repository.findById(id)
    if(!publicacion) throw new CustomError('No se encontro la publicacion', 404)
    return publicacion
}

const updateById = async (id, publicacion) => {
    await findById(id)
    const publicacionUpdate = await publicacion_foto_repository.updateById(id, publicacion)
    if(!publicacionUpdate) throw new CustomError('No se pudo actualizar la publicacion', 400)
    return publicacionUpdate
}

const deleteById = async (id) => {
    await findById(id)
    const publicacion = await publicacion_foto_repository.deleteById(id)
    if(!publicacion) throw new CustomError('La publicacion no se elimino', 400)
    return publicacion
}

const findAllToLimitAndOffset = async (limit, offset) => {
    const publicaciones = await publicacion_foto_repository.findAllToLimitAndOffset(limit, offset)
    return publicaciones
}

const countAll = async () => {
    const count = await publicacion_foto_repository.countAll()
    return count
}

module.exports = {
    create, findById, findAllToLimitAndOffset, updateById, deleteById, countAll
}