const produtosController = {
  get:(req,res) => {
    res.render ('produtos')
  }
}

const formularioController = {
  get:(req, res) =>{
    res.render ('addProdutos')
  }
}

module.exports = produtosController