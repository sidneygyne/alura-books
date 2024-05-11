let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreços)

function ordenarLivrosPorPreços() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}







// SOBRE O CODIGO

// Seleção do botão de ordenação:
// O elemento HTML do botão de ordenação por preço é selecionado e armazenado na variável "btnOrdenarPorPreco".
// Um evento de clique é adicionado a esse botão, chamando a função "ordenarLivrosPorPreços()".

// Função "ordenarLivrosPorPreços()":
// Essa função é chamada quando o botão de ordenação por preço é clicado.
// Ela utiliza o método "sort()" para ordenar a lista de "livros" livros com base no preço.
// A função de comparação passada para o "sort()" compara os preços de dois livros (a.preco - b.preco). Isso faz com que a lista seja ordenada em ordem crescente de preço.
// Após a ordenação, a função "exibirOsLivrosNaTela()" é chamada, passando a lista de livros ordenados como argumento, para atualizar a exibição na tela.

// Essa implementação está de acordo com o contexto da aula, pois utiliza o método "sort()" para ordenar a lista de livros com base no preço.
 
// Algumas observações adicionais:
// O método "sort()" é muito útil para ordenar arrays, e a função de comparação passada como argumento determina a ordem da ordenação.
// Nesse caso, a função de "comparação (a, b) => a.preco - b.preco" compara os preços de dois livros e retorna um valor negativo se "a.preco" for menor que "b.preco", um valor positivo se "a.preco" for maior que "b.preco", e zero se forem iguais. Isso faz com que a lista seja ordenada em ordem crescente de preço.
// Após a ordenação, a função "exibirOsLivrosNaTela()" é chamada para atualizar a exibição dos livros na tela.