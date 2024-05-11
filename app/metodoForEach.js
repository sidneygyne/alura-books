const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisoniveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisoniveis.innerHTML = " "
    elementoParaInserirLivros.innerHTML = ''  // limpa a pagina para inserir somente os dados filtrados
    listaDeLivros.forEach(livro => {
       
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' // operador ternario, subistitui if e else com menos codido // verificar estoque/disponibilidade
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p> 
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}



// SOBRE O CODIGO

// Seleção dos elementos HTML:
// "elementoParaInserirLivros": o elemento HTML onde os livros serão inseridos.
// "elementoComValorTotalDeLivrosDisoniveis": o elemento HTML onde o valor total dos livros disponíveis será exibido.

// Função" exibirOsLivrosNaTela()":
// Essa função recebe uma lista de livros como argumento.
// Primeiro, ela limpa o conteúdo dos elementos HTML onde os livros e o valor total serão exibidos.
// Em seguida, ela itera sobre a lista de livros usando "forEach()".
// Para cada livro, ela verifica a disponibilidade (quantidade > 0) e atribui uma classe CSS diferente ao elemento de imagem, dependendo da disponibilidade.
// Então, ela constrói uma string HTML com as informações do livro (imagem, título, autor, preço e categoria) e insere essa string no elemento "elementoParaInserirLivros".

// Essa implementação está de acordo com o contexto da aula, pois utiliza o método forEach() para iterar sobre a lista de livros e exibi-los na tela. Além disso, ela usa um operador ternário para verificar a disponibilidade do livro e aplicar uma classe CSS diferente, o que é uma forma concisa de implementar essa lógica.

// Algumas observações adicionais:
// A função limpa o conteúdo dos elementos HTML antes de inserir os novos dados, evitando a acumulação de informações na tela.
// O uso de template literals (``) facilita a construção da string HTML, tornando o código mais legível.
// O método "toFixed(2)" é usado para formatar o preço do livro com duas casas decimais.


