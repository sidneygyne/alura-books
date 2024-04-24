function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} 
    })
    return livrosComDesconto
}

// ...   faz copia do objeto para outro objeto na seguencia do codigo instruçoes so para alterar o preço