function calcularIMC() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (peso <= 0 || altura <= 0) {
        resultado.innerHTML = "Informe valores válidos!";
        return;
    }

    let imc = peso / (altura * altura);

    let classificacao = "";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    // Peso ideal mínimo e máximo
    let pesoMin = 18.5 * (altura * altura);
    let pesoMax = 24.9 * (altura * altura);

    resultado.innerHTML = `
        <p><strong>IMC:</strong> ${imc.toFixed(2)} (${classificacao})</p>
        <p><strong>Peso mínimo ideal:</strong> ${pesoMin.toFixed(1)} kg</p>
        <p><strong>Peso máximo ideal:</strong> ${pesoMax.toFixed(1)} kg</p>
    `;
}
