function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} 
    })
    return livrosComDesconto
}

// ...   faz copia do objeto para outro objeto na seguencia do codigo instruçoes so para alterar o preço

// SOBRE CODIGO

// Declaração da função "aplicarDesconto():"
// Essa função recebe um parâmetro "livros", que é a lista de livros obtida da API.

// Cálculo do desconto:
// É definido um desconto de 30% (0.3) na variável "desconto".

// Aplicação do desconto:
// A função" map()" é utilizada para criar uma nova lista de livros com desconto.
// Para cada livro na lista "livros", é criado um novo objeto com as mesmas propriedades do livro original, mas com o preço atualizado.
// O novo preço é calculado subtraindo-se o valor do desconto (preço * desconto) do preço original do livro.

// Retorno da lista de livros com desconto:
// A função "aplicarDesconto()" retorna a nova lista de livros com os preços atualizados.

// Utiliza o método map() para transformar a lista de livros, aplicando um desconto a cada um deles.

// Algumas observações adicionais:
// A função "map()" é um método de array muito útil para transformar cada elemento de uma lista em algo novo.
// O uso do operador de espalhamento "...livro" é uma forma concisa de criar um novo objeto com as mesmas propriedades do objeto original.
// O cálculo do novo preço com desconto é feito de forma direta, subtraindo-se o valor do desconto do preço original.