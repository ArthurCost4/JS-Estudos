let dolar = parseFloat(prompt("Digite a cotação do dolar hj"))

function kikada(){
    let carte = parseFloat(prompt("Quanto voçê quer converter?"))
    document.getElementById("message").innerHTML = `o valor R$${carte} em dolar é:`
    let newdol = carte * dolar
    document.getElementById("taldolar").innerHTML = `$${newdol}`
}