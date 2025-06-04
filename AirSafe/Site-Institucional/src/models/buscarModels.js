var database = require("../database/config");

function buscarQtd() {
    var instrucao = `
       select count(distinct(nome_loc)) as num_loc from vw_historico_registros 
        where codigo = 'EF345';
    `;

    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function atualizarLinha(qtdEmpresa) {

    var qtdEmpresa = parseInt(qtdEmpresa);

    var instrucao= `
    SELECT vhr.nome_loc, valor AS media, DATE_FORMAT(HoraRegistro, '%H:%i:%s') AS HoraRegistro
        FROM vw_historico_registros AS vhr
        JOIN (
            SELECT nome_loc, MAX(HoraRegistro) AS UltimoHorario
            FROM vw_historico_registros
            WHERE codigo = 'EF345'
            GROUP BY nome_loc
        ) AS ultimos
        ON vhr.nome_loc = ultimos.nome_loc AND vhr.HoraRegistro = ultimos.UltimoHorario
        WHERE codigo = 'EF345'
        ORDER BY HoraRegistro asc
        LIMIT ${qtdEmpresa};
    ` ;

    return database.executar(instrucao);
   
}

module.exports = {
    buscarQtd,
    atualizarLinha
};