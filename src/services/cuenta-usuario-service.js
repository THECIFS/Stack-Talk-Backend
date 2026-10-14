const cuenta_usuario_repository = require('../repositories/cuenta-usuario-repository')

const bcrypt = require('bcrypt')
const CustomError = require('../utils/custom-error')
const cloudinary = require('../config/cloudinary')


const createCuentaUsuario = async (cuenta, usuario) =>{
    const newCuentaUsuarioExist = await cuenta_usuario_repository.findByCorreo(cuenta.correo)
    if(newCuentaUsuarioExist) throw new CustomError('El usuario con el correo ya existe', 409)
    const hashedPassword = await bcrypt.hashSync(cuenta.contrasenia, 10)

    const url_foto = await cloudinary.uploader.upload(usuario.foto_perfil, {
        folder: 'stacktalk'
    })

    const newCuentaUsuario = await cuenta_usuario_repository.create({ ...cuenta, contrasenia: hashedPassword }, {
        ...usuario, foto_perfil:url_foto.secure_url
    })
    if(!newCuentaUsuario) throw new CustomError('No se pudo realizar el registro del usuario', 400)
    const dataUsuario = newCuentaUsuario.usuario
    delete newCuentaUsuario.contrasenia
    delete newCuentaUsuario.usuario
    delete dataUsuario.cuenta_id
    const response = {
        cuenta: {
            ...newCuentaUsuario
        },
        usuario : {
            ...dataUsuario
        }
    }
    return response
}

const findById = async (id) => {
    const cuenta = await cuenta_usuario_repository.findById(id)
    if(!cuenta) throw new CustomError('El usuario no existe en la base de datos', 404)
    return cuenta
}

const deleteById = async (id) => {
    await findById(id)
    const cuenta = await cuenta_usuario_repository.deleteById(id)
    if(!cuenta) throw new CustomError('El usuario no se pudo borrar', 400)
    return cuenta
}

const updateById =  async (id, cuenta, usuario) => {
    await findById(id)
    delete usuario.cuenta_id
    const cuentaUsuario = await cuenta_usuario_repository.updateById(id, cuenta, usuario)
    if(!cuentaUsuario) throw new CustomError('El usuario no se modifico', 304)
    return cuentaUsuario
}

const findByCorreo = async (correo, contrasenia) => {
    const correoExist = await cuenta_usuario_repository.findByCorreo(correo)
    if(!correoExist) throw new CustomError('El correo no existe', 404)
    const contraseniaCorrect = bcrypt.compareSync(contrasenia, correoExist.contrasenia)
    if(!contraseniaCorrect) throw new CustomError('Contraseña incorrecta', 401)
    delete correoExist.contrasenia
    return correoExist
}

const countAll = async () => {
    const count = await cuenta_usuario_repository.countAll()
    return count
}

module.exports = {
    createCuentaUsuario, findById, deleteById, updateById, findByCorreo, countAll
}