
function kikada(){
    let ano = parseInt(prompt("Qual ano vc deseja calcular?"))
    let bix = ano%4
    let bix2 = ano%400
    if(bix == 0 || bix2 == 0){
        document.getElementById("message").innerHTML = `O ano de ${ano} <strong style="color: green;">é bissexto</strong>&#x2714`
    }else {
        document.getElementById("message").innerHTML = `O ano de ${ano} <strong style="color: red;">não é bissexto</strong>&#x274C`
    }
}