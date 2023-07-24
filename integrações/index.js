
function logar() {
    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;
    const senhaf = "devrr";

    const validLogins = {
        "@cubos": { senha: senhaf, url: "https://aulas.cubos.academy/" },
        "@github": { senha: senhaf, url: "https://github.com/robertqsilva" },
        "@portal": { senha: senhaf, url: "https://egov.paradigmabs.com.br/sescba/Default.aspx" },
        "@hotmail": { senha: senhaf, url: "https://outlook.live.com/" },
        "@gpt": { senha: senhaf, url: "https://chat.openai.com/" },
        "@binario": { senha: senhaf, url: "https://www.prepostseo.com/tool/br/binary-translator" },
    };

    if (validLogins.hasOwnProperty(user) && validLogins[user].senha === senha) {
        window.alert('Sucesso');
        window.open(validLogins[user].url, 'blank');
    } else {
        alert('Usuário ou senha incorretos');
    }
}

function mostrarMensagem() {
    removeBalaoAnterior();
    // Criar o elemento do balão
    var balao = document.createElement("div");
    balao.className = "alert alert-info alert-dismissible fade show custom-alert";
    balao.setAttribute("role", "alert");



    // Definir o conteúdo do balão
    balao.innerHTML = "Somente eu tenho acesso arrombado!   @rqueiroz__";

    // Criar botão de fechar
    var botaoFechar = document.createElement("button");
    botaoFechar.type = "button";
    botaoFechar.className = "close";
    botaoFechar.setAttribute("data-dismiss", "alert");
    botaoFechar.setAttribute("aria-label", "Fechar");
    botaoFechar.innerHTML = '<span aria-hidden="true">&times;</span>';

    // Adicionar o botão de fechar ao balão
    balao.appendChild(botaoFechar);

    // Adicionar o balão à página
    var formulario = document.querySelector(".login-dark form");
    formulario.appendChild(balao);
}

function removeBalaoAnterior() {
    var balaoAnterior = document.querySelector(".custom-alert");
    if (balaoAnterior) {
        balaoAnterior.remove();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var linkForgot = document.querySelector(".forgot");
    linkForgot.addEventListener("click", function (event) {
        event.preventDefault();
        mostrarMensagem();
    });
});

function toggleCard() {
    var cardDiv = document.querySelector(".card-container");
    if (cardDiv.style.display === "none" || cardDiv.style.display === "") {
        cardDiv.style.display = "block";
    } else {
        cardDiv.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var infoDiv = document.querySelector(".info");
    infoDiv.addEventListener("click", function (event) {
        event.preventDefault();
        toggleCard();
    });
});
