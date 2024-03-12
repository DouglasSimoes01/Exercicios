document.addEventListener("DOMContentLoaded", function () {
    var verificarBtn = document.getElementById("verificarBtn");
    verificarBtn.addEventListener("click", function () {
        verificarParOuImpar();
    });

    function verificarParOuImpar() {
        var numeroInput = document.getElementById("numeroInput");
        var resultadoParOuImpar = document.getElementById("resultado");
        var numero = parseInt(numeroInput.value);

        // Verifica se o número é par ou ímpar
        if (isNaN(numero)) {
            resultadoParOuImpar.innerText = "Por favor, insira um número válido.";
        } else {
            if (numero % 2 === 0) {
                resultadoParOuImpar.innerText = "O número " + numero + " é par.";
            } else {
                resultadoParOuImpar.innerText = "O número " + numero + " é ímpar.";
            }
        }
    }
});