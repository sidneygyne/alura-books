// busca informaçoes do do arquivo requisicao.txt
let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()


async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    console.table(livros)
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}



// busca informaçoes do do arquivo requisicao.txt
// let livros = []
// const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
// getBuscasLivrosDaAPI()

// async function getBuscasLivrosDaAPI() {
//     const res = await fetch(endpointDaAPI)
//     livros = await res.json()
//     console.table(livros)


// SOBRE CODIGO

// Declaração de variáveis:
// "livros": uma array vazia que será preenchida com os dados da API.
// "endpointDaAPI": a URL da API que será acessada para obter os dados dos livros.
// A função "getBuscarLivrosDaAPI()" é chamada para iniciar o processo de busca e exibição dos livros.

// Função "getBuscarLivrosDaAPI()":
// Essa função é assíncrona e utiliza o "fetch" para acessar a API e obter os dados dos livros.
// Os dados são armazenados na variável "livros" após a conversão da resposta da API para JSON.
// Em seguida, a função "aplicarDesconto()" é chamada, passando a lista de livros como argumento.
// Por fim, a função "exibirOsLivrosNaTela()" é chamada, passando a lista de livros com desconto como argumento.

// Esse código parece estar implementando a funcionalidade de buscar e exibir uma lista de livros na tela, aplicando um desconto aos preços. No entanto, não posso analisar em detalhes as funções "aplicarDesconto() "e" exibirOsLivrosNaTela()", pois elas não foram fornecidas no contexto da sua pergunta.
