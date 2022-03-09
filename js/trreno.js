/*DECLARAÇÃO DOS DADOS A SEREM USADOS*/ 
var form = document.getElementById('form');
var edicao = 0; //variavel de controle add || 
var btninserir = document.getElementById('btninserir')
var tabela = new Array()


//MOTOR DO CRUD
function inserirItem(){
    if(edicao>=1){//verificação do id
        editaritem(edicao);
    }else{
        inserirnovo()
    }
    construirTabela()
    limparcampo()
}



//EDITAR ITEM: serve para atualizar de vdd o registro dps de analisado, como se ela te dissesse 'estou confirmando e enviando as suas mudanças a tabela'
function editaritem(id){

    for(let i in tabela){

        if(tabela[i][0]==id){//verificação do id

            //calculos
            let area = calculararea(form.frente.value, form.comprimento.value);
            let precototal = calcularpreco(area, form.preco.value);

            //abaixo demonstra a edição e adção dos valores a tabela
            tabela[i][1] = form.nome.value;
            tabela[i][2] = form.preco.value;
            tabela[i][3] = form.frente.value;
            tabela[i][4] = form.comprimento.value;
            tabela[i][5] = area;
            tabela[i][6] = precototal;
            edicao = 0;
            btninserir.innerHTML = 'Inserir Registro'
            break
        }
    }
}



//EDITAR REGISTRO: ha uma pequena diferenca do de cima, essa função PUXA APENAS os dados, como se ela tivesse te perguntando "É esse registro que vc quer mudar?"
function editarRegistro(id){
    for(let i in tabela){
        if(tabela[i][0]==id){

            //aqui é onde demonstrara os registros para que o usuario não tenha que digitar dnv pu se caso ele tenha esquecido de algo
            form.nome.value = tabela[i][1];
            form.preco.value = tabela[i][2];
            form.frente.value = tabela[i][3];
            form.comprimento.value = tabela[i][4];

            //o input ira direto no nome
            form.nome.focus();

            edicao = id; //Atribui o valor ID para variavel de controle não quebrar
            btninserir.innerHTML = 'Atualizar Registro'
        }
    }
}


//Função inserir novo é onde serão adcionados os valores novos
function inserirnovo(){
    let id, area, precototal; //declaração das var que serao usadas

    id = parseInt(tabela.length)+1;//id de controle

    //abaixo os calculos do terreno
    area = calculararea(form.frente.value, form.comprimento.value);
    precototal = calcularpreco(area, form.preco.value);

    //aqui é onde sera armazenados os valores de calculos
    let linha = [
        id,
        form.nome.value,
        form.preco.value,
        form.frente.value,
        form.comprimento.value,
        area,
        precototal
    ]
    //push para a tabela
    tabela.push(linha);
    console.log(tabela)
}




//funçoes reaproveirtaveis de calculo
function calculararea(largura, comprimento){
    let a = parseFloat(largura * comprimento)
    return a
}
function calcularpreco(area, preco){
    let a = parseFloat(area * preco)
    return a
}





//usada para limpar os campos depois de terem adcionados os dados na tabela
function limparcampo(){
    form.nome.value = '';
    form.preco.value = '';
    form.frente.value = '';
    form.comprimento.value = '';
    form.nome.focus()
}

function excluirRegistro(id){
    for(let i in tabela){
        if(tabela[i][0]==id){
            tabela.splice(i, 1);
            construirTabela();
            break
        }
    }
}


function construirTabela(){

    exibirLista();

    let listaItem = document.getElementById('listaItem')
    listaItem.innerHTML='';

    tabela.forEach((vetor, i)=>{

        //agregando os filhos 'botoes'
        let linhaTabela = listaItem.insertRow();

        let btnEdit = construirBotao('edit', tabela[i][0]);//onde os botoes vao ser construido
        let btnDel = construirBotao('del', tabela[i][0])

        let rowTable = listaItem.insertRow();

        rowTable.insertCell().appendChild(btnEdit).appendChild(btnDel) //colocando na celula

        tabela[i].forEach((vetor, j)=>{//insere os valores em cada linha da celula com seus respectivos valores
            rowTable.insertCell(j+1).innerHTML=tabela[i][j];
        })
    })
}

function exibirLista(){
    let divTabela = document.getElementById('divTabela');
    divTabela.classList.remove('d-none');
    divTabela.classList.add('d-sm-block');
}

function construirBotao(botao, id){
    let btn = document.createElement('button');
    btn.classList = 'btn';
    let icon = document.createElement('img');
    if(botao == 'edit'){
        icon.src = 'https://img.icons8.com/ios-glyphs/15/4a90e2/edit--v1.png';
        btn.onclick = function(){
            editarRegistro(id)
        };
    }
    if(botao == 'del'){
        icon.src = "https://img.icons8.com/dusk/15/000000/trash.png";;
        btn.onclick = function(){
            excluirRegistro(id)
        };

    };
    btn.appendChild(icon);
    return btn
}