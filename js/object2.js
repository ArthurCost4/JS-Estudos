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
var {nome: { primeiro }} = usuario2;
console.log(primeiro);

//caso a propriedade não exista (USANDO O "DEFAULT")
var {nome: {

    segundo = 'Costa'

}} = usuario2;

console.log(segundo);

//Usando o destruct como parametro em uma função
function imprimiusu({nome, idade, sexo, pais = "Brasil"}){ //repare no parametro da função
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