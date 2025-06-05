var graficoModel = require("../models/graficoModel");

function listarLinha(req, res) {
    // console.log("1 - Cheguei no controller da linha, vamoo!");
    graficoModel.listarLinha().then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("1 - Deu merda aqui no controller da linha: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}


function listarBarra(req, res) {
    // console.log("2 - Cheguei no controller da barra, vamoo!");
    graficoModel.listarBarra().then(
        function (resultado) {
            // console.log("2 - To na função do controller da barra");
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("2 - Deu merda aqui no controller da barra: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

function monitoramentoIndividual(req, res) {

    var empresaID = req.params.id_empresa;
    
    console.log("2 - Cheguei no controller da monitoramentoIndividual, vamoo!");
    console.log('EmpresaID: ', empresaID)

    graficoModel.monitoramentoIndividual(empresaID).then(
        function (resultado) {
            console.log("2 - To na função do controller da monitoramentoIndividual");
            console.log("Dados do BD referente a monitoramento individual: ", resultado)
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("2 - Deu merda aqui no controller da monitoramentoIndividual: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

module.exports = {
    listarLinha,
    listarBarra,
    monitoramentoIndividual

}