let produtos = require('../data/produtosData')

module.exports = {
  findAll() {
    return produtos;
  }
},

  findById(id){
  return produtos.filter(produto => produto.id == id)
}

findByCategoria(categoria){
  return produtos.filter(produto => produto.categoria == categoria)
}

Stora(data){
  const produto = {
    ...data,
    id: produtos.length + 1
  }

  produtos.push(produto);

  return produtos;
}

update(id, data){
  const produto = produto.find(produto => produto.id == id)

  if (!produto) {
    return "Produto não encontrado";
  }
  produto.nome = data.nome;
  produto.preco = data.preco;
  produto.descricao = data.descricao;
  produto.categoria = data.categoria;

  return produto;
}

destroy(id){
  produtos = produtos.filter(produto => produto.id != id)

  return produtos;
}

