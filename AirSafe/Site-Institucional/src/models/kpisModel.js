var database = require('../database/config');

function mostrarUltimoVazamento(id_empresa) {

    id_empresa = parseInt(id_empresa);

    var instrucao = `
    SELECT 
        DATE_FORMAT(MAX(HoraRegistro), '%Y/%m/%d') AS data,
        DATEDIFF(CURDATE(), MAX(HoraRegistro)) AS dias
        FROM vw_historico_registros
        WHERE valor > 17 and id_emp = ${id_empresa}
    `;

    return database.executar(instrucao);
}

function mostrarSensoresAtivos(id_empresa) {

    id_empresa = parseInt(id_empresa);

    var instrucao = `
        select 
        (select count(id_sensor) from sensor) as sensores_totais,
        (select count(status_sensor) from sensor where status_sensor=1) as sensores_ativos
        from vw_historico_registros 
        where id_emp = ${id_empresa}
        group by sensores_totais, sensores_ativos;
    `;

    return database.executar(instrucao);
}

function mostrarSalaPerigosa(id_empresa) {

    id_empresa = parseInt(id_empresa);

    var instrucao = `
        select distinct nome_loc from vw_historico_registros 
            where CURDATE() and valor = (select max(valor) from vw_historico_registros) 
            and id_emp = ${id_empresa};
    `;

    return database.executar(instrucao);
}

module.exports = {
    mostrarUltimoVazamento,
    mostrarSensoresAtivos,
    mostrarSalaPerigosa
}