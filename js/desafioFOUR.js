
function troco(){
    let a = document.getElementById("a")
    let valor = parseFloat(prompt("Digite o valor do produto:"))
    let dado = parseFloat(prompt("Digite o valor que vc deu em dinheiro"))

    if(dado>valor){
        let d = dado - valor
        alert(`O preço do produto foi R$${valor} e vc deu R$${dado} de troco são R$${d}`)
    }
    else{
        let d = dado-valor
        alert(`c ta com score sujo no serasa,otario e está devendo ${d}` )
    }
}
