const convertButton = document.querySelector(".convert-button")
const moedaSelecionada = document.getElementById("moeda-selecionada")

function convertValues() {
    const valorInicial = document.querySelector(".valor-moeda").value

    const valorParaConverter = document.querySelector(".moeda-entrada") //moeda Real

    const valorConvertido = document.querySelector(".moeda-saida") //outras moedas

    const dolarToday = 5.2
    const euroToday = 6.3
    // console.log(moedaSelecionada.value)

    // const convertValor = valorInicial / dolarToday

    if (moedaSelecionada.value == "Dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorInicial / dolarToday)
    }

    if (moedaSelecionada.value == "Euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorInicial / euroToday)
    }
    //Ferramenta de conversão de moedas do javascript "Intel.NumberFormat" ler documentação
    valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorInicial)



}

//Mudando de moeda

function mudarMoeda() {
    const nomeMoeda = document.querySelector(".moeda-dolar")//buscando pelo texto
    if (moedaSelecionada.value == "Dolar") {
        nomeMoeda.innerHTML = "Dólar americano" 
        
    }
     if (moedaSelecionada.value == "Euro") {
        nomeMoeda.innerHTML = "Euro"
        
    }


}
moedaSelecionada.addEventListener("change", mudarMoeda)
convertButton.addEventListener("click", convertValues)