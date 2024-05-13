function calcular() {
    var nome = document.getElementById("nome").value;
    var salario = parseFloat(document.getElementById("salario").value);
    
    // Calcular o desconto do INSS (8%)
    var inssPercent = 8;
    var inssValue = (salario * inssPercent) / 100;
    
    // Calcular o salário líquido
    var salarioLiquido = salario - inssValue;
    
    // Exibir os resultados
    document.getElementById("nomeResultado").innerText = "Nome do Funcionário: " + nome;
    document.getElementById("salarioBruto").innerText = "Salário bruto: " + salario;
    document.getElementById("inssPercent").innerText = "Taxa de desconto do INSS: " + inssPercent + "%";
    document.getElementById("inssValue").innerText = "Valor do INSS: " + inssValue;
    document.getElementById("salarioLiquido").innerText = "Salário líquido: " + salarioLiquido;
    
    // Mostrar os resultados
    document.getElementById("resultado").classList.remove("hidden");
}


