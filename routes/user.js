const express = require('express');
const router = express.Router();
const userModule = require('../modules/userModule');

router.post('/create', userModule.createuser);
router.get('/get', userModule.getuser);
router.put('/update/:id', userModule.updateuser);
router.delete('/delete/:id', userModule.deleteuser);

module.exports = router;
