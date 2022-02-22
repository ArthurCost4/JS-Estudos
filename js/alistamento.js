var btn = document.getElementById("envia");

btn.addEventListener("click", ev => {
    ev.preventDefault();
    let data = new Date( document.getElementById("ali").value);
    console.log(data)
    let atual = new Date()

    let diferent = data - atual
    console.log(diferent)
    let days = Math.trunc( diferent / (1000*60*60*24*30*12));
    
    if(diferent>18){
        console.log("Vai pro exercito vagabundo")
    }else{
        console.log("Ainda não mas ta pra chegar kkkkkkkkk")
    }

});

