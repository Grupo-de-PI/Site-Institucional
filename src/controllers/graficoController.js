var graficoModel = require("../models/graficoModel");

function listarLinha(req, res) {
    console.log("Cheguei no controller, vamoo!");
    graficoModel.listarLinha().then(
        function (resultado) {
            console.log("To na função do controller");
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("Deu merda aqui no controller: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

module.exports = {
    listarLinha
}