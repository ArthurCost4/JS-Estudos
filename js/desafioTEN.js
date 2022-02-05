function kikada(){
    let a = parseFloat(prompt("Qual o valor de A?"))
    let b = parseFloat(prompt("Qual o valor de B?"))
    let c = parseFloat(prompt("Qual o valor de C?"))
    if (a,b,c != ""){
        let delta = (b**2) - (4*a*c)
        document.getElementById("message").innerHTML = "Formula: b² - 4.a.c"
        document.getElementById("message2").innerHTML = `A sua formula: ${b}² - 4.${a}.${c}`
        document.getElementById("message3").innerHTML = `Δ = ${delta}`
    }

}