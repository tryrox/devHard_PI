var express = require('express');
const carrinhoController = require('../controllers/carrinhoController');
var router = express.Router();

router.get('/', carrinhoController.get );

module.exports = router;