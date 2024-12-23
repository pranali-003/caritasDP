const express = require('express');
const router = express.Router();
const NgoInfo = require('../models/ngo.info')
const {createNgo,getNgoById, getNgo,updateNgo, deleteNgo} = require('../controllers/ngo.controller')



router.get('/',getNgo);
router.post('/',createNgo);
router.get('/:id',getNgoById);
router.put('/:id', updateNgo);
router.delete('/:id', deleteNgo);



module.exports = router;
