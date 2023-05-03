var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/skills', skillsCtrl.index);
router.get('/skills/:id', skillsCtrl.show);

module.exports = router;