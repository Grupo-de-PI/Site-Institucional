var alertas = [];

var alertaDiv = document.getElementById('alerta')
var nivelAtencaoDiv = document.getElementById('nivelAtencao')
var nivelConcentracaoDiv = document.getElementById('nivelConcentracao')

function obterdados(id_empresa) {
    
    fetch(`/graficos/monitoramentoIndividual/${id_empresa}`).then(function (response) {

            return response.json();
        })
            .then(function (data) {
                // plotarGraficoLinha(data);
                console.log('Dados para o monitoramento Individual:', data)
                alertar(data);
            })
            .catch(function (err) {
                console.log(err);
            })

}

function alertar(resposta) {
    

    var sensor = resposta[0].id_sens;
    var gas = Number(resposta[0].valor);
 
    var temp = resposta[0].valor;

    var grauDeAviso = '';

    var limites = {
        Perigo: 17,
        Atenção: 13,
        Ideal: 9
    };

    if (gas >= limites.Perigo) {
        alertaDiv.classList.remove("alerta-flutuante.atencao")
        alertaDiv.classList.add("alerta-flutuante")
        nivelAtencaoDiv.innerHTML = 'EMERGENCIA';
        nivelConcentracaoDiv.innerHTML = gas;
    }
    else if (gas < limites.Perigo && gas >= limites.Atenção) {
        alertaDiv.classList.remove("alerta-flutuante")
        alertaDiv.classList.add("alerta-flutuante.atencao")
        nivelAtencaoDiv.innerHTML = 'Alerta';
        nivelConcentracaoDiv.innerHTML = gas;
    }
    else if (gas < limites.Ideal) {
        alertaDiv.classList.remove("alerta-flutuante")
        alertaDiv.classList.remove("alerta-flutuante.atencao")
        alertaDiv.classList.add('alerta-sem_nada')
    }
}