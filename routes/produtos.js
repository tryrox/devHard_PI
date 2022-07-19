var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('produtos')
  });

router.get('/detalhes', (req,res) => {
  res.render('detalhesProdutos')
})

module.exports = router;
