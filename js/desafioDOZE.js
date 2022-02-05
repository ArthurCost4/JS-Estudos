function kikada(){
    let prod = parseFloat(prompt("Digite o preço anterior do produto:"))
    let atual = parseFloat(prompt("Digite o preço atual do produto:"))

    if(prod>atual){
        let conta1 = prod-atual
        let conta2 = conta1/atual*100
        console.log(conta1)
        document.getElementById("message").innerHTML = `${conta2}`
    }
}