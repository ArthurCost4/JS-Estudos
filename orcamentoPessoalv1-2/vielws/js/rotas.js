function actionGet(url){
    axios.get(url+'/consulta')
        .then(res=>{
            construirTabela(res, url)
        })
        .then()
        .catch(erro=>{
            console.log('Erro promisse')
            console.log(erro)
        })
};

function actionPost(url, dados){
    axios.post(url, dados)
        .then(res =>{
            console.log(res)
            if (res.status==200 && res.data.results.affectedRows>=1){
               alert("Gravado com sucesso!")
            } else{
                console.log(res.status)
            }
        })
        .catch(erro=>{
            console.log('erro')
            console.log(erro)
        });
};

function actionPut(url, dados){
    console.log(url)
    console.log(dados)
    axios.put(url, dados)
        .then(res=>{
            actionGet(url)
            alert('o registro foi atualizado com sucesso!')
        })
        .catch(err=>{
            console.log(`erro: ${err}`)
        })
};

function actionDelete(url, id){
    console.log(url)
    console.log(id)
    //http://localhost/8180/centrocustos?id=21
    axios.delete(url+`?id=${id}`)
        .then(res=>{
            actionGet(url)
            alert('Registro excluido com sucesso!')
        })
        .catch(erro=>{
            console.log(`error: ${erro}`)
        })
};

function actionGetEdit(url, id){
    console.log(url)
    console.log(id)
    axios.get(url+`/filtrar?id=${id}`)
        .then(res=>{
            carregarCampos(res)
        })
        .catch(erro=>{
            console.log(`error: ${erro}`)
        })
}