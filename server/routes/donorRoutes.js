const express = require('express');
const router = express.Router();
const {getDonors,loginDonor,updateDonor,deleteDonor,registerDonor,getDonorDetails} = require('../controllers/donor.controller');


router.get('/',getDonors);
// router.post('/register', createDonor);
router.post('/register', registerDonor);
router.post('/login', loginDonor);
router.post('/getDonorDetails', getDonorDetails);
router.put('/:id', updateDonor);
router.delete('/:id',deleteDonor);
router.put('/updateDonorDetails', updateDonor);

module.exports = router;