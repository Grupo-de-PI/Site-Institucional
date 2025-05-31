var database = require("../database/config");

function listarLinha() {
    console.log("Cheguei no models: /n");
    var instrucao = `
        select HoraRegistro, valor from vw_historico_registros ;
    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    listarLinha
};