const controller = require('../controller/signup');
const express = require('express');
const router = express.Router();

router.get('/',controller.getalluser)
router.post('/',controller.signup)
router.delete('/:id', controller.deleteuser)

module.exports = router
