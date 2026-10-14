const cuenta_usuario_service = require('../services/cuenta-usuario-service')
const { generateToken, verifyToken } = require('../utils/jwt')

const verify_sesion = async (req, res, next) => {
    try {
        const token = req.token
        const decoded = verifyToken(token)
        const cuenta = {
            ...decoded
        }
        res.status(200).json(cuenta)
    } catch (error) {
        next(error)
    }
}

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
        const token = await generateToken(cuenta)
        res.status(200).json({
            token : token,
            cuenta : {
                ...cuenta
            }
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const countAll = async (req, res, next) => {
    try {
        const count = await cuenta_usuario_service.countAll()
        res.status(200).json(count)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createCuentaUsuario, findById, deleteById, updateById, login, countAll, verify_sesion
}