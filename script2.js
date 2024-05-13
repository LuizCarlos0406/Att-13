function calcular() {
    var nome = document.getElementById("nome").value;
    var salario = parseFloat(document.getElementById("salario").value);
    
    // Definir a taxa de desconto de acordo com o salário
    var desconto;
    if (salario <= 1000) {
        desconto = 8;
    } else if (salario <= 1500) {
        desconto = 8.5;
    } else {
        desconto = 9;
    }
    
    // Calcular o valor do desconto
    var valorDesconto = (salario * desconto) / 100;
    
    // Calcular o salário líquido
    var salarioLiquido = salario - valorDesconto;
    
    // Exibir os resultados
    document.getElementById("nomeResultado").innerText = "Nome do Funcionário: " + nome;
    document.getElementById("salarioBruto").innerText = "Salário bruto: " + salario;
    document.getElementById("desconto").innerText = "Desconto (" + desconto + "%): " + valorDesconto;
    document.getElementById("salarioLiquido").innerText = "Salário líquido: " + salarioLiquido;
    
    // Mostrar os resultados
    document.getElementById("resultado").classList.remove("hidden");
}
