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


function listarRelatorioSensor(id_empresa, id_salas) {

    id_empresa = parseInt(id_empresa);
    id_salas = parseInt(id_salas);

    var instrucao = `
        select 
            id_sensor, 
            cod_serie, 
            date_format(dt_instalacao, '%Y/%m/%d')as instalacao, 
            case 
                when status_sensor = 1 then 'Ativo'
                else 'Inativo'
            end as status_sensor,
            date_format(próxima_manutencao_preventiva, '%Y/%m/%d') as preventiva, 
            date_format(ultima_manutencao_preditiva, '%Y/%m/%d') as preditiva, 
            date_format(ultima_manutencao_corretiva, '%Y/%m/%d') as corretiva,
            (select  DATEDIFF(CURDATE(), MAX(próxima_manutencao_preventiva))  from sensor) as dias
        from sensor
            join local_monitoramento
                on id_local = fk_local
            join empresa
                on id_empresa = fk_empresa
                where id_empresa=${id_empresa} and id_local = ${id_salas};
          
    ;
    `
    console.log("Executando instrução SQL: \n" + instrucao);


    return database.executar(instrucao);
}


module.exports = {
    listarLinhaIndividual,
    listarRelatorioSensor
};
