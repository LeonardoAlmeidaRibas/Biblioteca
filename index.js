const express = require("express");

const app = express();
const port = 5000;

app.use(express.json());
// app.use(cep_endereco) // Middleware de uso global

app.listen(port, () => {
    console.log(`Server running in ${port} port`);
});

const estudante_router = require("./routes/estudante.js");
const livro_router = require("./routes/livro.js");
const aluguel_router = require("./routes/aluguel.js");

app.use("/Livro", livro_router);
app.use("/Estudante", estudante_router);
app.use("/Aluguel", aluguel_router);
