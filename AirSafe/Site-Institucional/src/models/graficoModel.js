var database = require("../database/config");

function listarLinha() {
    console.log("1 - Cheguei no models da linha: /n");
    var instrucao = `
       select distinct nome_loc, avg(valor) as media, DATE_FORMAT(time(HoraRegistro), '%H:%i:%s') 
        AS HoraRegistro from vw_historico_registros 
	    where codigo = 'EF345' 
		group by nome_loc, DATE_FORMAT(time(HoraRegistro), '%H:%i:%s')
		order by HoraRegistro asc;
    `;

    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function listarBarra() {
    console.log("2 -Cheguei no models da linha: /n");
    var instrucao = `
       select distinct nome_loc,  avg(valor) as media from vw_historico_registros where codigo = 'EF345' group by id_loc;
    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function monitoramentoIndividual(id_empresa) {
    console.log("2 -Cheguei no models do monitoramentoIndividual: /n");
    var instrucao = `
       SELECT 
            emp.id_empresa AS id_emp,
            loc.nome AS nome_loc,
            sens.id_sensor AS id_sens,
            (
                SELECT lei.valor_ppm
                FROM leitura AS lei
                WHERE lei.fk_sensor = sens.id_sensor
                ORDER BY lei.data_hora DESC, lei.id_leitura DESC
                LIMIT 1
            ) AS valor
        FROM 
            empresa AS emp
            JOIN local_monitoramento AS loc ON emp.id_empresa = loc.fk_empresa
            RIGHT JOIN sensor AS sens ON loc.id_local = sens.fk_local
        WHERE emp.id_empresa = ${id_empresa};

    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    listarLinha,
    listarBarra,
    monitoramentoIndividual
};