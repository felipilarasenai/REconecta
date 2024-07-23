const campoLogin = document.getElementById('username')
const campoSenha = document.getElementById('password')
const campoNovoLogin = document.getElementById('new-username')
const campoNovaSenha = document.getElementById('new-password')
const campoRepSenha = document.getElementById('rep-password')
const campoEmail = document.getElementById('email')
const campoAlteracaoSenha = document.getElementById('alt-password')
const campoRepAlteracaoSenha = document.getElementById('rep-alt-password')

function cadastrar() {
    if (campoNovaSenha.value != campoRepSenha.value || campoRepSenha.value == '' || campoRepSenha.value == null) {
        alert("senha invalida!");
    }
    else {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value,
            email: campoEmail.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {

            bancoDeDados = [];

        }
        window.location.href = 'login.html'
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");
    }
}

function logar() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!"
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));

    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));

                window.location.href = 'index.html'
                break;
            }
        }
    }
    alert(mensagem)
}

function adicionar() {

}

function criarConta() {
    window.location.href = 'cadastro.html'
}

function iniciarSecao() {
    window.location.href = 'login.html'
}

