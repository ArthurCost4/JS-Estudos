/*
var escolha = prompt("Pedra papel TEESOURA: ");
escolha = escolha.toUpperCase()
console.log(escolha)
*/

document.getElementById("saidaa").addEventListener("click", (ev)=>{
    ev.preventDefault()
    const tu = document.getElementById("tua")
    var value = tu.options[tu.selectedIndex].text;
    
    let PPT = ["PEDRA", "PAPEL", "TESOURA"]
    let comp = PPT[Math.floor(Math.random()* PPT.length)]
    console.log(comp)
    
    if(value == comp){
        document.getElementById("saida").innerHTML = `VOCE USOU ${value.bold()} E EU ${comp.toUpperCase()}, OU SEJA, EMPATE`
    }

    if(value === "PEDRA" && comp == "PAPEL"){
        document.getElementById("saida").innerHTML = `VOCE USOU ${value.bold()} E EU ${comp.toUpperCase()}, OU SEJA, PERDEEEU`
    }
    if(value === "PEDRA" && comp == "TESOURA"){
        document.getElementById("saida").innerHTML = `VOCE USOU ${value.bold()} E EU ${comp.toUpperCase()}, OU SEJA, GANHOU`
    }

    if(value === "PAPEL" && comp == "TESOURA"){
        document.getElementById("saida").innerHTML = `VOCE USOU ${value.bold()} E EU ${comp}, OU SEJA, PERDEEEU`
    }
    if(value === "PAPEL" && comp == "PEDRA"){
        document.getElementById("saida").innerHTML = `VOCE USOU ${value.bold()} E EU ${comp}, OU SEJA, GANHOU`
    }

    if(value === "TESOURA" && comp == "PEDRA"){
        document.getElementById("saida").innerHTML = `VOCE USOU ${value.bold()} E EU ${comp}, OU SEJA, PERDEEEU`
    }
    if(value === "TESOURA" && comp == "PAPEL"){
        document.getElementById("saida").innerHTML = `VOCE USOU ${value.bold()} E EU ${comp}, OU SEJA, GANHOU`
    }

})

