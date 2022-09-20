var carta1 = { nome: "Hyoga de Cisne", imagem: "https://static.wikia.nocookie.net/ssu/images/f/f6/1957.jpg", atributos: {soco: 400, chute: 350, força: 400, técnica: 500}};
var carta2 = { nome: "Shiryu de Dragão", imagem: "https://static.wikia.nocookie.net/ssu/images/c/c9/Shiryu_AD_GB_card.png", atributos: {soco: 450, chute: 350, força: 450, técnica: 450}};
var carta3 = { nome: "Seiya de Pégaso", imagem: "https://static.wikia.nocookie.net/ssu/images/a/ac/Seiya_AD_GB_card_2.png", atributos: {soco: 500, chute: 300, força: 400, técnica: 350}};
var carta4 = { nome: "Ikki de Fênix", imagem: "https://static.wikia.nocookie.net/ssu/images/0/0d/1150.jpg", atributos: {soco: 450, chute: 400, força: 500, técnica: 350}};
var carta5 = { nome: "Shun de Andrômeda", imagem: "https://static.wikia.nocookie.net/ssu/images/5/54/1955.jpg", atributos: {soco: 350, chute: 400, força: 200, técnica: 450}};
//imagens: https://ssu.fandom.com/wiki/

var cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 5);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 5);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 5);
    }
    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
    var escolhaAtributo = document.getElementById("txtAtributo");
    escolhaAtributo.innerHTML = "Escolha o atributo para lutar";
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>VENCEU</p>";
    } else if (valorCartaJogador < valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>PERDEU</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>EMPATOU</p>";
    }
    elementoResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;

    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
  '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHtml = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' id='ratio-atr' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    
    var nome = `<p class = "carta-subtitle"> ${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + '</div>';
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var moldura =
  '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHtml = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    
    var nome = `<span class = "carta-subtitle"> ${cartaMaquina.nome}</span>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + '</div>';
}

/* essa função foi criada antes de ter a moldura. A nova função exibirCartaJogador() já exibe as opções.
function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}*/