var vidaN = 47304000
const cigarro = 10

var bot = document.getElementById("calculo");
bot.addEventListener("click", ev=>{
    ev.preventDefault()
    let tempo = Math.floor(prompt("A quantos anos vc fuma cigarro? "))
    let quantC = Math.floor(prompt("Quantos cigarros vc fuma por dia? "))
    let idade = Math.floor(prompt("quantos anos vc tem?"))


    let idadene = ((idade*365)*24)*60
    let anosday = (tempo*365)
    let cigd = anosday * quantC

    if((quantC =! 0) && (idade =! 0)){
        let daismenos = (cigd*cigarro)*60
        console.log(daismenos)

        let idadepessoa = vidaN-daismenos
        console.log(idadepessoa)

        idadepessoa = idadepessoa-idadene
        console.log(idadepessoa)

        idadepessoa = Math.floor((((idadepessoa/60)/24)/365))
        console.log(idadepessoa)
        document.getElementById("saida").innerHTML = `Segundo os meus calculos, uma pessoa normalmente vive 90 anos, vc tem ${idade} e fumou ${quantC} por dia em ${tempo} anos, resultando em... tu vai morrer em ${idadepessoa} anos ;)`
    }else{
        document.getElementById("saida").innerHTML = `VC NAO FUMA???? vc n sabe o que ta perdendo`
    }
})