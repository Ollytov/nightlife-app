'use strict';

var express = require('express');
var controller = require('./search.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:val', controller.findSearch);

router.post("/loc/:loc", controller.search);

router.get("/add/:loc", controller.search);

module.exports = router;