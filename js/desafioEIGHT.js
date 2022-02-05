function kikada(){
    const namepro  =prompt("Qual o nome do produto?")
    let valor  = parseFloat(prompt("Qual o valor do produto?"))

    if (valor>1000 && valor<2000){
        let final = valor*(20/100)
        let finalval = valor - final
        document.getElementById("message").innerHTML = `O produto ${namepro} de valor R$${valor} teve um desconto de 20% e o valor a pagar ficaria R$${finalval}`
    }
    if (valor<1000){
        let final = valor*(10/100)
        let finalval = valor -final
        document.getElementById("message").innerHTML = `O produto ${namepro} de valor R$${valor} teve um desconto de 10% e o valor a pagar ficaria R$${finalval}`
    }
    if (valor>2000){
        let final = valor*(25/100)
        let finalval = valor-final
        document.getElementById("message").innerHTML = `O produto ${namepro} de valor R$${valor} teve um desconto de 25% e o valor a pagar ficaria R$${finalval}`
    }
}