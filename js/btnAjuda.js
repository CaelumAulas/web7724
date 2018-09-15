;(function(){
    const btnAjuda = document.querySelector('#btnAjuda');

    const listaDeAjudas = [
        {
            conteudo:'Bem vindo ao Ceep',
            cor: '#F05450'
        },
        {
            conteudo: 'O site é otimizado para celulares!',
            cor: '#92C4EC'
        },
        {
            conteudo: 'Para mudar o layout, clique no botão Linha no cabeçalho',
            cor: '#76EF40',
        }
    ]

    btnAjuda.addEventListener('click', function(){
        
        //for of (percorre os valores)
        for(let ajuda of listaDeAjudas){
            adicionaCartaoNoMural(ajuda)
        }
        
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