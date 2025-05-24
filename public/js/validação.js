//Variaveis globais
  var confirmacao_senha = 0;
  var senha = 0;
  var email = 0;
  var telefoneCelular = 0;
  var telefoneComercial = 0;
  var porte = 0;
  var cnpj = 0;
  var razaoSocial = 0;
  var nome = 0;


  function mascaraCelular() {

    celular = input_telefoneCelular.value;
    var formatado = "";



    celular = celular.replaceAll(/\D+/g, '');

    for (var i = 0; i < celular.length; i++) {

      //(11) 95982-3726
      if (i == 0) {
        formatado += '(';
      } else if (i == 2) {
        formatado += ') ';
      } else if (i == 7) {
        formatado += '-';
      }

      formatado += celular[i];
    }
    input_telefoneCelular.value = formatado;

  }

  function notNull() {
    confirmacao_senha = input_confirmacao_senha.value;
    senha = input_senha.value;
    email = input_email.value;
    telefoneCelular = input_telefoneCelular.value;
    telefoneComercial = input_telefoneComercial.value;
    porte = select_porte.value;
    cnpj = input_cnpj.value;
    razaoSocial = input_razaoSocial.value;
    nome = input_nome.value;

    if (
      confirmacao_senha == '' ||
      senha == '' ||
      email == '' ||
      telefoneCelular == '' ||
      telefoneComercial == '' ||
      cnpj == '' ||
      razaoSocial == '' ||
      nome == '' ||
      porte == '')
      {
      alert('Preencha todos os campos');
    } else {
      validarSenha();
    }
  }

  function mascaraComercial() {
    var comercial = input_telefoneComercial.value;
    var formatado = "";



    comercial = comercial.replaceAll(/\D+/g, '');

    for (var i = 0; i < comercial.length; i++) {

      //(11) 95982-3726
      if (i == 0) {
        formatado += '(';
      } else if (i == 2) {
        formatado += ') ';
      } else if (i == 6) {
        formatado += '-';
      }

      formatado += comercial[i];
    }
    input_telefoneComercial.value = formatado;

  }

  function mascaraCNPJ() {

    var cnpj = input_cnpj.value;

    cnpj = cnpj.replaceAll(/\D+/g, ''); //REmove tudo que não for digito

    var formatado = ''

    for (var i = 0; i < cnpj.length; i++) {

      //00.623.904/0001-73
      if (i == 2 || i == 5) {
        formatado += ".";
      } else if (i == 8) {
        formatado += "/";
      } else if (i == 12) {
        formatado += "-";
      }

      formatado += cnpj[i];
    }
    input_cnpj.value = formatado
  }

  function validarNome() {

    var nome = input_nome.value;

  }
  var contArroba=0
  function mascaraEmail() {

    //email = email.replaceAll(/[^\w\s]/gi, '').replaceAll(/[a-zA-Z]/g, "");
    
    var email = input_email.value;

    if (email.startsWith('@') || email.startsWith('.')) {
      alert('O E-mail não pode iniciar com @ ou .')
    } 
    /*
    else {
      if (email.includes('@') && email.endsWith('.com')) {
        div_mensagem.innerHTML = 'E-mail válido'
      } else {
        div_mensagem.innerHTML = 'O E-mail deve seguir o exemplo: usuario@dominio.com'
      }
    }
    */

  }

  function validarSenha() {
    var senha = input_senha.value;
    var confirmarSenha = input_confirmacao_senha.value;

    if (confirmarSenha != senha) {
      alert("A confirmação da senha não corresponde à senha digitada. Por favor, tente novamente.");
    } else {
      redirecionar();
    }
  }

  function redirecionar() {
    window.location.href = "cadastro_endereco.html";
  }