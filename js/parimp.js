var vtn = document.getElementById("envia");

function ParImp(event){
    event.preventDefault()
    let n1 = parseInt( document.getElementById("n1").value);

    //ternario
    let result = (n1%2 === 0) ? console.log("é par") : console.log("é impar");

    return result
}


vtn.addEventListener("click", ParImp)

