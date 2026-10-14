require('dotenv').config()

const jwt = require('jsonwebtoken')

const generateToken = async (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '1h', algorithm:'HS256'})
}

const verifyToken = (token)=>{
    return jwt.verify(token, process.env.JWT_SECRET_KEY, {
        algorithms: ['HS256']
    })
}


module.exports = {generateToken, verifyToken}