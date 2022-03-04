var nomes = ["alice", "zez!!!!!im", "alfre1234567890do", "fiada$$da&&&puta"]
var txt = document.getElementById("texto");
var div = document.getElementById("exibicao");
var modify = []

div.innerHTML = `${formata(nomes)}`


/*            _____________________________PROCURAR VALORES_________________________________________ */
function procurar(){
    let valor = achar(txt.value);
    if(valor >= 0 || valor != -1){
        alert(`O valor ${txt.value} está no indice ${valor}`)
    }else{
        alert(`O valor ${txt.value} não está registrado`)
    }
}




/*            _____________________________FORMATA VALORES_________________________________________ */
function formata(vetor){

    for(let i = 0; i<nomes.length;i++){
        let char1 = vetor[i].charAt(0).toUpperCase();
        let resto = vetor[i].slice(1).toLowerCase();
        let junta = char1 + resto;
        modify[i] = junta
        let replanta = modify[i].normalize('NFD').replace(/[!@#1234567890$+%¨& *()-]/g, '');
        modify[i] = replanta;
        
    }
    
    return modify
}

/*            _____________________________ORGANIZAR VALORES_________________________________________ */

function ordenar(){
    modify.sort((a, b)=>{
         return a.localeCompare(b);

    });
    return div.innerHTML = `${formata(modify)}`
};

/*            _____________________________ENCONTRAR VALORES_________________________________________ */
function achar(valor){
    let acho = modify.indexOf(valor)
    return acho
}



/*            _____________________________EXCLUIR VALORES_________________________________________ */

function excluir(param){
    if(param == 'inicio'){
        nomes.shift();
        return div.innerHTML = `${formata(nomes)}`
    };

    if(param == 'final'){
        nomes.pop();
        return div.innerHTML = `${formata(nomes)}`
    }

    if((param == 'random') && (txt.value != -1)){
        let valor = achar(txt.value);
        if(valor >= 0){
            nomes.splice(valor, 1)
            return div.innerHTML = `${formata(nomes)}`
        }else{
            alert(`O nome ${valor} não esta registrado`)
        }
    }
    
}


/*            _____________________________INSERIR VALORES_________________________________________ */
function inserir(param){

    if(param == 'inicio' && txt.value != ''){
        nomes.unshift(txt.value);
        return div.innerHTML = `${formata(nomes)}`
    }else{
        alert('Nome Invalido')
    }

    if(param == 'final' && txt.value != ''){
        nomes.push(txt.value);
        return div.innerHTML = `${formata(nomes)}`
    }else{
        alert('Nome Invalido')
    }
}

/*            _____________________________LIMPAR VALORES_________________________________________ */


