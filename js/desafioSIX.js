let btn = document.getElementById("btn")

function kikada(){
    let valor = parseFloat(prompt("Digite a temperatura em Celcius"))
    const firen = (valor * (9/5)) +32
    const kelvin = valor + 273.15
    document.getElementById("message").innerHTML = `A conversão de ${valor} a seguir...`
    document.getElementById("firen").innerHTML= `O resultado de ${valor} em Fahrenheit  é ${firen}°F`
    document.getElementById("kelvin").innerHTML = `O resultado de ${valor} em Kelvin é ${kelvin}°K`
}