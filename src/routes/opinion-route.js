const express = require('express')
const opinion_router = express.Router()
const opinion_controller = require('../controllers/opinion-controller')

opinion_router.post('', opinion_controller.create)
opinion_router.get('/:id', opinion_controller.findById)
opinion_router.put('/:id', opinion_controller.updateById)
opinion_router.delete('/:id', opinion_controller.deleteById)

module.exports = opinion_router