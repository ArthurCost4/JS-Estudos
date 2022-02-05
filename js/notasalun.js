var envio = document.getElementById("enviar")


 function media(callback){
    callback.preventDefault()
    let ava1 = Math.round(document.getElementById("pro1").value);
    let ava2 = Math.round(document.getElementById("pro2").value);
    let ava3 = Math.round(document.getElementById("pro3").value);
    let ava4 = Math.round(document.getElementById("pro4").value);
   
    let medio = ava1+ava2+ava3+ava4;
    console.log(`${medio}`)
};




envio.addEventListener("click", media)