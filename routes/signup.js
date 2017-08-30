const model = require('../models/user');
const express = require('express');
const router = express.Router();

router.get('/',model.getalluser)
router.post('/',model.signup)
router.delete('/:id', model.deleteuser)

module.exports = router;
