var submit = document.getElementById("envia");

submit.addEventListener("click", event=>{
    event.preventDefault();
    let select = document.getElementById("sexualidade");
    let selecionado = select.options[select.selectedIndex].text;

    let pagar = parseFloat( document.getElementById("num").value);
    console.log(pagar)

    if(selecionado == "M"){

        let porcent = pagar * (5/100)
        let total = pagar + porcent

        return document.getElementById("saida").innerHTML = `O desconto na compra com valor de ${pagar.toLocaleString("pt-br", {style: "currency", currency: "BRL"})} deu um desconto de 5% ficando ${total.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`

    }else if(selecionado == "F"){
        let porcent = pagar * (15/100)
        let total = pagar + porcent

        return document.getElementById("saida").innerHTML = `O desconto na compra com valor de ${pagar.toLocaleString("pt-br", {style: "currency", currency: "BRL"})} deu um desconto de 15% ficando ${total.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`
        
    }
    
})
