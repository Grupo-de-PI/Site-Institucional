var database = require("../database/config");

function buscarQtd(id_empresa) {

    var id_empresa = parseInt(id_empresa);
    
    var instrucao = `
       select count(distinct(nome_loc)) as num_loc from vw_historico_registros 
        where id_emp = ${id_empresa};
    `;

    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function atualizarLinha(qtdEmpresa, id_empresa) {

    var id_empresa = parseInt(id_empresa);
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
        WHERE id_emp = ${id_empresa}
        LIMIT ${qtdEmpresa};
    ` ;

    return database.executar(instrucao);
   
}

function atualizarBarra(id_empresa) {

    var id_empresa = parseInt(id_empresa);

    var instrucao= `
        select 
            distinct nome_loc,  
            avg(valor) as media 
        from vw_historico_registros 
            where id_emp = ${id_empresa} 
            group by id_loc;
    ` ;
    
    return database.executar(instrucao);
   
}

module.exports = {
    buscarQtd,
    atualizarLinha, 
    atualizarBarra
};