const key = 'e0283766cee7e7e70be7e75409ae8042'

function coletarDado() {
    const cidade = document.querySelector(".input-cidade").value
    dado(cidade)
}

async function dado(cidade){
    let dado = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Resposta => Resposta.json())
    console.log(dado)
    trocarInfo(dado)
}

function trocarInfo(dado){
    document.querySelector(".titulo").innerHTML = dado.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dado.main.temp) + " °C"
    document.querySelector(".texto-previsao").innerHTML = dado.weather[0].description
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dado.weather[0].icon}.png`
    document.querySelector(".umidade").innerHTML = "Umidade relativa do ar: " + dado.main.humidity + "%"
    document.querySelector(".vento").innerHTML = "Vento: " + Math.floor(dado.wind.speed) + " km"
}
