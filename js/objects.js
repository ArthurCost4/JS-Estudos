var usuario = {
    name: "zezim",
    idade: 12,
    personalidades: ["tony montana", "joker", "hello kitty", "ismael"],
}

console.log(usuario.personalidades)


//PARA JUNTA DOIS OBJETOS e a sigla "merge" significa JUNTAR
var usuario1 = {
    nome: "capetao",
    idade: 500
}
var extrainfo = {
    cidade: "inferno",
    personalidade: {
        principal: "politico",
        secundaria: "sla porra"
    }
}

const usuarionovo = Object.assign({}, usuario1, extrainfo)
console.log(usuarionovo)

//_______________________________________

// passando variavel como chave

var nomevariavel = "Estado"

var zeruela = {
    nome: "sla",
    idade: 13,
    [nomevariavel]: "rio de janeiro" //Preste atenção na chave
}
console.log(zeruela)


//GETTERS (USADO PARA ACESSAR PROPRIEDADES DE UM OBJETO) E SETTERS (USADO PARA DAR UMA PROPRIEDADE/VALOR A UM OBJETO)

var pessoas = [
    {
        nome: "desgraça",
        idade: "desgraça"
    },
    {
        nome: "desgraça ll",
        idade: "desgraça ll"
    },
    {
        nome: "desgraça lll",
        idade: "desgraça lll"
    }
];

var desgraçado = {
    posicao: 0,
    get atual () {
        return pessoas[this.posicao]
    },
    proximo(){
        ++this.posicao;
    },
    anterior(){
        --this.posicao;
    },
    
}


console.log(desgraçado.atual)
desgraçado.anterior();
console.log(desgraçado.atual)


//usando operador TERNARIO

var carro = {
    portas: 4,
    marca: "bmw"
};
var modelo;

function teste(){
    if(carro.portas === 4){
        modelo = "casual";
        console.log(modelo)
    }else {
        modelo = "esportivo";
        console.log(modelo)
    }
}
teste()

//AGORA O MESMO CODIGO COM OPERADOR TERNARIO

function tesste(){
    let moder = carro.portas === 2 ? "casual" /*TRUE*/ : "esportivaa" /*FALSE*/ 
    console.log(moder)
}
tesste()


//funçoes construtoras 

function carroPAPAP(marcaCar, modeloCar, anoCar){
    this.marcaCar = marcaCar,
    this.modeloCar = modeloCar,
    this.anoCar = anoCar,

    this.ligarCar = ()=>{
        console.log(`LIGANDO ${this.marcaCar}`)
    };
}

const bmw = new carroPAPAP("BMW", "casual", 2009)
console.log(bmw)
console.log(bmw.ligarCar())

//setters e getters
const brabo = [
    {name: "brab",
    idade: [34, 54, 65],
    sla: "sla tbm",
    yag: ""
},
    {name: "brab 1",
    idade: [35, 55, 66],
    sla: "sla tbm 1",
    yag: ""
},
    {name: "brab 2",
    idade: [36, 56, 67],
    sla: "sla tbm  2",
    yag: ""
}
];

var pega = {
    posicao: 0,

    get atuall(){
        return brabo[this.posicao] //o setters e o getters usados juntos ficam interligados, "como irmãos"
    },
    set atuall(posicao) {
        this.posicao = posicao; //o setters e o getters usados juntos ficam interligados, "como irmãos"
    },

    prox(){
        ++this.posicao
    },
    ant(){
        --this.posicao
    }
};
console.log(pega.atuall)


//usando o set
pega.atuall = 2;
console.log(pega.atuall)



