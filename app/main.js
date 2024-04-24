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
