var buscarModel = require("../models/buscarModels");

function buscarQtd(req, res) {

    var id_empresa = parseInt(req.params.id_empresa);

    buscarModel.buscarQtd(id_empresa).then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

function atualizarLinha(req, res) {

    var qtdEmpresa = parseInt(req.params.qtdEmpresa);
    var id_empresa = parseInt(req.params.id_empresa);

    if (isNaN(qtdEmpresa)) {
        return res.status(400).json({ erro: "Parâmetro qtdEmpresa inválido ou ausente" });
    }

    buscarModel.atualizarLinha(qtdEmpresa, id_empresa).then(
        function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

function atualizarBarra(req, res) {

    var id_empresa = parseInt(req.params.id_empresa);

    buscarModel.atualizarBarra(id_empresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
    })

}



module.exports = {
    buscarQtd,
    atualizarLinha,
    atualizarBarra
}