function init() {
    var total = document.getElementById("total");
    var sete = document.getElementById("sete");
    var oito = document.getElementById("oito");
    var nove = document.getElementById("nove");
    var divisor = document.getElementById("divisor");
    var quatro = document.getElementById("quatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var multiplica = document.getElementById("multiplica");
    var um = document.getElementById("um");
    var dois = document.getElementById("dois");
    var tres = document.getElementById("tres");
    var subtrai = document.getElementById("subtrai");
    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");
    var zero = document.getElementById("zero");
    var soma = document.getElementById("soma");

    um.onclick = function(a) {
        total.textContent = total.textContent + "1";
    }
    dois.onclick = function(a) {
        total.textContent = total.textContent + "2";
    }
    tres.onclick = function(a) {
        total.textContent = total.textContent + "3";
    }
    quatro.onclick = function(a) {
        total.textContent = total.textContent + "4";
    }
    cinco.onclick = function(a) {
        total.textContent = total.textContent + "5";
    }
    seis.onclick = function(a) {
        total.textContent = total.textContent + "6";
    }
    sete.onclick = function(a) {
        total.textContent = total.textContent + "7";
    }
    oito.onclick = function(a) {
        total.textContent = total.textContent + "8";
    }
    nove.onclick = function(a) {
        total.textContent = total.textContent + "9";
    }
    zero.onclick = function(a) {
        total.textContent = total.textContent + "0";
    }
    reset.onclick = function(a) {
        resetar();
    }
    igual.onclick = function(a) {
        numero2 = total.textContent;
        calcular();
    }
    soma.onclick = function(a) {
        numero1 = total.textContent;
        sinal = "+";
        limpar();
    }
    divisor.onclick = function(a) {
        numero1 = total.textContent;
        sinal = "/";
        limpar();
    }
    multiplica.onclick = function(a) {
        numero1 = total.textContent;
        sinal = "*";
        limpar();
    }
    subtrai.onclick = function(a) {
        numero1 = total.textContent;
        sinal = "-";
        limpar();
    }
}

function limpar() {
    total.textContent = "";
}

function resetar() {
    total.textContent = "";
    numero1 = 0;
    numero2 = 0;
    sinal = "";
}

function calcular() {
    var resposta = 0;
    switch (sinal) {
        case "+":
            resposta = parseFloat(numero1) + parseFloat(numero2);
            break;
        case "-":
            resposta = parseFloat(numero1) - parseFloat(numero2);
            break;
        case "*":
            resposta = parseFloat(numero1) * parseFloat(numero2);
            break;
        case "/":
            resposta = parseFloat(numero1) / parseFloat(numero2);
            break;
    }
    resetar();
    total.textContent = resposta;
}