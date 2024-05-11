function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}






// SOBRE O CODIGO

// Função "calcularValorTotalDeLivrosDisponiveis()":
// Essa função recebe uma lista de livros como argumento.
// Ela utiliza o método "reduce()" para calcular o valor total dos livros disponíveis.
// O r"educe()" recebe dois argumentos:
// "acc": o acumulador, que inicialmente é 0.
// "livro": cada livro da lista.
// Para cada livro, o preço do livro é adicionado ao acumulador.
// Após iterar sobre todos os livros, o valor total é retornado.
// O método "toFixed(2)" é usado para formatar o valor total com duas casas decimais.
// Essa implementação está de acordo com o contexto da aula, pois utiliza o método "reduce()" para calcular o valor total dos livros disponíveis.

// Algumas observações adicionais:
// O método "reduce()" é muito poderoso e versátil, permitindo realizar diversas operações de transformação e acumulação em arrays.
// Nesse caso, o reduce() é usado para somar os preços de todos os livros disponíveis.
// O valor inicial do acumulador (0) é passado como segundo argumento da função "reduce()".
// O uso do "toFixed(2)" garante que o valor total seja exibido com duas casas decimais.