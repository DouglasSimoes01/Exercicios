document.addEventListener("DOMContentLoaded", function () {
    var ordenarBtn = document.getElementById("ordenarBtn");
    ordenarBtn.addEventListener("click", function () {
        ordenarNumeros();
    });

    function ordenarNumeros() {
        var numeros = [];
        numeros.push(parseInt(document.getElementById("numero1").value));
        numeros.push(parseInt(document.getElementById("numero2").value));
        numeros.push(parseInt(document.getElementById("numero3").value));
        numeros.push(parseInt(document.getElementById("numero4").value));
        numeros.push(parseInt(document.getElementById("numero5").value));

        // Remove os NaN (caso o usuário não tenha inserido um número)
        numeros = numeros.filter(function (numero) {
            return !isNaN(numero);
        });

        // Ordena os números em ordem decrescente
        numeros.sort(function (a, b) {
            return b - a;
        });

        // Exibe os números ordenados
        var resultado = document.getElementById("resultado");
        resultado.innerText = "Números em ordem decrescente: " + numeros.join(", ");
    }
});