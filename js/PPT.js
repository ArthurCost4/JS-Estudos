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
    
    if(value === comp){
        document.getElementById("saida").innerHTML = "EMPATE"
    }
    if(value === "PEDRA" && comp == "PAPEL"){
        document.getElementById("saida").innerHTML = "perdeu pra papel"
    }
    if(value === "PAPEL" && comp == "TESOURA"){
        document.getElementById("saida").innerHTML = "perdeu pra tesoura"
    }
    if(value === "TESOURA" && comp == "PEDRA"){
        document.getElementById("saida").innerHTML = "perdeu pra pedra"
    }

})

