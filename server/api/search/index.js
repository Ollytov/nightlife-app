'use strict';

var express = require('express');
var controller = require('./search.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:val', controller.findSearch);

router.get("/loc/:loc", controller.search);

module.exports = router;