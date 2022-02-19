
var data = document.getElementById("aa");

function voto(ev){
ev.preventDefault()

let usu = new Date(document.getElementById("a").value);
console.log(usu)

let votarid = new Date();

let datadif = Math.ceil((votarid - usu));
console.log(datadif);

let days = Math.trunc(datadif / (1000*60*60*24*30*12));
console.log(days)

if(days>=16){
console.log("pode votar")
}else{
console.log("não pode vota")
}




}

data.addEventListener("click", voto);

//formatação de data para BR
function newdate(date){
let newdate = new Date(date)
return `${newdate.getDate()+1}/${newdate.getMonth()+1}/${newdate.getFullYear()}`
}
