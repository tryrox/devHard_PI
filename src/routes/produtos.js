var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('produtos')
  });

router.get('/detalhes', (req,res) => {
  res.render('detalhesProdutos')
})

module.exports = router;

//Rota do formulario
app.get("/addProdutos", (req, res) =>{
  res.send("Página do formulário")
});



//Criar um produto
server.post("/produtos", (req, res)=>{
  const {name} = req.body;
  produto.push(name);

  return res.json(produto)
});



