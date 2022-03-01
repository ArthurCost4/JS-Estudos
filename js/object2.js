//extraindo informaçoes
var novousuario = {
    nome: 'zezim',
    idade: 30,
    pais: 'Nova Zelandia'
};

//jeito tradicional
var nome = novousuario.nome;
console.log(nome);

//novo metodo com syntax mais "pratica"
var { idade, pais, nome } = novousuario;
console.log(idade);
console.log(`O pais é ${pais} e o seu nome é ${nome}`)//proveniente da nova syntax

var { nome: primeironome } = novousuario;
console.log(primeironome);

//com objetos aninhados
var usuario2 = {
    nome: {
        primeiro: "babala",
        //segundo: "silva"
    }
};

//primeiro o valor da propriedade e em seguida o objeto
var {nome: { primeiro }} = usuario2; //repare nos colchetes
console.log(primeiro);

//caso a propriedade não exista (USANDO O "DEFAULT")
var {nome: {

    segundo = 'Costa'

}} = usuario2;

console.log(segundo);

//Usando o destruct como parametro em uma função
function imprimiusu({nome, idade, sexo, pais = "Brasil"}){ //repare no parametro da função, junto com colchetes e isso tudo é um parametro só
    console.log(nome);
    console.log(idade);
    console.log(sexo)
    console.log(pais)
};
//object da função
var newusu = {
    nome: ["Paula Tejano", "karalha"],
    idade: [123, 232],
    sexo: "eu gosto"
    //pais: "japão"
};

imprimiusu(newusu);

//objetos em forma de arrays mostrando a chave de acesso aos valores
console.log(Object.keys(newusu));

//objetos em forma de arrays mostrando APENAS os valores
console.log(Object.values(newusu));


//buscando valores com for (para objetos muito grande ou se vc preferir de um jeito mais dinamico)
var props = Object.keys(newusu);
console.log(props);

for(let i = 0; i < props.length; i++){
    //verifica se realmente não foi herdado as propriedades desse objeto
    if(newusu.hasOwnProperty(props)){
        console.log(newusu[props[i]])
    }
}

//EXERCICIOS

//Tendo como dados de entrada a altura e o sexo das pessoas calcule o peso ideal para:  M = (altura * 72.7) - 58 ou F = (altura * 62.1) - 44.7

var homi = {
    altura: 1.78,
    sexo: "M"
};
var muie = {
    altura: 2.05,
    sexo: "F"
};
var undef = {
    altura: 1.45
}
function ideal({sexo = "NE", altura}){

    if(sexo =="M"){
        let Pideal = (altura * 72.7) - 58;
        Pideal = Pideal.toFixed(2)
        return Pideal
    }else if(sexo == "F"){
        let Pideal = (altura * 62.1) - 44.7;
        Pideal = Pideal.toFixed(2)
        return Pideal
    }else{
        console.log("Sexo não especificado")
    }
    
}
//PROX

//calculando idade para votar ou se alistar
var usuario = {
    date: "12/05/2004"
}
function datas({date = "12/05/2001"}){

    let filt = Date.parse(date);
    filt = filt - new Date()
    //converte para anos
    filt = Math.abs(filt / (1000*60*60*24*30*12));
    
    let voto; let alis;
        if(filt>=16){
            voto = true
        };

        if(filt>=18){
            alis = true
        };

        if(voto == true){
            console.log("pode votar ja se quiser")
        }else{
            console.log("espera mais um pouco")
        }

        if(alis == true){
            console.log("pode ir correndo se alista, otario")
        }else{
            console.log("escapou otario")
        }
    
   
};


//categorias de nadadores
var nadador = {
    idade: 12
}
function pode({idade = "não declarada"}){
    switch(idade){
        case 5: 
        case 6:
        case 7: console.log("infantil A")
        break;
        case 8:
        case 9:
        case 10: console.log("infantil B")
        break;      
        case 11: 
        case 12:
        case 13: console.log("juvenil A")
        break;
        case 14: 
        case 15:
        case 16: console.log("juvenil B")
        break;
    }
}
pode(nadador);