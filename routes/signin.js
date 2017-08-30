const controller = require('../controller/signin')
const express = require('express')
const router = express.Router()


router.post('/',controller.signIn)

module.exports = router
