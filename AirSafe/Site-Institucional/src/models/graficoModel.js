var database = require("../database/config");

function listarLinha(id_empresa) {

    var id_empresa = parseInt(id_empresa);


    var instrucao = `
       select distinct nome_loc, avg(valor) as media, DATE_FORMAT(time(HoraRegistro), '%H:%i:%s') 
        AS HoraRegistro from vw_historico_registros 
	    where id_emp = ${id_empresa}
		group by nome_loc, DATE_FORMAT(time(HoraRegistro), '%H:%i:%s')
		order by HoraRegistro asc;
    `;

    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}


function listarBarra(id_empresa) {
    var id_empresa = parseInt(id_empresa);

    var instrucao = `
       select distinct nome_loc,  avg(valor) as media from vw_historico_registros where id_emp = ${id_empresa} group by id_loc;
    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function monitoramentoIndividual(id_empresa) {
    
    var id_empresa = parseInt(id_empresa);

    var instrucao = `
       select * from vw_monitomentoIndividual where id_emp = ${id_empresa};
    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    listarLinha,
    listarBarra,
    monitoramentoIndividual
};