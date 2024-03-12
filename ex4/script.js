document.addEventListener("DOMContentLoaded", function () {
    var verificarBtn = document.getElementById("verificarBtn");
    verificarBtn.addEventListener("click", function () {
        verificarTriangulo();
    });

    function verificarTriangulo() {
        var lado1 = parseFloat(document.getElementById("lado1").value);
        var lado2 = parseFloat(document.getElementById("lado2").value);
        var lado3 = parseFloat(document.getElementById("lado3").value);

        // Verifica se os valores são válidos
        if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
            document.getElementById("resultado").innerText = "Por favor, insira valores válidos para os lados do triângulo.";
            return;
        }

        // Verifica se os valores formam um triângulo
        if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
            document.getElementById("resultado").innerText = "Os valores informados não formam um triângulo.";
            return;
        }

        // Verifica o tipo do triângulo
        if (lado1 === lado2 && lado2 === lado3) {
            document.getElementById("resultado").innerText = "Os valores informados formam um triângulo equilátero.";
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            document.getElementById("resultado").innerText = "Os valores informados formam um triângulo isósceles.";
        } else {
            document.getElementById("resultado").innerText = "Os valores informados formam um triângulo escaleno.";
        }
    }
});