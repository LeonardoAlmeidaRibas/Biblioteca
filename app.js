const prompt = require('prompt-sync')();
const {livros, create, read, update, destroy} = require("./main.js");

while (true) {
    console.log(`
        //     === Menu de Cadastro de livros ===
        //     1. Adicionar um novo livro
        //     2. Listar todos os livros
        //     3. Atualizar um livro
        //     4. Remover um livro
        //     0. Sair
        //     `);

    let opcao = prompt("Escolha uma opção: ");
    switch (opcao) {
        case ('1'):
            let nome = prompt("Nome do Livro: ");
            let autor = prompt("Nome do Autor: ");
            let tamanho = prompt("Número de Páginas: ");
            generos = prompt("Gênero do Livro: ")
            
        case ('2'):
            if (livros.length === 0) {
            console.log("Nenhum livro adicionado...");
            break;
            } else {
            livros.forEach((livros, index) => {
                console.log(
                `${index + 1}. ${livros.nome} - ${livros.autor} - ${livros.tamanho} - ${
                    generos
                }`
                );
            });
            }
            break;
        case ('3'):
            console.log('Digite o número do livro a ser alterado: ');
            livros.forEach((livros, index) => {
                console.log(`
                    ${index + 1}. ${livros.nome} - ${livros.autor} - ${livros.tamanho} - ${generos}\n
                `);
            });
            let escolha = prompt('Livro a ser modificado: ');
            livros.pop(escolha - 1);
            nome = prompt('Nome do livro: ');
            autor = prompt('Nome do autor: ');
            tamanho = prompt('Número de páginas: ');
            generos = prompt('Gênero do Livro: ');
            livros.push({ nome, autor, tamanho, generos });
            break;
        case('4'):
            console.log(`digite o numero do livro a ser alterado: `);
            livros.forEach((livros, index) => {
                console.log(`
                    ${index + 1}. ${livros.nome} - ${livros.autor} - ${livros.tamanho} - ${generos}\n
                `);
            });
            escolha = prompt('Livro a ser excluído: ');
            livros.pop(escolha - 1);
            break;
        case('0'):
            console.log('Saindo do sistema. Até logo!');
            process.exit();
        break;
        defaut:
            console.log('Opção inválida. Tente novamente.');
        break;
    }
    }

livros.create({
    nome: "Torre Negra",
    autor: "Stephen King",
    tamanho: 1000,
    genero: "fantasia"
})

read()

update ({
    nome: "Chamado de Cthullu",
    autor: "HP Lovecraft",
    tamanho: 600,
    genero: "terror"
})

destroy(0)