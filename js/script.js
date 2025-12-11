function calcularIMC() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    // Limpar tela
    resultado.innerHTML = "";

    // ❌ Erros
    if (peso <= 0 || altura <= 0) {
        resultado.innerHTML = "Informe valores válidos!";
        return;
    }

    // Cálculo do IMC
    let imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } 
    else if (imc < 24.9) {
        classificacao = "Peso normal";
    } 
    else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } 
    else {
        classificacao = "Obesidade";
    }

    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}
