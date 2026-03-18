//Mapeando itens
const convertButton = document.querySelector(".convert-button")
const moedaSelecioda = document.getElementById("moeda-selecionada")

function convertValues() {
    const valorInicial = document.querySelector(".valor-moeda").value

    const valorParaConverter = document.querySelector(".moeda-entrada") //moeda Real

    const valorConvertido = document.querySelector(".moeda-saida") //outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2

    //Validando a moeda selecionada
    if(moedaSelecioda.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorInicial / dolarToday)

    }
    if(moedaSelecioda.value == "euro") {

    }

    //Ferramenta de conversão de moedas do javascript "Intel.NumberFormat" ler documentação
    valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorInicial)

    

} 

convertButton.addEventListener("click", convertValues)