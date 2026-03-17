const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const valorInicial = document.querySelector(".valor-moeda").value

    const valorParaConverter = document.querySelector(".moeda-entrada") //moeda Real

    const valorConvertido = document.querySelector(".moeda-saida") //outras moedas

    const dolarToday = 5.2

    const convertValor = valorInicial / dolarToday
    
    //Ferramenta de conversão de moedas do javascript "Intel.NumberFormat" ler documentação
    valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorInicial)

    valorConvertido.innerHTML = convertValor

} 

convertButton.addEventListener("click", convertValues)