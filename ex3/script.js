document.addEventListener("DOMContentLoaded", function () {
    var calcularBtn = document.getElementById("calcularBtn");
    calcularBtn.addEventListener("click", function () {
        calcularIMC();
    });

    function calcularIMC() {
        var peso = parseFloat(document.getElementById("peso").value);
        var altura = parseFloat(document.getElementById("altura").value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            document.getElementById("resultado").innerText = "Por favor, insira valores válidos para peso e altura.";
            return;
        }

        var imc = peso / (altura * altura);
        var resultado = "Seu IMC é " + imc.toFixed(2) + ". ";

        if (imc < 18.5) {
            resultado += "Você está abaixo do peso.";
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado += "Você está com o peso normal.";
        } else if (imc >= 25 && imc < 29.9) {
            resultado += "Você está com sobrepeso.";
        } else {
            resultado += "Você está obeso.";
        }

        document.getElementById("resultado").innerText = resultado;
    }
});