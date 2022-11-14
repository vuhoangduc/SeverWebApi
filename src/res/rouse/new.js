const express = require('express');
const router = express.Router();
const newControler = require('../../app/controlers/NewControler');
 
router.use('/:thong',newControler.show);
router.use('/',newControler.index);

module.exports = router;