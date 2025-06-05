var graficoModel = require("../models/graficoModel");

function listarLinha(req, res) {
    console.log("1 - Cheguei no controller da linha, vamoo!");
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

function listarNovasLinhas(req, res) {
    console.log("1 - Cheguei no controller da nova linha, vamoo!");
    graficoModel.listarNovasLinhas().then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("1 - Deu merda aqui no controller da nova linha: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

function listarBarra(req, res) {
    console.log("2 - Cheguei no controller da barra, vamoo!");
    graficoModel.listarBarra().then(
        function (resultado) {
            console.log("2 - To na função do controller da barra");
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

    let id_empresa = req.param.id_empresa;
    req.params.id_empresa;

    console.log("2 - Cheguei no controller da monitoramentoIndividual, vamoo!");

    graficoModel.monitoramentoIndividual(id_empresa).then(
        function (resultado) {
            console.log("2 - To na função do controller da monitoramentoIndividual");
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
    listarNovasLinhas,
    monitoramentoIndividual
}