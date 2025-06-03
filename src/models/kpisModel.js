var database = require('../database/config');

function mostrarUltimoVazamento() {

    var instrucao = `
        SELECT 
        DATEDIFF(CURDATE(), MAX(DATE(HoraRegistro))) AS dias
        FROM vw_historico_registros
        WHERE valor > 17 and codigo = 'EF345';
    `;

    return database.executar(instrucao);
}

function mostrarSensoresAtivos () {
    var instrucao = `
        select 
        (select count(id_sensor) from sensor) as sensores_totais,
        (select count(status_sensor) from sensor where status_sensor=1) as sensores_ativos
        from vw_historico_registros 
        where codigo = 'EF345'
        group by sensores_totais, sensores_ativos;
    `;

    return database.executar(instrucao);
}

function mostrarSalaPerigosa () {
    var instrucao = `
        select distinct nome_loc from vw_historico_registros 
            where CURDATE() and valor = (select max(valor) from vw_historico_registros);
    `;

    return database.executar(instrucao);
}

module.exports = {
    mostrarUltimoVazamento,
    mostrarSensoresAtivos,
    mostrarSalaPerigosa
}