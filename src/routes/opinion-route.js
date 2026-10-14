const express = require('express')
const opinion_router = express.Router()
const opinion_controller = require('../controllers/opinion-controller')
const {
    createOpinionValidator,
    updateOpinionValidator,
    opinionIdValidator
} = require('../validators/opinion-validator')

opinion_router.post('', createOpinionValidator, opinion_controller.create)
opinion_router.get('/:id', opinionIdValidator, opinion_controller.findById)
opinion_router.put('/:id', updateOpinionValidator, opinion_controller.updateById)
opinion_router.delete('/:id', opinionIdValidator, opinion_controller.deleteById)
opinion_router.get('/:limit/:offset', opinion_controller.findToLimitAndOffset)


module.exports = opinion_router