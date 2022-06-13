const express = require('express');
const router = express.Router();
const groupModule = require('../modules/groupModule');



router.post('/createmailgroup', groupModule.createmailgroup);
router.get('/listemailgroupmembers/:groupid', groupModule.listemailgroupmembers);
router.get('/listmailgroup', groupModule.listmailgroup);
router.post('/addmemebers/:groupid', groupModule.addmemebers);
router.post('/deletemembers/:groupid', groupModule.deletemembers);
router.post('/deletemailgroup/:groupid', groupModule.deletemailgroup);

module.exports = router;