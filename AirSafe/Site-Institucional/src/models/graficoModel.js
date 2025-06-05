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

function listarNovasLinhas() {
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
       select * from vw_monitomentoIndividual where id_emp = ${id_empresa};;
    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    listarLinha,
    listarBarra,
    monitoramentoIndividual
};