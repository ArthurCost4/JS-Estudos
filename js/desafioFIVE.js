
function kikada(){
    let num = parseFloat(prompt("Digite um numero em Metros:"))

    document.getElementById("message").innerHTML = `O numero digitado ${num} em km é ${num/1000}km`;
    document.getElementById("message2").innerHTML = `O numero digitado ${num} em cm é ${num*100}cm`;
    document.getElementById("message3").innerHTML = `O numero digitado ${num} em mm é ${num*1000}mm`;
}
