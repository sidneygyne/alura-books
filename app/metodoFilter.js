const botoes = document.querySelectorAll(".btn")
botoes.forEach(btn => btn.addEventListener ('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
}
    }
       

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}


function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisoniveis.innerHTML = `
    <section id="valor_total_livros_disponiveis">
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    </section>
    `
}

// operador ternario
// o treixo a baixo filtra os livros disponivel caso clique for no botao disponivel, 
// categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : 
// caso contrario o trecho aseguir, filtra or categoria nos demais botoes
// livros.filter(livro => livro.categoria == categoria)


// SOBRE CODIGO

// Seleção dos botões:
// Os botões de filtro são selecionados "usando document.querySelectorAll(".btn")" e armazenados na variável "botoes".
// Cada botão tem um evento de clique adicionado, chamando a função "filtrarLivros()".

// Função" filtrarLivros()":
// Essa função é chamada quando um botão de filtro é clicado.
// Ela obtém o elemento do botão clicado usando "document.getElementById(this.id)".
// Com base na categoria selecionada (disponível ou outra categoria), a função chama "filtrarPorDisponibilidade() ou filtrarPorCategoria()".
// O resultado da filtragem é armazenado na variável "livrosFiltrados".
// A função "exibirOsLivrosNaTela()" é chamada, passando a lista de livros filtrados como argumento.
// Se a categoria selecionada for "disponível", a função "calcularValorTotalDeLivrosDisponiveis()" é chamada, passando a lista de livros filtrados como argumento.
// O valor total é então exibido na tela usando a função "exibirValorTotalDosLivrosDisponiveisNaTela()".

// Função "filtrarPorCategoria()":
// Essa função recebe uma categoria como argumento e retorna uma nova lista de livros filtrados por essa categoria.Função "filtrarPorDisponibilidade()":
// Essa função retorna uma nova lista de livros filtrados por disponibilidade (quantidade maior que 0).

// Função "exibirValorTotalDosLivrosDisponiveisNaTela()":
// Essa função recebe o valor total dos livros disponíveis como argumento.
// Ela atualiza o conteúdo de um elemento HTML com o valor total.

// Esse código parece estar implementando a funcionalidade de filtrar os livros com base na categoria ou disponibilidade, e também calcular e exibir o valor total dos livros disponíveis. Essa implementação está de acordo com o contexto da aula de "JavaScript: métodos de array" da Alura.