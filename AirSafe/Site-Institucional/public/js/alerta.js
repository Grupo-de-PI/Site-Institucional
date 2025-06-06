var alertas = [];

var alertaDiv = document.getElementById('alerta')
var nivelAtencaoDiv = document.getElementById('nivelAtencao')
var nivelConcentracaoDiv = document.getElementById('nivelConcentracao')
var sensorVerDiv = document.getElementById('sensorVer')


function obterdados(id_empresa) {
    console.log("1. Buscando dados para o alerta..."); // Ponto de verificação 1

    fetch(`/graficos/monitoramentoIndividual/${id_empresa}`)
        .then(function (response) {
            if (!response.ok) {
                console.error("ERRO DE REDE: A resposta da API não foi OK. Status:", response.status);
            }
            console.log("2. Resposta da API recebida.", response); // Ponto de verificação 2
            return response.json();
        })
        .then(function (data) {
            console.log("3. Dados da API convertidos para JSON:", data); // Ponto de verificação 3

            if (data && data.length > 0) {
                console.log("4. Enviando dados para a função alertar()."); // Ponto de verificação 4
                alertar(data);
            } else {
                console.warn("AVISO: A API retornou dados vazios. O alerta não será exibido.");
            }
        })
        .catch(function (err) {
            console.error("ERRO CRÍTICO no fetch do alerta:", err);
        });
}
function alertar(resposta) {
    
    for (let i = 0; i < resposta.length; i++) {
    
    var local = resposta[i].nome_loc;
    var gas = Number(resposta[i].valor);
 

    var limites = {
        Perigo: 17,
        Atenção: 13,
        Ideal: 9
    };

    if (gas >= limites.Perigo) {
        alertaDiv.classList.remove("alerta-flutuante-emergencia")
        alertaDiv.classList.add("alerta-flutuante")
        nivelAtencaoDiv.innerHTML = 'EMERGENCIA';
        nivelConcentracaoDiv.innerHTML = gas;
        sensorVerDiv.innerHTML = local;
    }
    else if (gas < limites.Perigo && gas >= limites.Atenção) {
        alertaDiv.classList.remove("alerta-flutuante")
        alertaDiv.classList.add("alerta-flutuante-emergencia")
        nivelAtencaoDiv.innerHTML = 'Alerta';
        nivelConcentracaoDiv.innerHTML = gas;
        sensorVerDiv.innerHTML = local;
    }
    else if (gas < limites.Ideal) {
        alertaDiv.classList.remove("alerta-flutuante")
        alertaDiv.classList.remove("alerta-flutuante-emergencia")
        alertaDiv.classList.add('alerta-sem_nada')
    }

}
}