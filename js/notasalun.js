var envio = document.getElementById("enviar")


 function media(event){
    event.preventDefault()
    let ava1 = Math.round(document.getElementById("pro1").value);
    let ava2 = Math.round(document.getElementById("pro2").value);
    let ava3 = Math.round(document.getElementById("pro3").value);
    let ava4 = Math.round(document.getElementById("pro4").value);
   
    let medio = (ava1+ava2+ava3+ava4) / 4;
    for(let i = 0; medio<5; i++){
    if(medio<5){
        let recuperação = parseFloat(prompt("Qual a nota de recuperação?"))
        medio = recuperação + medio
        medio = medio/2
        console.log(`a nota com recu foi ${medio}`)
    }else{
        console.log("passou de ano")
    }
}
console.log(`a nota foi ${medio}`)
return medio;
};




envio.addEventListener("click", media)