var buscarModel = require("../models/buscarModels");

function buscarQtd(req, res) {
    buscarModel.buscarQtd().then(
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

    if (isNaN(qtdEmpresa)) {
        return res.status(400).json({ erro: "Parâmetro qtdEmpresa inválido ou ausente" });
    }

    buscarModel.atualizarLinha(qtdEmpresa).then(
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



module.exports = {
    buscarQtd,
    atualizarLinha
}