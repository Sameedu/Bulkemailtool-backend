const express = require('express');
const router = express.Router();
const customerModule = require('../modules/customerModule');


router.post('/create', customerModule.createcustomer);
router.get('/get', customerModule.getcustomer);
router.get('/listemailids', customerModule.listemailids);
router.put('/update/:id', customerModule.updatecustomer);
router.delete('/delete/:id', customerModule.deletecustomer);

module.exports = router;