 var cont = 2;

    function validar() {
        var email = email_input.value;
        var senha = senha_input.value;


        if (cont > 0) {
            if (email != 'caramico@outlook.com' || senha != 'Caramico123') {


                if (email != 'caramico@outlook.com') {
                    div_email.innerHTML = '<b style="Color: red"> E-mail incorreto </b>';
                }

                if (senha != 'Caramico123') {
                    div_senha.innerHTML = '<b style="Color: red"> Senha incorreta </b>';
                }

                div_msm.innerHTML = `Restam ${cont} tentativas`;

                cont--;

            } else {
                cont = 3;
                window.location.href = "dashboard.html"


            }

        } else {
            div_msm.innerHTML = `Usuario bloqueado!`;
            div_login.innerHTML = '';
        }

    }