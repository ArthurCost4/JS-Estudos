//Variaveis Globais
let data = new Date()
var opTipo = ['Despesa', 'Receita', 'Investimento']
var opReceitas = [ 'Salario', 'Trabaho Extra', 'Lucro de Vendas', 'Beneficio', 'Investimentos', 'Venda de Ativo', 'Venda de Ações', 'Receitas Diversas']
var opDespesas =['Alimentação', 'Supermercado','Moradia','Agua','Energia','Internet','Conta Celular','TV/Stream','Lazer','Tranporte','Saúde','Seguro','Educação','Depreciação','Despesas Diversas']
var opInvestimentos = ['Compra de Veículo', 'Compra de Imóvel', 'Ampliação do Imóvel', 'Ações']


//Classes
class BancoDeDados{
    constructor(){
        this.id = this.getProximoId();
    }
    getProximoId(){
        configurarID();
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId)+1;
    }
    //Inserir os Registros
    setGravar(registro){
       registro.id = this.id;
       localStorage.setItem(this.id, JSON.stringify(registro))
       localStorage.setItem('id', parseInt(this.id))
    }
    //Listar os Registros
    getTodosRegistros(){
        let registros = [];
        let id = localStorage.getItem('id')
        for(let i=1; i<=id; i++){
            let registro = JSON.parse(localStorage.getItem(i))
            if (registro==null){
                continue
            }
            registros.push(registro)    
        }
        return registros
    }
    //Filtar os Registros
    getFiltro(registro){
        let registrosFiltrados = []
		registrosFiltrados = this.getTodosRegistros()

        //tipo
		if(registro.tipo != ''){
			registrosFiltrados = registrosFiltrados.filter(r => r.tipo == registro.tipo)
		}

        //CentroCustos
		if(registro.centroCusto != ''){
			registrosFiltrados = registrosFiltrados.filter(r => r.centroCusto == registro.centroCusto)
		}

        //dia
		if(registro.dia != ''){
			registrosFiltrados = registrosFiltrados.filter(r => r.dia == registro.dia)
		}

        //mes
		if(registro.mes != ''){
			registrosFiltrados = registrosFiltrados.filter(r => r.mes == registro.mes)
		}
		
        //ano
		if(registro.ano != ''){
			registrosFiltrados = registrosFiltrados.filter(r => r.ano == registro.ano)
		}
			
		//descricao
		if(registro.descricao != ''){
			registrosFiltrados = registrosFiltrados.filter(r => r.descricao == registro.descricao)
		}

		//valor
		if(registro.valor != ''){
			registrosFiltrados = registrosFiltrados.filter(d => r.valor == registro.valor)
		}
		return registrosFiltrados
    }

    //Excluir o Registros
    setRemover(id){
        localStorage.removeItem(id)
    }

}

class RegistroFinanceiro{
    constructor(tipo, centroCusto, dia, mes, ano, descricao, valor){
         this.tipo=tipo
         this.centroCusto=centroCusto
         this.dia=dia
         this.mes=mes
         this.ano=ano
         this.descricao=descricao
         this.valor=valor
    }
    validarDados(){
        for (let i in this){
            if (this[i]==undefined || this[i]=='' || this[i]==null){
                return false
            }
            return true
        }
    }
}

//Funções
function configurarID(){
    let id = localStorage.getItem('id');
    if (id==null){
        localStorage.setItem('id',0)
    }
}
function limparCampos(){
    slCentroCustos.options.length=1;
    for (i in dados){
        try {
            dados[i].value='';
        } catch (error) {
            //return error
        }
    }
    carregarData()
}
//Exibir a mensagem com o status da gravação
function exibirStatusModal(titulo, mensagem, cor){
    let modal = new bootstrap.Modal('#modalMenssagem');
    modal.toggle();
    document.getElementById("modalHeader").classList.remove('bg-success');
    document.getElementById("modalOk").classList.remove('btn-success');
    document.getElementById("modalHeader").classList.remove('bg-danger');
    document.getElementById("modalOk").classList.remove('btn-danger');

    document.getElementById("modalHeader").classList.add('bg-'+cor);
    document.getElementById("modalTitulo").innerHTML=titulo;
    document.getElementById("modalMensagem").innerHTML = mensagem;
    document.getElementById("modalOk").classList.add('btn-'+cor);   
}