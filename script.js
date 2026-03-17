const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const valorInicial = document.querySelector(".valor-moeda").value

    const valorParaConverter = document.querySelector(".moeda-entrada") //moeda Real

    const valorConvertido = document.querySelector(".moeda-saida") //outras moedas

    const dolarToday = 5.2

    const convertValor = valorInicial / dolarToday

    console.log(convertValor)
} 

convertButton.addEventListener("click", convertValues)