var database = require("../database/config");


function listarLinhaIndividual(id_empresa, id_salas) {
    id_empresa = parseInt(id_empresa);
    id_salas = parseInt(id_salas);


    var instrucao = `
     select distinct 
        id_sens, valor, date_format(HoraRegistro, '%Hh%im%Ss') as hora
        from vw_historico_registros where id_loc = ${id_salas}
        and id_emp = ${id_empresa};
    `;
    console.log("Executando instrução SQL: \n" + instrucao);


    return database.executar(instrucao);
}


module.exports = {
    listarLinhaIndividual
};
