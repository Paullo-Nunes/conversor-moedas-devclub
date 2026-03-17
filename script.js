const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const valorInicial = document.querySelector(".valor-moeda").value

    const dolarToday = 5.2

    const convertValor = valorInicial / dolarToday

    console.log(convertValor)
} 

convertButton.addEventListener("click", convertValues)