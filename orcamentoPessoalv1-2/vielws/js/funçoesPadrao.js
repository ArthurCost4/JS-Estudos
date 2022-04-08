
function criarBotao(url, func, id){
    
    
    let btn=document.createElement('button');

        btn.value=id;

        let icon = (func =='del') ? 'btn btn-danger fa fa-times mx-1': 'btn btn-primary fa fa-edit mx-1';
        btn.className=icon;

        let action =  (func =='del') ? actionDelete : actionGetEdit;
        
        btn.onclick = function(){
            action(url, this.value)
          }
        return btn;
} 

function construirTabela(res, url){
    let dados=[...res.data.results];
    tabela.innerHTML='';
    dados.forEach((r)=>{
        let btnEdit = criarBotao(url, 'edit', r.idCentroCustos);
        let btnDel = criarBotao(url, 'del', r.idCentroCustos);
        let div = document.createElement('div')
        div.append(btnEdit)
        div.append(btnDel)
        let linha = tabela.insertRow();
        linha.insertCell(0).innerHTML = r.nomeTipo;
        linha.insertCell(1).innerHTML = r.nome;
        linha.insertCell(2).append(div);
    })   
}
