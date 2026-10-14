const cuenta_usuario_service = require('../services/cuenta-usuario-service')

const createCuentaUsuario = async(req, res, next) =>{
    try{
        const {cuenta, usuario} = req.body
        const newCuentaUsuario = await cuenta_usuario_service.createCuentaUsuario(cuenta, usuario)
        res.status(201).json(newCuentaUsuario)
    }catch(error){
        next(error)
    }
}

const findById = async (req, res, next) => {
    try {
        const id = req.params.id
        const cuentaUsuario = await cuenta_usuario_service.findById(id)
        res.status(200).json(cuentaUsuario)
    } catch (error) {
        next(error)
    }
}

const deleteById = async (req, res, next) => {
    try {
        const id = req.params.id
        await cuenta_usuario_service.deleteById(id)
        res.status(204).json()
    } catch (error) {
        next(error)
    }
}

const updateById = async (req, res, next) => {
    try {
        const {cuenta, usuario} = req.body
        const cuentaUpdate = await cuenta_usuario_service.updateById(cuenta.id, cuenta, usuario)
        res.status(200).json(cuentaUpdate)
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const {correo, contrasenia} = req.body
        const cuenta = await cuenta_usuario_service.findByCorreo(correo, contrasenia)
        res.status(200).json(cuenta)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    createCuentaUsuario, findById, deleteById, updateById, login
}