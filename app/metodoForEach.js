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


