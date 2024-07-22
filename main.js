// Faça um script de javascript que gerencia uma biblioteca, o usuário pode adicionar um livro (o livro deve conter os atributos nome, autor, tamanho (número de páginas), gênero (crie um array com os possíveis gêneros já declarados)), remover um livro, listar todos os livros, e atualizar um livro.

// Será utilizado:
// Entrada e Saída
// Funções (Utilize function, arrow function e função anônima)
// Módulos (Toda a lógica referente às funções de CRUD e o armazenamento (array dos livros) deve estar em um módulo separado do arquivo principal)
// Git/Github (Crie um repositório publico, e envie nesta atividade o link)

const prompt = require("prompt-sync")({ sigint: true });

const livros = [];

function create(livro) {
    livros.push(livro)
}

const read = () => {
    if(livros.length === 0) {
        console.log(`Nenhum livro encontrado.`)
    }
    livros.forEach((livro, indice) => {
        console.log(`${indice + 1} - ${livro}`)
    })
}

const update = function(livro, indice) {
    livros[indice] = livro
}

const destroy = indice => {
    if(livros.includes(indice)) {
        livros.splice(indice, 1)
        console.log(`Livro Removido!`)
    }
    livros.splice(indice, 1)
}

module.exports = {
    create,
    read,
    update,
    destroy
}