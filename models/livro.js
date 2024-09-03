const aluguel_controller = require("../controllers/aluguel.js")
const estudante_controller = require("../controllers/estudante.js")

let nextId = 1

const model = (body, id = nextId++) => {

    if (
        body.titulo != "" &&
        body.autor != "" &&
        aluguel_controller.show(body.aluguel_id),
        estudante_controller.show(body.estudante_id),
        body.ano != undefined &&
        body.genero != ""
    ) {
        return {
            id,
            titulo: body.titulo,
            aluguel_id: body.aluguel_id,
            estudante_id: body.estudante_id,
            ano: body.ano,
            genero: body.genero
        }
    }
}

module.exports = model