
function kikada(){
    let name = prompt("Qual o seu nome?")
    let salar = parseFloat(prompt("Qual o seu salario atual?"))
    let porcent = parseFloat(prompt("Quanto vai ser o reajuste?"))
    if (porcent != 0){
        porcent = porcent/100
        let newporcent = salar*porcent
        document.getElementById("message").innerHTML = `Ola, ${name} o seu reajuste está logo abaixo...`
        document.getElementById("message2").innerHTML = `O seu reajuste foi de R$${newporcent} a mais no seu salario atual de R$${salar}`
        document.getElementById("message3").innerHTML = `Passando assim para R$${salar+newporcent}`
    }

}