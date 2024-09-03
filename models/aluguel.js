const livro_controller = require("../controllers/aluguel.js")
const estudante_controller = require("../controllers/estudante.js")

let nextId = 1

const model = (body, id = nextId++) => {
    if(body.nome != undefined &&
        body.data_aluguel != "" &&
        body.devolucao != "" &&
        livro_controller.show(body.livro_id),
        estudante_controller.show(body.estudante_id)
    ) {
        return {
            id,
            data_aluguel: body.data_aluguel,
            devolucao: body.devolucao,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id
        }
    }
}

module.exports = model