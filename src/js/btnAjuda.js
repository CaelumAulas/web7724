;(function(){
    const btnAjuda = document.querySelector('#btnAjuda');

    let listaDeAjudas = []

    btnAjuda.addEventListener('click', function(){

        const conexaoApi = new XMLHttpRequest();
        conexaoApi.open('GET','http://ceep.herokuapp.com/cartoes/instrucoes');
        conexaoApi.responseType = 'json';
        conexaoApi.send();

        conexaoApi.addEventListener('load', function(){
            console.log(conexaoApi.response);
            console.log(conexaoApi.response.instrucoes);

            listaDeAjudas = conexaoApi.response.instrucoes
            
            //for of (percorre os valores)
            for(let ajuda of listaDeAjudas){
                adicionaCartaoNoMural(ajuda)
            }
            
        })
        
        
        
        /* listaDeAjudas.forEach(function(textoAjuda){
            alert(textoAjuda);
        }) */

        //for in, percorre os indices
        /* for(let indice in listaDeAjudas){
            console.log(indice)
        } */

    })

    btnAjuda.classList.remove('no-js')

})()